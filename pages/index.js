import styled from 'styled-components';
import {Brand} from 'components/brand'
import { Button } from 'ui/buttons';
import Image from 'next/image'
import Link from 'next/link'

const LinksContainer = styled.div`
max-width: 320px;
margin: 2rem auto;
display:flex;
flex-direction: column;
justify-content: center;
button{
  margin-bottom: 1rem;
  font-size:1.125rem;
}
`;

const PageHeader = styled.header`
  text-align: center;
  color:#222b37;
  p{
    margin:0.5rem;

  }
  .brand{
    margin-top:2rem;
     h1{
       margin-bottom: -2rem;
     }
  }
  li{
    color:#646f79;
        font-weight: 200;
        font-size: 1.5rem;
      }
`;

function index(props) {
    return (
      <>
       <PageHeader>
      <Brand className="brand" width="148" size="5rem"   display="column"  />      
           <p>Official task management tool for tools</p>
           <LinksContainer>
           <Link href="/login" passHref>
            <Button bgcolor="#0fa9ec" color="#ffffff">New user account setup</Button>
          </Link>
           <Link href="/login" passHref>
            <Button bgcolor="#0071e3" color="white">Current user account login</Button>
           </Link>
          </LinksContainer>
            <ul>              
            <li>No Credit Card Required</li>
            <li>Upgrade your account at anytime</li>
            </ul>
       </PageHeader>
      </>
    );
  }
  
  export default index;
  
