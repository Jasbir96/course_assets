import logo from './logo.svg';
import './App.css';
import Navbar from './MComponents/Navbar';
import Button from './MComponents/Button';
import VideoCard from './MComponents/VideoCard';
import Navbar2 from './MComponents/Navbar2';
import Vc2 from './MComponents/Vc2'
function App() {
  return (
   <>
   {/* <Navbar/> */}
    <Navbar2/>
   <div style={{marginTop:'8%'}}></div>
   <Button/>
   {/* <VideoCard/> */}
   <Vc2/>
   </>
  );
}
export default App;
