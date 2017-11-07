import React,{Component} from 'react';
import './Dropdownbutton.css';
var _ = require('lodash');
var _ = require('lodash/core');
var fp = require('lodash/fp');
var array = require('lodash/array');
var object = require('lodash/fp/object');
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');

class Dropdownbutton extends Component {


    render(){
        let { device, type, dataKey, data } = this.props;
        console.log("in Nav Bar",device);
        return(
            <fieldset className="w20P floatL">
            <label className="cap lH22" htmlFor="BusinessUnitIds">{type}</label>
            <div className="ddOutOfVision" id="BusinessUnitIds_msddHolder">
            <select className="jq-msdropdown" onChange={ this.Changed=()=>{_.filter(relationships, function(o) { return o.brandId===2; });} }

            //data-cs-url="/businessunit/getall?isRead=True&amp;isWrite=False&amp;" data-optional-val="Select" data-preselectedvalues="[System.Collections.Generic.List`1[System.Int32]]" data-unique="ffcd93c6ac9141fe94acf9decbe3b58c" id="BusinessUnitIds" name="BusinessUnitIds" >
                        {device.map(obj=><option value=""  >{obj[dataKey]}</option>)}
            </select>
            </div>
            </fieldset>
        )
    }
}
export default Dropdownbutton;
