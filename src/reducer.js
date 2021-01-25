

const initialState = {
    count:50
}

export const reducer = (state=initialState,action)=>{
    const tempState = {...state}
    if(action.type==='INCREMENT'){
        tempState.count++
    }
    if(action.type==='DECREMENT'){
        tempState.count--
    }
    return tempState;
}

