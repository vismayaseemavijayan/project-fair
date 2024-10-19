import React from 'react'
import Addproject from '../components/Addproject'
function Myprojects() {
  return (
    <>
      <div className='card shadow p-3 mt-5'>
        <div className='d-flex'>
          <h2>my projects</h2>
          </div>
          <div className='ms-auto'>
            <Addproject/>
          </div>
          <div className='mt-4'>
            {/* collection */}
            <div className='border d-flex align-items-center rounded p-3'>
              <h3>project title</h3>
              <div className='d-flex ms-auto'>
                <button className='btn text-dark'><i class="fa-solid fa-pen-to-square" style={{color: '#FFD43B'}}></i></button>
                <a className='me-3 btn text-dark'><i className="fa-brands fa-github" style={{ color: '#FFD43B' }}></i>
                </a>
                <button className='btn text-dark'><i class="fa-solid fa-trash" style={{color: '#FFD43B'}}></i></button>

              </div>
            </div>
            <p className='text-danger'>no project added yet</p>
          </div>
        </div>

    </>
  )
}

export default Myprojects
