import axios from 'axios';

export const FETCHING_GIF_START = 'FETCHING_GIF_START';
export const FETCHING_GIF_SUCCESS = 'FETCHING_GIF_SUCCESS';
export const FETCHING_GIF_FAILURE = 'FETCHING_GIF_FAILURE';

export const getGif = () => dispatch => {
    dispatch({type: FETCHING_GIF_START});
    axios.get('https://api.giphy.com/v1/gifs/random?api_key=UpTysysrfiWspi1cHMp8lN7Z5haZt8lj&tag=&rating=PG')
        .then(res=>{
            console.log("from the action", res.data.data);
            dispatch({type: FETCHING_GIF_SUCCESS, payload: res.data.data})
        })
        .catch(err=>{
            dispatch({type: FETCHING_GIF_FAILURE, payload: err})
        })
}




// export const FETCHING_ACTIVITY_START = 'FETCHING_ACTIVITY_START';
// export const FETCHING_ACTIVITY_SUCCESS = 'FETCHING_ACTIVITY_SUCCESS';
// export const FETCHING_ACTIVITY_FAILURE = 'FETCHING_ACTIVITY_FAILURE';
// export const fetchActivity = () => dispatch => {
//   dispatch({ type: FETCHING_ACTIVITY_START });
//   axios
//     .get('https://www.boredapi.com/api/activity')
//     .then(res => {
//       //res.data ==> activity
//       dispatch({ type: FETCHING_ACTIVITY_SUCCESS, payload: res.data });
//     })
//     .catch(err => {
//       dispatch({ type: FETCHING_ACTIVITY_FAILURE, payload: err.response });
//     });
// };
