import React, { useState, useEffect } from 'react'
import { Table, Header } from 'semantic-ui-react'
import CandidateService from '../Services/candidateService';


export default function Candidates() {
   

  const [candidates, setCandidates] = useState([])


  useEffect(()=>{

    let candidateService = new CandidateService();
    candidateService.getCandidates().then(result=>setCandidates(result.data.data))
    


  },[])

    const colors = [
       
        'black',
      ]
    return (

        
        <div>

<Header as='h4' textAlign='left' size="huge">
      Candidates
    </Header>
            
            {colors.map((black) => (
      <Table color={black} key={black} inverted size="large">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {candidates.map(candidate =>(
            <Table.Row>
            <Table.Cell>{candidate.firstName}</Table.Cell>
            <Table.Cell>{candidate.lastName}</Table.Cell>
            <Table.Cell>{candidate.email}</Table.Cell>
          </Table.Row>
          ))}
          
         
        </Table.Body>
      </Table>
    ))}


        </div>
    )
}
