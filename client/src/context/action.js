export const IS_AUTHENTICATED="IS_AUTHENTICATED";
export const USERNAME="USERNAME"


export const setIsAuthenticated=(payload)=>{
        return {
            type:IS_AUTHENTICATED,
            payload
        }
}

export const setUserName=(payload)=>{
    return {
        type:USERNAME,
        payload
    }
}