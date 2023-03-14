import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header/header';
import Home from './components/homepage/home'

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
