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

    // const [votes, setVotes] = useState({

    // })

    function voteClick(choiceId) {
        // setVotes(data.choices[choiceId] + 1);
        // console.log(votes)
    }


    return(<>
    <h2>Inside User Participant</h2>
    <form>
    <div>Question: {data.question}</div>
    {data.choices.map((data2)=> {return<div><input type="radio"></input><li key={data2.id} onClick={() => voteClick(data2.id)}>
        {data2.label} : Total Votes: {data2.votes}
        </li>
        </div>})}

        <button>Submit</button>
        
    </form>
    </>)


}