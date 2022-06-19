import './App.css'
import {Route, Switch, Redirect} from 'react-router-dom'
import LoginForm from './components/login'
import Home from './components/home'
import ProtectedRoute from './components/protectedRoute'
import Jobs from './components/jobs'
import JobItemDetails from './components/jobItemDetails'
import NotFound from './components/notFound'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={Jobs} />
    <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
