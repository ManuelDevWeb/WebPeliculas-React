import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
// Importando Componentes
import ListadoPeliculas from "./pages/ListadoPeliculas";
import Blog from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ListadoPeliculas} />
        <Route exact path="/blog" component={Blog} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
