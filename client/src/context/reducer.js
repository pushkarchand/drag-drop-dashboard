import {IS_AUTHENTICATED,USERNAME} from './action';
export const initialState={
    isAuthenticated:localStorage.getItem('accessToken')?true:false,
    userName:""
}

export const stateReducer=(state=initialState,action)=>{
    switch(action.type){
        case IS_AUTHENTICATED:{
            return {
                ...state,
                isAuthenticated:action.payload
            }
        }
        case USERNAME:{
            return {
                ...state,
                userName:action.payload
            }
        }
        default: return state
    }
}