import React, { Component } from 'react'
import ProduitService from '../services/ProduitService';

class CreerProduitComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            libelle: '',
            description: '',
            price: ''
        };

        this.saveOrUpdateProduit = this.saveOrUpdateProduit.bind(this);
    }

    componentDidMount(){
        if(this.state.id === '_add'){
            return
        }else{
            ProduitService.getProduitId(this.state.id).then( (res) =>{
                let produit = res.data;
                this.setState({libellle: produit.name,
                    description: produit.description,
                    price : produit.price
                });
            });
        }        
    }
    saveOrUpdateProduit = (e) => {
        e.preventDefault();
        let produit = {libelle: this.state.libelle, description: this.state.description, price: this.state.price};
        console.log('produit => ' + JSON.stringify(produit));

        if(this.state.id === '_add'){
            ProduitService.createProduit(produit).then(res =>{
                this.props.history.push('/');
            });
        }else{
            ProduitService.updateProduit(produit, this.state.id).then( res => {
                this.props.history.push('/');
            });
        }
    }

    cancel(){
        this.props.history.push('/');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Ajouter un produit</h3>
        }else{
            return <h3 className="text-center">Mettre à jour un produit</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Libellé: </label>
                                            <input placeholder="Libellé" name="name" className="form-control"
                                                value={this.state.libelle} />
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input placeholder="Description" name="description" className="form-control"
                                                value={this.state.description}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Prix: </label>
                                            <input placeholder="Prix" name="price" className="form-control"
                                                value={this.state.price} />
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateProduit}>Enregistrer</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Annuler</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreerProduitComponent
