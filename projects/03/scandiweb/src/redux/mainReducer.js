const GET_PRODUCTS = "ABOUT/SET_SEARCHED_PRODUCTS";


let initialState = {
    products: [],
}


const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS: {
            return {
                ...state, products: [...action.products]
            }
        }
        default: return state
    }
}

export const getProductsAC = (products) => {
    return {
        type: GET_PRODUCTS,
        products
    }
}
export default mainReducer;