import React,{useEffect,useState,useRef} from 'react'
import './Effect.css'
function Effect() {
  const [title, setTitle] = useState("default title");
  const titleRef = useRef();
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    console.log("useEffect");
    document.title = title;
  });
  //without dependency array even when the darkmode checkbox is clicked the useEffect callback is called.
  // as the useEffect runs after every render
  console.log("render");
  const handleClick = () => setTitle(titleRef.current.value);
  const handleCheckboxChange = () => setDarkMode((prev) => !prev);
  return (
    
    <div className={darkMode ? "dark-mode" : ""}>
      <label htmlFor="darkMode">dark mode</label>
      <input
        name="darkMode"
        type="checkbox"
        checked={darkMode}
        onChange={handleCheckboxChange}
      />
      <input ref={titleRef} />
      <button onClick={handleClick}>change title</button>
    </div>
  );
}

export default Effect



// const [title, setTitle] = useState("default title");
//   const titleRef = useRef();
//   useEffect(() => {
//     console.log("useEffect");
//     document.title = title;
//   });
//   const handleClick = () => setTitle(titleRef.current.value);
//   console.log("render");
//   return (
//     <div>
//       <input ref={titleRef} />
//       <button onClick={handleClick}>change title</button>
//     </div>
//   );
