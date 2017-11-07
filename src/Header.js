import React,{Component} from 'react';

class Header extends Component{

  render(){
    return(
      <header className="main">
              <div className="container">
          <div className="logo">
              <a href="/dashboard">
                  <img src="Images/logo.png" alt="OMAV"/>
              </a>
          </div>
          <a href="/dashboard" title="Home" className="homelink"></a>
          <div className="opt">
              <ul>
                      <li className="welcome_name">Welcome! User Admin  </li>
                          <li className="checkSlide">
                              <a href="/admin" className="myAccount">
                                  Switch to Admin
                                  <input id="Toggle" type="checkbox"/>
                                  <label htmlFor="Toggle">
                                      <span></span>
                                  </label>
                              </a>
                          </li>
                      <li className="icon">
                          <a className="icon noBg" href="/calendar/index/1"><span>
                      <img src="Images/1.png" alt="" title="Calendar" />
                  </span></a>

                      </li>
                      <li className="icon">
                          <a id="lnkHelp" href="/admin/account/faq" className="help" target="_blank"></a>
                      </li>
                      <li className="icon">
                          <a className="myCart" title="My Cart" href="/cart">
                              <span id="spCartCount" data-url="/cart/totalcount">5</span>
                          </a>
                      </li>
                      <li className="icon">
                          <a href="/login/logout" className="logout signout" title="Sign Out"></a>
                      </li>
              </ul>
          </div>
          <div className="clear"></div>
          </div>
          </header>

    );    
   }
 }

export default Header;
