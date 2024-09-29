import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx";
import Student from "./Student.jsx";


function App() {
  
  return(
    <>
    <Student name="Kevin Andel Josy" age={23} isStudent={false}/>
    <Student name="Alen Abel Josy" age={13} isStudent={true}/>
    <Student name="Reena Josy" age={47} isStudent={false}/>
    <Student name="Josy C.A." age={57} isStudent={false}/>
    </>
  );
}

export default App;
