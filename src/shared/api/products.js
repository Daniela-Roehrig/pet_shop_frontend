/* import backendInstance from "./backendInstance";
import requestDecorator from "./requestDecorator";


export const getAllProducts = requestDecorator(async (limit = 25) => {
    const { data } = await backendInstance.get('/products/all', {
        params: {
            limit: limit  
        }
    });
    return data;
});


export const getSingleProduct = requestDecorator(async (productId) => {
    const { data } = await backendInstance.get(`/products/${productId}`);
    return data;
}); */


import backendInstance from "./backendInstance";
import requestDecorator from "./requestDecorator";

export const getAllProducts = requestDecorator(async (limit = 25) => {
    const { data } = await backendInstance.get('/products/all', {
        params: {
            limit: limit  // Hier den limit-Parameter übergeben
        }
    });
    return data;

});

export const getSingleProduct = requestDecorator(async (productId) => {
    const { data } = await backendInstance.get(`/products/${productId}`);
    return data;
}); 