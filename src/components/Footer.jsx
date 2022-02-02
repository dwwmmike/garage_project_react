import React from 'react';
import { AiFillInstagram, AiFillFacebook, AiFillMail, AiFillYoutube } from "react-icons/ai";

const Footer  = () =>{ 
        return ( 
            <>
            <footer>
                <div className="bg-primary text-white text-center">
                    <p className="m-3">&copy; 2021 Tous droits réservés - Sub Performance - www.sub-noperf.fr<span className="float-end"><AiFillInstagram size={20}/> <AiFillFacebook size={20}/> <AiFillMail size={20}/> <AiFillYoutube size={20}/></span></p>
                </div>
            </footer>
            </>
         );
    }
export default Footer;