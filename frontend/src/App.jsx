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
        <div className="px-6 py-4 bg-white rounded-md">
          <Grid container>
            {/* Category section */}
            <Grid item xs={0} sm={3}>
              <div className="h-full flex-1 flex">
                <div className="w-full flex flex-col justify-between">
                  {/* Category section */}
                  <div>
                    <h1 className="ml-1.5 mb-4 text-2xl font-bold">
                      PORTFOLIO
                    </h1>
                    <Category />
                  </div>
                  {/* Language setting */}
                  <LanguageSetting />
                </div>
                <div className="mx-5">
                  <Divider orientation="vertical" />
                </div>
              </div>
            </Grid>

            {/* Contents */}
            <Grid item xs={12} sm={9}>
              <div className="w-full h-160 flex flex-col overflow-auto">
                <UserCard />
                <div className="w-full flex flex-col mt-5">
                  {categoryIndex === 1 && <Overview />}
                  {categoryIndex === 2 && <Education />}
                  {categoryIndex === 3 && <Skills />}
                  {categoryIndex === 4 && <Projects />}
                  {categoryIndex === 5 && <Contacts />}
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
