import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
import ArrowIconComponent from "./Arrow";
import Link from "./Link";
import Git from "./Git";
// import ReturnTop from "./ReturnTop";

export default function SimpleAccordion() {
  return (
    <div className="accordion-container">
      <div className="latest-container">
        <ArrowIconComponent />
        <motion.div className="latest-work">
          Selected work.
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
            <div className="project-header"> MediaBook AI</div>
          </AccordionSummary>
          <AccordionDetails className="accordion-summary">
            <div className="project">
              <div>
                <img
                  src="/images/project-img/mediabook.png"
                  alt=""
                  className="swiper-img"
                />
              </div>
              <div className="project-description">
                <div className="project-text">
                  Save your favourite movies and films, then get recommendations
                  based on your choices with integrated AI. Currently in beta.
                  <p className="technologies">
                    <span className="project-techs">TypeScript</span>{" "}
                    <span className="project-techs">Next.js</span>{" "}
                    <span className="project-techs">Tailwind</span>
                    <span className="project-techs">OpenAI API</span>
                    <span className="project-techs">tmdb API</span>
                  </p>
                  <div className="project-link">
                    {/* <a
                      href="https://snap-app-git-main-jacobbidmead.vercel.app/"
                      alt=""
                      target="_blank"
                      rel="noreferrer"
                      className="link"
                    >
                      <Link />
                    </a> */}
                    <a
                      href="https://github.com/Jacobbidmead/movie-book-next"
                      alt=""
                      target="_blank"
                      rel="noreferrer"
                      className="link"
                    >
                      <Git />
                    </a>
                  </div>
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
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className="project-header"> Match the shapes.</div>
          </AccordionSummary>
          <AccordionDetails className="accordion-summary">
            <div className="project">
              <div>
                <img
                  src="/images/project-img/match1.png"
                  alt=""
                  className="swiper-img"
                />
              </div>
              <div className="project-description">
                <div className="project-text">
                  Match the cards by remembering you're previous moves.
                  <p className="technologies">
                    <span className="project-techs">TypeScript </span>{" "}
                    <span className="project-techs">Next.js</span>{" "}
                    <span className="project-techs">Tailwind</span>
                    <span className="project-techs">DALLE-E </span>
                  </p>
                  <div className="project-link">
                    <a
                      href="https://snap-app-git-main-jacobbidmead.vercel.app/"
                      alt=""
                      target="_blank"
                      rel="noreferrer"
                      className="link"
                    >
                      <Link />
                    </a>
                    <a
                      href="https://github.com/Jacobbidmead/snap-app"
                      alt=""
                      target="_blank"
                      rel="noreferrer"
                      className="link"
                    >
                      <Git />
                    </a>
                  </div>
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
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className="project-header"> E-commerce app.</div>
          </AccordionSummary>
          <AccordionDetails className="accordion-summary">
            <div className="project">
              <div>
                <img
                  src="/images/project-img/webstorehome.png"
                  alt=""
                  className="swiper-img"
                />
              </div>
              <div className="project-description">
                <div className="project-text">
                  Browse items by brand & category, add & remove items from the
                  basket.
                  <p className="technologies">
                    <span className="project-techs">TypeScript </span>{" "}
                    <span className="project-techs">Next.js </span>{" "}
                    <span className="project-techs">MUI Library </span>
                    <span className="project-techs">UseContext </span>
                  </p>
                  <div className="project-link">
                    <a
                      href="https://webstore-react-app-git-main-jacobbidmead.vercel.app/
"
                      alt=""
                      target="_blank"
                      rel="noreferrer"
                      className="link"
                    >
                      <Link />
                    </a>
                    <a
                      href="https://github.com/Jacobbidmead/webstore-react-app"
                      alt=""
                      target="_blank"
                      rel="noreferrer"
                      className="link"
                    >
                      <Git />
                    </a>
                  </div>
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
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className="project-header"> Fetch Products.</div>
          </AccordionSummary>
          <AccordionDetails className="accordion-summary">
            <div className="project">
              <div>
                <img
                  src="/images/project-img/fetch.png"
                  alt=""
                  className="swiper-img"
                />
              </div>
              <div className="project-description">
                <div className="project-text">
                  Products are fetched from a dummy API and populated into a
                  card, click on a product to see it in detail.
                  <p className="technologies">
                    <span className="project-techs">React </span>{" "}
                    <span className="project-techs">Next.js </span>{" "}
                    <span className="project-techs">Tailwind </span>
                  </p>
                  <div className="project-link">
                    <a
                      href="https://get-products-app.vercel.app/

"
                      alt=""
                      target="_blank"
                      rel="noreferrer"
                      className="link"
                    >
                      <Link />
                    </a>
                    <a
                      href="https://github.com/Jacobbidmead/get-products-app"
                      alt=""
                      target="_blank"
                      rel="noreferrer"
                      className="link"
                    >
                      <Git />
                    </a>
                  </div>
                </div>
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
        {/* <ReturnTop /> */}
      </div>
    </div>
  );
}
