import axios from 'axios';

const BACKEND_API_BASE_URL = "http://localhost:8888/api/";
const PRODUIT_API_BASE_URL = "http://localhost:8888/api/produit";
const ORDER_API_BASE_URL = "http://localhost:8888/api/order";
const NOTIFICATION_API_BASE_URL = "http://localhost:8888/api/notification";
const INVENTORY_API_BASE_URL = "http://localhost:8888/api/inventory";

class ProduitService {

    getProduits(){
        return axios.get(PRODUIT_API_BASE_URL);
    }

    createProduit(produit){
        return axios.post(PRODUIT_API_BASE_URL, produit);
    }

    getProduitId(produitId){
        return axios.get(PRODUIT_API_BASE_URL + '/' + produitId);
    }

    updateProduit(produit, produitId){
        return axios.put(PRODUIT_API_BASE_URL + '/' + produitId, produit);
    }

    deleteProduit(produitId){
        return axios.delete(PRODUIT_API_BASE_URL + '/' + produitId);
    }
}

export default new ProduitService()
