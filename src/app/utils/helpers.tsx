export function generateRandomId(): string {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomId = "";
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
    }
    return randomId;
  }
  
  export const address: AddressItem[] = [
    {
      id: generateRandomId(),
      address: "Av. Corrientes 1234, CABA",
      status: "EN CURSO",
    },
    {
      id: generateRandomId(),
      address: "Calle San Martín 567, CABA",
      status: "ENTREGADO",
    },
    {
      id: generateRandomId(),
      address: "Av. Belgrano 789, CABA",
      status: "ENTREGADO",
    },
    {
      id: generateRandomId(),
      address: "Calle Lavalle 456, CABA",
      status: "ENTREGADO",
    },
    {
      id: generateRandomId(),
      address: "Av. Pueyrredón 321, CABA",
      status: "ENTREGADO",
    },
    // Agrega más elementos aquí
  ];
  type AddressItem = {
    id: string;
    address: string;
    status: string;
  };