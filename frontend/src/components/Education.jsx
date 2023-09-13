import React from "react";

import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FlagCircleOutlinedIcon from "@mui/icons-material/FlagCircleOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import user from "../data/user";
import constants from "../data/constants";

const userInfo = user[0];
const titleInfo = constants[0];

const Education = () => {
  return (
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
          <TimelineDot color="success">
            <CheckCircleOutlinedIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <p className="text-gray-500">{titleInfo.gpaScore}</p>
          <p>{userInfo.gpaScore}</p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <AccountCircleOutlinedIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <p className="text-gray-500">{titleInfo.year}</p>
          <p>{userInfo.yearSchool}</p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="error">
            <SchoolOutlinedIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <p className="text-gray-500">{titleInfo.university}</p>
          <p>{userInfo.university}</p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <FlagCircleOutlinedIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <p className="text-gray-500">{titleInfo.major}</p>
          <p>{userInfo.major}</p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="warning">
            <AccessTimeOutlinedIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <p className="text-gray-500">{titleInfo.time}</p>
          <p>{userInfo.educationTime}</p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default Education;
