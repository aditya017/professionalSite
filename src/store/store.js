import { configureStore } from '@reduxjs/toolkit';
import isItDayReducer from "./features/DayTimeBlnSlice/dayTimeBlnSlice";
export const store = configureStore({
    reducer: {
        isItDay : isItDayReducer
    },
    devTools: true
})