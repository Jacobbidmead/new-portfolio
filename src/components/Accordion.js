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
import { motion } from "framer-motion";
import ArrowIconComponent from "./Arrow";
import { hexToRgb } from "@mui/material";
import { height } from "@mui/system";

const boxAnimate = {
  offscreen: { y: 200, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      bounce: 0.5,
      duration: 1,
    },
  },
};

export default function SimpleAccordion() {
  return (
    <div>
      <div className="accordion-container">
        <ArrowIconComponent />
        <div className="latest-container">
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={boxAnimate}
            viewport={{ once: true, amount: 0.1 }}
            className="latest-work"
          >
            SELECTED WORK
            <div className="latest-date">2022-2023</div>
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
                  <div className="project-link">
                    <a
                      href="https://webstore-react-app-git-main-jacobbidmead.vercel.app/"
                      alt=""
                      target="_blank"
                      rel="noreferrer"
                      className="link"
                    >
                      Live site
                    </a>
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
                  <div className="project-link">
                    <a
                      href="https://webstore-react-app-git-main-jacobbidmead.vercel.app/"
                      alt=""
                      target="_blank"
                      rel="noreferrer"
                      className="link"
                    >
                      Live site
                    </a>
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
              <div className="project-header"> BOOKMARK URLS</div>
            </AccordionSummary>
            <AccordionDetails className="accordion-summary">
              <div className="project">
                <ImageSwiper images={bookmarksImg} />
                <div className="project-description">
                  <div className="about-project">Bookmarker App.</div>
                  <div className="project-text">
                    Users are able to add, edit & delete bookmarks (URLS). Front
                    end app, data is saved on the brower and persists page
                    reload. The page uses pagination, up too twenty links are
                    shown per page.
                  </div>
                  <div className="technologies">
                    TypeScript, React, Styled Components.
                  </div>
                  <div className="project-link">
                    <a
                      href="https://loquacious-sable-4df720.netlify.app/"
                      alt=""
                      target="_blank"
                      rel="noreferrer"
                      className="link"
                    >
                      Live site
                    </a>
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
              sx={{ margin: "0" }}
            >
              <div className="project-header"> AIR BNB CLONE</div>
            </AccordionSummary>
            <AccordionDetails className="accordion-summary">
              <div className="project">
                <ImageSwiper images={airBnbImg} />
                <div className="project-description">
                  <div className="about-project">
                    {" "}
                    Full stack MVC Air Bnb Clone.
                  </div>
                  <div className="project-text">
                    Users are able to create a profile and upload house data,
                    which is populated onto the main app page. Users, while
                    logged in, can also edit house data and leave comments. User
                    data is stored in MongoDB and accessed with Express.js.
                  </div>
                  <div className="technologies">
                    Technologies used - JavaScript, HTML, CSS, Bootstrap,
                    Express.js, Node.js, MongoDB.
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
              <div className="project-header"> GOOGLE SEARCH</div>
            </AccordionSummary>
            <AccordionDetails className="accordion-summary">
              <div className="project">
                <ImageSwiper images={googleImg} />
                <div className="project-description">
                  <div className="about-project">Goolge search style app.</div>
                  <div className="project-text">
                    Google Search style app, made using React for the front end
                    while creating our own API and connecting to the backend
                    using Axios. Users are able to search for limited data
                    contained in the MongoDB database.
                  </div>
                  <div className="technologies">
                    Technologies used - React, Axios, MongoDb.
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
