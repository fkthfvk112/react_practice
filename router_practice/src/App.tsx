import './App.css'
import {BrowserRouter, Routes, Route, Link, useParams} from 'react-router-dom'//npm i react-router-dom
import User from './User';

//React Router Dom -> location.href
function App(){
  
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <Link to="/">Home</Link>
          </ul>
          <ul>
            <Link to="/about">about</Link>
          </ul>
          <ul>
            <Link to="/user">user</Link>
          </ul>
          <ul>
            <Link to="/topics">topics</Link>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/user' element={<User/>}></Route>
          <Route path='/topics' element={<Topics/>}></Route>
          <Route path='/topics/:topicId' element={<Topic/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Home(){
  return(
    <h1>Home</h1>
  )
}

function About(){
  return(
    <h1>About</h1>
  )
}

function Topics(){
  return(
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to="/topics/components">Components</Link>
        </li>
        <li>
          <Link to="/topics/props">Props</Link>
        </li>
      </ul>
    </div>
  )
}

function Topic(){
let { topicId } = useParams();
  console.log(topicId);
  
  return(
    <h1>Topic : {topicId}</h1>
  )
}

export default App
