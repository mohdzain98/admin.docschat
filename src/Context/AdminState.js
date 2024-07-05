import React,{useState} from 'react'
import AdminContext from '../Context/adminContext'


const AdminState = (props) => {
    const {host} = props.host
    const [users, setUsers] = useState({success:false, data:[],length:0})
    const [acess, setAcess] = useState({success:false, data:[],length:0})
    const [mtokens, setMtokens] = useState({success:false, data:[],length:0})
    const [like, setLike] = useState({success:false, data:[]})

    const getUsers = async ()=>{
        const response = await fetch(`${host}/api/auth/getusers`, {
            method: "GET",
          });
    
          const data = await response.json();
          setUsers(data)
          
      }

      const getAcess = async()=>{
        const response = await fetch(`${host}/api/auth/getacess`, {
            method: "GET",
          });
    
          const data = await response.json();
          setAcess(data)
          
      }
      const getMtokens = async()=>{
        const response = await fetch(`${host}/api/auth/getmoretokens`, {
            method: "GET",
          });
    
          const data = await response.json();
          setMtokens(data)
          
      }

      const getLikes = async()=>{
        const response = await fetch(`${host}/api/auth/likes`, {
            method: "GET",
          });
    
          const data = await response.json();
          setLike({success:data.success,data:data.count[0]['count']})
      }
  return (
    <div>
        <AdminContext.Provider value={{users, getUsers, acess, getAcess, mtokens, getMtokens, like, getLikes}}>
            {props.children}
        </AdminContext.Provider>
      
    </div>
  )
}

export default AdminState

