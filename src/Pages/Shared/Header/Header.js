import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    }

    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>

        {
            user?.email ?
                <>
                    <li className='font-semibold'><Link to='/reviews'>My Reviews</Link></li>
                    <li className='font-semibold'><Link to='/addService'>Add a Service</Link></li>
                    <Link className='font-semibold btn btn-outline btn-accent' onClick={handleLogOut}>Logout</Link>
                </>
                :
                <li className='font-semibold'>  <Link to='/login'><button className="btn btn-outline btn-accent">Log In</button></Link></li>
        }
    </>

    return (
        <div className="navbar bg-red-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="h-14 w-20 normal-case text-xl">
                    <div className='flex '>
                        <img src={logo} alt="" srcSet="" />
                        <p className='leading-none'><small>the</small><br className='' /><span className='text-2xl font-semibold'>GARDENER</span></p>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
            </div>
        </div>
    );
};

export default Header;