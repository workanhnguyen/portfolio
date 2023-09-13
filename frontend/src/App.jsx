import React from "react";

import { Avatar, Container, Divider, Grid, Typography } from "@mui/material";
import { Category } from "./components";
import user from "./data/user";

const userInfo = user[0];

const App = () => {
  return (
    <div
      className="w-full h-screen flex justify-center items-center fixed bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url(./src/assets/bg.jpg)" }}
    >
      <Container maxWidth="lg">
        <div className="p-4 bg-white rounded-md">
          <Grid container>
            {/* Categories */}
            <Grid item xs={0} sm={3} md={4} lg={3}>
              <h1 className="ml-1.5 mb-4 text-2xl font-bold">PORTFOLIO</h1>
              <Category />
            </Grid>

            <Grid item xs={0} marginX={3}>
              <Divider orientation="vertical" />
            </Grid>

            {/* Contents */}
            <Grid item xs={12} sm={8} md={7} lg={8}>
              <div className="w-full h-150 flex flex-col overflow-auto">
                <div className="w-full flex items-center">
                  <Avatar sx={{ width: 60, height: 60 }} />
                  <div className="flex-1 flex flex-col justify-center ml-3">
                    <h1 className="text-xl uppercase font-semibold">{userInfo.lastName} {userInfo.firstName}</h1>
                    <p className="text-gray-500">{userInfo.onPosition}</p>
                  </div>
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
