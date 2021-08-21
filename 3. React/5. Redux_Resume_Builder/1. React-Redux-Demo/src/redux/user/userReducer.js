import { FETCH_USERS_FAILURE,
     FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } 
     from "./userTypes";
const initialState = {
    loading:false,
    users:[],
    error:''
}
const userReducer = 
(state=initialState,action)=>{
    console.log(action.payload)
    switch(action.type)
    {
        case FETCH_USERS_REQUEST:
            console.log('req called');
            return {
                ...state,
                loading:true
            }
        case FETCH_USERS_SUCCESS:
            return {
                users:action.payload,
                loading:false,
                error:''
            }
        case FETCH_USERS_FAILURE:
            return{
                users:[],
                loading:false,
                error:action.payload
            }
        default: return state
    }
}
export default userReducer