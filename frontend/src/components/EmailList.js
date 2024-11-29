import { List, ListItem } from "@mui/material";
import EmailItem from "@/components/EmailItem";

export default function EmailList({ emails, onClickEmail }) {
  return (
    <List>
      <div>
        {emails.map((email) => (
          <ListItem key={email.id}>
            <EmailItem email={email} onClick={onClickEmail} />
          </ListItem>
        ))}
      </div>
    </List>
  );
}
