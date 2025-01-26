import { Provider } from 'react-redux';
import { store } from './store';
import AddExercise from './components/addExercise';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar"
import ViewExercises from './components/viewExercises';

function App() {
  return (
    <Provider store = {store}>
      <div className='app-container'>
         
          <Router>
          <NavigationBar />
          <HomePage />
            <Routes>
              <Route path='/' exact element={<HomePage />}/>
              <Route path='/addExercise' element={<AddExercise/>} />
            

            </Routes>
            <ViewExercises />
          
          </Router>
          
      </div>
    </Provider>
  );
}

export default App