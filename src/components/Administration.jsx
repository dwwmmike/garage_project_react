import React, { Component } from 'react';
import { FaRegCheckCircle, FaRegTimesCircle, FaTrashAlt } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import Ajout from './Ajout';
import BoutonEdition from './BoutonEdition';
import Modal from './Modal';

class Administration extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            articles:[
                {head:'Reprogrammation Moteur', image:'reprog.jpg', prix:'A partir de 800 €', text:'Spécialiste de la reprogrammation moteur, nous optimisons les performances de votre moteur. Découvrez tout le potentiel et les possibilités offertes à votre véhicule.',time:'≃ 2 à 3 heures',disponible:true},
                {head:'Conversion Ethanol E-85', image:'ethanol.jpg', prix:'A partir de 980 €', text:'Avec un prix moyen de 0.75 centime le litre d’E85, soit presque 50% du prix d’un litre d’essence !!! En complément de l’économie produite, votre voiture sera plus souple, plus réactive et d’une manière générale plus agréable à conduire. N’attendez plus et prenez rendez-vous pour une conversion à l’E85. Vous pouvez également choisir votre carburant grâce à la bi-cartographie, c’est à dire une cartographie SP98 + une cartographie E85.',time:'≃ 6 heures', disponible:true},
                {head:'Passage au banc', image:'banc.jpg',prix:'A partir de 200 €', text:'Le banc permettra alors de discerner les réels problèmes ou les points à améliorer sur les moteurs préparés au préalable. Bref, lors de l’utilisation d’un banc d’essai, il faut toujours tenir compte de certains paramètres. Entre autres, le banc de puissance offre des résultats approximatifs et non une précision parfaite.', time:'≃ 2 heures', disponible:true},
                {head:'Covering', image:'cover.jpg', prix:'A partir de 1200 €', text:'Notre Service Covering offre une excellente qualité pour un résultat à la hauteur de vos attentes. Ils s’adaptent à toutes les surfaces planes et non-planes. Contrairement à la peinture, vous avez ici une solution non définitive qui n’endommagera pas votre carrosserie.',time:'≃ 1 Journée', disponible:true},
                {head:'Teinte Vitre', image:'teinte.jpg', prix:'A partir de 150 €', text:'8 ans après la création de ma première société, beaucoup d’entres vous connaissent le professionnalisme et la qualité des prestations, des milliers de vitres déjà teintées, Glass Auto Color continue ... Vos voitures seront prises en charge désormais dans les locaux de Dream’s Us Car à Betting.', time:'≃ 1H30', disponible:true},
                {head:'Location de vechicules', image:'loc.jpg', prix:'A partir de 800 €', text:'Créée en 1912 par Martin Sixt avec seulement sept voitures, aujourd’hui nous vous offrons nos services dans plus de 105 pays à travers le monde.Sixt s’engage à vous offrir un service premium et une voiture de location qui vous conviennent. Notre personnel hautement qualifié fera tout pour satisfaire vos envies et vos besoins.Que vous ayez besoin d\'une petite voiture, d’une voiture compacte ou d’un break spacieux, notre flotte vous propose des véhicules neufs, en moyenne six mois d’ancienneté, de grandes marques telles que BMW, Audi, VW et Mercedes-Benz. Sixt a été élu "Leader mondial de la location de voitures pour les entreprises" en 2017 et " Meilleure société de location de voitures en France".',time:'Bientot disponible',disponible:false},
            ],
            editingMode: false,
            itemEditing: {
                head : '',
                image : '', 
                text : '',
                prix : 0,
                time : '',
                disponible : false
            },
            itemEditingId:null
        }
    }
    truncate(texte) {
        if (texte.length > 50) {
           return texte.substring(0, 50) + '...';
        }
        return texte;
     };
    componentDidMount = () =>{
        let artRecup = JSON.parse(localStorage.getItem('artKey'));

        if(!artRecup || artRecup.length === 0){
            localStorage.setItem('artKey', JSON.stringify(this.state.articles));
        }
        else{
            this.setState({articles : artRecup});
        }
    };
//////////////////////////////////////////////////////////////////////////////////////////
    handleDelete = (index)=>{
        let newArticles = this.state.articles;

        let prest = newArticles.filter((v, id) =>{
            return id !== index;
        });

        this.setState({articles : prest}, ()=>{
            localStorage.setItem('artKey', JSON.stringify(this.state.articles));
        });
    }
///////////////////////////////////////////////////////////////////////////////////
    handleLocalAdd = (newArticle) => {
        let ajoutArticle =[...this.state.articles,newArticle];
        this.setState({articles : ajoutArticle}, ()=>{
            localStorage.setItem('artKey', JSON.stringify(this.state.articles));
            toast.success('Ajouté avec succès');
        });
    }
/////////////////////////////////////////////////
    handleEdit = (id) =>{
        let currentEditingItem = this.state.articles[id];
        this.setState({
            itemEditing : currentEditingItem, 
            editingMode: true,
            itemEditingId : id
        });  
    }
///////////////////////////////////////////////////////////////
    handleLocalUpdate = (modifArticle) =>{
        let listeArticles= this.state.articles;
        let id = this.state.itemEditingId;

        listeArticles[id] = modifArticle

        this.setState({articles : listeArticles, editingMode:false}, ()=>{
            localStorage.setItem('artKey',JSON.stringify(this.state.articles))
        })
        
    }
    render(){
        return(
        <>
        {this.state.editingMode ?
            <Modal affichState = {this.state.itemEditing} update={this.handleLocalUpdate}/> 
        :      
        <div>
            <table className="table table-striped ">
            <thead className="table-dark">
                <tr>
                    <th>Titre</th><th>Image</th><th>Prix</th><th>Texte</th><th>Temps</th><th>Disponible</th><th colSpan="2">Actions</th>
                </tr>
                
            </thead>
            <tbody>
            {this.state.articles.map((tab,index) => {
                
            return( 
                <tr key = {index}>
                            <td>{tab.head}</td>
                            <td><img src={`pictures/${tab.image}`} alt="" width="100"/></td>
                            <td>{tab.prix}</td>
                            <td>{this.truncate(tab.text)}</td>
                            <td>{tab.time}</td>
                            <td>{
                                (tab.disponible)
                                ?<FaRegCheckCircle className="text-success" size="24"/>
                                :<FaRegTimesCircle className="text-warning" size="24"/>
                                }
                            </td>
                            <td>
                            <BoutonEdition handleEdition={this.handleEdit} id={index} />                             
                            </td>
                            <td>
                                <button onClick={ ()=>{
                                    if(window.confirm('Etes vous sûr de supprimer cette voiture')){
                                        {this.handleDelete(index)}
                                        toast.success('Suppression avec succès');
                                    }                                                  
                                    }}
                                    className="btn btn-danger">
                                    <FaTrashAlt/>
                                </button>
                            </td>                  
                </tr>
            )
        })}
        </tbody>
        </table>
            <Ajout handleLocalSave={this.handleLocalAdd}/>
        </div>
        }
        <ToastContainer/>
        </>
    )
}
}
export default Administration;