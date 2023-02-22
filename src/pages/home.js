import React from "react";
import ReactDOM from 'react-dom/client';
function Home(){

        const  [joke, setJoke] = React.useState();
        const [update, setUpdate] = React.useState(false);

        React.useEffect(() => {
            document.title = 'home page';
        });

        React.useEffect(() => {
            console.log('I re-rendered!')
        }, [update]);

    return (
        <div className="Home">
                <button onClick={()=>setUpdate((prevState) =>!prevState)}> Use Effect!</button>

                    <div className="container ">
                        <div className="">
                                <table>
                                    <tr>
                                    <th>Name</th>
                                    </tr>
                                    <tr>
                                    <td>Rajvi</td>
                                    </tr>
                                    <tr>
                                    <td>Chavda</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            STUDENT ID: 200537026
                                        </td>
                                    </tr>

                                    <tr><td>Thank you!</td></tr>
                                </table>
                         </div> 
                         <div>
                            
                         </div>
                            
                  </div>
                  <div>
                    <i><h4>Asignment 2</h4></i>
                    <b><h5>MDEV 1005</h5></b>
                  </div>
                  
        
       </div>  
       
    )
}


  
  const root = ReactDOM.createRoot(document.getElementById('root'));

  export default Home;