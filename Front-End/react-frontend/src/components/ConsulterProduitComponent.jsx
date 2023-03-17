import React, { Component } from 'react'
import ProduitService from '../services/ProduitService'

class ConsulterProduitComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            produit: {}
        }
    }

    componentDidMount(){
        ProduitService.getProduitId(this.state.id).then( res => {
            this.setState({produit: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Détails Produit</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Libellé: </label>
                            <div> { this.state.produit.libelle }</div>
                        </div>
                        <div className = "row">
                            <label> Description: </label>
                            <div> { this.state.produit.description }</div>
                        </div>
                        <div className = "row">
                            <label> Prix: </label>
                            <div> { this.state.produit.price }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ConsulterProduitComponent
