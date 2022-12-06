import React, { useState } from 'react';
import { Button, Select, Form,Icon ,Input ,Message} from 'semantic-ui-react'
import axios from "axios";
import { useNavigate ,Link } from 'react-router-dom';
import { API } from '../config'

const options = [
    { key: 'au', text: 'Author', value: 1 },
    { key: 'ed', text: 'Editor', value: 2},
    { key: 'su', text: 'Subscriber', value: 3 },
    { key: 'ad', text: 'Administrator', value: 4 },
  ]
const Create = () => {
    const navigate = useNavigate();
    const [userName, setuserName] = useState('');
    const [userEmail, setuserEmail] = useState('');
    const [userRole, setuserRole] = useState('');
    const [errorList, setusererror] = useState(null);
    const [successData, setsuccessData] = useState(null);
    
    const postData = () => {
            axios.post(`${API}user`, {
                    name: userName,
                    email: userEmail,
                    role_id:userRole
                }).then((response) => {
                  
                    if(!response.data.success){
                        console.log(response.data);
                        setusererror(response.data)
                        
                    }else{
                        setsuccessData(response.data)
                        let  userid =response.data.data;
                        navigate(`/profile/${userid}`);


                    }
      });
           
         
    }
    const setRole = (e,data) =>{
       
        setuserRole(data)
    }
   

    return (
    <div className="main">
      <h2 className="main-header">React  <Button><Link to="/list">all  users</Link></Button>  </h2>
        <div>
        {(errorList!=null && errorList.success=== false ) && 
         <Message negative>
            <Message.Header>{errorList.message}</Message.Header>
            {
                Object.entries(errorList.data).map(([key, value]) => (
                    <div key={key}>{value}</div>
                ))
            }
        </Message>
         }
         {(successData!=null && successData.success=== true ) && 
           <Message
           success
           header='Your user registration was successful'
         
         />
         }
        
        

            <Form>
                <Form.Field>
                    <label>Email Address</label>
                <Input iconPosition='left' placeholder='Email Address'>
                    <Icon name='at' />
                        <input  onChange={(e) => setuserEmail(e.target.value)} />
                    </Input>
                </Form.Field>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name'  onChange={(e) => setuserName(e.target.value)}  />
                </Form.Field>
                <Form.Field>
                    <label>Role</label>
                    <Select placeholder='Select your country'  options={options}   onChange={(e,data) => setRole(e,data.value)} />
                </Form.Field>
                <Button type='submit'  onClick={postData}  >Submit</Button>
               
            </Form>
    </div>
</div>
) }

export default Create;