import React from 'react';

const Recherche = (props) => {
    const {recup, requete, req} = props;
    return ( 
        <form className="col-12" onSubmit={(e)=>{e.preventDefault();requete()}}>
            <div className="input-group pt-3">
                <input type="text" onChange={recup}  value={req} className="form-control" placeholder="Search"/>
                <div className="input-group-btn">
                <button className="btn btn-primary" type="submit">
                                Search
                </button>
                </div>
            </div>
        </form>
     );
}
 
export default Recherche;