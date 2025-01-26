import { Provider } from 'react-redux';
import { store } from './store';
import AddExercise from './components/addExercise';
import ViewExercises from './components/viewExercises';
import 'bootstrap/dist/css/bootstrap.min.css';

function App (){
  return(
    <Provider store = {store}>
      <div>
        <h1>Fitness Tracter</h1>
        <AddExercise />
        <br/>
        <ViewExercises />
      </div>
    </Provider>
  );
}

export default App;