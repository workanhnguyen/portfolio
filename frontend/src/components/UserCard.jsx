import React, { useEffect, useState } from "react";

import { Avatar } from "@mui/material";

import { avatar } from "../assets";
import { useStateContext } from "../contexts/ContextProvider";
import user from "../data/user";

const UserCard = () => {
  const { language } = useStateContext();

  const [userInfo, setUserInfo] = useState(user[0]);

  useEffect(() => {
    setUserInfo(language === "vi" ? user[0] : user[1]);
  }, [language]);

  return (
    <div className="w-full flex items-center">
      <Avatar src={avatar} sx={{ width: 60, height: 60 }} />
      <div className="flex-1 flex flex-col justify-center ml-3">
        <h1 className="text-xl uppercase font-semibold">
          {userInfo.lastName} {userInfo.firstName}
        </h1>
        <p className="text-gray-500">{userInfo.onPosition}</p>
      </div>
    </div>
  );
};

export default UserCard;
