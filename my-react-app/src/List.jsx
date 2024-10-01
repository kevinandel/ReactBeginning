function List(props) {      

  const category = props.category;
  const itemList = props.items;

  const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp;<b>{item.calories}</b></li>);

  return(
    <>
      <h3>{category}</h3>
      <ol>{listItems}</ol>
    </>
    );
}

export default List;



/*

function List() {

  const fruits = [
                  {
                    id: 1,
                    name: "apple",
                    calories: 95
                  },
                  {
                    id: 2,
                    name: "orange",
                    calories: 45
                  },
                  {
                    id: 3,
                    name: "banana",
                    calories: 105
                  },
                  {
                    id: 4,
                    name: "pineapple",
                    calories: 37
                  }
                 ];

  // fruits.sort((a, b) => a.name.localeCompare(b.name)); //alphabetical
  // fruits.sort((a, b) => b.name.localeCompare(a.name)); //reverse alphabetical
  // fruits.sort((a, b) => a.calories - b.calories); //calories ascending
  // fruits.sort((a, b) => b.calories - a.calories); //calories descending

  // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

  // const highCalFruits = fruits.filter(fruit => fruit.calories > 100);             

  const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp;<b>{fruit.calories}</b></li>);

  return(<ol>{listItems}</ol>);
}

export default List;

*/