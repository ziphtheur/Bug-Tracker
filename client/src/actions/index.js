export const finalLogin = (login) => {
    console.log(login)
    return {
        type: 'SET_LOGIN',
        payload: login
    }
}