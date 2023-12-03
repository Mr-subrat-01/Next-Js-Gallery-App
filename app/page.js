'use client'
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'

const page = () => {
  const [RenderImage, setRenderImage] = useState([])
  const [LoadImages, setLoadImages] = useState([])
  const getImages = async () => {
    try {
      const res = await axios.get("https://picsum.photos/200/300");
      setRenderImage([...RenderImage, res.request.responseURL ])
    } catch (error) {
      console.log("Fetching Error "+error)
    }
  }

  const getMultipleImage = async  () =>  {
    const response = await axios.get("https://picsum.photos/v2/list");
    const data = response.data;
    setLoadImages(data)
  }

  const viewImage = (img) => {
    console.log(img);
    
  } 

  let imageGalary = RenderImage.map((img, i) => {
    return <img className='m-2 rounded-md h-40 w-40' src={img} onClick={()=>viewImage(img)} />
  })

  return (
    <>
      <div className='text-center text-xl font-bold '>
        <p>
        Here You Can Get Random Image By Clicking The "Get Images" Button
        </p>
      <button className='bg-amber-700 px-3 py-1 rounded-sm  text-white text-xl font-bold '
        onClick={getImages}>
        Get Image</button>
      <button className='bg-amber-700 px-3 py-1 rounded-sm  text-white text-xl mx-2 font-bold '
        onClick={()=>getMultipleImage(10)}>
        Get Multiple Images</button>
      </div>
      
      <div className='flex justify-center items-center flex-wrap  bg-sky-300'>
        {imageGalary}
      </div>
      <div className='flex justify-center items-center flex-wrap  bg-slate-600'>
        {
          LoadImages.map((img) => {
            return <img className='m-2 rounded-md h-40 w-40' src={img.download_url} />
          })
        }
      </div>
      
      

    </>
  )
}

export default page
