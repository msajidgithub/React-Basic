import React, { useContext, createContext } from 'react'
import ComB from './ComB';
 
export const NumberContext = createContext();
function ComA() {
    return (
        <div>
         
         <h1>Context Api</h1>
         
         <NumberContext.Provider value={42}>
             <div>
                <ComB/>
             </div>
         </NumberContext.Provider>
                
        </div>
    )
}

export default ComA;