import React from 'react'

const Search = ({searchTodo}) => {
  return (
    <div >
    <div className='w-full flex justify-center bg-slate-600 '  >

      <input onChange={(e)=>searchTodo(e.target.value)} placeholder="Cari Kegiatan" type="text" className='mx-2 my-8 h-8'/>
     
    </div>
    </div>
  )
}

export default Search