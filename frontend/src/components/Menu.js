import Link from "next/link";
import EmailIcon from "@mui/icons-material/Email";
import { AccountBox } from "@mui/icons-material";
import { List, ListItem, ListItemButton, ListItemIcon } from "@mui/material";

export default function Menu() {
  return (
    <div style={{ height: "100vh", width: "10vh" }}>
      <List>
        <Link href="/">
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </Link>
        <ListItem>
          <Link href="/leads">
            <ListItemButton>
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </div>
  );
}
