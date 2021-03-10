import React, { useContext } from 'react'
import {NumberContext} from './index'

function ComB() {
    const NumVal = useContext(NumberContext)
    
    return (
        <div>

            <h2>The value is that {NumVal} </h2>
               
            {/* <NumberContext.Consumer>
                {
                    (NumVal) => {
                        return(
                         <h1>The Value is that {NumVal}</h1>
                        );
                    }
                }
            </NumberContext.Consumer> */}

        </div>
    )
}

export default ComB
