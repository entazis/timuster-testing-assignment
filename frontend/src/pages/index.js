import React from "react";
import Layout from "@/components/Layout";
import EmailList from "../components/EmailList";
import { Grid } from "@mui/material";
import Content from "@/components/Content";

export default function Home() {
  const [emails, setEmails] = React.useState([
    { id: "1", subject: "test-title-1" },
    { id: "2", subject: "test-title-2" },
  ]);
  const [selectedEmail, setSelectedEmail] = React.useState({});

  const onClickEmail = React.useCallback(
    (id) => {
      console.debug("selected email id", id);
      setSelectedEmail(emails.find((email) => email.id === id));
    },
    [emails],
  );

  return (
    <Layout>
      <Grid container wrap="nowrap" sx={{ overflow: "auto" }} spacing={8}>
        <Grid item>
          <EmailList emails={emails} onClickEmail={onClickEmail} />
        </Grid>
        <Grid item>
          <Content email={selectedEmail} />
        </Grid>
      </Grid>
    </Layout>
  );
}
