import './App.css';
import react, {useState, useEffect} from 'react';
import axios from 'axios';

import NavBar from './NavBar';
import LinkRoutes from './LinkRoutes';

function App() {
  const [dogs, setDogs] = useState({
    data: null,
    isLoading: true
  });

  useEffect(() => {
    async function loadDogs(){
      const response = await axios.get("http://localhost:5001/dogs")
      setDogs({
        data: response.data,
        isLoading: false
      })
    }
    loadDogs()
  }, [])
  
  return (
    <div className="App">
      {!dogs.isLoading && <LinkRoutes dogs={dogs.data} />}
    </div>
  );
}

export default App;
