import React,{Component} from 'react';
import Product from './Product';
import Navigationbar from './Navigationbar';
import Dropdownbutton from './Dropdownbutton';
import Header from './Header';
import Filter from './Filter';
//import './Dropdownbutton.css';
//import Lowerbar from './Lowerbar';
//import Test from './Test';
//import './App.css';
var request = require('superagent');


class App extends Component{
    constructor(props){
        super(props);
            this.state={data:[],dropdown1:[],dropdown2:[],dropdown3:[],dropdown4:[],dropdown5:[]}
            console.log(this.state,"ghjg");
    }
    componentDidMount=()=>{
        var self  = this;
        let a = fetch('http://52.168.25.55:8081/api/masters?syncdate',{
         method: 'get',
         headers: {
           'Authorization': 'Bearer   RGsaE9y4BkAy604eL43bLtRUJHZ2nGgeO9nPBJX80cxhJ9VQwnradZvc_ndjNq6DEV6CviJDBLD2STkd89s9BOBf4lUhWLpLBLrLLNfUQ_L5-xuGYNERxmpw-XyiCiayNWe0okiVmXn8GCvqhkQJ7NUEyaD7aHDIl_f88RQC0LhKIKfD4kO9W2gpdJSCiQp2DV36hBSWsSOsPvWgrK-rYFvVRKwGTn4IlOHT6_0u11hRT0d2CxSEdKywrQibqw5fz7XInn4Pp01qG8jJ0qM9eG7W5cObqvd4o7q3DY6X15meK8DxuCvRiZPuVNQxwz6wsc-Bu6-dCCsR_PwOHVA1wycvxJpbASdCzy-FC1tj1IPTcjK4Yv0nynZKNEqndhlg17HQCuqBp_t83m8Xh7aOKienzT-7cV_10OevmzgtCDtEQX-TGsTH05W3hOGUeyNP-CiQMkYaqqFiJH3f4kPk9maXWpXKPCg6nBgOm240Z8ZVbImG8h_RUnlocsVRKdoL',
           'Content-Type': 'application/json'
       }
   }).then(function(response){
       response.json().then(function(data) {
        console.log(data,"prateek");
        self.setState({
                 data:data.assets,
            dropdown1:data.brands,
            dropdown2:data.regions,
            dropdown3:data.assetTypes,
            dropdown4:data.categories,

        })
      })
    })
    }




    render(){
        return(
                <div>
                         <Header />
                          <Navigationbar/>
                    <div className="divSearchUC">
                           <div className="title subTitle fill">
                            <div className="container">
                            <div className="row-">
                              <div className="col-sm-10 f15">
                               <div className="row-">

                      <Dropdownbutton type="Brand" dataKey="brandName"  device={this.state.dropdown1}   />
                      <Dropdownbutton type="Region" dataKey="regionName" device={this.state.dropdown2} />
                      <Dropdownbutton type="Asset Type" dataKey="assetTypeName" device={this.state.dropdown3} />
                      <Dropdownbutton type="Categories" dataKey="categoryName" device={this.state.dropdown4}  />
                      <Dropdownbutton short={this.state.dropdown5}/>

                      </div>
                        </div>
                          </div>
                            </div>
                              </div>
                                </div>

                </div>
            );


    }
}
export default App;
