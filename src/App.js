
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './Home.js';
import Work from './Work.js';


function App() {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route extact path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}> </Route>
        <Route path="/portfolio" element={<Home/>}> </Route>
        <Route path="/work" element={<Work/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
