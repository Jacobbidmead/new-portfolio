import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ImageSwiper from "./Swiper";
import webstoreImg from "../imageData/webstoreImg";
import airBnbImg from "../imageData/airBnBImg";
import bookmarksImg from "../imageData/bookmarksImg";
import googleImg from "../imageData/googleImg";
import claudiaImg from "../imageData/claudiaImg";

export default function SimpleAccordion() {
  return (
    <div className="accordion-container">
      <div className="latest-container">
        <div className="latest-work">
          SELECTED WORK
          <div className="latest-date">2022-2023</div>
        </div>
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
        <AccordionDetails className="accordion-summary">
          <div className="project">
            <ImageSwiper images={webstoreImg} />
            <div className="project-description">
              <div className="about-project">About.</div>
              <div>
                Front end E-commerce store based on alwaysincolor.com &
                flatspot.com.
              </div>
              <div>Link</div>
            </div>
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
          sx={{ margin: "0" }}
        >
          <div className="project-header"> AIR BNB CLONE</div>
        </AccordionSummary>
        <AccordionDetails className="accordion-summary-ab">
          <div className="project">
            <ImageSwiper images={airBnbImg} />
            <div className="project-description">
              <div className="about-project">About.</div>
              <div>
                Front end E-commerce store based on alwaysincolor.com &
                flatspot.com.
              </div>
            </div>
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
        <AccordionDetails className="accordion-summary-b">
          <div className="project">
            <ImageSwiper images={bookmarksImg} />
            <div className="project-description">
              <div className="about-project">About.</div>
              <div>
                Front end E-commerce store based on alwaysincolor.com &
                flatspot.com.
              </div>
              <div>Link</div>
            </div>
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
        <AccordionDetails className="accordion-summary-c">
          <div className="project">
            <ImageSwiper images={claudiaImg} />
            <div className="project-description">
              <div className="about-project">About.</div>
              <div>
                Front end E-commerce store based on alwaysincolor.com &
                flatspot.com.
              </div>
            </div>
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
        <AccordionDetails className="accordion-summary-g">
          <div className="project">
            <ImageSwiper images={googleImg} />
            <div className="project-description">
              <div className="about-project">About.</div>
              <div>
                Front end E-commerce store based on alwaysincolor.com &
                flatspot.com.
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
