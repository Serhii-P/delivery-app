import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  // {id: 1, from: 'Kyiv', to: 'Odessa', type: 'other', 
  //   description: 'some text', date: new Date(), departureDate: '07.07.2022'  },
  //   {id: 2, from: 'Lviv', to: 'Lutsk', type: 'other', 
  //   description: 'some text2', date: new Date(), departureDate: '08.07.2022'  },
];

export const requestSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {
    createRequest: (state, action) => {
     // console.log(action.payload)
       state.push(action.payload)
    },
    editRequest: (state, action) => {
      console.log(action.payload)
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