import React,{ useState } from 'react'
// import { Card, Icon, Image } from 'semantic-ui-react'
import {  Grid, Card,Icon } from 'semantic-ui-react'
import {useParams} from "react-router-dom";
import axios from "axios";
import { API } from '../config'
const Profile = () => {
    let { id } = useParams();
    const [userinfo,setuserInfo]= useState(null);
    React.useEffect(() => {
        axios.get(`${API}user/${id}`).then((response) => {
            setuserInfo(response.data.data);
          
            
        });
      }, []);
      if (!userinfo) return null; 
      return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
           <Card className='info'>
            <Card.Content>
            <Card.Header><p>{userinfo.name}</p></Card.Header>
           <Card.Meta>
                <span className='date'>{userinfo.created_at}</span>
           </Card.Meta>
            <Card.Description>
            {userinfo.name}
           </Card.Description>
            </Card.Content>
             <Card.Content extra>
             <a>
             <Icon name='user' />
                 {userinfo.roles.role_name}
             </a>
             </Card.Content>
         </Card>
     
    </Grid.Column>
  </Grid>
      );
    // return (
    //     <Card className='info'>
    //         <Card.Content>
    //         <Card.Header><p>{userinfo.name}</p></Card.Header>
    //         <Card.Meta>
    //             <span className='date'>{userinfo.created_at}</span>
    //         </Card.Meta>
    //         <Card.Description>
    //         {userinfo.name}
    //         </Card.Description>
    //         </Card.Content>
    //         <Card.Content extra>
    //         <a>
    //             <Icon name='user' />
    //             {userinfo.roles.role_name}
    //         </a>
    //         </Card.Content>
    //     </Card>
    // );
}
  


export default Profile;
