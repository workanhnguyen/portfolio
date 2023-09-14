import React from "react";

import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FlagCircleOutlinedIcon from "@mui/icons-material/FlagCircleOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AddLinkOutlinedIcon from "@mui/icons-material/AddLinkOutlined";

import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import user from "../data/user";
import constants from "../data/constants";
import AddLinkOutlined from "@mui/icons-material/AddLinkOutlined";
import { Divider } from "@mui/material";

const userInfo = user[0];
const titleInfo = constants[0];

const Overview = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-y-3">
        <p className="text-lg font-semibold">{titleInfo.careerGoal}</p>
        <p className="text-justify">
          <span className="font-semibold">
            {titleInfo.careerShortTermGoal}:{" "}
          </span>
          {userInfo.careerShortTermGoal}
        </p>
        <p className="text-justify">
          <span className="font-semibold">
            {titleInfo.careerLongTermGoal}:{" "}
          </span>
          {userInfo.careerLongTermGoal}
        </p>
      </div>
      <Divider sx={{ marginY: 2 }} variant="middle" />
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="error">
              <LocalPhoneOutlinedIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <p className="text-gray-500">{titleInfo.phoneNumber}</p>
            <p>{userInfo.phoneNumber}</p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <EmailOutlinedIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <p className="text-gray-500">{titleInfo.email}</p>
            <p>{userInfo.email}</p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="warning">
              <LocationOnOutlinedIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <p className="text-gray-500">{titleInfo.address}</p>
            <p>{userInfo.address}</p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success">
              <AddLinkOutlined />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <p className="text-gray-500">{titleInfo.github}</p>
            <a href={userInfo.github} className="hover:underline">{userInfo.github}</a>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
};

export default Overview;
