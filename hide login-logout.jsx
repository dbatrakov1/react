import React, { useEffect, useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


function Navbar() {
  let history = useHistory();
  const [token, setToken] = useState(localStorage.getItem("token"))

  const logoutHandler = () => {
    localStorage.removeItem("token")
    setToken('')
    history.push("/login")
  }
  
  setInterval(function(){ 
      setToken(localStorage.getItem("token"))
  }, 10000);
  return (
            <div className='navbar-right'>
                    {!token ?
                    <>
                      <Link to='login' className='menu-bars'>
                        <FaIcons.FaSignInAlt />  LogIn 
                      </Link>
                      <Link to='register' className='menu-bars'> 
                        <FaIcons.FaUser />  SignIn
                      </Link>
                    </>

                    :
                    <Link to='#' className='menu-bars' onClick={logoutHandler}> 
                    <IoIcons.IoIosLogOut />  SignOut
                    </Link>
                    }
         

          </div>
    )
}

export default Navbar;
