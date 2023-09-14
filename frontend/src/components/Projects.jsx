import React from "react";

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

const userInfo = user[0];
const titleInfo = constants[0];

const Projects = () => {
  return (
    <>
      {userInfo.projects.map((project, index) => (
        <div key={index}>
          <p className="text-lg font-semibold">{project.name}</p>
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
              [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.1,
              },
            }}
          >
            <TimelineItem>
              <TimelineOppositeContent color="textSecondary">
                {titleInfo.time}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="success" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <p>{project.time}</p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent color="textSecondary">
                {titleInfo.github}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="success" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <a href={project.linkGithub} className="hover:underline">
                  {project.linkGithub}
                </a>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent color="textSecondary">
                {titleInfo.numberOfMems}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="success" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <p>{project.numberOfMems}</p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent color="textSecondary">
                {titleInfo.usingTechs}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="success" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className="flex flex-col mb-3 gap-y-2">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="flex items-center">
                      <p className="mr-2">{tech.name}:</p>
                      <div className="flex flex-wrap gap-1">
                        {tech.techs.map((tech, index) => (
                          <div
                            key={index}
                            className="flex p-2 gap-x-2 border-2 border-gray-200 rounded-md"
                          >
                            <img src={tech.icon} alt={`icon-${tech.name}`} />
                            <p>{tech.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent color="textSecondary">
                {titleInfo.mainFuncs}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="success" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className="flex flex-col gap-y-2">
                  {project.functions.map((func, index) => (
                    <p key={index}>- {func}</p>
                  ))}
                </div>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent color="textSecondary">
                {titleInfo.role}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="success" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className="flex flex-col gap-y-2">
                  {project.roleInProjects.map((role, index) => (
                    <p key={index}>- {role}</p>
                  ))}
                </div>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
          <Divider sx={{ marginTop: 2 }} variant="middle" />
        </div>
      ))}
    </>
  );
};

export default Projects;
