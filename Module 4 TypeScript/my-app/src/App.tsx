import './App.css';
import React from 'react';
import MyComponent from './MyComponent';
import Header from './Header'


{ /*------------Nested Elements---------------*/ }
interface Address{
  flatNo: number;
  floor?: number;
  buildingName: string;
  city: string

}
interface User<T> {
  name: T;
  age: number;
  username?: T;  
  employmentType: T;
  address: Address; //nesting Address type inside User type
}

const user: User<string> = {
  name: "Derek Shepherd",
  age: 53,
  employmentType: "full-time",
  address: {
    flatNo: 3, 
    buildingName: "Norwester Park",
    city: "NYC"
  }
}

console.log(user)

function App() {
  return (
    <div className="App">
      { /*------------Component---------------*/ }
      <Header />
      { /*------------Props/Properties---------------*/ }
      <MyComponent prodName='Yonex Tennis Racquet 30' category='Racquet' price={7420} />

      
    </div>
  );
}

export default App;
