import {useState,useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {Link} from 'react-scroll';
import {FaTimes,FaBars} from 'react-icons/fa';

import logo from 'images/logo.png';

import './Navbar.css';

const Navbar=()=>{
	const [navbarIsShow,setNavbarIsShow]=useState(false);
    const [navbarIsOpen,setNavbarIsOpen]=useState(false);

	useEffect(()=>{
		window.addEventListener("scroll",()=>{
			if(window.pageYOffset>20){
				setNavbarIsShow(true);
			}
			else{
				setNavbarIsShow(false);
				setNavbarIsOpen(false);
			}
		});
	},[]);

	const navbarClickHandler=()=>{
		setNavbarIsOpen(!navbarIsOpen);
	};
	const navbarCloseHandler=()=>{
		setNavbarIsOpen(false);
	};

    return (
		<header className={navbarIsShow?"navbar navbar-show":"navbar"}>
			<nav className="container navbar-menu">
				<NavLink to="/" className="logo" onClick={navbarCloseHandler}><img src={logo} alt="logo" /></NavLink>
				<div className={navbarIsOpen?"main-navbar main-navbar-open":"main-navbar"}>
					<Link to="hero" className="btn-link" onClick={navbarCloseHandler} smooth={true} duration={600}>首頁</Link>
					<Link to="about" className="btn-link" onClick={navbarCloseHandler} smooth={true} duration={600}>關於</Link>
					<Link to="contact" className="btn-link" onClick={navbarCloseHandler} smooth={true} duration={600}>聯絡</Link>
					<Link to="product" className="btn-link" onClick={navbarCloseHandler} smooth={true} duration={600}>產品</Link>
					<Link to="service" className="btn-link" onClick={navbarCloseHandler} smooth={true} duration={600}>服務</Link>
					<NavLink to="/login" className="btn-link" onClick={navbarCloseHandler}>登入</NavLink>
                </div>
				<span className="btn-toggle" onClick={navbarClickHandler}>{navbarIsOpen?<FaTimes />:<FaBars />}</span>
			</nav>
		</header>
    );
}

export default Navbar;