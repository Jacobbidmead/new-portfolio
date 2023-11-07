import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ImageSwiper from "./Swiper";
import webstoreImg from "../imageData/webstoreImg";
import airBnbImg from "../imageData/airBnBImg";
import fetchImg from "../imageData/fetchImg";
import bookmarksImg from "../imageData/bookmarksImg";
import googleImg from "../imageData/googleImg";
import claudiaImg from "../imageData/claudiaImg";
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
                {/* added link when page is finished and live */}
                {/* <motion.div
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
                </motion.div> */}
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
                  end app, data is saved on the brower and persists page reload.
                  The page uses pagination, up too twenty links are shown per
                  page.
                </div>
                <div className="technologies">
                  TypeScript, React, Styled Components.
                </div>
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="project-link"
                >
                  <a
                    href="https://loquacious-sable-4df720.netlify.app/"
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
                  which is populated onto the main app page. Users, while logged
                  in, can also edit house data and leave comments. User data is
                  stored in MongoDB and accessed with Express.js.
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
                  Google Search style app, made using React on the client side
                  and connecting to the server using Axios. Users are able to
                  search for limited data contained in the MongoDB database.
                </div>
                <div className="technologies">
                  Technologies used - React, Axios, MongoDb.
                </div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <ReturnTop />
      </div>
    </div>
  );
}
