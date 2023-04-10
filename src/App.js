
import { globalStyle } from "./Atom"
import { useRecoilState } from "recoil"


function App() {

  //for global style
  const [style1, setStyle1] = useRecoilState(globalStyle)

  function handleRandomColorChange() {

    const R = Math.round(Math.random() * 255)
    const G = Math.round(Math.random() * 255)
    const B = Math.round(Math.random() * 255)

    setStyle1({
      color: `rgb(${R}, ${G}, ${B})`  // rgb(255 , 255 , 255)
    })
  }

  function handleColorChange() {

    (style1.color === 'blue') ? setStyle1({ color: 'red' }) : setStyle1({ color: 'blue' })


  }

  return (
    <div className="App">
      <div>
        <h2 style={style1}>Hi! I change the color on Click the button.</h2>

        <button onClick={handleColorChange}>Change Colour</button>
        <button onClick={handleRandomColorChange}>Random Colour</button>
      </div>
    </div>
  );
}

export default App;
