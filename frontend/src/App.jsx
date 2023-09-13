import React from "react";

import { Avatar, Container, Divider, Grid } from "@mui/material";

import { avatar } from "./assets";
import { Category, Education, Overview, Skills } from "./components";
import user from "./data/user";
import { useStateContext } from "./contexts/ContextProvider";

const userInfo = user[0];

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
            {/* Categories */}
            <Grid item xs={0} sm={3} md={4} lg={3}>
              <div className="h-full flex-1 flex">
                <div className="w-full flex flex-col">
                  <h1 className="ml-1.5 mb-4 text-2xl font-bold">PORTFOLIO</h1>
                  <Category />
                </div>
                <div className="mx-5">
                  <Divider orientation="vertical" />
                </div>
              </div>
            </Grid>

            {/* Contents */}
            <Grid item xs={12} sm={9} md={8} lg={9}>
              <div className="w-full h-150 flex flex-col overflow-auto">
                {/* User information */}
                <div className="w-full flex items-center">
                  <Avatar src={avatar} sx={{ width: 60, height: 60 }} />
                  <div className="flex-1 flex flex-col justify-center ml-3">
                    <h1 className="text-xl uppercase font-semibold">
                      {userInfo.lastName} {userInfo.firstName}
                    </h1>
                    <p className="text-gray-500">{userInfo.onPosition}</p>
                  </div>
                </div>
                {/* Main content */}
                <div className="w-full flex flex-col mt-5">
                  {categoryIndex === 1 && <Overview />}
                  {categoryIndex === 2 && <Education />}
                  {categoryIndex === 3 && <Skills />}
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
