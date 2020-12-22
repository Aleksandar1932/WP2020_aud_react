import axios from '../custom-axios/axios';

const EShopService = {
    fetchManufacturers: () => {
        return axios.get("/manufacturers");
    }
}

export default EShopService;