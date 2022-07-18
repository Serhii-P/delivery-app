import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const requestSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {
    createRequest: (state, action) => {
       state.push(action.payload)
    },
    editRequest: (state, action) => {
      const {id, from, to, type, description, departureDate, date} = action.payload;
      const currentRequest = state.find(request => request.id === id);

      if (currentRequest) {
        currentRequest.from = from;
        currentRequest.to = to;
        currentRequest.type = type;
        currentRequest.description = description;
        currentRequest.departureDate = departureDate;
        currentRequest.date = date;
      }
    },
    deleteRequest: (state, action) => {
      const {id} = action.payload;
      const currentRequest = state.find(request => request.id === id);
      if (currentRequest) {
        return state.filter(user => user.id !== id)
      }
    }
  },
})

export const { createRequest, editRequest, deleteRequest } = requestSlice.actions

export default requestSlice.reducer