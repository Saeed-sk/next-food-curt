import React from 'react';

function Payment(props) {
    return (
        <form action="" className={"mx-14 flex flex-col gap-3 font-bold text-gray-800"}>

            <div className={"flex gap-2 justify-start items-center"}>
                <input className={"h-4 w-5 accent-amber-700"} type="radio" id="bank_radio" name="payment"
                       value="bank_radio"/>
                <label htmlFor="bank_radio">پرداخت از درگاه اینترنتی</label>
            </div>

            <div className={"flex gap-2 justify-start items-center"}>
                <input className={"h-4 w-5 accent-amber-700"} type="radio" id="wallet_radio" name="payment"
                       value="wallet_radio"/>
                <label htmlFor="wallet_radio">پرداخت از کیف پول </label>
            </div>

            <input className={"btn-success w-full"} type={"submit"} value={"پرداخت"}/>
        </form>
    );
}

export default Payment;