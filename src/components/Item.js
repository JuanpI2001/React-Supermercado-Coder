import React from "react"

const Item =({product})=>{
    return(
        <div>
            <div>{product.name}</div>
            <div>{product.descripcion}</div>
            <div>{product.stock}</div>
        </div>
    )
}
export default Item

