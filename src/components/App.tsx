import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router";
import WrongCard from "./WrongCard";
import GoodCard from "./GoodCard"
import Sidebar from "./Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Sidebar />}>
            <Route index path="/" element={<WrongCard />}/>
            <Route path="/correct" element={<GoodCard />}/>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
