import React,{useContext, useEffect} from 'react'
import adminContext from '../Context/adminContext'
import { Link } from 'react-router-dom'

const Access = () => {
  const context = useContext(adminContext)
    const {acess,getAcess} = context

    useEffect(()=>{
        getAcess()
        // eslint-disable-next-line 
    },[])
  return (
    <div className='container pb-4' style={{padding:'0 5%', marginTop:'-3%'}}>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
                <li class="breadcrumb-item active" aria-current="page">Access</li>
            </ol>
        </nav>
        <div class="accordion" id="accordionFlushExample">
        {acess.data.map((element, index)=>{
            return(
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`} aria-expanded="false" aria-controls="flush-collapseOne">
                        {index+1} : {element.name}
                    </button>
                    </h2>
                    <div id={`flush-collapse${index}`} class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <li><strong>Email : </strong>{element.email}</li>
                    </div>
                    </div>
                </div>
            )
        })}    
        
    </div>
      
    </div>
  )
}

export default Access
