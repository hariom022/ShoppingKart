
export const allProductData=()=>{
    return fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=> data)
}

export const singleProduct=(id)=>{
    return fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    .then(data=> data)
}