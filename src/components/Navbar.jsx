import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { menu, close } from '../assets';

const Sun = ()=> <div alt="logo" className='w-9 h-9 rounded-full bg-gradient-to-b from-violet-500 to-violet-900 shadow-[0_0_20px_1px_rgb(60,49,112)]'/>

const Logo = ()=> <div style={{background:"linear-gradient(60deg, rgba(60,49,112,1) 20%, rgba(158,0,255,1) 100%)", width: '2.25rem', height: '2.25rem', boxShadow: "0px 0px 20px 1px rgb(60,49,112)", borderRadius:"50%", }}></div>

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/"
        className='flex items-center gap-2'
        onClick={()=> {
          setActive('');
          window.scrollTo(0, 0);
        }
        }>
          <Sun/>
          {/* <img src={sun} alt="logo" className='w-9 h-9 object-contain' /> */}
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>Abduallah&nbsp; 
            <span className='sm:block hidden'>| Dev</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link)=>(
            <li key={link.id}
            className={`${  active === link.title
                            ? 'text-white'
                            : 'text-secondary'
                         } hover:text-white text-[18px] font-medium cursor-pointer`}
                         onClick={()=> setActive(link.title)}
                         >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" 
               className='w-[28px] h-[28px] object-contain cursor-pointer'
               onClick={()=>setToggle(!toggle)}/>
               
          <div className={`${!toggle ? 'hidden' : 'flex'}
          p-6 bg-tertiary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
              <ul className="list-none flex flex-col justify-end items-start gap-4">
                {navLinks.map((link)=>(
                  <li key={link.id}
                  className={`${  active === link.title
                                  ? 'text-white'
                                  : 'text-secondary'
                              } font-poppins font-medium cursor-pointer text-[16px]`}
                              onClick={()=> {
                                setToggle(!toggle)
                                setActive(link.title);
                              }}
                              >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar