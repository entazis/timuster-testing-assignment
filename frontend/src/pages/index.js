import React from "react";
import Layout from "@/components/Layout";
import EmailList from "../components/EmailList";
import { Button, Fab, Grid, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Content from "@/components/Content";

export default function Home({ initEmails }) {
  const [emails, setEmails] = React.useState(initEmails);
  const [selectedEmail, setSelectedEmail] = React.useState({});
  const [showForm, setShowForm] = React.useState(false);

  const onClickEmail = React.useCallback(
    (id) => {
      console.debug("selected email id", id);
      setShowForm(false);
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

  const onComposeButtonClick = React.useCallback(() => {
    setShowForm(true);
  }, []);

  const onSubmitEmail = React.useCallback(async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      to: formData.get("to"),
      cc: formData.get("cc"),
      bcc: formData.get("bcc"),
      subject: formData.get("subject"),
      body: formData.get("body"),
    };

    try {
      const response = await fetch(`${process.env.API_URL}/email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Email sent successfully:", result);

      //TODO rerun search to get updated list
    } catch (error) {
      console.error("Error sending email:", error);
    }

    setShowForm(false);
  }, []);

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
          {showForm ? (
            <form onSubmit={onSubmitEmail}>
              <TextField
                name="to"
                label="To"
                fullWidth
                margin="normal"
                required
              />
              <TextField name="cc" label="CC" fullWidth margin="normal" />
              <TextField name="bcc" label="BCC" fullWidth margin="normal" />
              <TextField
                name="subject"
                label="Subject"
                fullWidth
                margin="normal"
                required
              />
              <TextField
                name="body"
                label="Body"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                required
              />
              <Button type="submit" variant="contained" color="primary">
                Send
              </Button>
            </form>
          ) : (
            <Content email={selectedEmail} />
          )}
          <Fab
            color="primary"
            aria-label="add"
            onClick={onComposeButtonClick}
            style={{
              margin: 0,
              top: "auto",
              right: 20,
              bottom: 20,
              left: "auto",
              position: "fixed",
            }}
          >
            <AddIcon />
          </Fab>
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
