import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import MoviesList from './MovieList';

//ANCHOR - only calling the MovieList component as it calls the others
function App() {
  return (
    <div className="App">
      
     <MoviesList/>
     
    </div>
  );
}

export default App;
