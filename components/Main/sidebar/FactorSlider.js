import React,{useContext} from 'react';
import Image from "next/image";
import add from "@/public/assets/sidebar/factor/add.svg";
import minus from "@/public/assets/sidebar/factor/minus.svg";
import trash from "@/public/assets/sidebar/factor/trash.svg";
import ProductContext from "@/store/prodctStore";

function FactorSlider({product}) {
    const context = useContext(ProductContext);

    function addFn()                                                                                                                                                {
        context.counter(product.id,"+")
    }
    function minusFn(){
        context.counter(product.id,"-")
    }
    return (
        <div className={"flex justify-evenly items-center"}>
            <Image className={'object-cover rounded-xl h-16 w-16'} src={product.image} alt={"food image"} width={60} height={60}/>
            <div>{product.title}</div>
            <button onClick={minusFn}><Image src={product.count === 1 ? trash : minus} alt={"+"}/></button>
            <div className={"text-xl font-bold"}>{product.count}</div>
            <button onClick={addFn}><Image src={add} alt={"+"}/></button>
            <div className={"flex text-lg font-extrabold items-center"}>
                <div>{product.price}</div>
                <div className={"text-sm font-bold"}>تومان</div>
            </div>
        </div>
    );
}

export default FactorSlider;