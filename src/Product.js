import React,{Component} from 'react';
//import './Product.css';
  //import 'bootstrap/dist/css/bootstrap.css';


class Product extends Component{


  render(){
    let data = this.props.device;
    return(
<div className="proList">
  <article className="col-sm-3">
           <figure>
              <figcaption>
                  <a className="clsGetMetadataInfo" >{data.assetTitle}</a>
                  <span>{data.assetNumber}</span>
             </figcaption>
                  <a href="" className="fancybox-img">
                      <div className="imgBlockWrap">
                         <img src={data.thumbnailUrl}height="360px" width="300px"/>

                     </div>
                  </a>
            </figure>

                     <div className="detail">
                         <div className="prodetail">
                              <h4 className="dyntxt">
                                   <a className="getMataInfo"   id="36" href="">JBL1600</a>
                              </h4>
                                      <fieldset>
                                          <label>Category:</label>"Bluetooth"
                                     </fieldset>
                                     <fieldset>
                                         <label>Owner:</label>"User Admin"
                                    </fieldset>
                                    <fieldset>
                                        <label>Asset No:</label>"109"
                                   </fieldset>
                                   <fieldset>
                                       <label>Published Date:</label>"07/06/2017"
                                  </fieldset>
                                  <fieldset>
                                      <label>Version(s):</label>"07/06/2017"
                                 </fieldset>

                             </div>

                   </div>

         </article>

</div>
);
}
}
export default Product;
