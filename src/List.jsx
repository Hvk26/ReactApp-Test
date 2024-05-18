function List(){
    const fruits = ["Apple", "Banana", "Mango", "Pineapple", "Grapes"]

    fruits.sort();

    const listItems = fruits.map(fruit => <li>{fruit}</li>)

    return(
        <ul>{listItems}</ul>
    );
}

export default List;