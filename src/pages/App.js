import Header from "../components/Header";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Home';
import Categories from "./Categories";
import MustSees from "./Must Sees";
import Websites from "./Websites";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Use 'element' prop */}
          <Route path="/categories" element={<Categories />} />
          <Route path="/must-sees" element={<MustSees />} />
          <Route path="/websites" element={<Websites />} />
          {/* Add other routes here */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
