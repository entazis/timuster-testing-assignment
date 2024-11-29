export async function seed(knex) {
  await knex("emails").del();
  await knex("emails").insert([
    {
      id: 1,
      to: "bence@bence.com",
      cc: "friend@bence.com",
      bcc: "secretfriend@bence.com",
      subject: "hey there!",
      body: "This is the body of the email, welcome!",
    },
    {
      id: 2,
      to: "anna@bence.com",
      cc: "sara@bence.com",
      bcc: "s3@bence.com",
      subject: "hey anna!",
      body: "lorem ipsum dolor sit amet",
    },
    {
      id: 3,
      to: "bela@bence.com",
      cc: "thomas@bence.com",
      bcc: "secy@bence.com",
      subject: "hey bela whatsup!",
      body: "Another wall of text here.",
    },
    {
      id: 4,
      to: "adam@bence.com",
      cc: "none@bence.com",
      bcc: "none@bence.com",
      subject: "Mr.Adam",
      body: "Welcome you are the best!",
    },
  ]);
}
