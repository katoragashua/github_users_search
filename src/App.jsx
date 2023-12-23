import { useState, useEffect, createContext, useContext } from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Search from "./components/Search";

export const Context = createContext(null);

function App() {
  const [user, setUser] = useState(() => "");
  const [gitHubUser, setGitHubUser] = useState(() => "");
  const [octocat, setOctocat] = useState(()=> "")

  useEffect(() => {
    const getOctocat = async() => {
      try {
        const res = await fetch(`https://api.github.com/users/octocat`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${key}`,
            "Content-Type": "application/json", // Adjust the content type as needed
            // Add other headers if necessary
          },
        });
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setOctocat(prev => data)
      } catch (error) {
        console.log(error);
      }
    }
    getOctocat()
  },[])

  console.log(octocat);

  const handleUser = (e) => {
    setUser((prev) => e.target.value);
  };
  const key = import.meta.env.VITE_GITHUB_TOKEN;
  const searchUser = async (user) => {
    try {
      const res = await fetch(`https://api.github.com/users/${user}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json", // Adjust the content type as needed
          // Add other headers if necessary
        },
      });
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      console.log(data);
      setGitHubUser((prev) => data);
      setUser((prev) => "");
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(user);

  const { Provider } = Context;
  return (
    <Provider value={{ user, handleUser, searchUser }}>
      <div className="container">
        <Header />
        <Search />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
