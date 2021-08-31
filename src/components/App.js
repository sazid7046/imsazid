import React, {Suspense, lazy} from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./ui/Theme";
import Preloader from './ui/Preloader';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './ui/Header';
const Home = lazy(() => import('./../Home/Home'));
const Project = lazy(() => import('../Project/Project'));
const Blog = lazy(() => import("../Blog/Blog")) ;
const Podcast = lazy(() => import('./../Podcast/Podcast'));
const About = lazy(() => import('../About/About'));
const BlogListContent = lazy(() => import('./../Blog/BlogListContent'));
const Footer = lazy(() => import('./ui/Footer'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header/>
        <Suspense fallback={<div><Preloader/></div>}>
          <CssBaseline/>
            <Switch>
                <Route exact path="/" component={() => <div><Home/></div>}/>
                <Route exact path="/home" component={() => <div><Home/></div>}/>
                <Route exact path="/project" component={() => <div><Project/></div>}/>
                <Route exact path="/blog" component={() => <div><Blog/></div>}/>
                <Route exact path='/blog/:slug' component={() => <div><BlogListContent/></div>}/>
                <Route exact path="/podcast" component={() => <div><Podcast/></div>}/>
                <Route exact path="/about" component={() => <div><About/></div>}/>
            </Switch>
            <Footer />
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
