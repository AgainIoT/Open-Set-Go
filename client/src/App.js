import { StyledEngineProvider } from "@mui/styled-engine";
import { RecoilRoot } from "recoil";
import Router from "./core/router";
import GlobalStyle from "./styles/globalStyle";
import "./App.css";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <RecoilRoot>
        <GlobalStyle />
        <Router />
      </RecoilRoot>
    </StyledEngineProvider>
  );
}

export default App;
