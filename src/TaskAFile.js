import { Button } from "bootstrap";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const data = {

    "question": "What is your favorite programming language?",
  
    "choices": [
  
      { "id": 1, "label": "JavaScript", "votes": 0 },
  
      { "id": 2, "label": "Python", "votes": 0 },
  
      { "id": 3, "label": "Java", "votes": 0 },
  
      { "id": 4, "label": "C#", "votes": 0 }
  
    ]
}

export function PollDisplay(){

    const navigate = useNavigate()

    return<>
    <div>Question: {data.question}</div>
    {data.choices.map((data2)=> <li key={data2.id}>{data2.label} : Total Votes till {data2.votes}</li>)}
    <button onClick={()=>{navigate('/context')}}>Enter Context</button>
    </>
}

export default function UserParti(){

    const navigate = useNavigate()

    const [votes, setVotes] = useState(0)
    const [votes2, setVotes2] = useState(0)
    const [votes3, setVotes3] = useState(0)
    const [votes4, setVotes4] = useState(0)
    
    function voteClick(choiceId) {
        if(choiceId==1){
            setVotes(votes+1)
        }else if(choiceId==2){
            setVotes2(votes2+1)
        }else if(choiceId==3){
            setVotes2(votes3+1)
        }else if(choiceId==4){
            setVotes2(votes4+1)
        }
    }


    return(<>
    <h2>Inside User Participant</h2>
    <form>
    <div>Question: {data.question}</div>
    {data.choices.map((data2)=> {return<div><input type="radio"></input><li key={data2.id} onClick={() => voteClick(data2.id)}>
        {data2.label} : Total Votes: {data2.votes}
        </li>
        </div>})}

        <button onClick={()=>{navigate('/thankyou')}}>Submit</button>
        
    </form>
    </>)


}

export function ThankYouCom(){

    const navigate = useNavigate()

    return <>
    <h1>Thank You for Submission</h1>
    <div>Question: {data.question}</div>
    {data.choices.map((data2)=> <li key={data2.id}>{data2.label} : Total Votes till {data2.votes}</li>)}
    </>
}