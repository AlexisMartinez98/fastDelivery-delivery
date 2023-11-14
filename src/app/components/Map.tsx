import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import {
  GoogleMap,
  DirectionsRenderer,
  useLoadScript,
} from "@react-google-maps/api";

interface MapProps {
  addressDestination: string;
}

function Map({ addressDestination }: MapProps) {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#3D1DF3",
  };
  interface Coordenadas {
    lat: number;
    lng: number;
  }

  const [userLocation, setUserLocation] = useState<Coordenadas | null>(null);
  const [destinationCoordinates, setDestinationCoordinates] =
    useState<Coordenadas | null>(null);

  const [directionResponse, setDirectionResponse] =
    useState<google.maps.DirectionsResult | null>(null);

  //agregar la key aca======>
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "",
    libraries: ["places"],
  });

  const address = addressDestination;

  const geocodeDestination = async (address: string, isLoaded: boolean) => {
    if (isLoaded) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: address }, (results, status) => {
        if (status === "OK") {
          if (results && results[0] && results[0].geometry) {
            const location = results[0].geometry.location;
            setDestinationCoordinates({
              lat: location.lat(),
              lng: location.lng(),
            });
          } else {
            console.error("No se encontraron resultados de geocodificación.");
          }
        } else {
          console.error("Error al geocodificar la dirección:", status);
        }
      });
    }
  };

  useEffect(() => {
    if (isLoaded) {
      window.navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
      });

      geocodeDestination(address, isLoaded);
    }
  }, [isLoaded, address]);

  useEffect(() => {
    if (userLocation && isLoaded && destinationCoordinates) {
      const directionsService = new window.google.maps.DirectionsService();
      const request = {
        origin: userLocation,
        destination: destinationCoordinates,
        travelMode: window.google.maps.TravelMode.DRIVING,
      };

      directionsService.route(request, (response, status) => {
        if (status === "OK") {
          setDirectionResponse(response);
        } else {
          console.error("Error al calcular la ruta:", status);
        }
      });
    }
  }, [userLocation, isLoaded, destinationCoordinates]);

  if (loadError) {
    return <div>Error al cargar el mapa</div>;
  }

  return (
    <>
      {isLoaded && userLocation ? (
        <GoogleMap
          center={userLocation}
          zoom={12}
          mapContainerStyle={{
            objectFit: "contain",
            height: "100%",
            borderRadius: "12px",
          }}
        >
          {directionResponse && (
            <DirectionsRenderer directions={directionResponse} />
          )}
        </GoogleMap>
      ) : (
        <div className="bg-red h-[100%] w-[100%] flex justify-center items-center">
          <ClipLoader
            color={"red"}
            loading={true}
            cssOverride={override}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
    </>
  );
}

export default Map;
