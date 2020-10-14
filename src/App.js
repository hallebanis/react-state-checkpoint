import React from 'react';
import img from './img.jpg'


class App extends React.Component {
   time={sec:0,min:0,hours:0,days:0};
  state={
    person:{
      fullName:"Pierce Brosnan",
      bio:"Pierce Brosnan [pɪə(ɹ)s ˈbɹɑsnæn]1 est un acteur et producteur de cinéma irlando-américain, né le 16 mai 1953, à Drogheda en Irlande.",
      imgSrc:img,
      profession:"Actor"},
    show: true,
    sec:100000
   } ;
constructor(props){
  super();
}

componentDidMount=()=>{
  let x=0;
  setInterval(() => { 
    x++;
    this.setState({sec:x});
  }, 1000);
}

setTimeFormat=(s)=>{
  let t="";
  let m=0;
  let h=0;
  let d=0;
  let se=s;

  d=parseInt(se/86400);
  se=se%86400;
  h=parseInt(se/3600);
  se=se%3600
  m=parseInt(se/60);
  se=se%60;
  
  t=(d<10? ("0"+d.toString()):d.toString());
  t=t+":";
  t=t+(h<10? ("0"+h.toString()):h.toString());
  t=t+":";
  t=t+(m<10? ("0"+m.toString()):m.toString());
  t=t+":";
  t=t+(se<10? ("0"+se.toString()):se.toString());
  return t;

} 

handleLoad=()=>{
this.setState({person:{...this.state.person,imgSrc:img.toString()}});
this.setState({show:!this.state.show})

}
SetVsibility=()=>{
let a= ((this.state.show)? "Visible":"hidden");
return a;
}
setButtonText=(showVal)=>{
  return(showVal? "Hide":"Show");
}

  render(){
  return (
    <div className="App">
      <div>
  <p>time since the component has mounted(dd:hh:mm:ss): {this.setTimeFormat(this.state.sec)}</p>
      </div>
      <button style={{display:'inline-block'}} onClick={this.handleLoad} value="click">{this.setButtonText(this.state.show)}</button>
      <div style={{visibility:this.SetVsibility()}}>
      <img src={this.state.person.imgSrc} alt="IMG" style={{margin:"10px",width:"200px",display:'inline-block'}}></img>
      <h3>Full Name</h3>
      <div>{this.state.person.fullName}</div>
      <h3>Profession</h3>
      <div>{this.state.person.profession}</div>
      <h3>bio</h3>
      <div>{this.state.person.bio}</div>
      </div>
      
    </div>
  );
  }
}

export default App;
