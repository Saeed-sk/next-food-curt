import React, {useContext, useState} from 'react';
import ProductContext from "@/store/prodctStore";
import {Swiper, SwiperSlide} from "swiper/react";
import {Scrollbar} from "swiper/modules";
import FactorSlider from "@/components/Main/sidebar/FactorSlider";
import notAdded from "@/public/assets/sidebar/notAdded.svg";
import Image from "next/image";
import SumFactor from "@/components/Main/sidebar/SumFactor";
import Payment from "@/components/Main/sidebar/Payment";

function Factor() {
    const context = useContext(ProductContext)
    const products = context.products;
    const logic = products.filter(product => product.logic).map(product => product.logic)
    return (
        <React.Fragment>
            {
                logic.length >= 1 &&
                <>
                    <h1 className={"text-2xl font-bold text-red-900 my-5"}>لیست سفارشات</h1>
                    <Swiper
                        scrollbar={{
                            hide: false,
                            draggable: true,
                        }}
                        spaceBetween={40}
                        slidesPerView={4}
                        grabCursor={true}
                        slidesOffsetAfter={100}
                        slidesOffsetBefore={0}
                        direction={"vertical"}
                        modules={[Scrollbar]}
                        className={'w-full py-0 h-52'}>
                        {products.filter(product => product.logic).map((product, index) => (
                            <SwiperSlide className={'h-30'} key={index}>
                                <FactorSlider product={product}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className={"relative transition-all"} style={logic.length <=2 ? {bottom: 50} : {top: 10}}>
                        <SumFactor/>
                    </div>
                    <div className={"relative transition-all"} style={logic.length <=2 ? {bottom: 10} : {top: 50}}>
                        <Payment/>
                    </div>
                </>
            }
            {
                logic.length === 0 &&
                <div className={"flex flex-col items-center text-center text-lg font-bold text-gray-500"}>
                    <Image src={notAdded} alt={"svg for not added product"}/>
                    <div className={"flex flex-col"}>
                        <h1>دوست عزیز !</h1>
                        <h1>لیست سفارش شما خالی است</h1>
                    </div>
                </div>
            }
        </React.Fragment>
    )
        ;
}

export default Factor;