// import  from './logo.svg';
import './App.css';

import './components/Contact.css'
import { Container } from 'react-bootstrap';
import Contact from './components/Contact'
function App() {
  return (
    <div className="App">
      <Container >
        <Contact />
      </Container>
    </div>
  );
}

export default App;
