import React from 'react'
import PeopleDetail from './PeopleDetail';

const page = ({params}) => { 
    const id = params.id;
  return (
    <div className='mt-[200px]'>
        <PeopleDetail id={id} />
    </div>
  )
}

export default page
