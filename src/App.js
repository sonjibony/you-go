import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  );
}

export default App;
