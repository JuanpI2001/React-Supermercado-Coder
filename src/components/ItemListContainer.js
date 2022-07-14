import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import {product} from "./Productos"
import React,{useState} from "react";


const [productList,setProductList]=useState([])

const myPromise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(product);
    }, 2000);
})
myPromise.then((res)=>{
    setProductList(res)
})

const ItemListContainer =(props)=> {
    return(
        <>
        <h2>
            {props.titulo}
        </h2>
        <ItemCount />
        <ItemList items={productList}/>
        </>
    );
}
export default ItemListContainer;