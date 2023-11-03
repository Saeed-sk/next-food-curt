import React, {useContext} from "react";
import ProductContext from "@/store/prodctStore";
import Kitchens from "@/components/navbar/Kitchens";

function HoverElem(props) {
    const context = useContext(ProductContext);
    const products = context.products
    const kitchen = products.map((elem) => elem.kitchen);
    const unique = [...new Set(kitchen)];
    let i = 3;
    function filterWithKitchenName(kitchenName) {
        context.filterKitchen(kitchenName)
    }

    return (
        <React.Fragment>
            {unique.map((product, index) => (
                <Kitchens inProp={props.inProp} product={product} key={index} score={index} filterWithKitchenName={filterWithKitchenName} />
            ))}
        </React.Fragment>
    );
}

export default HoverElem