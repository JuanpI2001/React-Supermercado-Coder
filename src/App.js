
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
function App() {
  return (
    <div className="divheader">
      <header className="headerhome">
      <NavBar/>
      </header>
      <ItemListContainer titulo="Este es el ListContainer"/>
    </div>
  );
}

export default App;
