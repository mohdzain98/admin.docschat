import React,{useContext, useEffect} from 'react'
import adminContext from '../Context/adminContext'
import { Link, useNavigate} from 'react-router-dom'
// import '../Styling/home.css'

const Home = () => {
  // const {login} = props.prop
  const context = useContext(adminContext)
  const {users, getUsers, acess, getAcess, mtokens, getMtokens, like,getLikes} = context
  const navigate = useNavigate()
  

  useEffect(()=>{
    if(!localStorage.getItem('admintoken')){
      navigate('/')
    }
    getUsers()
    getAcess()
    getMtokens()
    getLikes()
    // eslint-disable-next-line
  },[])
  console.log(like || 0)
  return (
    <div className='container pb-4' id='home' style={{marginTop:'-3%'}}>
      <div className='row'>
        <div className='col-md-4 col-xs-12'>
          <div className="card my-4">
            <div className="card-body">
              <h5 className="card-title">Users</h5>
              <h6 className="card-subtitle mb-2 text-muted">All users in the Database</h6>
              <h2 className="card-text">{users.length}</h2>
              <Link to='/users' style={{textDecoration:'none'}}>
              <button type="submit" className={`btn btn-outline-dark`} style={{float:'right', width:'70px',height:'50px'}} >
                                <i className="fa-solid fa-arrow-right"></i>
                            </button> </Link>
            </div>
          </div>
        </div>

        <div className='col-md-4 col-xs-12'>
          <div className="card my-4" >
            <div className="card-body">
              <h5 className="card-title">More Tokens</h5>
              <h6 className="card-subtitle mb-2 text-muted">User those have requested for more tokens</h6>
              <h2 className="card-text">{mtokens.length}</h2>
              <Link to='/mtokens' style={{textDecoration:'none'}}>
              <button type="submit" className={`btn btn-outline-dark`} style={{float:'right', width:'70px',height:'50px'}} >
                                <i className="fa-solid fa-arrow-right"></i>
                            </button> </Link>
            </div>
          </div>
        </div>

        <div className='col-md-4 col-xs-12'>
          <div className="card my-4" >
            <div className="card-body">
              <h5 className="card-title">Access</h5>
              <h6 className="card-subtitle mb-2 text-muted">No of users those have unlimited Access</h6>
              <h2 className="card-text">{acess.length}</h2>
              <Link to='/access' style={{textDecoration:'none'}}>
              <button type="submit" className={`btn btn-outline-dark`} style={{float:'right', width:'70px',height:'50px'}} >
                                <i className="fa-solid fa-arrow-right"></i>
                            </button> </Link>
            </div>
          </div>
        </div>
        <div className='col-md-4 col-xs-12'>
          <div className="card my-4" >
            <div className="card-body">
              <h5 className="card-title">Likes</h5>
              <h6 className="card-subtitle mb-2 text-muted">No of users supported by hitting like button</h6>
              <h2 className="card-text">{like.data}</h2>
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default Home
