import React from "react";
import "./template4.css";
import {
  Box,
  Heading,
  HStack,
  ListItem,
  Tag,
  TagLabel,
  Text,
  UnorderedList,
  VStack,
  Stack,
  Wrap,
} from "@chakra-ui/react";
import { BiLinkExternal } from "react-icons/bi";
import { MdLocalPhone, MdLocationPin, MdMail } from "react-icons/md";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { useResume } from "../contexts/ResumeContext";

const Template4 = () => {
  const { theme, about, educationList, skills, workList, projects, printElem } =
    useResume();

  return (
    <div className="container" ref={printElem}>
      <div className="header">
        <div
          className="profile-picture"
          style={{ backgroundImage: `url(${about.picture})` }}
        ></div>
        <div className="full-name">
          <span className="first-name">
            {" "}
            {about.name ? about.name : "Sky B"}
          </span>
          <span className="last-name">
            {" "}
            {about.role ? about.role : "Freelancer"}
          </span>
        </div>
        <div className="contact-info">
          <HStack spacing={1}>
            <MdMail />{" "}
            <Text>{about.email ? about.email : "sb4549@k12.sd.us"}</Text>
          </HStack>
          <HStack spacing={1}>
            <MdLocalPhone />{" "}
            <Text>{about.phone ? about.phone : "+123456789"}</Text>
          </HStack>
          <HStack spacing={1}>
            <MdLocationPin />{" "}
            <Text>{about.address ? about.address : "SD"}</Text>
          </HStack>
          <HStack spacing={1}>
            <RiLinkedinBoxFill />{" "}
            <Text as="a" href={about.linkedin}>
              LinkedIn
            </Text>
          </HStack>
        </div>
      </div>

      <Stack gap={4} w={"full"} direction={{ base: "column", md: "row" }}>
        <div className="details">
          <div className="section">
            <div className="section__title">Education</div>
            <div className="section__list">
              {educationList.map((education, index) => {
                const { degree, school, startYr, endYr, grade } = education;

                return (
                  <VStack
                    key={index}
                    spacing={0}
                    alignItems={"flex-start"}
                    w={"full"}
                    pb={2}
                  >
                    <Text fontWeight={"medium"}>
                      {degree ? degree : "N/A"}
                    </Text>
                    <Text fontSize={"sm"}>
                      {school ? school : "N/A"}
                    </Text>
                    <HStack
                      fontSize={"xs"}
                      fontStyle={"italic"}
                      justifyContent={"space-between"}
                      w={"full"}
                    >
                      <Text>
                        {startYr ? startYr : 2013} - {endYr ? endYr : 2027}
                      </Text>
                      <Text>{grade ? grade : "N/A"}</Text>
                    </HStack>
                  </VStack>
                );
              })}
            </div>
          </div>
        </div>

        <div className="details">
          <div className="section">
            <div className="section__title">Work Experience</div>
            <div className="section__list">
              {workList.map((work, index) => {
                const {
                  position,
                  type,
                  company,
                  startDate,
                  endDate,
                  description: desc,
                } = work;

                return (
                  <VStack
                    key={index}
                    spacing={0.5}
                    alignItems={"flex-start"}
                    lineHeight={1.3}
                    pb={2}
                  >
                    <Text fontWeight={"medium"}>
                      {position ? position : "Developer"}
                    </Text>
                    <Text fontSize={"sm"}>
                      {company ? company : "Self"} -{" "}
                      {type ? type : "Full-time"}
                    </Text>
                    <Text fontSize={"xs"} fontStyle={"italic"}>
                      {startDate ? startDate : "2020-03"} -{" "}
                      {endDate ? endDate : "N/A"}
                    </Text>
                    <Text fontSize={"sm"} as="p">
                      {desc
                        ? desc
                        : "Fixed bugs from existing websites and implemented enhancements that significantly improved web functionality and speed."}
                    </Text>
                  </VStack>
                );
              })}
            </div>
          </div>
        </div>
      </Stack>

      <div className="details">
        <div className="section">
          <div className="section__title">Skills</div>
          <div className="section__list">
            {skills.map((skill, index) => (
              <Tag
                size={"md"}
                borderRadius="md"
                variant="solid"
                bg={theme.replace("400", "500")}
                key={index}
                mx={1}
              >
                <TagLabel>{skill.name}</TagLabel>
              </Tag>
            ))}
          </div>
        </div>
      </div>

      <div className="details">
        <div className="section">
          <div className="section__title">Projects</div>
          <div className="section__list">
            {projects.map((project, index) => {
              const { name, url, description: desc } = project;
              return (
                <VStack
                  key={index}
                  spacing={0.5}
                  alignItems={"flex-start"}
                  lineHeight={1.3}
                  pb={2}
                >
                  <HStack as="a" href={url} target="_blank" spacing={0.5}>
                    <Text fontWeight={"medium"} flex={"row"}>
                      {name ? name : "Project Name"}{" "}
                    </Text>{" "}
                    <BiLinkExternal />
                  </HStack>
                  <UnorderedList pl={5}>
                    <ListItem>
                      <Text fontSize={"sm"} as="p">
                        {desc
                          ? desc
                          : ""}
                      </Text>
                    </ListItem>
                  </UnorderedList>
                </VStack>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template4;
