import React, { Component } from 'react'
import axios from 'axios'

export default class Stat extends Component {
   
    
    getData()
    {
        axios.get("/c19?param1=1&country=Morocco").then(response=>{
            console.log(response.data);
        });
    }

    render() {
        return (
            <div>
                <button onClick={()=>this.getData()}>get</button>
            </div>
        )
    }
}
