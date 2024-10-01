import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import ButtonOnClick from "./Button/ButtonOnClick.jsx";


function App() {

  return(
    <>
      <ButtonOnClick/>
    </>
  );
}

export default App;




/*

function App() {
  
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

  const vegetables = [
    {
      id: 5,
      name: "potatoes",
      calories: 110
    },
    {
      id: 6,
      name: "celery",
      calories: 15
    },
    {
      id: 7,
      name: "carrots",
      calories: 25
    },
    {
      id: 8,
      name: "corn",
      calories: 63
    }
   ];

  return(
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
      {vegetables.length > 0 ? <List items={vegetables} category="Vegetables"/> : null}
    </>
  );
}

export default App;

*/



/*

function App() {
  
  return(
    <>
      <UserGreeting isLoggedIn={true} username="Kevin"/>
      <UserGreeting isLoggedIn={true}/>
      <UserGreeting/>
    </>
  );
}

export default App;

*/



/*
function App() {
  
  return(
    <>
    <Student name="Kevin Andel Josy" age={23} isStudent={false}/>
    <Student name="Alen Abel Josy" age={13} isStudent={true}/>
    <Student name="Reena Josy" age={47} isStudent={false}/>
    <Student name="Josy C.A." age={57} isStudent={false}/>
    <Student name="Amal Nian"/>
    <Student/>
    </>
  );
}

export default App;

*/