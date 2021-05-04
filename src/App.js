import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Noticias from './components/Noticias';
import Navb from './components/Navb';
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import { useState } from 'react';



function App() {
  const [user, setUser] = useState('');
  return (
    <Router>
      <Navb />
      <Switch>
        <Route path="/login">
              <Login setUser={setUser} />
        </Route>
        <Route path="/home"><Home /></Route>

        <Route path="/noticias">
          <div className="container d-flex"><Noticias /></div>
        </Route>
      </Switch>
      <Footer />

    </Router>
  );
}



export default App;
