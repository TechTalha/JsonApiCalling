"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const page = ({params}) => {
    console.log(params);
    const {details} = params;
    const [text, setText] = useState([])
    const getText = async() =>{
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/users/'+details);
      setText(data);
    }
    useEffect(() => {
      getText();
    }, [])

    const [atext, setatext] = useState([])
    const getAnotherText = async() =>{
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/users/'+details);
      setatext(data.username);
    }
    useEffect(() => {
      getAnotherText();
    }, [])

    const [newtext, setnewtext] = useState([])
    const getAnotherNewText = async() =>{
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/users/'+details);
      setnewtext(data.name);
    }
    useEffect(() => {
      getAnotherNewText();
    }, [])
  return <>
{/* <section class="text-gray-600 body-font">
  <div class="container px-5 py-10 mx-auto">
    <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
        <h2 className='text-3xl mb-5 bg-slate-300 py-2 px-18 rounded'>Details</h2>
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
        </path>
      </svg>
      <p class="leading-relaxed text-lg">
  {JSON.stringify(text)}
      </p>
      <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-2"></span>
      <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">{JSON.stringify(atext)} </h2>
      <p class="text-gray-500">{JSON.stringify(newtext)}</p>
    </div>
  </div>
</section> */}
<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Microdosing synth tattooed vexillologist</h1>
      <p class="mb-8 leading-relaxed break-words">{JSON.stringify(text)}</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
  </div>
</section>


  </>
}

export default page