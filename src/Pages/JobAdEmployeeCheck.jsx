
import { Table, Container, Button } from "semantic-ui-react";
import React,{useState,useEffect} from 'react'
import JobAdvertService from '../Services/jobAdvertService';



export default function JobAdEmployeeCheck() {

let changeConfirmFalseToTrue = (jobAdvertId) =>{
    let jobAdvertService = new JobAdvertService();
    jobAdvertService.changeConfirmFalseToTrue(jobAdvertId);
    window.location.reload();
}
   
let jobAdvertDelete = (jobAdvertId) =>{

    let jobAdvertService = new JobAdvertService();
    jobAdvertService.jobAdvertDelete(jobAdvertId)
    window.location.reload();
}

    const [jobAdverts, setjobAdverts] = useState([])

    useEffect(() => {
        
        let jobAdvertService = new JobAdvertService();
        jobAdvertService.getAllByJobAdvertIsConfirmedFalse().then((result)=> {setjobAdverts(result.data.data) })
    }, [])
    
    return (
        <div>
         <Container>
         <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>  Şirket Adı  </Table.HeaderCell>
        <Table.HeaderCell>İş Pozisyonu</Table.HeaderCell>
        <Table.HeaderCell>Şehir</Table.HeaderCell>
        <Table.HeaderCell>Açık Pozisyon</Table.HeaderCell>
        <Table.HeaderCell>Çalışma Şekli</Table.HeaderCell>
        <Table.HeaderCell>İş Tipi</Table.HeaderCell>
        <Table.HeaderCell>Minimum Maaş</Table.HeaderCell>
        <Table.HeaderCell>Maximum Maaş</Table.HeaderCell>
        <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
        <Table.HeaderCell>Açıklama</Table.HeaderCell>
        <Table.HeaderCell>Ekle & Sil</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
     {jobAdverts.map((jobAdvert,key)=> (
     <Table.Row key={key}>
        <Table.Cell>{jobAdvert.company.companyName}</Table.Cell>
        <Table.Cell>{jobAdvert.job?.jobName}</Table.Cell>
        <Table.Cell>{jobAdvert.city.cityName}</Table.Cell>
        <Table.Cell>{jobAdvert.openPositon}</Table.Cell>
        <Table.Cell>{jobAdvert.workingStyle.workingStyleName}</Table.Cell>
        <Table.Cell>{jobAdvert.workingType.workingTypeName}</Table.Cell>
        <Table.Cell>{jobAdvert.salaryMin}</Table.Cell>
        <Table.Cell>{jobAdvert.salaryMax}</Table.Cell>
        <Table.Cell>{jobAdvert.lastApplyDate}</Table.Cell>
        <Table.Cell collapsing >{jobAdvert.jobDesription}</Table.Cell>
        <Table.Cell><Button onClick={()=> jobAdvertDelete(jobAdvert.jobAdvertId)} color="red" floated ="right"> Sil</Button>
        <Button onClick={()=> changeConfirmFalseToTrue(jobAdvert.jobAdvertId)} color="green" floated ="right">Onay</Button>
        </Table.Cell>
      </Table.Row>  
      ))}
      
      
    </Table.Body>
  </Table>
  </Container>
        </div>
    )
}
