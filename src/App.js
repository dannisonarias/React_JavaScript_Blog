import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from "./Create";
import Blog from "./Blog";
import NotFound from "./NotFound";
function App() {
  const title = "Welcome to the new blog";
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <h1> {title} </h1>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/blog/:id">
            <Blog />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
