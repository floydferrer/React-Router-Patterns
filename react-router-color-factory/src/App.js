import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ColorLinks from './ColorLinks';

function App() {
  const [colors, setColors] = useState([{name: 'red', color: '#FF0000', id: uuidv4()}, {name: 'green', color: '#00FF00', id: uuidv4()}, {name: 'blue', color: '#0000FF', id: uuidv4()}]);

  const createColor = (newColor) => {
    setColors(colors => [{...newColor, id: uuidv4()}, ...colors])
  }

  return (
    <div className="App">
      <ColorLinks colors={colors} createColor={createColor} />
    </div>
  );
}

export default App;