import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { RefreshCcw, RefreshCw } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Link  from 'next/link'

function CourseCardItem({course}) {
  return (
    <div className="border rounded-lg p-5 shadow-md hover:shadow-lg transition duration-300 ease-in-out">
      <div>
        <div className="flex justify-between items-center">
            <Image src={'/knowledge.png'} alt="logo" width={50} height={50} />
            <h2 className="text-[15px] p-1 px-2 rounded-full bg-blue-600 text-white">Date</h2>
        </div>
        <h2 className="mt-3 text-lg font-medium">{course?.courseLayout?.courseTitle}</h2>
        <p className="text-sm line-clamp-2 text-gray-500 mt-2">{course?.courseLayout?.courseSummary}</p>
        <div className="mt-3">
            <Progress value={10} />
        </div>
        <div className="flex justify-end mt-3">
            {course?.status=='Generating'?
            <h2 className="text-sm p-1 px-2 rounded-full bg-gray-400 text-white flex gap-2 items-center"><RefreshCw className="h-5 w-5 animate-spin"/> Generating...</h2>
            :
            <Link href={'/course/'+course?.courseId}>
              <Button>View</Button>
            </Link>}
        </div>
      </div>
    </div>
  )
}

export default CourseCardItem
