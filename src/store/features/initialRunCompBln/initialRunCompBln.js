import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isItFirstRun: true
}

export const initialRunSlice = createSlice({
    name: 'isItFirstRun',
    initialState,
    reducers: {
        firstRunIdentifier: (state, action) => {
            state.isItFirstRun = action.payload
        },
    },
})

export const { firstRunIdentifier } = initialRunSlice.actions

export default initialRunSlice.reducer