const GET_PRODUCTS = "ABOUT/SET_SEARCHED_PRODUCTS";
const SET_CURRENT_CATEGORY = "ABOUT/SET_SEARCHED_PRODUCTS";


let initialState = {
    currentCategory: "all",
    //products: [],
}


const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        /*case GET_PRODUCTS: {
            return {
                ...state, products: [...action.products]
            }
        }*/
        case SET_CURRENT_CATEGORY: {
            return {
                ...state, currentCategory: action.category
            }
        }
        default: return state
    }
}

/*export const getProductsAC = (products) => {
    return {
        type: GET_PRODUCTS,
        products
    }
}*/
export const setCurrentCategoryAC = (category) => {
    return {
        type: SET_CURRENT_CATEGORY,
        category
    }
}
export default mainReducer;