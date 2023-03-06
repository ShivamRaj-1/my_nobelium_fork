
import './App.css';
import Heading1 from './components/Heading1';
import Heading2 from './components/Heading2';
import Heading3 from './components/Heading3';
import Button from './components/Button';

// function App(){
//   return (
//     <>
//       <h1>I am heading one ... from first component</h1>
//       <h2>I am heading two ... from second component</h2>
//       <h3>I am heading three ... from third component</h3>
//       <button>Click me !!</button>
//     </>
//   )
// }

function App() {
  return (
    <>
      <Heading1 />
      <Heading2 />
      <Heading3 />
      <Button />
    </>
  );
}

export default App;
