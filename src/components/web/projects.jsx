import React from "react";
import SpotlightCard from "../SpotlightCard";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

import image from "../../assets/me.jpg";

const projects = [
  {
    title: "hello",
    image: image,
    description: "",
    seeMore: "",
    github: "",
    link: "",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen">
      <h1>Projects</h1>
      <div>
        {projects.map((project, i) => (
          <SpotlightCard
            spotlightColor="rgba(0, 229, 255, 0.2)"
            key={i}
            className="bg-white border-none"
          >
            <Card>
              <CardHeader>
                <img src={project.image} />
              </CardHeader>
              <CardContent>
                <CardTitle>{project.title}</CardTitle>
              </CardContent>
            </Card>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
