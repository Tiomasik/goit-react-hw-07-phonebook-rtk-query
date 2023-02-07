import { createSlice } from "@reduxjs/toolkit"

const filterInitialState = {
  filter: '',
}

const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    filterContacts(_, action) {
      return {
        filter: action.payload
      }
    },
  },
});

export const filterReducer = filterSlice.reducer

export const { filterContacts } = filterSlice.actions;