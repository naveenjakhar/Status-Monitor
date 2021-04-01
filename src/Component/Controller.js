import React from 'react'
import Blank from './Blank';
import Client from './Client';

import Indigo from './Indigo'
import Rainbow from './Rainbow'

const Controller = (props) => {
    if(props.data === "showall")
    { 
        return(<>
        <Indigo />
        <Rainbow />
        <Client />
        <Blank />            
                   </>
            
        )
    }
    else if(props.data === "indigo")
    { 
        return(<>
        <Indigo />
       
                    
                   </>
            
        )
    }
    else if(props.data === "rainbow")
    { 
        return(<>
        <Rainbow />
       
                    
                   </>
            
        )
    }
    else if(props.data === "client3") 
    {
        return(<>
        <Client />
       
                    
                   </>
            
        )
        }
        else
        {
            return <>
            <Indigo />
        <Rainbow />
        <Client />
        <Blank />            

            </>
        }
    
}


export default Controller
