import React, { useState, useEffect } from 'react'
import { Table, Header } from 'semantic-ui-react'
import CompanyService from '../Services/companyService';

export default function Companies() {
    
  const [companies, setCompanies] = useState([]);

    useEffect(()=>{


        let companyService = new CompanyService();
        companyService.getCompanies().then(result=>setCompanies(result.data.data))


    },[])
  
  
  
  
  const colors = [
       
        'black',
      ]
    return (


<div>
            <Header as='h4' textAlign='left' size="huge">
      Companies
    </Header>
            
            {colors.map((black) => (
      <Table color={black} key={black} inverted size="large">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Website</Table.HeaderCell>
            <Table.HeaderCell>Phone Number</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {companies.map(company=>(
          <Table.Row>
            <Table.Cell>{company.companyName}</Table.Cell>
            <Table.Cell>{company.webSite}</Table.Cell>
            <Table.Cell>{company.phoneNumber}</Table.Cell>
            <Table.Cell>{company.email}</Table.Cell>
          </Table.Row>
          ))}
          
         
        </Table.Body>
      </Table>
    ))}


        </div>
    )
}
