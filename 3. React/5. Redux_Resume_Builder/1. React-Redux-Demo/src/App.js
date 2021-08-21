import './App.css';
import BatContainer from './Components/BatContainer';
import BallContainer from './Components/BallContainer'
import store from './redux/store'
import {Provider} from 'react-redux'
import HooksBatContainer from './Components/HooksBatContainer';
import ItemContainer from './Components/ItemContainer';
import UserContainer from './Components/UserContainer';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <ItemContainer bat/> */}
      {/* <ItemContainer/> */}
     <BallContainer/>
     <BatContainer/>
     {/* <HooksBatContainer/> */}
     <UserContainer/>
    </div>
    </Provider>
  );
}

export default App;
