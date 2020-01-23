import {FETCHING_GIF_START, FETCHING_GIF_SUCCESS, FETCHING_GIF_FAILURE} from '../actions/index.js'

const initialState = {
    isLoading: false,
    gif: null,
    error: ""
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case FETCHING_GIF_START: 
        console.log("from gif start");
            return {
                ...state,
                isLoading: true
            }
        case FETCHING_GIF_SUCCESS:
            console.log("payload from the reducer", action.payload);
            return {
                ...state,
                isLoading: false,
                gif: action.payload
            }
        case FETCHING_GIF_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            console.log("from default")
            return state;
    }
}

// import {
//     FETCHING_ACTIVITY_START,
//     FETCHING_ACTIVITY_SUCCESS,
//     FETCHING_ACTIVITY_FAILURE
//   } from '../actions';
  
//   const initialState = {
//     isLoading: false,
//     activity: null,
//     error: ''
//   };
  
//   export const reducer = (state = initialState, action) => {
//     switch (action.type) {
//       case FETCHING_ACTIVITY_START:
//         return {
//           ...state,
//           isLoading: true
//         };
//       case FETCHING_ACTIVITY_SUCCESS:
//         return {
//           ...state,
//           isLoading: false,
//           activity: action.payload
//         };
//       default:
//         return state;
//     }
//   };