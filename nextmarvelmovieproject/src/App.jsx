import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const URL = `https://whenisthenextmcufilm.com/api`;
  // Guardar en caché
  const [title, setTitle] = useState(null);


  useEffect(() => {
    axios.get(URL)
      .then(res => setTitle(res.data.title))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <a>Next marvel production:</a><br />
      <span>{title}</span>
    </>
  );
}

export default App;
