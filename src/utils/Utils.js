export const decimalToCurrency = (amount) => {
    return parseFloat(amount.toFixed(2))
}

export const potentialPayout = (odd, amount) => {
    let totalAmount = odd * amount;
    return decimalToCurrency(totalAmount)
}

export const isLogin = () => {
    const authToken = localStorage.getItem("auth_token")
    if(authToken) {
        return true
    }
    return false
}

export const showMessage = (dispatch, messageType, message) => {
    dispatch({
        type: "SHOW_MESSAGE",
        payload: { messageType, message }
    })

    setTimeout(() => {
        HideMessage(dispatch)
    }, 3000)
}

const HideMessage = (dispatch) => {
    dispatch({
        type: "HIDE_MESSAGE"
    })
}
