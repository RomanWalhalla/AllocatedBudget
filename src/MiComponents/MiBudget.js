import { useContext} from "react";
import Context from "../context/MiContext"
import { IMaskInput } from "react-imask";


const MiBudget = () => {
    const { newBudget, setNewBudget, spentSoFar, currency, remaining} = useContext(Context)

    const SubmitBudgetButton = (e) => {
        const { value }  = e.target
        // (isFinite(parseInt(e)) && (e <= 20000)) ? setNewBudget(e) : setNewBudget(newBudget)
        if ((value < spentSoFar) || remaining < 0) {
            console.log("if")
            alert("You can't reduce budget value lower than the spending " + (spentSoFar + " " + currency.value)
                + " Return " + (spentSoFar + " " + currency.value))

            return setNewBudget(spentSoFar)
        }
        else if (/^\d+$/.test(value)) {
            return setNewBudget(value)
        }
        else {
            return setNewBudget(value)
        }
    }
    const SubmitBudgetButton1 = (e) => {
        if ((e < spentSoFar) || remaining < 0) {

            return setNewBudget(spentSoFar)
        }
        else {
            return setNewBudget(e)
        }
    }

    return (
        <>
            <div className="divInputMiBudget">

                <IMaskInput
                    className="inputMiBudget"
                    type="number"
                    id="MiBudget"
                    mask={Number}
                    value={newBudget.toString()}
                    min={0}
                    max={20000}
                    step={1}
                    onChange={SubmitBudgetButton}
                    onAccept={SubmitBudgetButton1}
                >
                </IMaskInput>
                <span className="spanMiBudget">MiBudget: {newBudget} {currency.icon} </span>
                <span className='alertCostInput1'>You can to write only numbers</span>
            </div >
        </>
    );
}

export default MiBudget;