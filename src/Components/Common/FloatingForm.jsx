import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';



const handleSubmitType = (e) => {
    if(this.submitType === 'Deposit') {

    }else if(this.submitType === 'Withdraw') {

    }
}
const FloatingForm = (props) => {

      return (
          <Form > 
            <InputGroup className="mb-3">
                <InputGroup.Text>{props.inputGroupLabel}</InputGroup.Text>
                <Form.Control aria-label="Amount (to the nearest dollar)" />
            </InputGroup>
            <Button variant="primary" onSubmit={handleSubmitType}>
                {props.submitType}
            </Button>
          </Form>
      )
}    

export default FloatingForm;