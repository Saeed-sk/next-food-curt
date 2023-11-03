import React, {useContext, useEffect, useState} from 'react';
import ProductContext from "@/store/prodctStore";
import Image from "next/image";
import dollarSign from "@/public/assets/sidebar/factor/dollarSign.svg";
import gift from "@/public/assets/sidebar/factor/gift.svg";
import coins from "@/public/assets/sidebar/factor/coins.svg";

function SumFactor(props) {
    const context = useContext(ProductContext)
    const [factor, setFactor] = useState({sum: 0, discount: 0, totalPrice: 0});
    const factorSum = context.products.map(product => {
        return (product.price * product.count)
    })
    const factorDiscounts = context.products.map(product => {
        if (product.discount) {
            return Math.floor((product.discount * product.price) / 100) * product.count;
        } else {
            return 0;
        }
    })

    useEffect(() => {
        let sums = 0;
        let discounts = 0;
        let totals = 0;
        for (const nums of factorSum) {
            sums += nums;
        }
        for (const nums of factorDiscounts) {
            discounts += nums;
        }
        totals = sums - discounts;
        setFactor({
            sum: sums,
            discount: discounts,
            totalPrice: totals
        })


    }, [context.products]);

    return (
        <React.Fragment>
            {/*{factor.sum > 0 && <div>*/}
            {/*    <div>{factor.sum}</div>*/}
            {/*    <div>{factor.discount}</div>*/}
            {/*    <div>{factor.totalPrice}</div>*/}
            {/*</div>}*/}
            <div className={"flex flex-col justify-around items-center gap-4 text-lg font-bold w-10/12 mx-auto rounded-xl py-4 factor-box-shadow relative z-50"}>
                <div className={"flex justify-between w-full px-10"}>
                    <div className={"flex flex-row-reverse gap-2"}><h1>جمع کل :</h1><Image height={30} width={30} src={coins} alt={'coins Sign'}/></div>
                    <div>
                        {factor.sum}تومان
                    </div>
                </div>
                <div className={"flex justify-between w-full px-10"}>
                    <div className={"flex flex-row-reverse gap-2"}><h1>تخفیف:</h1><Image height={30} width={30} src={gift} alt={'gift Sign'}/></div>
                    <div>
                        {factor.discount} تومان
                    </div>
                </div>
                <hr className={"w-full h-px my-1 bg-gray-900"} />
                <div className={"flex justify-between w-full px-10"}>
                    <div className={"flex items-center flex-row-reverse gap-2"}><h1>قابل پرداخت :</h1><Image height={17} width={17} src={dollarSign} alt={'dollarSign Sign'}/></div>
                    <div>
                        {factor.totalPrice}تومان
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default SumFactor;