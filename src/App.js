import './App.css';

import {Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Layout from "./Layout";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/profiles/:username" element={<Profile/>}/>
          </Route>
          <Route path="/articles" element={<Articles/>}>
              <Route path=":id" element={<Article/>}/>
          </Route>
      </Routes>
  );
}

export default App;
