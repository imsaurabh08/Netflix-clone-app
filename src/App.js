import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Row from './components/Row';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <Banner></Banner> */}
      <Row title="romantic" fetchUrl='/trending/all/week?api_key=699417fda158c1ce6fa6d671499164cd&language=en-US'    isLargeRow ='1' />
    </div>
  );
}

export default App;
