import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav_bar from "./Components/Nav_bar"
import Home from "./Pages/Home"



function App() {

  return (
    <div className="App">
      <Router>
      <Nav_bar/>
         <Routes>
            <Route path="/" element={<Home />}/> 
          </Routes>
      </Router> 
    </div>
  )
}

export default App
