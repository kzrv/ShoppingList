import logo from './logo.svg';
import './App.css';
import Zadani from "./component/Zadani";
import Seznam from "./component/Seznam";
import {useEffect, useState} from "react";
import Calls from "./Calls";

function App() {
    const [items,setItems] = useState([]);
    const [filter,setFilter] = useState("vse")
    useEffect(()=>{
        getAll();
    },[filter])
    async function getAll() {
        let result;
        switch (filter){
            case "vse" :
                result = await Calls.getShoppingListAll();
                break;
            case "aktivni" :
                result = await Calls.getShoppingListOnlyActive();
                break;
            case "ukoncene" :
                result = await Calls.getShoppingListOnlyCompleted();
        }
        setItems(result);
    }
     async function changeFilter(filt){
        setFilter(filt);
    }
    async function onDelete(id){
        await Calls.deleteShoppingItem(id);
        getAll();
    }
    async function onChangeState(id,typ,value){
        let item = await Calls.getShoppingItem(id);
        switch (typ){
            case "state" :
                item = {...item,state: value==="completed"? "active": "completed"};
                await Calls.updateShoppingItem(id,item);
                break;
            case "count" :
                item = {...item,count: value};
                await Calls.updateShoppingItem(id,item);
                break;
        }
        getAll();
    }
    async function add(value){
        await Calls.createShoppingItem({
            "content": value,
            "state": "active",
            "count": "0",
        });
        getAll();
    }

  return (
    <div className="App">
        <Zadani  filter ={changeFilter} add={add} active={filter}></Zadani>
        <Seznam items={items} onChangeState={onChangeState} onDelete={onDelete}></Seznam>
    </div>
  );
}

export default App;
