import styles from "./page.module.css";
import { Grid } from "@mui/material";
import TrackerMap from "@/component/map/TrackerMap";

export default function Home() {
  return (
    <main className={styles.main}>
      <Grid container mt={8}>
        <Grid item xs={12} overflow="auto">
          <TrackerMap />
        </Grid>
      </Grid>
    </main>
  );
}
