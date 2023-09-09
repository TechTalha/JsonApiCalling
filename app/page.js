"use client"
import Link from 'next/link'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [text, setText] = useState([])
  const getText = async() =>{
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
    setText(data);
  }
  useEffect(() => {
    getText();
  }, [])
  
  return (
    <>
    <div class="flex flex-col text-center w-full mt-10 mb-10">
          <h1 class="sm:text-3xl text-3xl font-medium title-font mb-4 text-gray-900">Jsonplaceholder</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Fetching Data Using Jsonplaceholder Api</p>
        </div>
      {/* <h1 className='bg-slate-500 text-center text-6xl font-bold text-white border-b-2 p-5'> Fetch Data with Api</h1> */}
    {text.map((e)=>{
      return<section class="text-gray-900 body-font">
      <div class="container px-5 py-4 mx-auto">
        <div class="flex flex-wrap -m-2 justify-center">
          <div class="p-2 lg:w-1/2 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img alt="team" class="w-16 h-16  object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/>
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">{e.name}</h2>
                <p class="text-gray-500">{e.username}</p>
              </div>
              <div className='bg-slate-300 px-4 py-2 rounded '><Link href={`${e.id}`}>Explore</Link></div>
            </div>
          </div>
        </div>
      </div>
    </section>
      // <ul className='flex justify-between text-2xl bg-slate-500 px-16 py-8 items-center text-white leading-8 border-b-2'><li>{e.username}</li>  <Link className='bg-white text-black rounded p-2' href={`/${e.id}`}>Explore</Link></ul>
    })}
    </>
  )
}

export default page