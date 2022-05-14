import React from "react";
import ListArray from "./ListArray";

const List = (props) => {
    return (
        <div>
            {props.items.map
            (item => <ListArray
            text = {item.text} 
            id = {item.id}
            key = {item.id}
            deleteItem = {props.onDelete}>
                {item.text}
                </ListArray>)}
        </div>
    )
}

export default List;