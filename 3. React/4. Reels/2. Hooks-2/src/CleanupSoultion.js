import React,{useState,useEffect} from 'react'

function CleanupSolution() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const interval = setInterval(function () {
        // case 1
          setCount((prev) => prev + 1);
        console.log(count);
        //case 2
        // The reason is because the callback passed into setInterval's closure only accesses the time variable in 
        // the first render, it doesn't have access to the new time value in the subsequent render because the 
        // useEffect() is not invoked the second time.time always has the value of 0 within the setInterval callback.
        // Like the setState you are familiar with, state hooks have two forms: one where it takes in the updated
        //  state, and the callback form which the current state is passed in. You should use the second form and 
        //  read the latest state value within the setState callback to ensure that you have the latest state value
        //   before incrementing it.
        //  setCount(count+1);
        }, 1000);
        // return optional function for cleanup
        return () => clearInterval(interval);
    }, []);
    // cleanup functions are not only invoked before destroying the React component. An effect’s cleanup function
    //  gets invoked every time, right before the execution of the next scheduled effect.
    return <p>and the counter counts {count}</p>;
  }
  function EffectsDemoUnmount() {
    const [unmount, setUnmount] = useState(false);
    const renderDemo = () => !unmount && <CleanupSolution />;
    return (
      <div>
        <button onClick={() => setUnmount(true)}>Unmount child component</button>
        {renderDemo()}
      </div>
    );
}

export default EffectsDemoUnmount
