import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";
import { AccountBox } from "@mui/icons-material";

export default function Layout({ children }) {
  return (
    <div className="sidebar">
      <Link href="/">
        <EmailIcon />
      </Link>
      <Link href="/leads">
        <AccountBox />
      </Link>
      {children}
    </div>
  );
}
