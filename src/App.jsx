import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import './components/Responsive.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
 
  return (
    <div className='body'>
      <Router>
      <Navbar/>
        <Routes>
          <Route  exact path='/' element={<Home/>}></Route>
          <Route  exact path='/Todolistapp' element={<Home/>}></Route>
          <Route  exact path='/Todolist' element={<Home/>}></Route>
          <Route  exact path='/home' element={<Home/>}></Route>
          <Route exact path='/about' element={<About/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
