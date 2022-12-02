import {useState} from "react";
import "./ZadaniStyle.css";

export default function Zadani({add,filter,active}){
    const [value,setValue] = useState("");
    function addNew(e){
        setValue(()=>e.target.value);
    }
    function addItem(){
        add(value);
        setValue("");
    }
    function filtered(e) {
        filter(e.target.value);
    }
    function buttons(name){
            const clazz = name===active? "btn btn-outline-primary polozka_light" : "btn btn-outline-primary";
            return <button onClick={filtered} value={name} className={clazz}>{name.toUpperCase()}</button>
    }
    return (
        <div className="polozka">
            <div className={"polozka_add"}>
                <input type={"text"} onChange={addNew} value={value} placeholder={"Zadejte nazev polozky"} className={"form-control"}/>
                <button  className="btn btn-light" onClick={addItem}>Pridat</button>
            </div>
            <div className={"btn-group"}>

                {buttons("vse")}
                {buttons("aktivni")}
                {buttons("ukoncene")}

            </div>
        </div>
    )
}