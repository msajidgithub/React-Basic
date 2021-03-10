import React from 'react'

function NavSteper() {
    return (
        <div>
            <div className="branchBtns mt-4 wpc_tab">
                <ul id="myTab" role="tablist" className="nav nav-tabs justify-content-center border-0">
                <li role="presentation" className="nav-item">
                    <a id="Shipping_link" data-toggle="tab" href="#Shipping" role="tab" className="nav-link border-0 branch_btns active" aria-selected="true">
                        Shipping
                    </a>
                </li>  
                
                 <li role="presentation" className="nav-item">
                    <a id="Shipping_link" data-toggle="tab" href="#shop" role="tab" className="nav-link border-0 branch_btns active" aria-selected="true">
                        Shipping
                    </a>
                </li>
                </ul>
                 </div>
        </div>
    );
}





export default NavSteper
