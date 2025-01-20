import { useState } from "react";
import Box from "./components/Box";
import Profile from "./components/Profile";
import { ThemeContext } from "./context/ThemeContext";

import UserProvider from "./components/provider/UserProvider";
import AgeProvider from "./components/provider/AgeProvider";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  return (
    <>
      <ThemeContext.Provider value={"dark"}>
        <Box />
      </ThemeContext.Provider>

      <UserProvider>
        <AgeProvider>
          <Profile />
        </AgeProvider>
      </UserProvider>
    </>
  );
}

export default App;
