import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const NavBar = () => {
    return(
        <Navbar bg="dark" variant="light" activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
            <Nav.Item>
                <Nav.Link href="/home">home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">shop</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">competition</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-3">news</Nav.Link>
            </Nav.Item>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
            </Form>
        </Navbar>
    );
}

export default NavBar;