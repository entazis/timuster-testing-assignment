export default function EmailItem({ email, onClick }) {
  return <div onClick={() => onClick(email.id)}>Email: {email.subject}</div>;
}
