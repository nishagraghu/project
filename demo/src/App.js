
import './App.css';
import Create from './components/create';
import Profile from './components/Profile';
import  List   from './components/list';

import { BrowserRouter, Routes, Route  } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Create />} />
      <Route path="/list" element={<List />} />
      <Route path="/profile/:id" element={<Profile />} />
      
        
      {/* <Switch>
         <Route path="profile/:id" children={<Profile />} />
        </Switch> */}
     
        {/* <Route index element={<Create />} />
        <Route path="blogs" element={<Create />} />
        <Route path="contact" element={<Create />} />
        <Route path="*" element={<Create />} /> */}
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
