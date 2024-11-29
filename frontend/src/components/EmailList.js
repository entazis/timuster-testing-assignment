import { List, ListItem, TextField } from "@mui/material";
import EmailItem from "@/components/EmailItem";

export default function EmailList({ emails, onClickEmail, onSearch }) {
  //TODO create useDebounce hook
  const debounce = (onChange) => {
    let timeout;
    return (e) => {
      const term = e.target.value;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(term);
        //TODO move debounce timeout to env
      }, 500);
    };
  };

  //TODO list to and subject, body .substring(0, 50)
  return (
    <div>
      <TextField
        label="Search"
        type="search"
        onChange={debounce((e) => onSearch(e))}
      />
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
