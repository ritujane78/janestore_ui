import React from 'react'

function PageTitle({title}) {
  return (
    <div>
      <h1 className='text-3xl font-primary font-extrabold text-primary dark:text-light mt-4 py-2'>{title}</h1>
    </div> 
  )
}

export default PageTitle
