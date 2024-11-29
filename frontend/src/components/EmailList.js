import { List, ListItem, TextField } from "@mui/material";
import EmailItem from "@/components/EmailItem";

export default function EmailList({ emails, onClickEmail, onSearch }) {
  return (
    <div>
      <TextField label="Search" type="search" onChange={(e) => onSearch(e)} />
      <List>
        {emails.map((email) => (
          <ListItem key={email.id}>
            <EmailItem email={email} onClick={onClickEmail} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
