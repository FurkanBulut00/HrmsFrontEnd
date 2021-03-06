import React from 'react'
import { Grid } from 'semantic-ui-react'
import Employees from '../Pages/Employees'
import JobAdEmployeeCheck from '../Pages/JobAdEmployeeCheck'
import JobAdverts from '../Pages/JobAdverts'
import Sidebar from './Sidebar'


export default function Dashboard() {
    return (
        <div>

            <Grid>
                <Grid.Row>

                    <Grid.Column width="4">

                    <Sidebar/>
                    </Grid.Column>


                    <Grid.Column width ="12">

                        {/* <JobAdverts/> */}
                        <JobAdEmployeeCheck/>

                    </Grid.Column>

                </Grid.Row>


            </Grid>
            
        </div>
    )
}
