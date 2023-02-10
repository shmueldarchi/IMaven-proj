import React from 'react'
import { useSelector } from 'react-redux';
import QuestionTicket from './question-ticket';
import './question-ticket.css';

function QuestionTicketView() {
    const queriesList = useSelector(((state) => { return state.queries.value }));
    return (queriesList?.queries) ? (
        <div style={{display: 'flex'}}>
            {queriesList?.queries.map((questionnarie) => 
             
                <div style={{width:'10vw', marginLeft:'3vw', marginTop:'3vh'}}>
                <QuestionTicket id = {questionnarie.id}name={questionnarie.name} category = {questionnarie.category}/>
                <h4 className='ticket-name'>{questionnarie.name}</h4>
                <div className='boards-number'>{questionnarie?.questions?.length} Boards</div>
                </div>

            )
            }
        </div>


    ) : "Please enter your first MAVEN questionnarie"
}

export default QuestionTicketView