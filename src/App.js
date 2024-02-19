import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import './styles.css';
function App() {
  const [msg, setMsg] = useState('Invalid message');
     const inputHandler = (event) => {
        var inputmsg = event.target.value
        if(inputmsg.trim().length < 3){
            setMsg("Invalid message");
        }
        else{
            setMsg("Valid message");
        }
    }
  return (
    <div className="App">
        <form>
            <label>Your message</label>
            <input type="text" onChange={inputHandler}/>
            <p>{msg}</p>
        </form>
    </div>
  );
}

export default App;
