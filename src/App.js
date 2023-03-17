
import {useState} from 'react'

import FieldComp from "./components/fieldComp/FieldComp";
import Login from "./components/login/Login";
import PicComp from "./components/picComp/PicComp";
import SignUp from './components/signup/SignUp';



function App() {

  const data = [
    'https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__480.jpg',
    'https://cdn.pixabay.com/photo/2018/05/07/10/48/husky-3380548__340.jpg',
    'https://cdn.pixabay.com/photo/2017/06/24/09/13/continental-bulldog-2437110__340.jpg',
    'https://cdn.pixabay.com/photo/2019/07/23/13/51/shepherd-dog-4357790__340.jpg',
    'https://cdn.pixabay.com/photo/2015/11/03/12/58/dalmatian-1020790__340.jpg'

  ]

  const [page, setPage ] = useState(true)


  function handleLogin() {
    setPage(false)
  }

  function handleSignup() {
    setPage(true)
  }

  return (
    <>

      {/* <PicComp source={data} /> */}

      {/* <FieldComp /> */}

      {page ? (
        <Login click = {handleLogin} />
      ) : (
        <SignUp click = {handleSignup} />
      )}
      
    </>
  );
}

export default App;
