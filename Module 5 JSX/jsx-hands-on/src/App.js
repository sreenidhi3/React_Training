function DateElement(){
  return(<>This page was last rendered at {new Date().toLocaleTimeString()}</>)
}


function App() {

  
  const simpleElement = <h1>Hello world!</h1>;

  const name = "Neal"
  const lastName = "Caffery"
  const elementWithName = <h1>Hello, {name}</h1>

  // Attributes
  const linkElement = <a href="https://www.reactjs.org"> ReactDocs </a>;

  // Nested Elements
  const nestedElement = <div>
      <h3>This is h3 element inside div</h3>
      <p>This is a p tag inside</p>
    </div>

  // styling elements
  function StyledComponent(){
    return(
      <div style={{color: "purple", padding:"1rem"}}><h2>Styled Component</h2></div>
    )
  }

  // Advanced 
  function ComponentWithProps(props){
    return(
      <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    )
  }

  return (
    <div>

      <h2>Assignment: Hands-on</h2>
        <li>JSX Basic Example</li>
        <li>JSX Advanced Example</li>
        <li>JSX with Babel or anything similar</li>
      
      
        {simpleElement}
        <hr/>
        {elementWithName}
        <hr/>
        {linkElement}
        <hr/>
        {nestedElement}
        <hr/>
        {/* JavaScript Expressions */}
        {name + " "+ lastName}
        <br/>
        {3 > 5 ? "greater than 5" : "less than 5"}
        <hr/>
        <StyledComponent />
        <hr/>
        <ComponentWithProps name="Neal" email="neal.caffery@gmail.com"/>
        <hr/>
        <DateElement/>

    {/*---------- JSX FUNCTION DateElement----------- */}
      {/* function DateElement(){
            return(<>This page was last rendered at {new Date().toLocaleTimeString()}</>)
          }
      */}
    {/*---------- Corresponding JavaScript FUNCTION DateElement after Babel compiler transforms it from JSX----------- */}

      {/* function DateElement() {
          return \/\*#__PURE__\*\/ React.createElement(
          React.Fragment,
          null,
          "This page was last rendered at ",
          new Date().toLocaleTimeString()
          );
        }
    */}

    </div>
  );
}

export default App;
