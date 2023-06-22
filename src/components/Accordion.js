import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ImageSwiper from "./Swiper";
import webstoreImg from "../imageData/webstoreImg";
import airBnbImg from "../imageData/airBnBImg";

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
          backgroundColor: "rgba(0, 0, 0, 0)",
          color: "white",
          margin: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="project-header"> E-COMMERCE STORE</div>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            border: "none",
            boxShadow: "none",
          }}
        >
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
          backgroundColor: "rgba(0, 0, 0, 0)",
          color: "white",
          margin: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <div className="project-header"> AIR BNB CLONE</div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="project">
            <div>hello</div>
            <ImageSwiper images={airBnbImg} />
          </div>
        </AccordionDetails>
      </Accordion>{" "}
      <Accordion
        sx={{
          border: "none",
          boxShadow: "none",
          backgroundColor: "rgba(0, 0, 0, 0)",
          color: "white",
          margin: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <div className="project-header"> BOOKMARK URLS</div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="project">
            <div>hello</div>
            <ImageSwiper images={airBnbImg} />
          </div>
        </AccordionDetails>
      </Accordion>{" "}
      <Accordion
        sx={{
          border: "none",
          boxShadow: "none",
          backgroundColor: "rgba(0, 0, 0, 0)",
          color: "white",
          margin: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <div className="project-header"> CLAUDIA PORTFOLIO</div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="project">
            <div>hello</div>
            <ImageSwiper images={airBnbImg} />
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          border: "none",
          boxShadow: "none",
          backgroundColor: "rgba(0, 0, 0, 0)",
          color: "white",
          margin: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <div className="project-header"> GOOGLE SEARCH</div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="project">
            <div>hello</div>
            <ImageSwiper images={airBnbImg} />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
