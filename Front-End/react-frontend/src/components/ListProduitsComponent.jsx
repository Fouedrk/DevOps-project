import React, { Component } from 'react'
import {callApi} from "../helpers/axios_helper";
import {getUser, login, logout} from "../helpers/auth_helper";
import ProduitService from "../services/ProduitService";

class ListProduitsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                products: []
        }
        this.addProduit = this.addProduit.bind(this);
        this.editProduit = this.editProduit.bind(this);
        this.deleteProduit = this.deleteProduit.bind(this);
    }


    getUser = () => {
        getUser().then(user => {
            if (user) {
                console.log('User has been successfully loaded from store.');
                console.log(user.profile.name)
            } else {
                console.info('You are not logged in.');
            }

            if (!this.shouldCancel) {
                this.setState({ user });
                console.log(user)
            }
        });
    };

    deleteProduit(id){
        ProduitService.deleteProduit(id).then( res => {
            this.setState({produits: this.state.produits.filter(produit => produit.id !== id)});
        });
    }
    viewProduit(id){
        this.props.history.push(`/view-produit/${id}`);
    }
    editProduit(id){
        this.props.history.push(`/add-produit/${id}`);
    }

    componentDidMount(){
        callApi().then((response) => {
            if(response === undefined) {return}
            this.setState({ products: response.data})
        });
    }

    addProduit(){
        this.props.history.push('/add-produit/_add');
    }

    render() {
        return (
            <div className="text-center mt-05">
                 <h2 className="text-center">Liste des produits</h2>
                 <div className = "row">
                     <div className="col-lg-5">
                    <button className="btn btn-primary" onClick={this.addProduit}> Ajouter</button>
                 </div>

                 </div>

                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> ID</th>
                                    <th> Libellé</th>
                                    <th> Description</th>
                                    <th> Prix (TND)</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.products.map(
                                        product =>
                                        <tr key = {product.id}>
                                             <td> { product.id} </td>
                                             <td> {product.name}</td>
                                             <td> {product.description}</td>
                                             <td> {product.price}</td>
                                             <td>
                                                 <button onClick={ () => this.editProduit(product.id)} className="btn btn-info">Mettre à jour</button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProduit(product.id)} className="btn btn-danger">Supprimer </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewProduit(product.id)} className="btn btn-info">Détails</button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListProduitsComponent
