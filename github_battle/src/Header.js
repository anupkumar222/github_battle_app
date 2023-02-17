import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css"

class Header extends React.Component {
    render() {
        return (    
            <div className="header">
                <nav>
                <NavLink to="/" activeClassName="active" className="tab" exact>
                    Popular
                </NavLink>
            
                <NavLink to="/battle" activeClassName="active" className="tab">
                    Battle
                </NavLink>
                </nav>
                
            </div>
                )
    }

}

export default Header