import { ADD_EXPENSE, REDUCE_EXPENSE } from "./Boilerplate"

// const Increment = (payload) => {
//     return {
//         type: INCREMENT,
//         payload,
//     }
// }
// const Decrement = (payload) => {
//     return {
//         type: DECREMENT,
//         payload,
//     }
// }

export const Increment = (payload) => ({
        type: ADD_EXPENSE,
        payload,
    })
export const Decrement = (payload) => ({
        type: REDUCE_EXPENSE,
        payload,
    })