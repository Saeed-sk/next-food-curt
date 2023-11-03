import {SwiperSlide} from "swiper/react";
import Image from "next/image";

export default function SelectProduct({kind}) {
    return (
        <div className='flex flex-col items-center relative gap-4 pt-2'>
            <Image src={kind.image} alt={"kind's for product image"} height={1000} width={1000}
                   className='h-[90px] object-fill'/>
            <h1 className='text-black font-extrabold text-xl '>{kind.kind}</h1>
        </div>
    );
}