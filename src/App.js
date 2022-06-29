import './App.css';
import Navigation from './Components/Navigation/Navigation';
import ImageForm from './Components/ImageForm/ImageForm'
import Particles from "react-tsparticles";
import particleConfig from './Images/particlesConfig'
function App() {
  return (
    <div className='app'>
      <Particles
      className='particlesCSS'
      params={particleConfig}
      ></Particles>
     <Navigation/>
     <ImageForm/>
    </div>
  );
}

export default App;
