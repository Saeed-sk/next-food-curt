import {EffectCoverflow, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import SelectProduct from "@/components/sliders/centerSelectSlider/SelectProduct";
import "swiper/css";
import "swiper/css/navigation";
import {useContext, useState} from "react";
import ProductContext from "@/store/prodctStore";

export default function SelectProductMain({products}) {
    // setUniqueKinds([...products, ...new Map(products.map(item => [item['kind'], item])).values()])
    const context = useContext(ProductContext);
    const [uniqueKinds, setUniqueKinds] = useState([]);

    if (uniqueKinds.length < 1) {
        setUniqueKinds([...new Map(products.map(item => [item['kind'], item])).values()])
    }
    if (uniqueKinds.length < 40) {
        setUniqueKinds([...uniqueKinds, ...new Map(products.map(item => [item['kind'], item])).values()])
    }
    return (
        <Swiper
            wrapperClass="ul"
            effect={"coverflow"}
            coverflowEffect={{
                depth: 70,
                modifier: 1,
                rotate: 0,
                scale: 0.98,
                stretch: -1,
                slideShadows: false,
            }}
            grabCursor={true}
            onActiveIndexChange={(swiper) =>
                context.filterKind(uniqueKinds[swiper.realIndex].kind)
            }
            spaceBetween={55}
            slidesPerView={5}
            slideToClickedSlide={true}
            centeredSlides={true}
            loop={true}
            speed={400}
            touchRatio={0.3}
            initialSlide={6}
            modules={[EffectCoverflow, Pagination]}
            loopAddBlankSlides={true}
            className={"slider-center md:px-64 md:h-[211px]"}
        >
            {uniqueKinds.map((kind, index) => (
                <SwiperSlide className='border-[#FFA500] border-[2.2px]' key={index}>
                    <SelectProduct kind={kind} key={index}/>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}