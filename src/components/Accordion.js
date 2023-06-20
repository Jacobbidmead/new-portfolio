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
        <div className="latest-work">Latest work</div>
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
          <Typography>E-COMMERCE STORE</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ border: "none", boxShadow: "none" }}>
          <ImageSwiper images={webstoreImg} />
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
