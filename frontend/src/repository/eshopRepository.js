import axios from '../custom-axios/axios';

const EShopService = {
    fetchManufacturers: () => {
        return axios.get("/manufacturers");
    },

    fetchCategories: () => {
        return axios.get("/categories");
    },

    fetchProducts: () => {
        return axios.get("/products");
    }


}

export default EShopService;