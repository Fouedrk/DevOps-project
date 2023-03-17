import React, { Component } from 'react'
import ProduitService from '../services/ProduitService';

class UpdateProduitComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
        }

    }

    componentDidMount(){}


    cancel(){
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Mettre à jour le produit</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Libellé: </label>
                                            <input placeholder="Libellé" name="name" className="form-control"/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input placeholder="Description" name="description" className="form-control"/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Prix: </label>
                                            <input placeholder="Prix" name="price" className="form-control"/>
                                        </div>

                                        <button className="btn btn-success">Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateProduitComponent
