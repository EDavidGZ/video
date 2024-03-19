import React from 'react'
import '../Home/home.css'
import { useNavigate } from 'react-router-dom';

import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import IconButton from '@mui/joy/IconButton';
import MoreVert from '@mui/icons-material/MoreVert';
import Avatar from '@mui/joy/Avatar';
import Face3Icon from '@mui/icons-material/Face3';
import Button from '@mui/joy/Button';


const Navar = () => {

    const navigate = useNavigate();

    const redirect = (topic) => {

        if (topic == "ubicationTest") {
            navigate("/ubicationTest")
        }

        if (topic == "lessonsA1") {
            navigate("/lessonsA1")
        }
    }


    return (
        <nav className='home-hearder'>
            <div>
                <Avatar
                    variant="plain"
                    color="warning"

                ><Face3Icon /></Avatar>
            </div>
            <div>
                <Dropdown>
                    <MenuButton color="primary" variant="plain">Test</MenuButton>
                    <Menu>
                        <Button
                            variant='plain'
                            color='primary'
                            size='md'
                            onClick={() => redirect("ubicationTest")}
                        >Ubication Tests</Button>
                    </Menu>
                </Dropdown>
            </div>

            <div>
                <Dropdown>
                    <MenuButton color="danger" variant="plain">Activities</MenuButton>
                    <Menu>
                    <Button
                            variant='plain'
                            color='primary'
                            size='md'
                            onClick={() => redirect("ubicationTest")}
                        >Ubication Tests</Button>

                        <Button
                            variant='plain'
                            color='primary'
                            size='md'
                            onClick={() => redirect("ubicationTest")}
                        >Ubication Tests</Button>

                        <Button
                            variant='plain'
                            color='primary'
                            size='md'
                            onClick={() => redirect("ubicationTest")}
                        >Ubication Tests</Button>
                        
                    </Menu>
                </Dropdown>
            </div>

            <div>
                <Dropdown>
                    <MenuButton color="neutral" variant="plain">Lessons</MenuButton>
                    <Menu>
                    <Button
                            variant='plain'
                            color='neutral'
                            size='md'
                            onClick={() => redirect("lessonsA1")}
                        >A1-A2</Button>

                        <Button
                            variant='plain'
                            color='neutral'
                            size='md'
                            onClick={() => redirect("ubicationTest")}
                        >B1-B2</Button>

                        <Button
                            variant='plain'
                            color='neutral'
                            size='md'
                            onClick={() => redirect("ubicationTest")}
                        >C1-C2</Button>
                    </Menu>
                </Dropdown>


            </div>
            <div>
                <Dropdown>
                    <MenuButton
                        slots={{ root: IconButton }}
                        slotProps={{ root: { variant: 'outlined', color: 'warning' } }}
                    >
                        <MoreVert />
                    </MenuButton>
                    <Menu>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>My account</MenuItem>
                        <MenuItem>Logout</MenuItem>
                    </Menu>
                </Dropdown>
            </div>


        </nav>
    )
}

export default Navar
