import { ThemeProvider } from "styled-components"
import GlobalStyles from "../styles/globalCss"
export default function App({ Component, pageProps }) {
  return (
    <>    
        <GlobalStyles/>
        <Component {...pageProps} /> 
    </>
  )
}