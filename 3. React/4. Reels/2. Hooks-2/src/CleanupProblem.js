import React,{useState,useEffect} from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
      const interval = setInterval(function () {
        setCount((prev) => prev + 1);
      }, 1000);
      
    }, []);
    return <p>and the counter counts {count}</p>;
  }
  function EffectsDemoUnmount() {
    const [unmount, setUnmount] = useState(false);
    const renderDemo = () => !unmount && <Counter />;
    // The child component has registered an interval that invokes a function every second. However, the component was
    //  destroyed without unregistering the interval. After the component is destroyed, the interval is still active
    //   and wants to update the component’s state variable (count), which no longer exists.
    return (
      <div>
        <button onClick={() => setUnmount(true)}>Unmount child component</button>
        {renderDemo()}
      </div>
    );
}

export default EffectsDemoUnmount
