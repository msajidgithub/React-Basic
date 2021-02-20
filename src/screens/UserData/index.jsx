
import React, { useEffect, useState } from 'react';
import axios from 'axios'
;
function UserData() {
    useEffect(() => {
        axios.get(`http://localhost:8000/User`)
        .then(res => {
          const getData = res.data;
          console.log("api data: ");
          console.log(getData)
          setData(getData);
        });
    }, [])

    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const [isloading, setIsloading] = useState(true)
    const [newData, setNewData] = useState([])
    const [arryVal, setArryVal] = useState([{
      Name: 'sajid'
    }])
    // const [userAction, setUserAction] = useState([data])

    // try Fetch Through Api

    // const Apicall =  () => {
    //     console.log("working")
    //     const response = await axios.get(`http://localhost:8000/User`)
    //     const parsed = await response.json()
    //     console.log('parsed data: ', parsed)

    //     setData(parsed)
    //     console.log('setdata', data)

       

    // }
    const ApiCall = ()=>{
        axios.get(`http://localhost:8000/User`)
        .then(res => {
          const getData = res.data;
          console.log("api data: ");
          console.log(getData)
          setData(getData);
                });

      setSearch('')
    }


    const SearchFn = () =>{
        console.log('search ',search)
        setIsloading(false)
    }
    
    const ShowData = ()=>{
        setIsloading(true)
        ApiCall()

    }

    const editBtn = (id)=>{
        
        axios.get(`http://localhost:8000/User/${id}`)
        .then(res => {
          const getData = res.data;
          console.log("UPDATED data: ");
          console.log(getData)
          setNewData(getData);
         console.log('====> ',newData)
        });
        


    }

    const updateBtn = ()=>{
      // axios.post(`http://localhost:8000/User/${newData.id}`)
      // .then(res => {
      //   console.log(res)
      //   console.log(res.json())
      // });
    console.log('updateBtn working')
    }

        const delBtn = (id)=>{
          

            axios.delete(`http://localhost:8000/User/${id}`)

            setData(data.filter(item => item.id !== id));
           
            

              setSearch('')

            // if(Names === data[index].FirstName){
            //    console.log('deleted ',data[index].FirstName)
            // }
    }
    const backBtn =()=>{
        console.log('backBtn working')


}

    return (
        <div className="container-fluid">
           <><div className="container">
                <div className="row">
                    <div className="col-sm">
                     <nav className="navbar navbar-light bg-dark justify-content-between">
                    <button className="btn btn-outline-success my-2 my-sm-0" type="button"
                    onClick={ShowData}>Api Response</button>

         <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" value={search} placeholder="Search" aria-label="Search"
                onClick={SearchFn}
            onChange={(e)=>{
                const getSearch = e.target.value
                 const putSearch = getSearch.charAt(0).toUpperCase() + getSearch.slice(1); 
                setSearch(putSearch)
            }} />
        </form>
      </nav>
                        
                 </div>
                 </div>
                </div>                

            <div className="container">
                <div className="row">
                    <div className="col-sm">
                  <br/> <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Department</th>
                                    <th scope="col">Delete</th>
                                    <th scope="col">Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {isloading ? data.map((val,i) => {
                                    return (
                                        <tr>
                                            <td>{val.FirstName}</td>
                                            <td>{val.LastName}</td>
                                            <td>{val.Deparment}</td>
                                            <td><button type='button' onClick={()=>delBtn(val.id, i)} className="btn"><i className="fa fa-trash"></i></button></td>
                                            <td><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"  onClick={()=>editBtn(val.id)}><i className="fa fa-edit"></i></button></td>

                                      
                                            
                                        </tr>
                                    )}):
                                    
                                    data.filter((s, i) =>s.FirstName.indexOf(search) > -1 || s.LastName.indexOf(search) > -1 || s.Deparment.indexOf(search) > -1).map((val,i) =>{
                                        return(
                                            
                                            <tr>
                                                
                                            <td>{val.FirstName}</td>
                                            <td>{val.LastName}</td>
                                            <td>{val.Deparment}</td>
                                            <td><button type='button' onClick={()=>delBtn(val.id, i)} className="btn"><i className="fa fa-trash"></i></button></td>
                                            <td><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"  onClick={()=>editBtn(val.id)}><i className="fa fa-edit"></i></button></td>
                                        </tr> 
                                        )
                                    })
                                    
                                } 
                                {/* data.map((val,i) => {
                                  return (
                                      <tr>
                                          <td>{val.FirstName}</td>
                                          <td>{val.LastName}</td>
                                          <td>{val.Deparment}</td>
                                          <td><button type='button' onClick={()=>delBtn(val.id)} className="btn"><i className="fa fa-trash"></i></button></td>
                                          <td><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" type='button' onClick={()=>editBtn(val.FirstName, i)}><i className="fa fa-edit"></i></button></td>

                                    
                                          
                                      </tr>
                                  )})} */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> </>
            <> 
                    <div>
        {/* Button trigger modal */}

        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" onClick={backBtn} className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                  <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
                <div style={{width: "100%"}}>
                <label htmlFor="name"> <span>FirstName : </span></label> 
              <input className="form-control mr-sm-2" type="text" value={newData.FirstName}  placeholder="FirstName" aria-label="input" onChange={(e)=>{
                setNewData({
                  FirstName: e.target.value,
                })
                console.log(newData)                
              }}/>
            
                  </div>
                  <br/> 
                  <div style={{width: "100%"}}>
                  <label htmlFor="name"> <span>LastName : </span>  </label>
              <input className="form-control mr-sm-2" type="text" value={newData.LastName} placeholder="LastName" aria-label="input" onChange={(e)=> setNewData({
                LastName: e.target.value
              })
              }/>
          
                    </div>   
               <br/>
         
              <div style={{width: "100%"}}><label htmlFor="name"> <span>Department : </span></label>
              <input className="form-control mr-sm-2" type="text" value={newData.Deparment}  placeholder="Department" aria-label="input"/>
            </div>
              </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={backBtn} data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={updateBtn}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>

                


             </>
             
        </div>
    );
}

export default UserData;
