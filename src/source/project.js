import React, { Component } from "react"
import { Container, Row, Col, CardBody,Card, CardTitle, ListGroup, ListGroupItem } from "reactstrap"

const Projects = () =>{
    return(
       
              <Container style={{paddingTop:80,fontSize:20,textAlign:"center"}} >
                  <Row>
                      <Col style={{paddingBottom:40}}>
                        <h1 style={{fontSize:50,float:"left"}}>Projects</h1>

                      </Col>
                      </Row>
                      <Row>
                      <Col style={{paddingBottom:20}}>
                        <Card style={{color:"black"}}>
                            <CardTitle>
                                Telegram-ChatBots
                            </CardTitle>
                            <CardBody>
                                <img src="https://cdn6.aptoide.com/imgs/0/2/e/02eaa83788a682de5d47c75291c8c2f7_icon.png?w=256" />
                            </CardBody>
                        </Card>
                      </Col>
                      <Col >
                        <Card style={{color:"black"}}>
                            <CardTitle>
                              Login-system

                            </CardTitle>
                            <CardBody>
                                <img src="https://www.aushidhi.org/images/login-img.png"style={{width:"200px" ,height:"200px"}} />
                            </CardBody>
                        </Card>
                      </Col>
</Row>
<Row>
                      <Col style={{paddingTop:20}}>
                        <Card style={{color:"black"}}>
                            <CardTitle>
                              Restaurant-Backend API
                            </CardTitle>
                            <CardBody>
                                <img src="https://imageog.flaticon.com/icons/png/512/45/45332.png"style={{width:"200px" ,height:"200px"}} />
                            </CardBody>
                        </Card>
                        
                      </Col>
                      <Col style={{paddingTop:20}}>
                        <Card style={{color:"black"}}>
                            <CardTitle>
                                TIC-TAC-TOE,ToDo Application
                            </CardTitle>
                            <CardBody>
                                <img src="https://lh3.googleusercontent.com/proxy/ED0CEKApufSEFLwguIZarcVMZzhRqv3GDZ2e-MzmeMQenQe84sEuE0AD0rQAEqUEXd1JOG3717Rh40d0_kEfJeao-G-aEW3-Q1ZzCXD-uL0ByNXGSc6E9Rc"style={{width:"200px" ,height:"200px"}} />
                            </CardBody>
                        </Card>
                      </Col>
</Row>
              </Container>
               
    )
}
export default Projects