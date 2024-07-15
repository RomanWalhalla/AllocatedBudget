import { useContext, useEffect } from "react";
import Context from "../context/MiContext";

const Remaining = () => {
    const { remaining, newBudget, spentSoFar, setRemaining, currency } = useContext(Context);

    useEffect(() => {
        return setRemaining(newBudget - spentSoFar)
    }, [newBudget, spentSoFar, setRemaining]);

    return (
        <>
            <div className="divMiRemaining">
                <span className="spanRemaining">Remaining: {remaining} {currency.icon} </span>
            </div>
        </>
    );
}

export default Remaining;

