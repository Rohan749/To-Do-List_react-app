import React from "react";
import "./ListArray.css"

const ListArray = (props) => {

    const deleteItemFunction = () => {
        props.deleteItem(props.id);
    }

    return (
        <div className="list_border" onClick={deleteItemFunction}>
            {props.children}
        </div>
    )
}

export default ListArray;