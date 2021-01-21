import './App.css';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import { Textbox, Imagebox } from './components/boxes.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Textbox />
      <Imagebox />
      <Footer />
    </div>
  );
}

export default App;
