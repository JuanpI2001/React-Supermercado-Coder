import { useState } from "react";

const ItemCount =()=> {
    
    const [rates,setRates]=useState(1);
    
    const handleClick = () =>{
        //rates +=1;
        //console.log(rates);
        
        if (rates<5) {
            setRates(rates + 1);
        }
        
    }
    const handdleClick = () =>{
        //rates -=1;
        //console.log(rates);
        if (rates>1) {
            setRates(rates - 1);
        }
        
    }
    
    return(
        <>
        
        <button onClick={handleClick}>Agregar</button>
         <p>cantidad {rates}</p>
        <button onClick={handdleClick}>Quitar</button>
        </>
    );
}
export default ItemCount;
