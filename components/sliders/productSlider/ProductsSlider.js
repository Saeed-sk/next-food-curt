import {useContext} from "react";
import ProductContext from "@/store/prodctStore";
import Image from "next/image";
import offTicket from "@/public/assets/product-slider-icons/offTicket.svg";
import addBtn from "@/public/assets/product-slider-icons/addBtn.svg";

function ProductsSlider({product}) {
    const context = useContext(ProductContext)
    const counter = () => {
        context.counter(product.id, "+")
    }

    return (
        <div className={"h-20 w-10 relative mt-2"} >
            <div className="absolute right-6 -top-8 z-10 mx-auto h-[150px] w-[150px] ">
                <Image
                    src={product.image}
                    className='object-contain h-[80px] w-[80px]'
                    width={100}
                    height={100}
                    alt={'food Image'}
                />
            </div>
            <div
                className='w-[128px] h-[160px] border-[2px] border-[#E3DC48] rounded-[14px] absolute top-6 flex flex-col items-center justify-between pt-7 pb-1'>
                <div className='w-[30px] self-start absolute top-[-1px] right-1 '>
                    {!product.discount ? (
                        ""
                    ) : (
                        <Image src={offTicket} alt='off Tickeck vector' width={100} height={100}/>
                    )}
                    <div
                        className='text-white font-extrabold top-[15px] right-1 absolute -rotate-[30deg] text-[10px] '>
                        {product.discount}%
                    </div>
                </div>
                <h1 className='order-1 font-extrabold text-[15px]'>
                    {product.title}
                </h1>
                <h2 className='order-2 font-extrabold text-[11px] text-[#808080]'>
                    {product.kitchen}
                </h2>
                <h3 className='order-3 font-bold text-[10px] text-[#D9D9D9]'>
                    {product.information}
                </h3>
                <div className='order-4 flex justify-between w-[110px] items-end'>
                    <h4 className='order-1 font-bold text-[12px]'>
                        {product.price}تومان
                    </h4>
                    <button
                        className='btn-foodplus'
                        onClick={counter}
                    >
                        <Image src={addBtn} alt={"plus btn"}/>
                    </button>
                </div>
            </div>
        </div>
    )
}


export default ProductsSlider;