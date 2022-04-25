import { Box } from "@mui/material";
import { Route, Switch } from "react-router-dom";
import Page1 from "../Pages/Page1";
import Page2 from "../Pages/Page2";
import Page3 from "../Pages/Page3";
import Page4 from "../Pages/Page4";
import Dpage1 from "../Pages/dpage1";
import Dpage2 from "../Pages/dpage2";
import Dpage3 from "../Pages/dpage3";
export default function ListRouter() {
  return (
    <Box>
      <Switch>
        <Route path="/" exact>
          <Page1 />
        </Route>
        <Route path="/DiabeticComplications">
          <Page2 />
        </Route>
        <Route path="/DNS Score">
          <Page3 />
        </Route>
        <Route path="/RutherfordGrade">
          <Page4 />
        </Route>
        <Route path="/TCPO2">
          <Dpage1 />
        </Route>
        <Route path="/Probe to bone test">
          <Dpage2 />
        </Route>
        <Route path="/Radiography Findings">
          <Dpage3 />
        </Route>
      </Switch>
    </Box>
  );
}
