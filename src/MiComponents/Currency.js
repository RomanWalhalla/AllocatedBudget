import { useContext } from "react";
import Select from "react-select"
import Context from "../context/MiContext";

import { PiCurrencyGbpBold } from "react-icons/pi"
import { PiCurrencyDollarBold } from "react-icons/pi"
import { PiCurrencyEurBold } from "react-icons/pi"
import { PiCurrencyInrBold } from "react-icons/pi"

const Currency = () => {
    const { currency, setCurrency } = useContext(Context)
    const options = [
        { value: "EUR", label: <><PiCurrencyEurBold /> EUR</>, icon: <><PiCurrencyEurBold /> </> },
        { value: "GBP", label: <><PiCurrencyGbpBold /> GBP</>, icon: <><PiCurrencyGbpBold /> </> },
        { value: "USD", label: <><PiCurrencyDollarBold /> USD</>, icon: <><PiCurrencyDollarBold /> </> },
        { value: "INR", label: <><PiCurrencyInrBold /> INR</>, icon: <><PiCurrencyInrBold /> </> },
    ]

    const ChangeCurrency = (option) => {
        setCurrency(option)
    }

    return (
        <>
            <div className="divCurrency">
                <Select
                    className="selectCurrency"
                    value={currency}
                    onChange={ChangeCurrency}
                    options={options}
                    placeholder="Select currency"
                    formatOptionLabel={(option) => (
                        currency && currency.value === option.value ? <><span>Currency: </span>{option.label}  </>
                            : option.label)}
                />
            </div>
        </>
    );
}

export default Currency;




