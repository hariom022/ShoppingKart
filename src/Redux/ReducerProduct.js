const initialState = {
  productData: [],
};

const ReducerProduct = (state = initialState, action) => {
  switch (action.type) {
    case "ALLPRODUCT": {
      return { ...state, productData: [state.productData, ...action.payload] };
    }
    
    default:
      return state;
  }
};
export default ReducerProduct;
