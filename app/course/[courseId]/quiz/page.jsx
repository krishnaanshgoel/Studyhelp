"use client"
import axios from 'axios'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import StepProgress from '../_components/StepProgress';
import QuizCardItem from './_components/QuizCardItem';

function Quiz() {
    const {courseId}=useParams();
    const [quizdata,setQuizdata]=useState();
    const [quiz,setQuiz]=useState([]);
    const [stepCount,setStepCount]=useState(0);
    const [correctAns,setCorrectAns]=useState(null);
    useEffect(()=>{
        GetQuiz();
    },[])
    const GetQuiz=async ()=>{
        const res=await axios.post('/api/study-type',{
            courseId:courseId,
            studyType:'Quiz',
        })
        setQuizdata(res.data);
        setQuiz(res.data.content.questions)
        console.log(res.data.content[0])
    }
    const checkAnswer=(userSelectedOption,quiz)=>{
        if(userSelectedOption==quiz.correctAnswer){
            setCorrectAns(true);
        }
        else{
            setCorrectAns(false);
        }
    }
    useEffect(()=>{
        setCorrectAns(null)
    },[stepCount])
    
  return (
    <div>
      <h2 className="font-bold text-2xl">Quiz</h2>
      <StepProgress stepCount={stepCount} setStepCount={(v)=>{setStepCount(v)}} data={quiz}/>
      <div>
            <QuizCardItem quiz={quiz[stepCount]} userSelectedOption={(v)=>{checkAnswer(v,quiz[stepCount])}}></QuizCardItem>
      </div>
     

       {correctAns==false && <div>
        <div className="border p-3 border-red-700 bg-red-200 rounded-lg">
            <h2 className="font-bold text-lg text-red-600">Incorrect</h2>
            <p className="text-red-600">Correct ans is : {quiz[stepCount].correctAnswer}</p>
            </div>
        </div>}

        {correctAns==true && <div>
           <div className="border p-3 border-green-700 bg-green-200 rounded-lg">
            <h2 className="font-bold text-lg text-green-600">Correct</h2>
            <p className="text-green-600">Your Answer is Correct</p>
            </div>
        </div>}


    </div>
  )
}

export default Quiz
