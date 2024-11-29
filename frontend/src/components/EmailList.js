import { List, ListItem } from "@mui/material";

export default function EmailList({ emails }) {
  return (
    <List>
      <div>
        {emails.map((email) => (
          <ListItem key={email.id}>Email</ListItem>
        ))}
      </div>
    </List>
  );
}
