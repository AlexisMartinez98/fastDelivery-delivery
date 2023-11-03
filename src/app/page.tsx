import Login from "./login/page";
import { Provider } from 'react-redux';
import store from './states/store';

export default function Home() {
  return (
    <div>
    
      <Login />
    
    </div>
  );
}
