import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ImageSwiper from "./Swiper";
import webstoreImg from "../imageData/webstoreImg";

export default function SimpleAccordion() {
  return (
    <div className="accordion-container">
      <div className="latest-container">
        <div className="latest-work">LATEST WORK</div>
      </div>
      <Accordion
        sx={{
          border: "none",
          boxShadow: "none",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ backgroundColor: "" }}
        >
          <div className="project-header"> E-COMMERCE STORE</div>
        </AccordionSummary>
        <AccordionDetails sx={{ border: "none", boxShadow: "none" }}>
          <div className="project">
            <div>hello</div>
            <ImageSwiper images={webstoreImg} />
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          border: "none",
          boxShadow: "none",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
