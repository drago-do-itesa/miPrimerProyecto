import React, {useState,Component} from "react";

class App extends React.Component{
  constructor(props){
    super(props);
    this.formu = {
      email: "ejemplo@gmail.com",
      password: "123456"
    };
  }

    handleFormSubmit (){
      alert(`Usuario: ${this.email} Contraseña: ${this.password}`);
    }

    handleEmailChange ({target : {value}}){   
      this.email = value;
    }


    
  handleEmailPassword  ({target : {value}}) {
    this.password = value; 
  }
  


  render (){
    const {email ,password} = this.formu;
    return (
      <div className="App">
      <form onSubmit={this.handleFormSubmit}>
        <h2>Iniciar seción</h2>
        <label>
          Correo
          <input type="email" value={email} onChange={this.handleEmailChange}></input>
        </label>
        <label>
          Contraseña
          <input type="password" value={password} onChange={this.handlePasswordChange}></input>
        </label>
        <button type="submit">
          Enter
        </button>
      </form>
    </div>
    )
  }
}
export default App;
