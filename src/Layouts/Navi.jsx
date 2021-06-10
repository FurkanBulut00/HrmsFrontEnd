import React from 'react'
import { Button, Dropdown, Menu, Container,Segment } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>


    
        <Segment inverted>
    <Menu size='large' inverted>
    <Container >
        <Menu.Item
          name='home'
        
        />
       

        <Menu.Menu position='right'>
          <Dropdown item text='Job Adverts'>
            <Dropdown.Menu>
              <Dropdown.Item>Job Adverts</Dropdown.Item>
              
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button secondary>Sign Up</Button>
          </Menu.Item>
          <Menu.Item>
            <Button secondary>Sign In</Button>
          </Menu.Item>
        </Menu.Menu>
        </Container>    
      </Menu>
      </Segment>
     


        </div>
    )
}
