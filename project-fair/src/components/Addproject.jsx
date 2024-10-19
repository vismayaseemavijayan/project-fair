import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { addprojectAPI } from '../../services/allAPI';


function Addproject() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => {setShow(false);
    setprojectData({title:"",language:"",github:"",website:"",overview:"",projectImage:""})
    setPreview("")
  }
  const handleShow = () => setShow(true);

  const[fileStatus,setfileStatus]=useState(false)
  const[Preview,setPreview]=useState("")

  const[projectData,setprojectData]=useState
  ({
    title:"",language:"",github:"",website:"",overview:"",projectImage:""
  })
  // console.log(projectData);
  useEffect(()=>{
    //console.log(projectData.projectImage.type);
    if(projectData.projectImage.type=="image/png"||projectData.projectImage.type=="image/jpeg"||projectData.projectImage.type=="image/jpg"){
    // console.log("generate url");
    setPreview(URL.createObjectURL(projectData.projectImage));
    setfileStatus(false)
    
    }else{
      //console.log("please upload the following file extensions (jpeg/png/jpg)");
      setfileStatus(true)
      setprojectData({...projectData,projectImage:""})
      
    }
    
  },[projectData.projectImage])

  const handleAddProject=async()=>{
    const{title,language,github,website,overview,projectImage}=projectData
    if (!title || !language || !github || !website || !overview || !projectImage){
      toast.info("please fill the missing fields")
    }else{
      // api call request
      const reqBody=new FormData()
      reqBody.append("title",title)
      reqBody.append("language",language)
      reqBody.append("github",github)
      reqBody.append("website",website)
      reqBody.append("overview",overview)
      reqBody.append("projectImage",projectImage)
      // api call (reqheader)
      const token =sessionStorage.getItem("token")
      console.log(token);
      
      // api call reqheader
      const reqHeader={
        "authorization":`Bearer ${token}`,
        "Content-Type":"multipart/form-data"
      }
      // api call
      try{
      const result = await addprojectAPI(reqBody,reqHeader)
      console.log(result);
      if(result.status==200){
        handleClose()
      }else{
        console.log(result.response.data);
        
      }

      
      }catch(err){
        console.log(err);
        
      }



    }
  }

  
  
  return (
    <>
     <button className='btn btn-primary' onClick={handleShow}>Add projects</button> 
     <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="lg"
      centered
      >
        <Modal.Header closeButton>
          <Modal.Title>project details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-6'>
              <label>
                <input type='file' style={{display:"none"}} onChange={e=>setprojectData({...projectData,projectImage:e.target.files[0]})}/>
                <img width={'200px'} height={'200px'} src={Preview?Preview:"https://cdn.pixabay.com/photo/2022/01/12/00/27/gallery-6931706_960_720.png"} alt=''></img>
              </label>
              {fileStatus&& <div className="mt-3 text-danger">please upload the following file extensions (jpeg/png.jpg)</div>}
            </div>
            <div className='col-6'>
              <div className='mb-3'>
                <input type='text' className='form-control' placeholder='project title' onChange={e=>setprojectData({...projectData,title:e.target.value})} value={projectData.title}/>
             </div>
             <div className='mb-3'>
                <input type='text' className='form-control' placeholder='languages used' onChange={e=>setprojectData({...projectData,language:e.target.value})}value={projectData.language}/>
             </div>
             <div className='mb-3'>
                <input type='text' className='form-control' placeholder='github link' onChange={e=>setprojectData({...projectData,github:e.target.value})}value={projectData.github}/>
             </div>
            <div className='mb-3'>
                <input type='text' className='form-control' placeholder='website link' onChange={e=>setprojectData({...projectData,website:e.target.value})}value={projectData.website}/>
             </div>
             <div className='mb-3'>
                <input type='text' className='form-control' placeholder='project overview' onChange={e=>setprojectData({...projectData,overview:e.target.value})}value={projectData.overviewk}/>
             </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddProject}>
            Add
          </Button>
        </Modal.Footer>
     </Modal>
     <ToastContainer position="top-center" autoClose={2000} theme="colored"/>
    </>
  )
}


export default Addproject
