export const initialState= {
    // username:"arun",
    isAuthenticated: false,
    cartItem:[]
}

 export const stateReducer=(state,action)=>{
    // console.log("state",state);
    switch (action?.type){
        case 'update':return{
            ...state,
            ...action.payload
        }
        default :return{ state}
    }

}