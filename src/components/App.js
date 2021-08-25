import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./ui/Theme";
import Header from "./ui/Header";
import Home from './../Home/Home'
import Project from '../Project/Project';
import Blog from "../Blog/Blog";
import About from '../About/About';
import BlogListContent from './../Blog/BlogListContent';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={() => <div><Home/></div>}/>
          <Route exact path="/home" component={() => <div><Home/></div>}/>
          <Route exact path="/project" component={() => <div><Project/></div>}/>
          <Route exact path="/blog" component={() => <div><Blog/></div>}/>
          <Route exact path='/blog/:slug' component={() => <div><BlogListContent/></div>}/>
          <Route exact path="/podcast" component={() => <div>home</div>}/>
          <Route exact path="/about" component={() => <div><About/></div>}/>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
