import React from 'react';

const Header = ({titulo}) => {
    return ( 
        <nav className="nav-wrapper light-blue darken-3 s12 m12 l12">
            <a href="#!" className="brand-logo center">{titulo}</a>
        </nav>
     );
}
 
export default Header;