import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import ListMenu from "./Components/ListMenu";

function App() {
  const [menu, setMenu] = useState(false);

  const handleMenuAction = (state) => {
    setMenu(state);
  };

  return (
    <>
      <Menu handleMenuAction={handleMenuAction} />
      <ListMenu handleMenuAction={handleMenuAction} menu={menu} />
    </>
  );
}

export default App;
