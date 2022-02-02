import React, { Component } from 'react';

class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            articles:[
                {head:'Reprogrammation Moteur', image:'reprog.jpg', prix:'A partir de 800 €', text:'Spécialiste de la reprogrammation moteur, nous optimisons les performances de votre moteur. Découvrez tout le potentiel et les possibilités offertes à votre véhicule.',time:'≃ 2 à 3 heures',disponible:true},
                {head:'Conversion Ethanol E-85', image:'ethanol.jpg', prix:'A partir de 980 €', text:'Avec un prix moyen de 0.75 centime le litre d’E85, soit presque 50% du prix d’un litre d’essence !!! En complément de l’économie produite, votre voiture sera plus souple.',time:'≃ 6 heures', disponible:true},
                {head:'Passage au banc', image:'banc.jpg',prix:'A partir de 200 €', text:'Le banc permettra alors de discerner les réels problèmes ou les points à améliorer sur les moteurs préparés au préalable. Bref, lors de l’utilisation d’un banc d’essai, il faut faire attention.', time:'≃ 2 heures', disponible:true},
                {head:'Covering', image:'cover.jpg', prix:'A partir de 1200 €', text:'Notre Service Covering offre une excellente qualité pour un résultat à la hauteur de vos attentes. Ils s’adaptent à toutes les surfaces planes et non-planes.',time:'≃ 1 Journée', disponible:true},
                {head:'Teinte Vitre', image:'teinte.jpg', prix:'A partir de 150 €', text:'8 ans après la création de ma première société, beaucoup d’entres vous connaissent le professionnalisme et la qualité des prestations, des milliers de vitres déjà teintées.', time:'≃ 1H30', disponible:true},
                {head:'Location de vechicules', image:'loc.jpg', prix:'A partir de 800 €', text:'Créée en 1912 par Martin Sixt avec seulement sept voitures, aujourd’hui nous vous offrons nos services dans plus de 105 pays à travers le monde.',time:'Bientot disponible',disponible:false},
            ],
        }
    }

    componentDidMount = () =>{
        let artRecup = JSON.parse(localStorage.getItem('artKey'));

        if(!artRecup || artRecup.length === 0){
            localStorage.setItem('artKey', JSON.stringify(this.state.articles));
        }
        else{
            this.setState({articles : artRecup});
        }
    }
//////////////////////////////////////////////////////////////////////////////////////////
    render(){
        return(
        <div className="row mt-2">{
            this.state.articles.map((article,index) => {
            return( 
                <div key = {index} className="col-sm-6">
                    <div className="card mb-3">
                        <div className="card-header text-center">
                            <h5>{article.head}</h5>
                        </div>
                        <div className="card-body">
                            <div className="text-center img-zoom">
                                <img className="rounded" src={`pictures/${article.image}`} alt="" width="450"/>
                            </div >                 
                            <p className="card-text">{article.text}</p>
                            <p className="card-title"><strong>{article.prix}</strong></p>
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" disabled={(article.disponible?false : true)}>
                                Prenez rendez-vous
                                </button>
                                {/*///////////////////////////////////////////////////////////////////////////////////////////////// */}
                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                    <div className="modal-header title-center">
                                        <h5 className="text-center" id="exampleModalLabel">Fixez votre rendez-vous</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                    <div className="mb-1">
                                        <label htmlFor="exampleInputPassword1" className="form-label bold">Nom</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1"/>
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="exampleInputPassword1" className="form-label bold">Prenom</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1"/>
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="exampleInputPassword1" className="form-label bold">Adresse</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1"/>
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="exampleInputPassword1" className="form-label bold">Type de véhicule</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1"/>
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="exampleInputPassword1" className="form-label bold">Année du véhicule</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1"/>
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="exampleInputPassword1" className="form-label bold">Plaque d'immatriculation</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1"/>
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="example-datetime-local-input" className="form-label bold">Date du rendez vous désiré</label>
                                        <input className="form-control" type="datetime-local" id="example-datetime-local-input"/>
                                    </div>
                                        
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                                        <button type="submit" className="btn btn-primary">Envoyer</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                        </div>
                        <div className="card-footer text-muted text-end"><i>
                        {article.time}</i>
                        </div>
                    </div>
                </div>
            )
        })}
        </div>
    )
}
}
export default Articles;