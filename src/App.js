import logo from './logo.svg';
import './App.css';
import Squares from './components/lifting-state';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Articles from './news/Articles';
import ArticleIdNumbers from './news/ArticleIdNumbers';
import Clicked from './hooks/Clicked';
import Square from './hooks/Square';
import Toggle from './hooks/Toggle';
import Counter from './hooks/Counter';
import StepCounter from './hooks/StepCounter';
import TempConverter from './hooks/TempConverter';
import List from './hooks/List';


const App = () => (

    <Router>
      <>
          {/* <Route exact path="/">
          <Squares color="hotpink" />    
          </Route>       */}
          
  
          <Route exact path="/news">
            <Articles />
          </Route>

          {/* <Route exact path="/news">
            <ArticlesIdNumbers />
          </Route> */}

          <Route exact path="/hooks">
            <Clicked />
            <Square color="hotpink" />    
            <Counter max={100} /> 
            <StepCounter max={100} step={5}/>  
            <TempConverter />
            <List />
          </Route>  

        </>
      </Router>
)

    

export default App;
