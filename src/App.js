import './App.css';
import { Button, Spinner } from 'react-bootstrap';
import GridCard from './components/GridCard/GridCard';

function App() {
  return (
    <div className="App">
      <button>Plain Button</button>
      <Button variant="danger">My Button</Button>
      <Spinner animation="grow" variant="danger" />
      <GridCard></GridCard>
    </div>
  );
}

export default App;
