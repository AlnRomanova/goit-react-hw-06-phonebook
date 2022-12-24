import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterContacts(state, action) {
    return (state = action.payload);
    },
  },
});

export const { filterContacts} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
