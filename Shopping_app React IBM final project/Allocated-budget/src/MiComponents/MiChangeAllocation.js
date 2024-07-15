import { useContext } from "react";
import { IMaskInput } from "react-imask";
import Context from "../context/MiContext";
import { ACTIONS } from "../Reducer/Boilerplate"

const MiChangeAllocation = () => {
    const { setDepartment, setAllocation, department, 
        allocation, dispatch, cost, setCost, newBudget, remaining, currency } = useContext(Context)

    const submitCostButton = (e) => {
        if (isFinite(e)) {
            return setCost(parseInt(e))
        } else { return 0 };
    }

    const submitValueButton = (e) => {
        if ( isNaN(cost) ) {
            return setCost(0)
        }
        if (department === undefined || allocation === undefined || cost === 0 ) {
            alert("You need to choose a department, allocation and an amount")
            return
        }
        if (allocation === "Add") {
            dispatch({
                type: ACTIONS.ADD_EXPENSE,
                payload: { department, newBudget, cost, remaining }
            })
        }
        if (allocation === "Reduce") {
            dispatch({
                type: ACTIONS.REDUCE_EXPENSE,
                payload: { department, newBudget, cost }
            })
        }
    }

    return (
        <>
            <div className="divChangeDepartment">
                <label htmlFor="selectChangeDepartment">Department</label>
                <select
                    name="selectChangeDepartment"
                    id="selectChangeDepartment"
                    className="selectChangeDepartment"
                    onChange={(e) => setDepartment(e.target.value)}>
                    <option defaultValue="Choose Department...">Choose Department...</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Finance">Finance</option>
                    <option value="Sales">Sales</option>
                    <option value="Human Resource">Human Resource</option>
                    <option value="IT">IT</option>
                    <option value="HR">HR</option>
                </select>
            </div>
            <div className="divChangeAllocation">
                <label htmlFor="selectChangeAllocation">Allocation</label>
                <select
                    className="selectChangeAllocation"
                    onChange={(e) => setAllocation(e.target.value)}>
                    <option defaultValue>Choose Allocation...</option>
                    <option value="Add">Add</option>
                    <option value="Reduce">Reduce</option>
                </select>
            </div>
            <div className="divInputChangeAllocation">
            <span>{currency.icon}</span>
                <IMaskInput
                    className="inputChangeAllocation"
                    type="number"
                    mask={Number}
                    defaultValue={cost}
                    min={0}
                    max={20000}
                    maxLength={5}
                    placeholder="Enter a number"
                    onAccept={submitCostButton}
                >
                </IMaskInput>
                <span className='alertCostInput2'>You can to write only numbers</span>
            </div>
            <div className="divButtonSave">
                <button className="buttonSave" onClick={submitValueButton}>Save</button>
            </div>
        </>
    );
}
export default MiChangeAllocation;