import './App.css';
import { Button, Spinner } from 'react-bootstrap';
import GridCard from './components/GridCard/GridCard';
import Navbar from './components/Navbar/Navbar';
import Toasts from './components/Toasts/Toasts';
import Accordions from './components/Accordion/Accordion';

function App() {
  return (
    <div className="App">
      <button>Plain Button</button>
      <Button variant="danger">My Button</Button>
      <Spinner animation="grow" variant="danger" />
      <GridCard></GridCard>
      <Navbar></Navbar>
      <Toasts></Toasts>
      <Accordions></Accordions>
    </div>
  );
}

export default App;
