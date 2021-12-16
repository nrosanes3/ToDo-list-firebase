import { AppBar } from "components/appbar"
import { LoginStatus } from "components/authentication/login-status/styles"
import { GitHubProvider, GoogleProvider } from "components/authentication/providers"
import { Title } from "ui/title"
import { Spacer } from "ui/spacers"
import {UserLogin} from "components/authentication/user-login"
import { Legal, HighLight } from "ui/legal"
import {PageLayout, PageHeader, PageFooter, PageBody} from 'layouts/loginpage'
import { UserLoginStatus } from "components/authentication/login-status"

function index (){
    return(
        <>
            <AppBar/>
            <PageLayout>
                <PageHeader>
                <Title>Account Login</Title>
                </PageHeader>
            <PageBody>
                <GoogleProvider style={{marginBottom:"1.5rem"}}>With Google</GoogleProvider>
                <GitHubProvider>With Github</GitHubProvider>
                <Spacer className="spacing" >OR</Spacer>
                <UserLogin/>
            </PageBody>             
            <PageFooter>
                    <Legal>Legal Stuff  <HighLight>Terms and Conditions</HighLight></Legal>
            </PageFooter>

            </PageLayout>
        </>
    )
} 
export default index