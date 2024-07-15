import { useContext } from "react";
import Context from "../context/MiContext";

const SelectedOptionDisplay = () => {
    const { currency } = useContext(Context)

    return (
        <div>
            {currency ? currency.icon : "None"}
        </div>
    );
}

export default SelectedOptionDisplay;