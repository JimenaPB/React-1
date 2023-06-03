import React,{Component} from "react";
import"./App.css"
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListConteiner/ItemListContainer";
class App extends Component{
  render(){
    return(
      <div className="App">
      <NavBar/>
      <div>
        <ItemListContainer greeting="Bienvenido a la Tienda con más variedad de Productos"/>
      </div> 
      </div>
    );
  }
}

export default App;