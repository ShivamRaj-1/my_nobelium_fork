
import Btn from './components/Btn';
import Head from './components/Head';
import Input from './components/Input';
import './index.css'

// function App() {
//   return (
//     <div className="container">
//       <h1>Register Here...</h1>
//       <input type="text" placeholder='mobile...' /> <br /> <br />
//       <input type="text" placeholder='password...' /> <br />  <br />
//       <button>Submit</button>
//     </div>
//   );
// }


function App(){
  return (
    <div className="container">
      <Head heading = 'Register here...' />
      <Input />
      <Btn name = 'Submit' />
    </div>
  )
}

export default App;
