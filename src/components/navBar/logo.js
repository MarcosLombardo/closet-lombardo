import React from 'react'
import {Link} from 'react-router-dom'

const logo = () =>{
    return(
        <>  
           <Link to={'/'} className="navbar-brand">
                 CLOSET
           </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </>
    )
}
export default logo;