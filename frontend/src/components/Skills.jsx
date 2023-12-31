import React, { useEffect, useState } from "react";

import { Paper } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";

import user from "../data/user";
import constants from "../data/constants";
import { useStateContext } from "../contexts/ContextProvider";

const Skills = () => {
  const { language } = useStateContext();

  const [userInfo, setUserInfo] = useState(user[0]);
  const [titleInfo, setTitleInfo] = useState(constants[0]);

  useEffect(() => {
    setUserInfo(language === "vi" ? user[0] : user[1]);
    setTitleInfo(language === "vi" ? constants[0] : constants[1]);
  }, [language]);

  return (
    <div className="w-full flex flex-col max-sm:justify-center pr-2 mb-5 gap-y-4">
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
                    <div
                      key={index}
                      className="flex p-2 gap-x-2 border-2 border-gray-200 rounded-md"
                    >
                      <img src={language.icon} alt={`img-${language.name}`} />
                      <p>{language.name}</p>
                    </div>
                  ))}
                </div>
              </TimelineContent>
            </TimelineItem>

            {skill.frameworks && (
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="success" />
                </TimelineSeparator>
                <TimelineContent>
                  <div className="flex flex-wrap gap-3">
                    {skill.frameworks.map((framework, index) => (
                      <div
                        key={index}
                        className="flex p-2 gap-x-2 border-2 border-gray-200 rounded-md"
                      >
                        <img
                          src={framework.icon}
                          alt={`icon-${framework.name}`}
                        />
                        <p>{framework.name}</p>
                      </div>
                    ))}
                  </div>
                </TimelineContent>
              </TimelineItem>
            )}
          </Timeline>
        </Paper>
      ))}
      <Paper elevation={2} className="mx-1 p-4">
        <p className="text-lg font-semibold">{titleInfo.english}</p>
        {userInfo.english.map((en, index) => (
          <Timeline
            key={index}
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
                {index === 2 ? null : <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <div className="flex flex-wrap gap-3">
                  <p>{en}</p>
                </div>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        ))}
      </Paper>
    </div>
  );
};

export default Skills;
