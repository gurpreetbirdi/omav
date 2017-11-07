
var request = require('superagent');

class App extends Component{
    constructor(props){
        super(props);
            this.state={data:[]}
            console.log(this.state,"ghjg");
    }
    componentDidMount=()=>{
        var self  = this;
        let a = fetch('http://52.168.25.55:8081/api/assets',{
         method: 'get',
         headers: {
           'Authorization': 'Bearer   6pBsMCmbG4DRYTM_HSGlprLSH7hC_MP-Vt52xZ0Q-tBEzqkSPTbK-v7WzBEH__u9GL1uiCcQO_Hrfjki4OqMwJ_nNzMNMg-Rdi9T1HzMCub43NppDWSvNQPDa4L3Q6G7Hya2lBNKcuDttr-i0PYYu3rs314ygw1psoOOe62QJP5FqoUvbvBMVVpazsktb3uzwfrI6auuOyA3VmZPYlD8t-VW6QzAxmrqm6pIHjmtZJKYAp-WTYr4k6RigMNxQ4_a-m6PemV19rJYmp4Ha2jaNMyavSVnDejq462SEkd2wwq78eJyw5ky7BlowRBdWG4vKxSAXYednNabW1w3dqYo6LiMuD2GWCtewg5DKQ2a0uUof2Mqu_cDbZDlW2recECxU945JR-abdl02klIpaImJhDz50D4qDItUjN_2i7eIQa_AGJWd_CbMpxFyMhv_DrZ6BzhsF8PLU0Q848B-m9jcZFGzi2PgiV7yFKNca53UT86dsngusDrqTvlNI4T4Gg3',
           'Content-Type': 'application/json'
       }
   }).then(function(response){
       response.json().then(function(data) {
        console.log(data);
        self.setState({
            data:data.assets
        })
      })
    })
    }
    render(){
         console.log(this.state.data,"sudhir");
        if (this.state.data.length=== 0) {
            return(<div></div>)
        } else {
            return(
                <div>
                          <Header/>
                    <div className="divSearchUC">
                           <div className="title subTitle fill">
                            <div className="container">
                            <div className="row-">
                              <div className="col-sm-10 f15">
                               <div className="row-">
                      <Dropdownbutton type="Brand" dataKey="brandName" device={this.state.data[0].brands}/>
                      <Dropdownbutton type="Region" dataKey="regionName" device={this.state.data[0].regions}/>
                      <Dropdownbutton type="Asset Type" dataKey="assetTypeName" device={this.state.data[0].assetTypes}/>
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
}
export default App;



{this.state.data.map(device=> <Product device = {device}/>)}
