import React from "react";
import { Container,Row,Col } from "reactstrap";

const Footer = () =>{
    return(
        <Container>
            <Row>
                <Col style={{paddingTop:"50px",paddingBottom:"50px",textAlign:"center"}}>
                 <span>Designed by <a href="https://github.com/Jayanthputhalapattu">JAYANTH PUTHALAPATTU</a> </span>
                </Col>
            </Row>
        </Container>
    )
}
export default Footer