import Item from "./Item";
import React from "react";

const ItemList = ({item})=>{
    
    return(
        <>
        {
            item.map(item =>
                <Item product={item}/>
                )
        }
        </>
        );
    
}



export default ItemList;