import React,{useState,useEffect,useRef} from 'react'

function Infinite() {
    const [title, setTitle] = useState("default title");
  const titleRef = useRef();
  useEffect(() => {
    console.log("useEffect title");
    document.title = title;
  });
  useEffect(() => {
    console.log("useEffect local storage");
    const persistedTitle = localStorage.getItem("title");
    let def=[];
    setTitle(persistedTitle || def);
  });
  //to prevent infinite loop we can add an empty array deendency which will ensure that this effect is run
  // only when the component is mounted and not on every subsequent re renders
  console.log("render");
  const handleClick = () => setTitle(titleRef.current.value);
  return (
    <div>
      <input ref={titleRef} />
      <button onClick={handleClick}>change title</button>
    </div>
  );
}

export default Infinite
