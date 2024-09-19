import NavBar  from './components/NavBar';
import Carousel from './components/Carousel'
import Pricing from './components/Pricing';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Carousel/> 
        <Pricing/> 
        <Footer/>
      </header>
    </div>
  );
}

export default App;
