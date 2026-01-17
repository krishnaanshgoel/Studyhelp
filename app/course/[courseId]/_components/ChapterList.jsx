import Link from 'next/link';
import React from 'react';
 
function ChapterList({ course }) {
  const CHAPTERS = course?.courseLayout?.chapters;

  return (
    <div className='mt-5'>
      <h2 className='font-medium text-xl'>Chapters</h2>

      <div className='mt-2'>
        {CHAPTERS?.map((chapter, index) => (
          <Link 
            /*href={'/course/'+course.courseId+'/'+chapter.chapterTitle}  key={index}>*/
            href={`/course/${course.courseId}/chapter/${index + 1}`}
            key={index}
            >
          <div className= 'flex gap-5 items-center p-4 border shadow-md mb-2 rounded-lg cursor-pointer'>
            <h2 className='text-2xl'>{chapter?.emoji}</h2>
            <div>
              <h2 className='font=medium'>{chapter?.chapterTitle}</h2>
              <p className='text-gray-400 text-sm'>{chapter?.chapterSummary}</p>
            </div>
          </div>
          </Link>   
        ))}
      </div>
    </div>
  );
}

export default ChapterList;
