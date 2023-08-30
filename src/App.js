import React, { useState, useEffect, useRef , createContext, useMemo} from 'react';
import Toggle from './Toggle';
import { useTitleInput } from './hooks/useTitleInput';
import Counter from './Counter';
// export const UserContext = createContext();

const App = () => {
const [name, setName] = useTitleInput('');
const ref = useRef();
const [objects, setObjects] = useState([]);

const fetchPosts = async () => {
  const res = await fetch('https://my-json-server.typicode.com/typicode/demo/db')
  const data = await res.json();
  setObjects(data)
  console.log(setObjects)
}

useEffect(() => {

 fetchPosts()
},[objects])

const reverseWord = word => {
  return word.split('').reverse().join('')
}

const title = 'level up dishes'

const TitleReversed = useMemo(() => reverseWord(title), [title]) ;



  // useEffect(() => {
  //   document.title = name;
  // })

  return (
    // <UserContext.Provider
    // value={{
    //   user: true
    // }}
    // >
    <div className="main-wrapper" ref={ref}>
      <h1>{TitleReversed}</h1>
      <Toggle/>
      
      <form onSubmit={(e) => {
        e.preventDefault();  
       
      }}>
        
      <input type="text" 
      onChange={(e)=> setName(e.target.value)} 
      value={name}/>
      <button>Submit</button>
      </form>
      
      
       {/* { objects.map(post => (
      `  <div>
          <h2 key=${post.id}>${post.id}</h2>
          
        </div>`
      )) } */}

</div>
   
    // </UserContext.Provider>
  );
};



export default App;
