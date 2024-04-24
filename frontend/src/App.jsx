import React, { useState } from "react";
import "./app.css"
import bg from "../src/img/bg.png"
import BgObj from "./components/bgObj/bgObj";
import Navigation from "./components/navigation/navigation";
import Dashboard from "./components/dashboard/dashboard";
import Transactions from "./components/transactions/transactions";
import Incomes from "./components/incomes/incomes";
import Expenses from "./components/expenses/expenses";
import { useGlobalContext } from "./context/globalContext";


function App() {
  const [active , setActive]= useState(1);

  // render different components based on selected tabs

  const displayData = ()=>{
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Transactions />
      case 3:
        return <Incomes />
      case 4:
        return <Expenses />
      default:
        return <Dashboard />

    }
  }
// access values in global context

const global = useGlobalContext();
console.log(global)

  return (
    <div className="app-styled" style={{backgroundImage: `url(${bg})`}}>
      <BgObj />
      <main className="main-layout">
        <Navigation active={active} setActive={setActive}/>
        <div className="main">
          {displayData()}

        </div>
      </main>

     
    </div>
  );
}

export default App;
