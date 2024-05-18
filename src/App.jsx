import List from './List.jsx'

function App() {

    const fruits = [{id: 1, name:"Apple", calories: 96}, {id: 2, name:"Banana", calories: 107}, {id: 3, name:"Mango", calories: 125}, {id: 4, name:"Pineapple", calories: 57}, {id: 5, name:"Grapes", calories: 75}]
    const vegetables = [{id: 1, name:"Radish", calories: 51}, {id: 2, name:"Brinjal", calories: 115}, {id: 3, name:"Potato", calories: 139}, {id: 4, name:"Carrot", calories: 77}, {id: 5, name:"Corn", calories: 56}]

 return(
    <>
        <List items={fruits} category="Fruits"/>
        <List items={vegetables} category="Vegetables"/>
    </>
 );
}

export default App
