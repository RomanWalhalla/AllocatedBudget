import { createContext } from "react"

const Context = createContext();
export const budgetContext = createContext("0");
export const currentContext = createContext("£");

export default Context;
