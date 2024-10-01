function ButtonOnClick() {

  const handleClick = (e) => {
    console.log(e);
    e.target.textContent = "OUCH";
  }

  const handleClick1 = () => console.log("Ouch!!");

  const handleClick2 = (name) => console.log(`${name} stop clicking me`);

  let count = 0;
  const handleClick3 = (name) => {
    if(count < 3) {
      count++;
      console.log(`${name}!! you clicked me ${count} time/s`);
    } 
    else {
      console.log(`${name} please stop clicking me`);
    }
  }

  return(<button onClick={(e) => {
    handleClick(e);
    handleClick1();
    handleClick2('Kevin');
    handleClick3('Kevin');
  }}>Click Me</button>);
}

export default ButtonOnClick;