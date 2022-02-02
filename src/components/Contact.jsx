import React from 'react';

const Contact = () => {
        return ( 
            <>
                <h1 className="text-center">Nous Contacter</h1>
                <div className="row">
                    <div className="col-6">
                    <iframe 
                        width="100%" 
                        height="100%" 
                        frameborder="0" 
                        scrolling="no" 
                        marginheight="0" 
                        marginwidth="0" 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2628.830408097152!2d2.433056315264614!3d48.785127879280374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67344be0ba6b5%3A0x48de32fdf30ef331!2s9%20Rue%20Marc%20Seguin%2C%2094015%20Cr%C3%A9teil!5e0!3m2!1sfr!2sfr!4v1612969781130!5m2!1sfr!2sfr">
                        </iframe>
                        </div>
                    <form className="col-6">                
                        <div >
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4"/>
                        </div>
                        <div>
                            <label htmlFor="inputEmail4" className="form-label">Nom</label>
                            <input type="text" className="form-control" id="inputEmail4"/>
                        </div>
                        <div >
                            <label htmlFor="inputEmail4" className="form-label">Prenom</label>
                            <input type="text" className="form-control" id="inputEmail4"/>
                        </div>
                        <div>
                            <label htmlFor="inputAddress" className="form-label">Adresse</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="13 rue...."/>
                        </div>
                        <div>
                            <label htmlFor="inputAddress2" className="form-label">Complement d'adresse</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Appartement, etage, lieu dit...."/>
                        </div>
                        <div>
                            <label htmlFor="inputCity" className="form-label">Ville</label>
                            <input type="text" className="form-control" id="inputCity"/>
                        </div>
                        <div>
                            <label htmlFor="inputState" className="form-label">Pays</label>
                            <select id="inputState" className="form-select">
                            <option selected>Choisissez votre pays...</option>
                            <option>France</option>
                            <option>Luxembourg</option>
                            <option>Espagne</option>
                            <option>Suisse</option>
                            <option>Belgique</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="inputZip" className="form-label">Code Postal</label>
                            <input type="number" className="form-control" id="inputZip"/>
                        </div>
                        <div className="mt-2">
                            <button type="submit" className="col-12 btn btn-primary">Envoyer</button>
                        </div>
                    </form>
                </div>
            </>
         );
};
 
export default Contact;