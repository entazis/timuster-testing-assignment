import Menu from "@/components/Menu";
import { Grid } from "@mui/material";

export default function Layout({ children }) {
  return (
    <Grid container wrap="nowrap" sx={{ overflow: "auto" }} spacing={8}>
      <Grid item xs={1} md={2}>
        <Menu />
      </Grid>
      <Grid item>{children}</Grid>
    </Grid>
  );
}
