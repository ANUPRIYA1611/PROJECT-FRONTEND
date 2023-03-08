import './App.css';
import { Route, Routes } from "react-router-dom";
import Boutique from './Components/Boutique';
import Get from './Components/Get';
import Post from './Components/Post';
import Put from './Components/Put';
import Delete from './Components/Delete';
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Boutique/>} />
        <Route path="/get" element={<Get />} />
        <Route path="/post" element={<Post />} />
        <Route path="/put" element={<Put />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </div>
  );
}

export default App;
