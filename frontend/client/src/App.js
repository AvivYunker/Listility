import Landing from "./pages/Landing";
import styled from 'styled-components';

const Button = styled.button`
  background: red;
  color: white;
  font-size: 1rem;
`

function App() {
  return (
    <div>
      <h1>Listility</h1>
      <Landing/>
    </div>
  );
}

export default App;
