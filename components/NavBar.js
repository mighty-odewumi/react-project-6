export default function NavBar(props) {

  const circleStyles = {
    animationName: props.darkMode ? "toggler" : "",
    // animationDirection: props.darkMode ? "alternate" : "backwards",
    animationDuration: "2s",
    backgroundColor: props.darkMode ? "black" : "white",
  }

  // console.log(circleStyles.backgroundColor);

  const navStyles = {
    backgroundColor: props.darkMode ? "black" : "white",
  }

  const darkTextStyle = {
    color: props.darkMode ? "white" : "#c4bfbf"
  }

  const lightTextStyle = {
    color: props.darkMode ? "gray" : "black"
  }

  const sliderStyles = {
    backgroundColor: props.darkMode ? "white" : "black",

  }

  return (
    <nav 
      className={props.darkMode ? "dark nav--dark" : ""} 
      style={navStyles}
    >

      <img src="./logo192.png" alt="React library logo" className="logo-img" />
      <h3>ReactFacts</h3>
      {/*  <h4>React Course - Project 6</h4> */}
      <div className="toggler">
        <p className="toggle--light" style={lightTextStyle}>Light</p>

      <div 
        className="toggle--slider"
        style={sliderStyles}
        onClick={props.toggleFunc}
      >
        <div 
          className="toggle--slider-circle" 
          
          style={circleStyles}
        >
          
        </div>
      </div>
        <p 
          className="toggle--dark" style={darkTextStyle}>Dark</p>
      </div>
    </nav>
  );
}
