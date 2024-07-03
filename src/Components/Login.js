import React,{useContext, useState, useEffect} from 'react'
import { useNavigate} from 'react-router-dom'
import adminContext from '../Context/adminContext'

const Login = (props) => {
    const {host,showAlert} = props.prop
    const [cred, setCred] = useState({email:"", password:""})
    const navigate = useNavigate()
    const context = useContext(adminContext)
    const {getUsers} = context

    useEffect(()=>{
        if(localStorage.getItem('admintoken')){
          navigate('/')
        }
        // eslint-disable-next-line
      },[])

    const onChange = (e)=>{
        setCred({...cred, [e.target.name]:e.target.value})
    }

    const handleLogin = async(e)=>{
        e.preventDefault()
        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            }, 
            body: JSON.stringify({email: cred.email, password:cred.password})
          });
          if(response.status === 500){
            showAlert("Internal Server Error Occurred","danger")
          }else{
            const json = await response.json()
            if(json.success){
              localStorage.setItem('admintoken', json.authToken)
              showAlert("Login Successfull","success")
              navigate("/")
              getUsers()
            }else{
                showAlert(json.errors,"danger")
            }
          }
    }
    
  return (
    <div>
        <div className='container my-4 p-4'>
            <div className='box'>
                <form onSubmit={handleLogin}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" value={cred.email} onChange={onChange}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" name="password" value={cred.password} onChange={onChange}/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>
      
    </div>
  )
}

export default Login
