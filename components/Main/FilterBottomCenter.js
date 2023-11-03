import Image from "next/image";
import filterSvg from '@/public/assets/mainElement/FilterCenter.svg'

export default function FilterBottomCenter() {
    return(
        <div className={"flex flex-row-reverse cursor-pointer text-black"}>
            <Image src={filterSvg} alt={'filter Items icons'} fill />
        </div>
    );
}