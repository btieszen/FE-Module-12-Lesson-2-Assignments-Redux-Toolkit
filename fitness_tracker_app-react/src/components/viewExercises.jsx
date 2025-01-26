import { useSelector } from 'react-redux';
import DeleteExercise from './deleteExercise';

const ViewExercises = () => {
    const exercises = useSelector((state) => state.exercises.exercises);

    return(
        <ul>
            <h4> Exercise List</h4>
            {exercises.map((exercise) => (
                <li key = {exercise.id}>
                    {exercise.type}-{exercise.duration}minutes-{exercise.calories}kcal
                    <DeleteExercise id={exercise.id}/>
                </li>
            ))}
        </ul>
    );
}

export default ViewExercises;