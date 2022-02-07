import React, { useState } from "react"
import { Form, Col, Row, InputGroup, FormControl, Button, Image} from "react-bootstrap"
import * as d3 from 'd3'
import './Stratification.css'

let placeholder = 'https://raw.githubusercontent.com/nafiul-nipu/lanet-interface/master/src/images/placeholder.png'
// let perc = null;
// let risk = null;
export const Stratification = ({
    lowRef,
    upRef,
    risk,
    perc,
    riskCalculation,
    riskRef
}) =>{
    const onButtonClick = () =>{
        riskCalculation()
        handleChange()
    }

    const handleChange = () =>{
        console.log(riskRef.current.value)
        console.log(upRef.current.value)
        console.log(lowRef.current.value)
    }


    return (
        <Col className='strat' md='4' id="stratback" style={
            {marginLeft:"1%", width:"31%"}}>
            <Row>
                {/* <Col md='10' id="back"> */}
                    <h4 className='d-flex justify-content-center'>Stratification</h4>
                    <Row>
                    <Form.Group controlId="formGridState">
                        <Form.Label>Select Risk Prediction</Form.Label>
                        <Form.Select defaultValue="OS" ref={riskRef} onChange={handleChange}>
                        <option value='OS'> Overall Survival (OS) </option>
                        <option value='LC'> Local Control (LC) </option>
                        <option value='RC'> Regional Control (RC) </option>
                        </Form.Select>
                    </Form.Group>
                    </Row>
                    <Row>
                        <InputGroup className="mb-3" style={{width: '65%', left: '17%'}}>
                            <InputGroup.Text id="basic-addon1">Lower mortality risk</InputGroup.Text>
                            <FormControl
                            aria-label="lower"
                            aria-describedby="basic-addon1"
                            id="lowRef"
                            ref={lowRef}
                            defaultValue={5}
                            />
                            <InputGroup.Text id="basic-addon1">%</InputGroup.Text>
                        </InputGroup>
                    </Row>
                    
                    <Row>
                        <InputGroup className="mb-3" style={{width: '65%', left: '17%'}}>
                            <InputGroup.Text id="basic-addon2">Upper mortality risk</InputGroup.Text>
                            <FormControl
                            aria-label="upper"
                            aria-describedby="basic-addon2"
                            id="upRef"
                            ref={upRef}
                            defaultValue={20}
                            />
                            <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
                        </InputGroup>
                    </Row>
                    
                    <Button variant="primary" 
                        onClick={onButtonClick}
                        style={{width: '15%', marginLeft: '56%'}}
                    >
                        Submit
                    </Button>
                {/* </Col> */}
            </Row>
            <Row className='survivalImage'>
                <Image src={placeholder} fluid />
            </Row>
            {
                risk !== null && 
                <Row style={{marginLeft: '31%'}}>
                    <p><b>New Patient has: </b></p>
                    <p><b>{risk}</b> mortality risk ({perc}%)</p>
                </Row>

            }
        </Col>
    )
}