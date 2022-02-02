import React, { Component } from 'react';
import { FaEdit } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';

class BoutonEdition extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <button type="button" onClick={()=>{this.props.handleEdition(this.props.id)}} className="btn btn-success col-12" ><FaEdit/></button>
            </>
        );
    }
}

export default BoutonEdition;