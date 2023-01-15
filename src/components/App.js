import Header from "./Header"
import './App.scss'
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Main/>
      </BrowserRouter>
    </>
  );
}

export default App;
