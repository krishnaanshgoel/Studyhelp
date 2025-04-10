import { db } from "@/configs/db";
import { CHAPTER_NOTES_TABLE } from "@/configs/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req){
    const {courseId, studyType}= await req.json();

    if(studyType=='ALL'){
        const notes=await db.select().from(CHAPTER_NOTES_TABLE)
        .where(eq(CHAPTER_NOTES_TABLE?.courseId,courseId));

        //create all other tpes(flashcard, etc etc), not done for now

        const result={
            notes:notes,
            flashCard:null,
            quiz:null,
            aq:null
        }
        return NextResponse.json(result);
    }
    else if(studyType=='notes'){
        const notes=await db.select().from(CHAPTER_NOTES_TABLE)
        .where(eq(CHAPTER_NOTES_TABLE?.courseId,courseId));

        return NextResponse.json(notes);
    }
}