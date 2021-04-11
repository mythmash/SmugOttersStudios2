import logo from './logo.svg';
import './App.css';
import CanvBox from './CanvBox'
import ColorBars from './ColorBars'
function App() {
  return (
    <div className="App">
    <h1>Draw something:</h1>
    <CanvBox/>
    <ColorBars/>
    </div>
  );
}

export default App;
