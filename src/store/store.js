import { configureStore } from '@reduxjs/toolkit';
import isItDayReducer from './features/DayTimeBlnSlice/dayTimeBlnSlice';
import isItFirstRunReducer from './features/initialRunCompBln/initialRunCompBln';

export const store = configureStore({
  reducer: {
    isItDay: isItDayReducer,
    isItFirstRun: isItFirstRunReducer,
  },
  devTools: true,
});
