import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';

class Ajout extends Component {
    constructor(props) {
        super(props);
        this.initState = {
            head: "",
            image: "",
            text: "",
            prix: 0,
            time: "",
            disponible: false,
        }
        this.state = this.initState
    }
    
    handleChange = (event) =>{
        const {name, type, checked, value} = event.target;   
        
        let val = type === "checkbox" ?checked : value; 
            
        this.setState({[name]: val});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let img = '';
        if(this.state.image){

            img = this.state.image.match(/[a-zA-Z0-9-_]+\.(jpg|png|webp)/)[0];
        }

        const newArticle ={
            head : this.state.head,
            text : this.state.text,
            prix : this.state.prix,
            time : this.state.time,
            image : img,
            disponible : this.state.disponible
        }
        this.props.handleLocalSave(newArticle);

        this.setState(this.initState)
    }

    render() {
        const { head, text, prix, time, disponible, image } = this.state;
        return (
            <>
                <button type="button" className="btn btn-warning col-12" data-bs-toggle="modal" data-bs-target="#exampleModal"> Ajouter</button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ajouter Article</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="col-md-6">
                                    <label htmlFor="marque" className="form-label">Titre</label>
                                    <input type="text" required className="form-control" id="marque" name="head" value={head} onChange={this.handleChange} placeholder="Entrer le titre" />
                                </div>
                                <div className="col-md-12">                            
                                    <label htmlFor="prix" className="form-label">Image</label>
                                    <input type="file" required className="form-control" id="image" onChange={this.handleChange} value={image} name="image" />
                                </div>
                                <label htmlFor="marque" className="form-label">Texte</label>
                                <div className="col-md-6 input-group">
                                    <textarea  required className="form-control" id="modele" name="text" value={text} onChange={this.handleChange} placeholder="Entrer votre texte" ></textarea>
                                </div>
                                
                                <div className="col-md-6">
                                    <label htmlFor="prix" className="form-label">Prix</label>
                                    <input type="text" required className="form-control" id="prix" name="prix" value={prix} onChange={this.handleChange} placeholder="Entrer le prix" />
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="time" className="form-label">Temps Prestation</label>
                                    <input type="text" required className="form-control" id="time" value={time} onChange={this.handleChange} name="time" placeholder="Entrer le temps de prestation" />
                                </div>

                                <div className="col-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="disponible" onChange={this.handleChange} name="disponible" checked={disponible} />
                                        <label className="form-check-label" htmlFor="disponible">
                                            Disponible
                                </label>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={this.handleSubmit}>Envoyer</button>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Ajout;