import React from 'react'
import {Link} from 'react-router-dom'


export default ()=>{
    return (
        <> 
        
            <nav id='footer' className=" navbar-light bg-light">
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                        Dev by <Link target='_blank' to={"//twitter.com/marcosslombardo"}>Closet</Link> | Marcos Lombardo<br/>
                        Para CoderHouse.
                        </div>
                        <div className='col'>
                        Footer<br/>
                        Footer
                        </div>
                        <div className='col'>
                        Footer<br/>
                        Footer
                        </div>
                    </div>
                </div>
            </nav>
            
        
         </>
    )
}