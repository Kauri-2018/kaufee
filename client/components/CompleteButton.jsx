import React from 'react'

const CompleteButton = ({markComplete}) => (
  <div className="completed">
    <button className='button-primary' onClick={markComplete}>Mark as Complete</button>
  </div>
)

export default CompleteButton
