import mwp_menu from './mwp_menu.png';
import mwp_content from './mwp_content.png';
import './App.css';



function App() {
  return (
    <div className="App">
      <div className="image-container">
        <img src={mwp_menu} alt="mwp_main" className="scrollable-image" />
        <img src={mwp_content} alt="mwp_menu" className="scrollable-image" />
      </div>
    </div>
  );
}

export default App;