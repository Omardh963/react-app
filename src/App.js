
import Navs from './component/Nav';
import Home from './component/Home';
import { useRef } from 'react';
const App = () => {
//   const omar=useRef()
// window.onscroll=function(){if(scrollY>=400){
//   omar.style.display="block";
  
// }
// else{omar.style.display="none";}
// }
// function omm(){scrollY({
//   top:0,
//   right:0,
// })}
  return (
    <div>
     <button id='up'>^</button>
     <Navs/>
     <Home/>
    </div>
  )
}

export default App
