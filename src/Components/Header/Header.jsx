import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/arabic_6212766.png'
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";


const Header = () => {
    const {user, logOut, } = useContext(AuthContext);
    console.log(user);

    const Links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/startLearning'>Start Learning</NavLink></li>
        <li><NavLink to='/tutorials'>Tutorials</NavLink></li>
        <li><NavLink to='/about'>About Us</NavLink></li>
        {
            user && user.email ? <>
            <li><NavLink to='/updateProfile'>Update Profile</NavLink></li>
            </>: <>
            <li><NavLink to='/auth/register'>Register</NavLink></li>
             </>
        }
    </>

    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {Links}
                    </ul>
                </div>
                <img className="w-16 h-16 object-cover" src={logo} alt="" />
                <a className="text:lg md:text-xl lg:text-2xl font-bold ml-2">Lingo Bingo</a>
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            {
                user && user?.email ? ( <div className="navbar-end">
                    <img className="w-14 h-14 object-cover rounded-full" src={user?.photoURL} alt={user?.displayName} />
                    
                    <button onClick={logOut} className="btn btn-neutral" >Log-Out</button>
                </div>) : (<div className="navbar-end">
                    <Link className="btn btn-neutral" to='/auth/login'>LogIn</Link>
                </div>)
            }
                
            
        </div>
    );
};

export default Header;