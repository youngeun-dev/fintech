// import Welcome from "./components/welcome";
import {useState} from "react"; // state hook을 import
import HeaderWhite from "./components/HeaderWhite";
import ListComponent from "./components/ListComponent";

function App() {
  return (
  <div>
    <HeaderWhite title="환경설정"/>
    <ListComponent></ListComponent>
  </div>
  );
}

export default App;