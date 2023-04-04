import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './header.scss'

const Header = () => {

    const [toggle, setToggle] = useState(false);
    toggle ? document.documentElement.classList.add('lock') : document.documentElement.classList.remove('lock');
    
    // const [scroll, setScroll] = useState(false);
    // useEffect(() => {
    //   window.addEventListener("scroll", () => {
    //     setScroll(window.scrollY > 50);
    //   });
    // }, []);

    return (
        <header className='fixed top-0 left-0 right-0 z-50'>
            <div className='header__container flex justify-between items-center h-[5rem]'>
                <Link to="">
                    <img className='h-[60px]' src='' />
                </Link>
                <nav className='hidden md:flex items-center'>
                    <ul className='flex items-center gap-7'>
                        <li className='text-base hover:opacity-75 ease-ease transition-opacity duration-300'><Link onClick={() => setToggle(false)} to="/stages">Этапы разработки</Link></li>
                    </ul>
                </nav>
                <button className={`icon-menu md:hidden ${toggle ? "menu-open" : ""}`} onClick={() => setToggle(!toggle)}><span></span></button>

                <nav className={`md:hidden fixed z-1 overflow-auto overflow-x-hidden left-0
                  w-full h-full bg-slate-100 p-8 pt-20 transition-all duration-300 ease-ease ${toggle ? "top-0" : "-top-full"}`}>
                    <ul className='flex flex-col items-center gap-5'>
                        <li className='text-3xl hover:opacity-75 ease-ease transition-opacity duration-300'><Link onClick={() => setToggle(false)} to="/stages">Этапы разработки</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header

//     & __body {
//     position: fixed;
//     z - index: 1;
//     overflow: auto;
//     overflow - x: hidden;
//     left: 0;
//     top: -100 %;
//     width: 100 %;
//     height: 100 %;
//     //background-color: $headerBackgroundColor;
//     padding: 100px 30px 30px 30px;
//     transition: all 0.3s ease;
// }