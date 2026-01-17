"use client"
import { Button } from '@/components/ui/button';
import { useParams } from 'next/navigation'
import React from 'react'

function page({setState}) {
    const {chapterTitle}=useParams();
  return (
    <div>
       Hello {chapterTitle}
       <Button onClick={()=>setState(true)}>Mark as Done</Button>
    </div>
  )
}

export default page  