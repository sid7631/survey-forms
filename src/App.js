import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import FormHeader from './components/Form/FormHeader';
import CenteredTabs from './components/Form/CenteredTabs';
import QuestionForm from './components/Form/QuestionForm/QuestionForm';
import Home from './components/Home/';
import Form from './components/Form';

function App() {
  return (
    <div className="">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path='/form/:id'>
            <Form />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
