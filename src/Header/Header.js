// function component
export default function Header({Name}) {
  return (
    <h1>Welcome {Name}</h1>
  );
}

// class component
/*import React, { Component } from "react";
  export default class Header extends Component {
    render() {
      return (
        <header>
          <h1>My Website</h1>
        </header>
      );
    }
 }*/