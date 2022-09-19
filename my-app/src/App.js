import Home from "./pages/Home";
import PostView from "./pages/PostView";
import { Routes, Route } from "react-router-dom";
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/post/:id"
        element={<PostView />}
      />
    </Routes>
  )
}

export default App;