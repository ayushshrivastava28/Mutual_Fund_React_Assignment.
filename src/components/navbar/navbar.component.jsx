import React from 'react'
import './navbar.styles.scss'
const Navbar = (props) => {
    const changeRoute = props.changeRoute;
    // console.log(props)
    return (
        <>
        <div className="my-navbar"><h3>Invest</h3></div>
        <div className='my-navbar'>
            <div className='nav-menu-item' onClick={() =>{ changeRoute('search')}}>Search</div>
            <div className="nav-menu-item"><h3>Invest</h3></div>
    <div className='nav-menu-item' onClick={() =>{ changeRoute('compare')}}>Cart : {props.temp.length}</div>
            
        </div>
        <div className='my-navbar-bottom'>
            <div className='nav-menu-item' onClick={() =>{ changeRoute('search')}}>Home</div>
            <div className='nav-menu-item' onClick={() =>{ changeRoute('compare')}}>Invest</div>
            <div className='nav-menu-item' onClick={() =>{ changeRoute('compare')}}>Portfolio</div>
            <div className='nav-menu-item' onClick={() =>{ changeRoute('Profile')}}>Profile</div>
        </div>
        </>
    )
}


export default Navbar
