import {Fragment, useContext, useState} from "react";
import ProductContext from "@/store/prodctStore";
import ProductsSliderMain from "@/components/sliders/ProductsSliderMain";
import SelectProductMain from "@/components/sliders/SelectProductMain";
import ImageSliderMain from "@/components/sliders/ImageSliderMain";


export default function CenterElements() {
    const context = useContext(ProductContext)
    const [products, setProducts] = useState(context.products)
    return (
        <div className={""}>
            <ImageSliderMain/>
            <SelectProductMain products={products} />
            <ProductsSliderMain products={products}/>
        </div>
    );
}

