import './App.css';
import Header from './components/Header';
import Template from './components/Body/Template';
import Body from './components/Body/Body';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import FormHeader from './components/Form/FormHeader';
import CenteredTabs from './components/Form/CenteredTabs';
import QuestionForm from './components/Form/QuestionForm/QuestionForm';

function App() {
  return (
    <div className="">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path='/form/:id'>
            <FormHeader />
            <CenteredTabs />
            <QuestionForm />
          </Route>
          <Route path='/'>
            <Header />
            <Template />
            <Body />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
