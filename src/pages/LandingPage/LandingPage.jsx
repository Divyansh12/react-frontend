


import React,{Component} from 'react';
import './LandingPage.css';

import Container from '@material-ui/core/Container';
import Header from '../../components/Header/Header';
import Paper from '@material-ui/core/Paper';

const initialState = {
  name: '',
  title: '',
  address:'',
  password:'',
  email:'',
  contact_number:'',
  confirm_password:'',
  loading:'',
  errors:{
    name:'',
    title:'',
    address:'',
    password:'',
    email:'',
    contact_number:'',
    confirm_password:''
  }
}

class LandingPage extends Component{

  constructor() {
    super();
    this.state=initialState;
    
    
};
     
    

isLength(ele){
      if(ele.length>0){
            return true
      }else{
            return false;
      }
}

validate=()=>{
  let errors={
    name:'',
    title:'',
    address:'',
    password:'',
    email:'',
    contact_number:'',
    confirm_password:''
  }
  const passwordRegex = /(?=.*[0-9])/;
  if (!this.state.name) {
    errors.name = "name cannot be blank";
  }
  if (!this.state.title) {
    errors.title = "Choose a Valid Title";
  }
  if (!this.state.address) {
    errors.address = "address cannot be blank";
  }

  if (!this.state.email.includes("@")) {
    errors.email = "invalid email";
  }

  if (this.state.contact_number.length<10) {
    errors.contact_number = "Enter a valid Mobile number";
  }

  if (!this.state.password) {
    errors.password = "Required";
  }else if (this.state.password.length < 8) {
    errors.password = "Password must be 8 characters long.";
  }else if (!passwordRegex.test(this.state.password)) {
    errors.password = "Invalid password. Must contain one number";
  }
  
  if( this.state.confirm_password!==this.state.password){
    console.log("Password Doesn't Match")
    errors.confirm_password="Password Doesn't Match"
  }



  if (errors.email || errors.name || errors.contact_number || errors.address || errors.title || errors.password|| errors.confirm_password ) {

    this.setState({ errors });
    return false;
  }

  return true;

}


onChange = (e) => {
  this.setState({
      [e.target.name]: e.target.value
  });
}
submitHandle=(e)=>{
    e.preventDefault();
    this.setState({loading:true});

    const isValid=this.validate();
   
    if(isValid){
      console.log(this.state);

      this.setState(initialState);
    }
    this.setState({loading:false});

    
}

render() {
    return (
      <div>
          <Header />
          
          <div style={{marginTop:'6rem'}}>
            <Container>

            <Paper elevation={3} style={{padding:'1rem'}}>
                <h1 style={{fontWeight:'400'}}>Form</h1>
                <hr style={{color:'#f1f1f1',border:'1px solid'}}/>
                <Container>
                  <form onSubmit={this.submitHandle}>
                        
                            

                            <div style={{display:'flex',marginBottom:'15px'}}>
                              <select name="title" id="title" class="form-control selectoption leftalign" value={this.state.title} onChange={this.onChange}>
                                    <option >Choose Title : </option>
                                    <option value="Mr.">Mr.</option>
                                    <option value="Mrs.">Mrs.</option>
                                    <option value="Ms.">Ms.</option>
                              </select>    
                              
                              <input name="name" className="login_input li rightalign" type="text" value={this.state.name} onChange={this.onChange} placeholder="name **" ></input><br />    <br />                                             
                               
                            </div>
                            <div style={{display:'flex',marginBottom:'15px'}}>
                              <p className="error leftalgn">{this.state.errors.title}</p>
                              <p className="error rightalgn">{this.state.errors.name}</p>
                            </div>
                            <input name="contact_number" className="login_input li" type="Number" value={this.state.contact_number} onChange={this.onChange} placeholder="contact number**" ></input><br />    <br />     
                            <p className="error">{this.state.errors.contact_number}</p>
                            <input name="address" className="login_input li" type="text" value={this.state.address} onChange={this.onChange} placeholder="Address**" ></input><br />    <br />     
                            <p className="error">{this.state.errors.address}</p>
                            <input name="email" className="login_input li" type="email" value={this.state.email} onChange={this.onChange} placeholder="email**" ></input><br />    <br />  
                            <p className="error">{this.state.errors.email}</p>
                            <input name="password" className="login_input li" type="password" value={this.state.password} onChange={this.onChange} placeholder="Password**" ></input><br />    <br />     
                            <p className="error">{this.state.errors.password}</p>
                            <input name="confirm_password" className="login_input li" value={this.state.confirm_password} onChange={this.onChange} type="password" placeholder="Confirm Password"></input><br />    <br />                
                            <p className="error">{this.state.errors.confirm_password}</p>
                            
                            <button type="submit" className="login_btn">{this.loading?"Loading ...":"Submit"}</button>
                  </form>
              </Container>
              </Paper>

            </Container>
          </div>

        </div>
    );
}
}

export default LandingPage;
