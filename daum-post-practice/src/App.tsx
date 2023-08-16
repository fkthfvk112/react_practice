import { useState } from 'react'
import './App.css'
import Post from './Post';

function App() {
  const [enroll_company, setEnroll_company] = useState({address:'', });
  const [popup, setPopup] = useState<boolean>(false);

  const handleInput = (e:any)=>{
    setEnroll_company({
      ...enroll_company,
      [e.target.name]:e.target.value
    })
  }

  const handleComplate = (data:any)=>{
    setPopup(!popup)
  }  
  return (
    <>
      <div>Hello world
        <input type="text" required={true} name='address' onChange={handleInput} value={enroll_company.address} />
        <button onClick={handleComplate}>우편번호 찾기</button>
        {popup&&<Post onClose={setPopup} company={enroll_company} setcompany={setEnroll_company}/>}
      </div>
    </>
  )
}

export default App
