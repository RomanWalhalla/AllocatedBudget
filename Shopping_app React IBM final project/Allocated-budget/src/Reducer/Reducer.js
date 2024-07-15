import { ACTIONS } from "./Boilerplate"

export const AppReducer = (state, action) => {
    const totalExpenses = state.expenses.reduce((total, item) => {
        return (total + item.allocatedBudget)
    }, 0);

    switch (action.type) {

        case ACTIONS.UPDATE_EXPENSE:
            // version 1
            // console.log("action.payload.rowIndex", action.payload.rowIndex)
            // const newState = { ...state.expenses }
            // if (newState[action.payload.rowIndex]) {
            //     newState[action.payload.rowIndex].numb = action.payload.newValue;
            // }
            // return newState;
            // version 2
            if (action.payload.newBudget >= totalExpenses) {
                return {
                    ...state,
                    expenses: state.expenses.map(item => (item.id === action.payload.rowIndex)
                        ? { ...item, allocatedBudget: action.payload.newValue } : item
                    )
                }
            }
            else {
                alert("Cannot increase the allocation! Do you have only " + action.payload.remaining + " £ in budget")
                return {
                    ...state,
                    expenses: state.expenses.map(item => (item.id === action.payload.rowIndex)
                        ? { ...item, allocatedBudget: action.payload.oldValue } : item)
                }
            }

        case ACTIONS.ADD_EXPENSE:
            if (action.payload.newBudget > totalExpenses) {
                return {
                    ...state,
                    expenses: state.expenses.map(item => {
                        if (((item.allocatedBudget + action.payload.cost) < 0)
                            && (item.department === action.payload.department)) {
                            return { ...item, allocatedBudget: 0 }
                        }
                        else if ((item.department === action.payload.department) && (action.payload.cost > action.payload.remaining)) {
                            alert("Cannot increase the allocation! Do you have only " + action.payload.remaining + " £ in remaining");
                            return { ...item, allocatedBudget: item.allocatedBudget }
                        }
                        else if ((item.department === action.payload.department)
                            && (item.allocatedBudget + action.payload.cost)) {
                            return { ...item, allocatedBudget: item.allocatedBudget + action.payload.cost }
                        }
                        else { return item }
                    }
                    )
                }
            }
            else {
                alert("Cannot increase the allocation! Do you have only " + action.payload.remaining + " £ in budget");
                return { ...state }
            }

        case ACTIONS.ADD_EXPENSE_10:
            if (action.payload.newBudget > totalExpenses) {
                return {
                    ...state,
                    expenses: state.expenses.map(item => {
                        if (item.id === action.payload.rowIndex) {
                            return { ...item, allocatedBudget: item.allocatedBudget + 10 }
                        }
                        else {
                            return item
                        }
                    })
                }
            }
            else {
                alert("Cannot increase the allocation! Out of funds");
                return { ...state }
            }

        case ACTIONS.REDUCE_EXPENSE:
            return {
                ...state,
                expenses: state.expenses.map(item => {
                    if (((item.allocatedBudget - action.payload.cost) < 0)
                        && (item.department === action.payload.department)) {
                        return { ...item, allocatedBudget: 0 }
                    }
                    else if (item.department === action.payload.department) {
                        return { ...item, allocatedBudget: item.allocatedBudget - action.payload.cost }
                    }
                    else { return item }
                },
                ),
            }

        case ACTIONS.REDUCE_EXPENSE_10:
            return {
                ...state,
                expenses: state.expenses.map(item => {
                    if (((item.allocatedBudget - 10) < 0)
                        && (item.id === action.payload.rowIndex)) {
                        return { ...item, allocatedBudget: 0 }
                    }
                    else if (item.id === action.payload.rowIndex) {
                        return { ...item, allocatedBudget: item.allocatedBudget - 10 }
                    }
                    else { return item }
                },
                ),
            }

        case ACTIONS.DELETE_EXPENSE:
            return {
                ...state,
                expenses: state.expenses.map(item =>
                    item.id === action.payload.rowIndex ? { ...item, allocatedBudget: 0 } : item,
                )
            }

        default:
            return
    };
}