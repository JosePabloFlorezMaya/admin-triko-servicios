import IconButton from "@mui/material/IconButton/IconButton";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography/Typography";
import { AppBar } from "../../../../styles/bar/appBar";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks/hooks";
import { setDrawer } from "../../../../redux/slice/drawer";

interface Props {}

const BarApp = (props: Props) => {
  const drawer = useAppSelector((state) => state.drawer.open);
  const dispatch = useAppDispatch();

  const handleDrawerOpen = () => {
    dispatch(setDrawer(true));
  };

  return (
    <AppBar position="fixed" open={drawer}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(drawer && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Triko Servicios
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default BarApp;
