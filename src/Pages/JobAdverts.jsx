import React, { useState, useEffect } from 'react'
import { Table, Header } from 'semantic-ui-react'
import JobAdvertService from '../Services/jobAdvertService';

export default function JobAdverts() {
    
  
  const [jobAdverts, setJobAdverts] = useState([])
  
  
  useEffect(()=>{


    let jobAdvertService = new JobAdvertService();
    jobAdvertService.getJobAdverts().then(result =>setJobAdverts(result.data.data))





  },[])


  const colors = [
       
        'black',
      ]
    return (

        
        <div>
            
            <Header as='h3' textAlign='left' size="huge">
      Job Adverts
    </Header>
            {colors.map((black) => (
      <Table color={black} key={black} inverted size="large">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Job Position</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Open Position</Table.HeaderCell>
            <Table.HeaderCell>Application End</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdverts.map(jobAdvert =>( 
          
          <Table.Row>
            <Table.Cell>{jobAdvert.company.companyName}</Table.Cell>
            <Table.Cell>{jobAdvert.job.id}</Table.Cell>
            <Table.Cell>{jobAdvert.city.cityId}</Table.Cell>
            <Table.Cell>{jobAdvert.openPositon}</Table.Cell>
            <Table.Cell>{jobAdvert.lastApplyDate}</Table.Cell>
          </Table.Row>))}
         
         
        </Table.Body>
      </Table>
    ))}


        </div>
    )
}
