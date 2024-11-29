import React from "react";
import Layout from "@/components/Layout";
import EmailList from "../components/EmailList";

export default function Home() {
  const [emails, setEmails] = React.useState([
    { subject: "test-title-1" },
    { subject: "test-title-2" },
  ]);

  return (
    <Layout>
      <EmailList emails={emails} />
    </Layout>
  );
}
