import React, { Component } from 'react';
import { GrUserAdmin, GrUserNew  } from 'react-icons/gr';
import { BrowserRouter, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import Accueil from './Accueil';
import Contact from './Contact';
import Presentation from './Presentation';
import Login from './Login';
import Logout from './Logout';
import Administration from './Administration';
import NotFound from './NotFound';

const authentif = ()=>{
    const test = new Date().toLocaleDateString();
    if(test === sessionStorage.getItem('token')){
       return true; 
    }else{
        return false;
    }
}
///////////////////////////////////////////////////
 const Navbar = ()=>{

        return (
            <>
            <BrowserRouter>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src={`pictures/logo.png`} alt="" width="100"/></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName="active" to="/">Accueil</NavLink >
                                    </li>
                                    <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName="active" to="/Presentation">Presentation</NavLink >
                                    </li>
                                    <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName="active" to="/Contact">Contact</NavLink >
                                    </li>
                                    
                                    <li className="nav-item">
                                    {authentif()
                                    ?<NavLink className="nav-link" activeClassName="active" to="/Administration">Administration</NavLink >
                                    :<NavLink className="nav-link disabled" activeClassName="active" to="/Administration">Administration</NavLink >
                                    }
                                    </li>
                                </ul>
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Rechercher" aria-label="Search"/>
                                    <button className="btn btn-outline-primary" type="submit">Rechercher</button>
                                </form>                             
                                    {authentif()
                                    ?<NavLink className="nav-link" activeClassName="active" to="/Logout"><GrUserNew size={30}/></NavLink >  
                                    :<NavLink className="nav-link" activeClassName="active" to="/Login"><GrUserAdmin size={30}/></NavLink >
                                    }                                
                            </div>
                    </div>
                </nav>
                <Switch>
                    <Route path='/' component={Accueil} exact/>
                    <Route path='/Presentation' component={Presentation}/>                   
                    <Route path='/Contact' component={Contact} />
                    <Route path='/Login' component={Login} />
                    <Route path='/Logout' component={Logout} />
                    <Redirect  from='/Administration/reload' to="/Administration" />
                    <Route path='/Administration' render={()=>(
                        authentif()
                        ?(<Administration />)
                        :(<Redirect to="/Login"/>)
                    )}  />
                    <Route path='*' component={NotFound} />
                </Switch>
                </BrowserRouter>
            </>
        );
    };

export default Navbar;