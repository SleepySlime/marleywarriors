import marley_main from './mwp_main.png';
import './App.css';



function App() {
  return (
    <div className="App">
      <div className="image-container">
        <img src={marley_main} alt="background" className="scrollable-image" />
      </div>
    </div>
  );
}

export default App;