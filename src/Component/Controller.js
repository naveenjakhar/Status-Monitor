import React from 'react'
import Client from './Client';

import Indigo from './Indigo'
import Rainbow from './Rainbow'

const Controller = (props) => {
    if(props.data === "showall")
    { console.log(props.data);
        return(<>
        <Indigo />
        <Rainbow />
        <Client />
                    
                   </>
            
        )
    }
    else if(props.data === "indigo")
    { console.log(props.data);
        return(<>
        <Indigo />
       
                    
                   </>
            
        )
    }
    else if(props.data === "rainbow")
    { console.log(props.data);
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
            </>
        }
    
}


export default Controller
