import React from "react";
import Layout from "@/components/Layout";
import EmailList from "../components/EmailList";
import { Grid } from "@mui/material";
import Content from "@/components/Content";

export default function Home() {
  const [emails, setEmails] = React.useState([
    { subject: "test-title-1" },
    { subject: "test-title-2" },
  ]);

  return (
    <Layout>
      <Grid container wrap="nowrap" sx={{ overflow: "auto" }} spacing={8}>
        <Grid item>
          <EmailList emails={emails} />
        </Grid>
        <Grid item>
          <Content email={emails[0]} />
        </Grid>
      </Grid>
    </Layout>
  );
}
