import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Autoplay, Pagination, Navigation} from "swiper/modules";

export default function ImageSliderMain() {
    const Images = ['https://img.freepik.com/free-photo/real-food-pyramid-assortment-top-view_23-2150238927.jpg?size=626&ext=jpg&ga=GA1.1.2022067185.1694381522&semt=sph',
        'https://img.freepik.com/free-photo/pieces-chicken-fillet-with-mushrooms-stewed-tomato-sauce-with-boiled-broccoli-rice-proper-nutrition-healthy-lifestyle-dietetic-menu-top-view_2829-20015.jpg?size=626&ext=jpg&ga=GA1.1.2022067185.1694381522&semt=sph',
        'https://img.freepik.com/free-photo/full-table-italian-meals-ai-generated-image_511042-1705.jpg?size=626&ext=jpg&ga=GA1.1.2022067185.1694381522&semt=sph',
        'https://img.freepik.com/free-photo/tasty-pizza-with-tomatoes-lemon-garlic-mushrooms-top-view-dark-wooden-background_176474-4647.jpg?size=626&ext=jpg&ga=GA1.1.2022067185.1694381522&semt=sph']
    return (
        <Swiper
            spaceBetween={10}
            centeredSlides={true}
            slidesPerView={"auto"}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className='h-48 px-20'
        >
            {Images.map((elem, index) => (
                <SwiperSlide className={'h-full w-full'} key={index}>
                    <Image src={elem} width={1000} height={1000} alt='عکس غذا ها' className='w-full bg-center h-full object-cover'/>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}