// src/pages/Projects.jsx

import Typography from "@mui/material/Typography";
import Calendar from "../../components/Calendar";
import CardComponent from "../../components/CardComponent";
import NavTabs from "../../components/NavTabs";
import ProjectCardComponent from "../../components/ProjectCardComponent";
import AutohideSnackbar from "../../components/AutoHideSnacbar";
import SearchBar from "../../components/SearchBar";
import BreadCrumbComponent from "../../components/BreadCrumbComponent";
import DropDownMenu from "../../components/DropDownMenu";
// import ModalComponent from "./components/ModalComponent";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Projects = () => {
  const project = useSelector((state) => state.handleProject.projectData);
  useEffect(() => {
    console.log("project = ", project);
  }, []);
  return (
    <div>
      <Typography variant="h4">Projects</Typography>
      <Typography paragraph>Your Projects content goes here.</Typography>
      <DropDownMenu />
      <BreadCrumbComponent />
      <NavTabs />
      <AutohideSnackbar
        message="This is a sample snacbar!"
        openSnacbarText="Click here!"
      />
      <SearchBar />
      {/* <ModalComponent /> */}
      <div
        className="Cards"
        style={{ display: "flex", gap: "10px", marginBottom: "10px" }}
      >
        <CardComponent title={"Hello, this is title!"} counterValue={25} />
      </div>

      <Calendar />
      <ProjectCardComponent
        projectName={"Sample Project"}
        type={"Web Design"}
        projectDescription={"This is a sample description!"}
        createdAt={"20th August 2023"}
      />
    </div>
  );
};

export default Projects;
