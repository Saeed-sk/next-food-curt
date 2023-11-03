import {createContext, useEffect, useReducer, useState} from "react";
import dummy from "../dummy-data/productsData.json"

const ProductContext = createContext({
    products: null,
    factors: null,
    setData: () => {
    },
    counter: () => {
    },
    filterKitchen: () => {

    },
    filterKind: () => {

    },
});

export function ProductContextProvider(props) {
    const [products, setProducts] = useState(dummy.product);
    function setProductsData(data) {
        setProducts(data);
        return products;
    }

    function changeCount(id, action) {
        if (action === "+") {
            setProducts(products.map(product => {
                if (product.id === id) {
                    return {...product, logic: true, count: product.count + 1};
                } else {
                    return product;
                }
            }))
        } else if (action === "-") {
            setProducts(products.map(product => {
                if (product.id === id && product.count > 1) {
                    return {...product, count: product.count - 1};
                } else if (product === product && product.count === 1) {
                    return {...product, logic: false, count: product.count - 1};
                } else {
                    return product;
                }
            }))
        } else {
            console.log('context error')
        }
    }

  function filterKitchen(kitchenName) {
        setProducts([])
        setProducts(products.map(product => {
            if (product.kitchen === kitchenName) {
                return {...product, filter: true}
            } else {
                return {...product, filter: false}
            }
        }))
    }

    function filterKind(kind) {
        setProducts(products.map(product => {
            if (product.kind === kind) {
                return {...product, filter: true}
            } else {
                return {...product, filter: false}
            }
        }))
    }

    const context = {
        products: products,
        setData: setProductsData,
        counter: changeCount,
        filterKitchen: filterKitchen,
        filterKind: filterKind
    };

    return (
        <ProductContext.Provider value={context}>
            {props.children}
        </ProductContext.Provider>
    );
}

export default ProductContext;
