import { configureStore } from '@reduxjs/toolkit';
import exercisesReducer from './features/exerciseSlices';

export const store = configureStore({
    reducer:{
        exercises:exercisesReducer,
    },
});