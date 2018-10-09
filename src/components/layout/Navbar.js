import React from 'react'
import { Link } from 'react-router-dom'
import SignedinLinks from './SignedinLinks'
import SignedoutLinks from './SignedoutLinks'
import { connect } from 'react-redux'

const Navbar = () => {
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">My Plan</Link>
                <SignedinLinks />
                <SignedoutLinks />
            </div>
           
        </nav>    
      
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {

    }
}

export default connect(mapStateToProps)(Navbar)