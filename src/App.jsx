import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav_bar from "./Components/Nav_bar"
import Home from "./Pages/Home"
import Index from "./Pages/Index"



function App() {

  return (
    <div className="App">
      <Router>
      <Nav_bar/>
         <Routes>
            <Route path="/" element={<Home />}/> 
            <Route path="/paintings" element={<Index />} />
            {/* <Route path="/paintings/new" element={<New /> } />
            <Route path="/paintings/:id" element={<Show /> } />
            <Route path="/paintings/:id/edit" element={<Edit /> } />
            <Route path="*" element={<Four0Four /> } /> */}
          </Routes>
      </Router> 
    </div>
  )
}

export default App
