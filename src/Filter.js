import React,{Component} from 'react';

class Filter extends Component{
  render(){
    return(
      <article class="col-sm-3">
                              <figure>
                                  <figcaption>
                                  <a className="clsGetMetadataInfo" href="/documents/details/56" id-document="56">AVD - 1203S</a>
                                  <span>09/06/2017</span>
                                  </figcaption>
      <a href="" className="fancybox-img">
      <div className="imgBlockWrap">
          <img src="/content/assets/images/product/imgBlank.png" className="imgBlank"/>
          <img src="" />
      </div>
      </a>
                  </figure>

                              <div className="detail">
                                  <div className="proDetail">
                                      <h4 className="dynTxt">
                                          <a className="getMetaInfo" desc="AVD - 1203S" documentid="56" href="/documents/details/56">AVD - 1203S</a>
                                      </h4>

                                      <fieldset>
                                          <label>Category:</label>
                                          Compact System
                                      </fieldset>
                                      <fieldset>
                                          <label>Owner:</label>
                                          User Admin
                                      </fieldset>
                                      <fieldset>
                                          <label>Asset No.:</label>
                                          113
                                      </fieldset>
                                      <fieldset>
                                          <label>Published Date:</label>
                                          09/06/2017
                                      </fieldset>
                                      <fieldset>
                                          <label>Version(s):</label>

                                      </fieldset>
                                      <fieldset>
                                          <div className="icon text f16 c_green w25">
                                              <span>
                                                  <img src="" alt="" title="Published" />
                                              </span><span>Published</span>
                                          </div>
                                          <aside>
                                              <ul className="iconList textBottom full c_dBlue">
                                                      <li>
                                                          <a className="AddtoCart fancybox" href="/cart/add?documentId=56"><span>
                                                <img src="" alt="" title="Add to Cart" />
                                            </span><span>Add to Cart</span></a></li>


                                              <li>
                                                <a className="Emailthisitem fancybox" href="/email/select?documentId=56"><span>
                                                <img src="" alt="" title="Email this item" />
                                                </span><span>Email this item</span></a></li>

                                                      <li>
                                                          <a className="Downloaditem fancybox" href="/imagesinasset/add?documentId=56" title="Download"><span>
                                                <img src="" alt="" title="Download" />
                                          </span>
                                          <span>Download</span>
                                          </a>
                                          </li>
                                                  <li>
                                          <a href="/documents/details/56">
                                          <span>
                           <img src="" alt="" title="Click to view the details" />
                               </span>
                               <span>Details</span>
                               </a>
                                                  </li>
                                              </ul>
                                          </aside>
                                      </fieldset>
                                  </div>

                              </div>
                          </article>

    );
  }
}
export default Filter;
