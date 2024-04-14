import { PALETTES_3 } from "@/constants";
import { AutoAwesomeMosaicRounded, FavoriteRounded, HomeRounded, LibraryMusicRounded } from "@mui/icons-material";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import * as React from "react";
import PrimarySearchAppBar from "../PrimarySearchAppBar";

const drawerWidth = 220;

interface Props {}

export default function ResponsiveDrawer(props: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const listSidebarItems = [
    {
      title: "Home",
      route: "/home",
      icon: <HomeRounded />,
    },
    {
      title: "Browse",
      route: "/browse",
      icon: <AutoAwesomeMosaicRounded />,
    },
    {
      title: "Favorite",
      route: "/favorite",
      icon: <FavoriteRounded />,
    },
    {
      title: "Music",
      route: "/musics",
      icon: <LibraryMusicRounded />,
    },
  ];

  const router = useRouter();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div style={{ backgroundColor: PALETTES_3.BACKGROUND_SIDEBAR, color: PALETTES_3.FONT_COLOR, height: "100%" }}>
      <Toolbar />
      <Divider />
      <List>
        {listSidebarItems.map((sidebarItem, index) => (
          <ListItem key={sidebarItem.title + index} disablePadding>
            <ListItemButton onClick={() => router.push(sidebarItem.route)}>
              <ListItemIcon sx={{ color: PALETTES_3.FONT_COLOR }}>{sidebarItem.icon}</ListItemIcon>
              <ListItemText primary={sidebarItem.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: PALETTES_3.BACKGROUND,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <PrimarySearchAppBar />
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, backgroundColor: PALETTES_3.BACKGROUND_SIDEBAR }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: PALETTES_3.BACKGROUND,
          color: PALETTES_3.FONT_COLOR,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      ></Box>
    </Box>
  );
}
