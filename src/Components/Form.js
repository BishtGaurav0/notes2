import React, { Component } from 'react'

 class Form extends Component {
     constructor(){
         super();
         this.state={
             name:"",
             contact: null,
             bref:"",
             user:[]
         }
     }

     managestate=(e)=>{
         this.setState({[e.target.name]:e.target.value});
     }   
     manageSubmit=(e)=>{
        e.preventDefault()
        const tempObj={
            name:this.state.name,
            bref:this.state.bref,
            contact:this.state.contact
        }
        let temparr=this.state.user;
        temparr.push(tempObj);
        this.setState({user:temparr})
     }

  render() {
    return (
      <div>
          <form>
              <label >Name</label>
              <input type="text" name='name' id='name' onChange={(e)=>this.managestate(e)} value={this.state.name}  />
          
              <label >Contact</label>
              <input type="number" name='contact' id='contact' onChange={(e)=>this.managestate(e)} value={this.state.contact}  />
        
              <label >breaf</label>
              <input type="text" name='bref' id='bref' onChange={(e)=>this.managestate(e)} value={this.state.bref}  />
        
        
              <button onClick={(event)=>this.manageSubmit(event)}>Submit</button>
          
          </form>
          {this.state.user.map((val)=>{
              return(
                  <div>
                      {val.name} | {val.contact} | {val.bref}
                  </div>
              )
          })}
      </div>
    )
  }
}
export default Form