import React from 'react'
import {Menu } from 'semantic-ui-react'

export default function Sidebar() {
    return (
        <div>


            
<Menu vertical size="medium">
        <Menu.Item>
          <Menu.Header>Candidates</Menu.Header>

          
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Companies</Menu.Header>

          <Menu.Menu>
          
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Employees</Menu.Header>

         
          
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Support</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='email'
              
            >
              E-mail Support
            </Menu.Item>

            <Menu.Item
              name='faq'
             
            >
              FAQs
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Menu>
          
        </div>
    )
}
