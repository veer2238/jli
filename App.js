import React from 'react'
var data = require("./Api.json")

const App = () => {
    return (
        <div>

        {

            data.map((item,id)=>{
                return(

                    <div class="card" key={id} >


                    <div class="card-body"
                     style={{ backgroundColor: "grey" }}>
                       {item.id}
                    </div>
                 


                    {item.student.map((data=>

                        <div>
                        <h3>student details</h3>
                        <div class="card-body"
                         style={{backgroundColor:"yellow"}}>
                        {data.name}
                       </div>

                       <div class="card-body"
                         style={{backgroundColor:"green"}}>
                        {data.state}
                       </div>

                       <div class="card-body"
                         style={{backgroundColor:"pink"}}>
                        {data.city}
                       </div>

                       </div>
                        
                        
                        ))}
                </div>

                )
            })
        }

           

        </div>
    )
}

export default App