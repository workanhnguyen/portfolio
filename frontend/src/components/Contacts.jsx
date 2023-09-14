import React from 'react'
import user from '../data/user'

const userInfo = user[0];

const Contacts = () => {
  return (
    <div className='flex flex-col gap-y-3'>
    {userInfo.contacts.map((contact, index) => (
      <div className='w-full flex items-center p-4 gap-x-3 rounded-md border-2 border-gray-300'>
        <img className='w-7 h-7' src={contact.icon} alt={`icon-${index}`} />
        {index  === 0 ? <a className='hover:underline' href={contact.link}>{contact.link}</a> : <p>{contact.link}</p>}
      </div>
    ))}
    </div>
  )
}

export default Contacts