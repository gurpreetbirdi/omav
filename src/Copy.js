
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
           'Authorization': 'Bearer   LbKXZ-pANHzjmeXclerH6cJ2HMHNrzvVrVlKPEoRDj8YNQB5MLDgjhDnHDFeTPdfh3bqYaqWwCQXsYnuO5tw0Cdr0bDi4FefMsNRixp8aoe8ylN9NnK3oPhovAf_PRQcV0tWL50DjrNyBZG6OEmaGDklJyij5BRidNpjTzp3BnEhtJvkvKrFA2drwitNOtXmzcCy2i91zaEWH82XIrhDTdC4qhtzA0v-CahNHqymkkpctwmlA90jChH3sgUhjWBwNZO9xlek8_Mc7MGcH75FcCK4qN27XxiMupVxq5GIG5M8D4DSUDpASaOchO3Krp0BeurTg1gQTzQV15b_UlAfMN_svmxs4jieK-NQnro2ecH-cVq48jWwHL_9NeW9FI7kgDL0CrtE9R8XeYT_-sA_9IdYk0DTeNrscGm50OVeN5zvxwplEGkSAldPaax9JfDbkvGL9Jzn-gIWx7ywI4OYvaA4PszV8PPU87NLh0GvjykLYfYMeYs3FlVFGFSJS3XQ',
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
                  <Navigationbar/>
              {this.state.data.map(device=><Product device={device}/>)}
                     <Navigationbar/>
                       <Lowerbar/>
                </div>
            );
        }

    }
}
export default App;
