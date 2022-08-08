import axios from "../axios";
import qs from 'qs';

class ProductService {
    createProduct = async (data) => {
        console.log("form data: " + qs.stringify(data))
        const promise = new Promise((resolve, reject) => {
            axios.post('products', qs.stringify(data))
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    console.log('error: ' + er);
                    return resolve(er)
                })
        })
        return await promise
    }

    fetchProducts = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('products')
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    return resolve(er)
                })
        })
        return await promise
    }
    fetchCategories = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('products/categories')
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    return resolve(er)
                })
        })
        return await promise
    }

    updateProduct  = async (data) => {
        console.log("form data: " + JSON.stringify(data))
        const config = {headers: {'Content-Type': 'application/json'}}
        const promise = new Promise((resolve, reject) => {

            axios.put('products', JSON.stringify(data),config)
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    console.log('error: ' + er);
                    return resolve(er)
                })
        })
        return await promise
    }


    deleteProduct  = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete('products', {params: params})
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };

    findProduct  = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('products/'+data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    return resolve(er)
                })
        })
        return await promise
    }
}
export default new ProductService();