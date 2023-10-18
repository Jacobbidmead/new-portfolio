import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
import ModalClose from "@mui/joy/ModalClose";
import Menu from "@mui/icons-material/Menu";
import SpotifyIconComponent from "./Spotify";
import GitHubIconComponent from "./GitHub";
import { Link } from "react-router-dom";

export default function Burger() {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <IconButton
        color="neutral"
        style={{ padding: "20px" }}
        onClick={() => setOpen(true)}
      >
        <Menu />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            ml: "auto",
            mt: 1,
            mr: 2,
            backgroundColor: "black",
          }}
        >
          <ModalClose id="close-icon" sx={{ padding: "14px" }} />
        </Box>
        <List
          size="lg"
          component="nav"
          sx={{
            flex: "none",
            fontSize: "xl",
            "& > div": { paddingLeft: "40px" },
            backgroundColor: "black",
          }}
        >
          <ListItemButton
            sx={{
              paddingTop: "270px",
              fontFamily: "Polysans",
              fontSize: "30px",
            }}
          >
            <Link className="burger-link" to="/Projects">
              {" "}
              Projects
            </Link>
          </ListItemButton>
          <ListItemButton
            sx={{
              paddingTop: "50px",
              fontFamily: "Polysans",
              fontSize: "30px",
            }}
          >
            <Link className="burger-link" to="/Photo">
              Photography
            </Link>
          </ListItemButton>
          <ListItemButton sx={{ paddingTop: "55px" }}>
            {" "}
            <GitHubIconComponent /> <SpotifyIconComponent />
          </ListItemButton>
        </List>
      </Drawer>
    </React.Fragment>
  );
}
