import { Provider } from 'react-redux';
import { store } from './store';
import AddExercise from './components/addExercise';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import NavigationBar from "./components/NavigationBar"

function App() {
  return (
    <Provider store = {store}>
      <div className='app-container'>
          <NavigationBar />
          <HomePage />
          <Router>
            
              <Route path='/HomePage' exact component={HomePage} />
              <Route path='/addExercise' component={AddExercise} />

      
          
          </Router>
      </div>
    </Provider>
  );
}

export default App