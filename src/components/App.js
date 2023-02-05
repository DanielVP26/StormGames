import Header from "./Header";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";
import CustomProvider from "./CustomProvider";

function App() {
  return (
    <CustomProvider>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </CustomProvider>
  );
}

export default App;
