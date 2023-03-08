import axios from "axios";
import '../Components/post.css';
import React, { Component } from "react";
class Post extends Component {
    constructor(props){
        super(props);
        this.state={
            id:" ",
            gender:" ",
            materialType:" ",
            materialname:" ",
            price:" ",
        }
    }
handlesIdChange = (event) => {
    this.setState({ id:event.target.value});
}

handleGenderChange = (event) => {
    this.setState({ gender:event.target.value});
}
handlematerialTypeChange = (event) => {
    this.setState({ materialType:event.target.value});
}
handlematerialnameChange = (event) => {
    this.setState({ materialname:event.target.value});
}
handlePriceChange = (event) => {
    this.setState({ price:event.target.value});
}

handleSubmit = (event) =>{
    event.preventDefault();
    const data = {
        id : this.state.id,
        gender : this.state.gender,
        materialType: this.state.materialType,
        materialname : this.state.materialname,
        price : this.state.price       
    }
    axios.put('http://127.0.0.1:8080/task',data)
};
render(){
    return (
        <div className="post" >
        <form onSubmit={this.handleSubmit} className="login-form">
            <label className="login-label">ENTER THE PRODUCT ID</label><br></br>
            <input
                className="login" 
                type="text" 
                value={this.state.id}
                onChange ={this.handlesIdChange}
            /><br></br>

            <label className="login-label">GENDER</label><br></br>
            <input
                className="login" 
                type="text" 
                value={this.state.gender}
                onChange ={this.handleGenderChange}
            /><br></br>

            <label className="login-label">ENTER THE MATERIAL TYPE</label><br></br>
            <input
                className="login" 
                type="text" 
                value={this.state.materialType}
                onChange ={this.handlematerialTypeChange}
            /><br></br>

            <label className="login-label">ENTER THE MATERIAL NAME</label><br></br>
            <input
                className="login" 
                type="text" 
                value={this.state.materialname}
                onChange ={this.handlematerialnameChange}
            /><br></br>

            <label className="login-label">TOTAL PRICE</label><br></br>
            <input
                className="login" 
                type="text" 
                value={this.state.price}
                onChange ={this.handlePriceChange}
            /><br></br>
            <button className="button" type="submit"> POST THE DETAILS </button>
        </form>
        </div>
    );
  }
}

export default Post;