import React,{Component} from 'react';

class Navigationbar extends Component{

  render(){
    return(
      <nav className="main">
              <div className="container">
                  <ul>
                              <li className="active">
                                  <a href="/documents">All Assets</a>
                              </li>
                              <li className="">
                                  <a href="/task">Tasks</a>
                              </li>
                              <li className="">
                                  <a href="/draft">Drafts</a>
                              </li>
                              <li className="">
                                  <a href="/notification">Notifications</a>
                              </li>
                              <li className="">
                                  <a href="/exchange/exchange">Exchanges</a>
                              </li>
                              <li className="">
                                  <a href="/campaign">Campaigns</a>
                              </li>
                              <li className="">
                                  <a href="/deactivated">Deactivated</a>
                              </li>
                              <li className="">
                                  <a href="/archived">Archived</a>
                              </li>
                          <li className="">
                              <a href="/advancedsearch">Advanced Search</a>
                          </li>

                  </ul>
      <form action="/search" method="get" novalidate="novalidate">
      <aside className="search cusSearch">
                          <input type="text" name="search" placeholder="Search" data-ajax-url="/documents/quicksearch" autocomplete="off" className="ui-autocomplete-input"/>
                          <span role="status" aria-live="polite" className="ui-helper-hidden-accessible"></span>
                          <input type="button" className="button" onclick="$(this).closest('form').submit()"/>
                          <div id="_jqQuickSearch"></div>
                      </aside>
                  </form>
      		     <aside className="searchMore">
      				<a href="#" data-id="none" className="searchOpt searchMoreDots" title="More Search Options"><span></span></a>
      				<a href="#" data-id="gSearch" className="searchOpt gMore " title="google search"></a>
      				<a href="#" data-id="shutterSearch" className="searchOpt shutterMore " title="shutterstock search"></a>
      				<a href="#" data-id="iStockSearch" className="searchOpt istockMore " title="istock search"></a>
      				<a href="#" data-id="adobeStockSearch" className="searchOpt adobestockMore " title="adobe stock search"></a>
      			</aside>
              </div>
          </nav>

    );
  }
}
export default Navigationbar;
