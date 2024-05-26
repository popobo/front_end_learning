import Home from "./components/routes/home/home.component";
import { Routes, Route } from "react-router-dom";

const Shop = () => {
  return <h1>Shop Page</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
