import {Swiper, SwiperSlide} from "swiper/react";
import ProductsSlider from "@/components/sliders/productSlider/ProductsSlider";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper/modules";
import {useContext, useEffect, useState} from "react";
import ProductContext from "@/store/prodctStore";

export default function ProductsSliderMain({products}) {
    const context = useContext(ProductContext)
    const [filterProducts, setFilterProducts] = useState([]);
    useEffect(() => {
        setFilterProducts(context.products.filter((product) => product.filter === true))
    }, [context.products]);

    return (
        <>

            <Swiper spaceBetween={10}
                    wrapperClass={`${filterProducts.length < 3 && "justify-center"}`}
                    slidesPerView={6}
                    slidesPerGroup={4}
                    navigation={{
                        nextEl: ".next_el",
                        prevEl: ".prev_el"
                    }}
                    modules={[Navigation]}
                    className={`slider-bottom h-[300px] slide-in-fwd-bottom relative mx-16 `}>
                <div
                    className={"next_el bg-bg_prev_product bg-no-repeat bg-cover cursor-pointer absolute left-0 w-10 h-10 bottom-36 z-50"}></div>
                {filterProducts.length >= 1 && filterProducts.map((product, index) => (
                    <SwiperSlide key={index} className={"py-10"}>
                        <ProductsSlider product={product}/>
                    </SwiperSlide>
                ))}
                {filterProducts.length < 1 && <div>هیچ محصولی از این نوع موجود نمی باشد</div>}
            </Swiper>
            <div
                className={"prev_el cursor-pointer bg-bg_next_product bg-no-repeat bg-cover relative w-10 h-10 bottom-48 z-50"}></div>
        </>
    );
}