import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'font-awesome/css/font-awesome.min.css'
import NavBar from './components/NavBar/NavBar'
import Main from './components/Main/Main'
import Blog from './components/blog/Blog'
import ProjectDetails from './components/projectDetails/ProjectDetails'

function App() {
   return (
      <div className="App">
         <main>
            <Router>
               <NavBar />
               <Switch>
                  <Route exact path="/">
                     <Main />
                  </Route>
                  <Route exact path="/blog">
                     <Blog />
                  </Route>
                  <Route exact path="/projects/:name">
                     <ProjectDetails />
                  </Route>
               </Switch>
            </Router>
         </main>
      </div>
   )
}

export default App
