import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap';

function Profile() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className='card shadow p-5 mt-3 me-2'>
        <div className='d-flex justify-content-between'>
          <h1>portfolio</h1>
          <button onClick={()=>setOpen(!open)} className='btn btn-outline-info'>
            <i class="fa-solid fa-angle-down fa-beat-fade"></i>
          </button>
        </div>
        <Collapse in={open}>
        <div className='row justify-content-center mt-3'>
          <label>
            <input type='file' style={{display:'none'}}/>
            <img width={'200px'} height={'200px'} src='https://easy-peasy.ai/cdn-cgi/image/quality=70,format=auto,width=300/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/552d4700-55bb-4492-bb97-75f43d2df333/fd740456-d67d-4dfd-b94b-c27fea73af5b.png' alt='profile'/>
          </label>
          <div className='mt-5'>
            <input type='text' placeholder='Github link' className='form-control'/>
            <br/>
            <input type='text' placeholder='LinkedIn link' className='form-control'/>

          </div>
          <div className='d-grid mt-2'>
            <button className='btn btn-warning'>update</button>
          </div>
        </div>
        </Collapse>
      </div>
    </div>
  )
}

export default Profile
