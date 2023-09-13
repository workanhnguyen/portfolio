import React from "react";

import { Paper } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";

import user from "../data/user";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";

const userInfo = user[0];

const Skills = () => {
  return (
    <>
      {userInfo.skills.map((skill, index) => (
        <Paper key={index} className="mx-1 p-4" elevation={2}>
          <p className="text-lg font-semibold">{skill.skillName}</p>
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
                <TimelineDot color="success" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className="flex flex-wrap gap-3">
                  {skill.programmingLanguages.map((language, index) => (
                    <div key={index} className="flex p-2 gap-x-2 border-2 border-gray-200 rounded-md">
                      <img src={language.icon} alt={`img-${language.name}`} />
                      <p>{language.name}</p>
                    </div>
                  ))}
                </div>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="success" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className="flex flex-wrap gap-3">
                  {skill.frameworks.map((framework, index) => (
                    <div key={index} className="flex p-2 gap-x-2 border-2 border-gray-200 rounded-md">
                      <img src={framework.icon} alt={`icon-${framework.name}`} />
                      <p>{framework.name}</p>
                    </div>
                  ))}
                </div>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Paper>
      ))}
    </>
  );
};

export default Skills;
