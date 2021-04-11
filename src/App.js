import logo from './logo.svg';
import './App.css';
import CanvBox from './CanvBox'
import ColorBars from './ColorBars'
import Button from './Button'
function App() {
  return (
    <div className="App">
    <h1>Draw something:</h1>
    <CanvBox/>
    <ColorBars/>
    <Button/>
    </div>
  );
}

export default App;
