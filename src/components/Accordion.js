import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ImageSwiper from "./Swiper";
import webstoreImg from "../imageData/webstoreImg";
import fetchImg from "../imageData/fetchImg";
// import claudiaImg from "../imageData/claudiaImg";
import matchShapesImageData from "../imageData/matchShapes";
import { motion } from "framer-motion";
import ArrowIconComponent from "./Arrow";
import ReturnTop from "./ReturnTop";

export default function SimpleAccordion() {
  return (
    <div className="accordion-container">
      <ArrowIconComponent />
      <div className="latest-container">
        <motion.div className="latest-work">
          SELECTED WORK
          <div className="latest-date">2022-2024</div>
        </motion.div>
      </div>
      <div className="accordion-content">
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
            <div className="project-header"> MATCH THE SHAPES</div>
          </AccordionSummary>
          <AccordionDetails className="accordion-summary">
            <div className="project">
              <ImageSwiper images={matchShapesImageData} />
              <div className="project-description">
                <div className="about-project">
                  {" "}
                  Match the shapes memory game
                </div>
                <div className="project-text">
                  Match the cards by remembering you're previous moves.
                </div>
                <div className="technologies">
                  Technologies used - TypeScript,Next.js, Tailwind
                </div>
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="project-link"
                >
                  <a
                    href="https://snap-app-git-main-jacobbidmead.vercel.app/"
                    alt=""
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    Live site
                  </a>
                </motion.div>
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
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className="project-header"> FETCH PRODUCTS</div>
          </AccordionSummary>
          <AccordionDetails className="accordion-summary">
            <div className="project">
              <ImageSwiper images={fetchImg} />
              <div className="project-description">
                <div className="about-project"> Fetch products from API.</div>
                <div className="project-text">
                  Products are fetched from a dummy API and populated into a
                  card, click on a product to see it in detail.
                </div>
                <div className="technologies">
                  Technologies used - Next.js, Tailwind
                </div>
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="project-link"
                >
                  <a
                    href="https://get-products-app.vercel.app/"
                    alt=""
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    Live site
                  </a>
                </motion.div>
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
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className="project-header"> E-COMMERCE STORE</div>
          </AccordionSummary>
          <AccordionDetails className="accordion-summary">
            <div className="project">
              <ImageSwiper images={webstoreImg} />
              <div className="project-description">
                <div className="about-project">
                  {" "}
                  Front end E-commerce store.
                </div>
                <div className="project-text">
                  Users are able to browse items by brand & category, add &
                  remove items from the basket.
                </div>
                <div className="technologies">
                  Technologies used - TypeScript, Next.js, MUI library, React
                  context API.
                </div>
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="project-link"
                >
                  <a
                    href="https://webstore-react-app-git-main-jacobbidmead.vercel.app/"
                    alt=""
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    Live site
                  </a>
                </motion.div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        {/* <Accordion
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
          <AccordionDetails className="accordion-summary">
            <div className="project">
              <ImageSwiper images={claudiaImg} />
              <div className="project-description">
                <div className="about-project">
                  Claudia Cantarini Personal Portfolio.
                </div>
                <div className="project-text">
                  Static and responsive portfolio site for professional
                  photographer Claudia Cantarini.
                </div>
                <div className="technologies">
                  Technologies used - React, CSS, Swiper.js
                </div>
               
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="project-link"
                >
                  <a
                    href="https://webstore-react-app-git-main-jacobbidmead.vercel.app/"
                    alt=""
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    Live site
                  </a>
                </motion.div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion> */}
        <ReturnTop />
      </div>
    </div>
  );
}
