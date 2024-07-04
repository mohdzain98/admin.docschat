import React,{useContext, useState, useEffect} from 'react'
import { useNavigate} from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import adminContext from '../Context/adminContext'
import '../Styling/login.css'

const Login = (props) => {
    const {host,showAlert} = props.prop
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const [cred, setCred] = useState({email:"", password:""})
    const navigate = useNavigate()
    const context = useContext(adminContext)
    const {getUsers} = context
    const [loader, setLoader] = useState("")

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
        setLoader("spinner-border spinner-border-sm mx-2")
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
          setLoader("")
    }
    
  return (
        <div className='container pb-4' id='login' style={{padding:'0 5%', marginTop:'-3%'}}>
            <div className='box p-4' style={isTabletOrMobile?{width:"350px"}:{width:'500px'}}>
                <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" value={cred.email} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={cred.password} onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <span className={loader}></span>
                </form>
            </div>

        </div>
  )
}

export default Login
