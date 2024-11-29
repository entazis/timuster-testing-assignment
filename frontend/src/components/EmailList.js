import { List, ListItem, TextField } from "@mui/material";
import EmailItem from "@/components/EmailItem";

//TODO add animation for opening/closing sidebar

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

  //TODO cursor:pointer on hover for email list

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
