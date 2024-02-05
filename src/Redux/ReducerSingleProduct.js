
const initialState={
    singleData:[]
}

const ReducerSingleProduct=(state=initialState, action)=>{
   console.log(action)
    switch(action.type){
        case 'SINGLEDATA':{
            return {...state, singleData: state.singleData, ...action.payload }
        }
        default:
      return state;
    }

}
export default ReducerSingleProduct
