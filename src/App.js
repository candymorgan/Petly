import { Route, Routes } from "react-router-dom";
import "./App.css";
import DetailsPage from "./Components/DetailsPage";
import OtherComponents from "./Components/OtherComponents";

function App() {
  return (
    <> 
        <Routes>
          <Route path="/" element={<OtherComponents/>}></Route>
        <Route path="details" element={<DetailsPage />}></Route>
        </Routes>
        
    </>
  );
}

export default App;
