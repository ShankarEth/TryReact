import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
// import MainPage from './MainPage';
// import Contact from './Contact';

function App() {
  return (
      <div className="App bg-warning">
      <Header></Header>
      <Main />
      <Footer></Footer>
      </div>
  );
}

export default App;
