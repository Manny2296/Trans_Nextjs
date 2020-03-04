const initialState = {
    isloged: null
}

function doLogin(state = initialState,action){
    let nextstate;
    switch(action.type){
        case 'DO_LOGIN': 
        if(action.value != null){
        console.log("ENtre a disparar" + action.value)
        nextstate={
            ...state,
            isloged: action.value
        }
    }
        return nextstate || state;
  
    default:
       return state;
        
    }
}
export default doLogin