import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import Home from './pages/Home.jsx';
import Store from './pages/Store.jsx';

function App() {
  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={ <Home/>}/>
      <Route path="/store" element={ <Store/>}/>
    </Routes>
  );
}

export default App;
