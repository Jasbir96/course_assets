import React,{useState,useEffect} from 'react'
import firebase from './firebase';
const auth = firebase.auth();
function Demo() {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(false);
    const [loading2,setLoading2] = useState(true);
    const [email,setEmail] = useState('');
    const [error,setError] = useState('');
    const [password,setPassword] = useState('');
    const handleSubmit = async ()=>{
        try {
            console.log(email,password);
          setError("");
          setLoading(true);
          let res = await auth.signInWithEmailAndPassword(email,password)
          console.log(res.user.uid);
          setUser(res.user.uid)
          setLoading(false)
        } catch {
          setError("Failed to log in")
          setLoading(false)
        }
        setEmail('');
        setPassword('');
    }
    const handleSignout=async()=>{
        try {
          setError("")
          setLoading(true)
          let res = await auth.signOut();
          console.log(res);
          setUser(null)
          setLoading(false)
        } catch {
          setError("Failed to sign out")
          setLoading(false)
        }
        setEmail('');
        setPassword('');
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            // console.log(user.uid)
          setUser(user?.uid)
          setLoading2(false)
        })
        return unsubscribe;
      }, [])
    return (
        <>
        {
            loading2?<h1>Just a sec</h1>:loading?<h1>Please wait....Loading</h1>:user==null?
        <div>
        <label>
         Email :
          <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </label>
        <label>
          Password :
          <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </label>
        <button onClick={handleSubmit}>Submit</button>
        </div>:
        <>
        <h2>{user} is Signed In</h2>
        <button onClick={handleSignout}>Sign Out</button>
        </>
}
        </>
    )
}
export default Demo
