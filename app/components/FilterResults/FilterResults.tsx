import React from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import select from 'react-bootstrap'


const filterResults = () => {
    return (<main>
        <div className='d-flex justify-content-between align-items-center'>
            <h4>Filter Results</h4>
            <Button className='bg-black text-white rounded-0 px-4'>Reset All</Button>
        </div>
        <div className='py-3'>
            <Form>
                <Form.Label className='fw-bold'>Job Title or Keyword</Form.Label>
                <Form.Control type="text" placeholder="e.g flatbed" />
            </Form>
        </div>
        <div>
        <h6>Company Name</h6>
        <select className="form-select" aria-placeholder='select'>
  
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
        </div>
    </main>
    )
}

export default filterResults