import SeznamItem from "./SeznamItem";
import "./seznam-style.css";

export default function Seznam({items,onChangeState,onDelete}){

    return (
        <div className={"seznam list-group"}>
            {items.map((item)=>{
                return <SeznamItem  key={item.id} onChangeState={onChangeState} onDelete={onDelete} item={item}/>
            })}
        </div>
    )
}