import React, {useState, useContext} from "react";
// import {UserContext} from './App';

const Toggle = () => {
    const [isToggled, setToggled] = useState(false);
    // const userInfo = useContext(UserContext)
    // if(!userInfo.user) return null;
    return (
        <div>
            <button onClick={() => setToggled(!isToggled)}>Toggle</button>
        {isToggled && <h2>Hello</h2>}    
        </div>
    )
}
export default Toggle;