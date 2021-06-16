import './App.css';
import MainPage from "./pages/Main-page";
import {Route} from "react-router";
import Pracing from "./pages/Pracing";
import Platform from "./pages/Platform";

function App() {
  return (
    <>
        <Route exact path="/" render={ ()=>  <MainPage items={[
            { name:'PLAYTHEM Games', link:'/' },
            { name:'PLAYTHEM Games', link:'/'},
            { name:'PLAYTHEM Games', link:'/'},
            { name:'PLAYTHEM Games', link:'/'},
        ]} /> }/>
        <Route exact path="/pricing" render={ ()=>  <Pracing/> }/>
        <Route exact path="/platform" render={ ()=>  <Platform/> }/>
    </>
  );
}

export default App;
