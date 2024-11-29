export default function EmailItem({ email, onClick }) {
  return (
    <div onClick={() => onClick(email.id)}>
      To: {email.to}, Subject: {email.subject}, Body:{" "}
      {email.body.substring(0, 25) + "..."}
    </div>
  );
}
