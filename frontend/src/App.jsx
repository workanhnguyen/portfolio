import React from "react";

import { Container, Divider, Grid } from "@mui/material";

import {
  Category,
  Contacts,
  Education,
  LanguageSetting,
  Overview,
  Projects,
  Skills,
  UserCard,
} from "./components";
import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const { categoryIndex } = useStateContext();

  return (
    <div
      className="w-full h-screen flex justify-center items-center fixed bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url(./src/assets/bg.jpg)" }}
    >
      <Container maxWidth="lg">
        <div className="sm:px-6 sm:py-4 bg-white rounded-md overflow-hidden">
          <Grid container>
            {/* Category section */}
            <Grid item xs sm={0} md={3}>
              <div className="max-sm:hidden w-full h-full flex-1 flex">
                <div className="w-full flex flex-col justify-between">
                  {/* Category section */}
                  <Category />
                  {/* Language setting */}
                  <LanguageSetting />
                </div>
                <div className="mx-5">
                  <Divider orientation="vertical" />
                </div>
              </div>
            </Grid>

            {/* Contents */}
            <Grid item xs={12} sm={12} md={9}>
              <div className="w-full h-160 max-sm:p-4 flex flex-col overflow-auto">
                <UserCard />
                <div className="max-sm:hidden w-full flex flex-col mt-5">
                  {categoryIndex === 1 && <Overview />}
                  {categoryIndex === 2 && <Education />}
                  {categoryIndex === 3 && <Skills />}
                  {categoryIndex === 4 && <Projects />}
                  {categoryIndex === 5 && <Contacts />}
                </div>
                <div className="sm:hidden">
                  <Overview />
                  <Divider variant="middle" sx={{ marginY: 3 }} />
                  <Education />
                  <Divider variant="middle" sx={{ marginY: 3 }} />
                  <Skills />
                  <Divider variant="middle" sx={{ marginY: 3 }} />
                  <Projects />
                  <Divider variant="middle" sx={{ marginY: 3 }} />
                  <Contacts />
                  <Divider variant="middle" sx={{ marginY: 3 }} />
                  <LanguageSetting />
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default App;
