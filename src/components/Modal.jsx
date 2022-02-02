import React, {Component} from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            head: "",
            image: "",
            text: "",
            prix: 0,
            time: "",
            disponible: false,                
         }
    }
    truncate(input) {
        if (input.length > 5) {
           return input.substring(0, 5) + '...';
        }
        return input;
     };

    componentDidMount =()=>{
        this.setState(this.props.affichState);

    }
    
    handleChange = (event) =>{
        event.preventDefault();
        
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
            image: img,
            time : this.state.time,
            disponible : this.state.disponible
        }
        this.props.update(newArticle);
        toast.success('Modifier avec succès');
    }

    render() { 
        const { head, text, prix, time, disponible } = this.state;
        return ( 
            <div className="" id={'modalEdit'}>
                    <div className="">
                        <div className="">
                            <div className="">
                                <h5 className="" id="exampleModalLabel">Modifier Article</h5>
                            </div>
                            <div className="">
                                <div className="col-md-6">
                                    <label htmlFor="marque" className="form-label">Titre</label>
                                    <input type="text" required className="form-control" id="marque" name="head" value={head} onChange={this.handleChange} placeholder="Entrer la marque" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="prix" className="form-label">Image</label>
                                    <input type="file" required className="form-control" id="image" onChange={this.handleChange} name="image" />
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="modele" className="form-label">Texte</label>
                                    <textarea type="text" required className="form-control" id="text" name="text" value={text} onChange={this.handleChange} placeholder="Entrer votre texte"></textarea>
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
                            <div>
                            <Link to="/Administration/reload"> <button type="button" className="btn btn-secondary">Fermer</button> </Link>
                                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Envoyer</button>
                            </div>
                        </div>
                    </div>
                </div>
         );
    }
}
 
export default Modal ;