import React, { useEffect, useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import "./autocount.css"
function Autocount() {
  const[min,setMin]=useState(0)
  const[sec,setSec]=useState(0)
  const [timerId, setTimerId] = useState(null);
 const[ispaused,setIsPaused]=useState(false)
 useEffect(()=>
 {
  const id=setInterval(()=>
  {
    if(ispaused!=true)
    {
      setSec(prevSec=>
        {
          if (prevSec===59)
          {
            setMin(prevMin=>prevMin+1);
            return 0;
          }
          return prevSec+1;
        });
    }
  },1000);
  setTimerId(id);
  return()=>{
    clearInterval(id);
  };
 },[ispaused]);

 function ispausedfn()
 {
  setIsPaused(prev=>!prev)
 }
 function reset()
 {
  setMin(0)
  setSec(0)
 }
  return (
    <div>
      <div className="container1">
        <h1>Automatic Counter App</h1>
        <br />
        <h2><b>{min<10?"0"+min:min}:{sec<10?"0"+sec:sec}</b></h2>
        
        <br />
        <br />
        <MDBBtn className='me-1' color='success' onClick={reset}>
        Reset
      </MDBBtn>
      <MDBBtn className='me-1' color='danger' onClick={ispausedfn}>
        {ispaused?"Resume":"Pause"}
      </MDBBtn>
      </div>
    </div>
  )
}

export default Autocount