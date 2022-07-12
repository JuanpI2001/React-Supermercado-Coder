import ItemCount from "./ItemCount";

const ItemListContainer =(props)=> {
    return(
        <>
        <h2>
            {props.titulo}
        </h2>
        <ItemCount />
        </>
    );
}
export default ItemListContainer;