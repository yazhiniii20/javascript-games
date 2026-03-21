import {useState} from 'react';
import './App.css';
import UserList from './UserList';
function App() {
  const [search,setSearch] = useState('');
  const mystyle = {
    color : "white",
    backgroundColor : "blue",
    width : "70%",
    textAlign : "center",
    padding : "90px",
    fontSize : "40px"
  }
  return (
    <div className="App" style = {mystyle}>
       <h1> User Search App</h1>
       <input type="text" placeholder = "Enter user to search.." onChange={(e) => setSearch(e.target.value)} />
       <UserList search = {search} />
    </div>
  );
}

export default App;
