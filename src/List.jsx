function List(){
    const fruits = [{id: 1, name:"Apple", calories: 96}, {id: 2, name:"Banana", calories: 107}, {id: 3, name:"Mango", calories: 125}, {id: 4, name:"Pineapple", calories: 57}, {id: 5, name:"Grapes", calories: 75}]

    fruits.sort((a,b)=> a.name.localeCompare(b.name));

    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)

    const listItems = lowCalFruits.map(fruit => <li key={fruit.id}>{fruit.name}: <b>{fruit.calories}</b></li>)

    return(
        <ul>{listItems}</ul>
    );
}

export default List;