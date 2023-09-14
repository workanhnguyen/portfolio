import React, { useEffect, useState } from "react";

import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FlagCircleOutlinedIcon from "@mui/icons-material/FlagCircleOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

import user from "../data/user";
import constants from "../data/constants";
import { Divider } from "@mui/material";
import { useStateContext } from "../contexts/ContextProvider";

const Education = () => {
  const { language } = useStateContext();

  const [userInfo, setUserInfo] = useState(user[0]);
  const [titleInfo, setTitleInfo] = useState(constants[0]);

  useEffect(() => {
    setUserInfo(language === "vi" ? user[0] : user[1]);
    setTitleInfo(language === "vi" ? constants[0] : constants[1]);
  }, [language]);

  return (
    <>
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
            <p>
              {userInfo.educationTime} - {titleInfo.now}
            </p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      <Divider sx={{ marginY: 2 }} variant="middle" />
      <div className="w-full flex flex-col gap-y-3">
        <div>
          <p className="text-lg font-semibold">{titleInfo.honorsAndAwards}</p>
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
              [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.3,
              },
            }}
          >
            {userInfo.awards.map((award, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent color="textSecondary">
                  {award.time}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="success" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <p>{award.name}</p>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </>
  );
};

export default Education;
