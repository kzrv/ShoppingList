import "./item-style.css";
export default function SeznamItem({item,onChangeState,onDelete}){
    const {content,count,state,id} = item;
    let btn = "UKONČIT";
    if(state==="completed") btn = "ZKUSIT ZNOVU";
    function onChange(e){
        onChangeState(id,"count",e.target.value);
    }
    return (
            <div className="item">
                    <div className="item_content">{content}</div>
                    <input  className={"item_input"} type="number" min="0" max="100" step="1" value={count} onChange={onChange}/>
                    <div className={"btn-group"}>
                        <button className={"btn btn-outline-primary"} onClick={()=>onChangeState(id,"state",state)}>{btn}</button>
                        <button className={"btn btn-outline-primary"} onClick={()=>onDelete(id)}>SMAZAT</button>
                    </div>
            </div>
    )
}