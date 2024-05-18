function List(props){
    
    const itemsList = props.items
    const category = props.category

    const listItems = itemsList.map(Items => <li key={Items.id}>{Items.name}: <b>{Items.calories}</b></li>)

    return(
        <>
            <h2>{category}</h2>
            <ul>{listItems}</ul>
        </>
        
    );
}

export default List;