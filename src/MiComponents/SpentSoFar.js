import { useContext } from "react";
import Context from "../context/MiContext";

const SpentSoFar = () => {

    const { spentSoFar, currency } = useContext(Context)
    return (
        <>
            <div className="divMiSpentSoFar">
                <span className="spanSpentSoFar">Spent so far: {spentSoFar} {currency.icon}</span>
            </div>
        </>
    );
}

export default SpentSoFar;
