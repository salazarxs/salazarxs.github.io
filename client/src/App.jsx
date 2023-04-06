import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './componts/Home';
function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' Component={Home} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
