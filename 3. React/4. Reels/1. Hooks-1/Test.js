// Q) 
// Here we have class component that updates the state using the input from a form.
export class Profile extends Component {
  state = {
    name: "Backbencher",
    age: 23,
  };
  onNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  onAgeChange = (e) => {
    this.setState({
      age: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.name}
            onChange={this.onNameChange}
          />
          <input
            type="text"
            value={this.state.age}
            onChange={this.onAgeChange}
          />
          <h2>
            Name: {this.state.name}, Age: {this.state.age}
          </h2>
        </form>
      </div>
    );
  }
}

// Rewrite the same component using React hooks.
// Answer:
import React, { useState } from "react";

function Profile() {
  const [profile, setProfile] = useState({
    name: "Backbencher",
    age: 24,
  });

  const onNameChange = (e) => {
    setProfile({ ...profile, name: e.target.value });
  };

  const onAgeChange = (e) => {
    setProfile({ ...profile, age: e.target.value });
  };

  return (
    <div>
      <form>
        <input type="text" value={profile.name} onChange={onNameChange} />
        <input type="text" value={profile.age} onChange={onAgeChange} />
        <h2>
          Name: {profile.name}, Age: {profile.age}
        </h2>
      </form>
    </div>
  );
}

//////////////////////////////////////

// Q )
// Here is a class component that prints Boom in console whenever it is mounted or updated.

export class Banner extends Component {
  state = {
    count: 0,
  };

  updateState = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  componentDidMount() {
    console.log("Boom");
  }

  componentDidUpdate() {
    console.log("Boom");
  }

  render() {
    return (
      <div>
        <button onClick={this.updateState}>State: {this.state.count}</button>
      </div>
    );
  }
}
// Remove the redundant console.log statement using React hooks.
// Answer:
// componentDidMount() and componentDidUpdate() are lifecycle methods. Such side effects can be done using 
// useEffect hook. useEffect hook is a function which accepts a callback function. That callback function 
// is called every time render happens.
// The code can be rewritten as:
import React, { useState, useEffect } from "react";
function Banner() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Boom");
  });

  const updateState = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={updateState}>State: {count}</button>
    </div>
  );
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Q  ) Here we have a class component with a state value. Each time the button in component is clicked,
//  the count is incremented.

class Counter extends Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>Count: {this.state.count}</button>
      </div>
    );
  }
}
// Rewrite this component using React hooks.

// Answer:

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count: {count}
      </button>
    </div>
  );
}
///////////////////////////////////////////////////////////////////////////

// Q ) Understand the code below:
function Banner() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Count is updated");
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>State: {count}</button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
// It logs "Count is updated" message even when updating the value in textbox. How can we show the log message only
//  when the count state is updated? 
//  Answer
//  useEffect function accepts a second parameter which should be an array. 
//  Within this array, we need to pass the props or state we need to watch for. Only if those props or state
//   mentioned in the array change, the effect is executed. So in our code, we add the second argument and 
//   specify only count value in the array.
// Here is the udpated useEffect code:

// useEffect(() => {
//   console.log("Count is updated");
// }, [count]);

////////////////////////////////

// Q ) 
// What will be the output of the following code?. Explain the reason behind your answer.
import React, { createContext, useContext } from 'react';
const MyContext = createContext(1);
const MyComponent = () => (
  <>
    <p>{useContext(MyContext)}</p>
    <MyContext.Provider value={2}>
      <p>{useContext(MyContext)}</p>
    </MyContext.Provider>
  </>
);
export default MyComponent;

Answer

1

1
// UseContext accepts a context object (the value returned from React.createContext) and returns the current 
// context value for that context. The current context value is determined by the value prop of the nearest 
// above the calling component in the tree. Emphasis added. The important point is that it doesn't matter where
//  you call useContext inside the component - what matters is where that component is called and where it is 
//  located in the tree.

///////////////////////////////////
//  Q )

//  Which component will be rendered by the following code when navigating to '/login' route ? Give explanation
//   for your answer.
ReactDOM.render((
  <Router>
    <div>
      <Route path="/" render={Home} />
      <Route path="/login" render={Login} />
    </div>
  </Router>),
  document.getElementById('root')
);

// Answer

// Both Home and Login component will be rendered. This is due to the behaviour of Router. A matches the 
// beginning of the URL, not the whole thing. So a will always match the URL. Router renders all the props 
// that match with the current path.

////////////////////////////////

// Q )
// Study the following piece of code and suggest changes such that only the Profile component is Rendered when the
//  path is '/dashboard/profile'.
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
const App = () => {
  return (<div>App</div>)
}
const Dashboard = () => {
  return (<div>Dashboard</div>)
}
const Profile = () => {
  return (<div>Profile</div>)
}
const Router = () => {
  return (<BrowserRouter>
    <Route path='/' component={App}></Route>
    <Route path='/dashboard/profile' component={Profile}></Route>
    <Route path='/dashboard' component={Dashboard}></Route>
  </BrowserRouter>
  )
}

Answer:

Add exact keyword to the route of App and Dashboard.

< Route path = '/' exact component = { App } ></Route >
  <Route path='/dashboard' exact component={Dashboard}></Route>

///////////////////////////////////////////

// Q )
// Explain the variations of useEffect

// Answer:

// There are 4 possible ways to call the useEffect method.

//   a) once, when component mounts

// Usually, you would like to use it for fetching data or adding event listeners.To run the function once, add an
// empty dependency list.If there are no dependencies in it, that means it will stay the same all the time, and
// will not call the function again.

// function MyComponent() {
//   // ...
//   React.useEffect(() => {
//     callMeOnlyOnce()
//   }, [])
//   // ...
// }

// b) On Every Component Render

// To call the function on each component render, skip adding the dependency list.No list, nothing to compare
// against, that means run the effect every time.

// function MyComponent() {
//   // ...
//   React.useEffect(() => {
//     runThisFunctionOnEveryRender();
//   })
//   // ...
// }
// c) On Every Component Render with a Condition.

// To call a function conditionally, specify the list of dependencies.And the rule of thumb is to always add
// those dependencies that you are using inside the useEffect().

// function MyComponent() {
//   // ...
//   React.useEffect(() => {
//     runIfOneOfTheDepsWillChange(dep1, dep2);
//   }, [dep1, dep2])
//   // ...
// }
// d) When Component Unmounts

// To clean up(remove event listeners or stop data fetching with a side effect) after the component unmounts,
//   a return statement with a function should be added inside the useEffect() hook.

    ////////////////////////////////////////////////////////////

    // Q )

    // We have a code snippet from a class component which registers and remove an event listener.

    componentDidMount() {
  window.addEventListener("mousemove", this.handleMousePosition);
}

componentWillUnmount() {
  window.removeEventListener("mousemove", this.handleMousePosition);
}
// Convert this code to React hooks format.

// Answer:

useEffect(() => {
  window.addEventListener("mousemove", handleMousePosition);

  return () => {
    window.removeEventListener("mousemove", handleMousePosition);
  }
}, []);

// Q )

// Class component, ProviderComponent provides two context values.

export const NameContext = React.createContext();
export const AgeContext = React.createContext();

export class ProviderComponent extends Component {
  render() {
    return (
      <NameContext.Provider value="Backbencher">
        <AgeContext.Provider value="23">
          <Test2 />
        </AgeContext.Provider>
      </NameContext.Provider>
    );
  }
}
// We have Test2 with following code.
import React from 'react'

function Test2() {
  return (
    <div>
    </div>
  )
}
export default Test2
// Complete Test2 component to consume the context values and display the name and age.
// Answer:

import React, { useContext } from 'react'
import { NameContext, AgeContext } from './ProviderComponent';
function Test2() {
  let name = useContext(NameContext);
  let age = useContext(AgeContext);
  return (
    <div>
      {name}  {age}
    </div>
  )
}
export default Test2