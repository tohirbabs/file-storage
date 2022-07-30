import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


// views
import Dash from "./pages/dashboard.js";

function App() {
  return (

    // am using react router dom to set up the web route linking the pages
    // every dashboard pages are inside the page folder under src (source)
    <Router>
      <Switch>
         {/* dashboard view */}
         <Route path="/">
           <Dash></Dash>
         </Route>
      </Switch> 
    </Router>

  );
}

export default App;
