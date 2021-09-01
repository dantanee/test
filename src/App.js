import Footer from './Footer';
import Contact from './Contact';
import logo from './logo.svg';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Features from './Features';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Switch>
       <Route path="/" exact>
         <Contact />
       </Route>
       <Route path="/features" >
         <Features />
       </Route>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
