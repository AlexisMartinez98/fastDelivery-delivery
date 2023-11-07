import { useRouter } from 'next/router';
import DeliveryInProgress from './page'; 
import "./index.css";



function DeliveryPage() {
    const router = useRouter();
    const { id } = router.query;
    const packageId = id as string
  
    return (
    <>
    <DeliveryInProgress  />
    </>

    )

  }
  



export default DeliveryPage;