import React from "react";
import Layout from "@/components/Layout";
import EmailList from "../components/EmailList";
import { Grid } from "@mui/material";
import Content from "@/components/Content";

export default function Home({ initEmails }) {
  const [emails, setEmails] = React.useState(initEmails);
  const [selectedEmail, setSelectedEmail] = React.useState({});

  const onClickEmail = React.useCallback(
    (id) => {
      console.debug("selected email id", id);
      setSelectedEmail(emails.find((email) => email.id === id));
    },
    [emails],
  );
  const onSearch = React.useCallback(
    async (term) => {
      console.log("searching ", term);
      const res = await fetch(
        `${process.env.API_URL}/search?${new URLSearchParams({ term }).toString()}`,
      );
      const emailResults = await res.json();
      setEmails(emailResults);
    },
    [setEmails],
  );

  return (
    <Layout>
      <Grid container wrap="nowrap" sx={{ overflow: "auto" }} spacing={8}>
        <Grid item>
          <EmailList
            emails={emails}
            onClickEmail={onClickEmail}
            onSearch={onSearch}
          />
        </Grid>
        <Grid item>
          <Content email={selectedEmail} />
        </Grid>
      </Grid>
    </Layout>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(
    `${process.env.API_URL}/search?${new URLSearchParams({ term: "" }).toString()}`,
  );
  const initEmails = await res.json();
  return { props: { initEmails } };
};
