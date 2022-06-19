import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Link } from "react-router-dom";

export default function DrawerButton(props) {
  const setCurrentPageName = props.setCurrentPageName;
  return (
    <ListItem key={props.text} disablePadding>
      <ListItemButton
        component={Link}
        to={`/${(props.text === "Home" ? "" : props.text).toLowerCase()}`}
        onClick={() => {
          setCurrentPageName(props.text);
        }}
      >
        <ListItemIcon>
          {(() => {
            return props.html;
          })()}
        </ListItemIcon>
        <ListItemText
          primary={props.text === "contact" ? "Contact Us" : props.text}
        />
      </ListItemButton>
    </ListItem>
  );
}
