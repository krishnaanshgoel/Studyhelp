import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { RefreshCcw } from 'lucide-react'
import { toast } from 'sonner'
import Link from 'next/link'

function MaterialCardItem({item, studyTypeContent,course,refreshData}) {

  const [loading, setLoading] = useState(false);
  const GenerateContent=async()=>{
    // console.log(course)
    setLoading(true);
    toast('Generating content...')
    const Chapters=course?.courseLayout?.chapters;
    let chapters='';
    for(const chap of Chapters){
      chapters=chap.chapterTitle+','+chapters
    }
    const res=await axios.post('/api/study-type-content',{
      courseId:course?.courseId,
      type:item.name,
      chapters:chapters,
    })
    setLoading(false);
    refreshData(true);
    console.log(res);
    toast('Content generated successfully')
  }

  return (
    
    <div className={`border shadow-md rounded-lg p-5 flex flex-col items-center
      
      ${studyTypeContent?.[item.type]==null && 'grayscale'}
    `}>
      {studyTypeContent?.[item.type]==null?
      <h2 className='p-1 px-2 bg-gray-500 text-white rounded-full text-[10px] mb-2'>Generate</h2>
      :<h2 className='p-1 px-2 bg-green-500 text-white rounded-full text-[10px] mb-2'>Ready</h2>}
      <Image src={item.icon} alt={item.name} width={50} height={50}/>
      <h2 className='font-medium mt-3'>{item.name}</h2>
      <p className='text-gray-500 text-sm text-center h-[4rem]'>{item.desc}</p>
      
      {studyTypeContent?.[item.type]==null?
      <Button className="mt-3 w-full " variant="outline" onClick={()=>GenerateContent()}>
        {loading && <RefreshCcw className="animate-spin" />}
        Generate</Button>
      :<Link  href={'/course/'+course?.courseId+item.path}><Button className="mt-3 w-full" variant="outline">View</Button></Link>}
    </div>
    
  )
}

export default MaterialCardItem
