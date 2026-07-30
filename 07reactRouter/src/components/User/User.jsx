import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
    return (
    <div className='bg-amber-500 text-white text-3xl p-2'>User: {userid}</div>
  )
}

export default User