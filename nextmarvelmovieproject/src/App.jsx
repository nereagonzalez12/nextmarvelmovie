import './App.css';
import { useNextFilm } from './hooks/useNextFilm';

function App() {
  const { film, loading } = useNextFilm();
  if (loading) return <p>Cargando...</p>;
  console.log(film);

  return (
    <>
      <a>Next marvel production:</a><br />
      {/* <span>{film.title}</span> */}
    </>
  );
}

export default App;
