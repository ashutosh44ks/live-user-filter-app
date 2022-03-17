import Header from "./components/Header";
import { useState, useEffect } from "react";
import UserContainer from "./components/UserContainer";
import Loader from "./components/Loader";

function App() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=15")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="App">
      <Header query={query} setQuery={setQuery} />
      {isLoading ? <Loader/> : <UserContainer users={users} query={query} />}
    </div>
  );
}

export default App;
