import React, { useState, useEffect } from 'react'
import { Table, Header } from 'semantic-ui-react'
import EmployeeService from '../Services/employeeService';

export default function Employees() {
    
  const [employees, setEmployees] = useState([]);

    useEffect(()=>{


        let employeeService = new EmployeeService();
        employeeService.getEmployees().then(result=> setEmployees(result.data.data))
       

    },[])
  
  const colors = [
       
        'black',
      ]
    return (

        
        <div>
             <Header as='h4' textAlign='left' size="huge">
      Employees
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
          {employees.map(employee=>(
          <Table.Row>
            <Table.Cell>{employee.firstName}</Table.Cell>
            <Table.Cell>{employee.lastName}</Table.Cell>
            <Table.Cell>{employee.email}</Table.Cell>
          </Table.Row>
          
          ))}
          
         
        </Table.Body>
      </Table>
    ))}


        </div>
    )
}
