import axios from "axios";
import React,{Component} from "react";
import '../Components/get.css';
class Get extends Component{
    state={
        data:[]
    }
    componentDidMount()
    {
        axios.get('http://127.0.0.1:8080/getvalues').then(response=>{
            this.setState({data:response.data});
        })
        .catch(error=>{
            console.log(error);
        });
    }
    render()
      {
        return(
            <div className="get">
            <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>gender</th>
                        <th>material_type</th>
                        <th>material_name</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(user=>(
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.gender}</td>
                            <td>{user.materialType}</td>
                            <td>{user.materialname}</td>
                            <td>{user.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        )
      }
}
export default Get;