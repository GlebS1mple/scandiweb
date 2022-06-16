//const GET_PRODUCTS = "ABOUT/SET_SEARCHED_PRODUCTS";
const SET_CURRENT_CATEGORY = "MAIN/SET_CURRENT_CATEGORY";
const SET_CURRENT_CURRENCY = "MAIN/SET_CURRENT_CURRENCY";


let initialState = {
    currentCategory: "all",
    currentCurrency: "USD"
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
        case SET_CURRENT_CURRENCY: {
            return {
                ...state, currentCurrency: action.currency
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
export const setCurrentCurrencyAC = (currency) => {
    return {
        type: SET_CURRENT_CURRENCY,
        currency
    }
}
export default mainReducer;