import styles from "./page.module.css";
import { Grid, Typography } from "@mui/material";
import ConfigurationPanel from "@/component/main/ConfigurationPanel";
import TrackerMap from "@/component/map/TrackerMap";

export default function Home() {
  return (
    <main className={styles.main}>
      <Grid container>
        <Grid item xs={12} sm={4} xl={3} sx={{ boxShadow: 2 }}>
          <ConfigurationPanel />
        </Grid>
        <Grid item xs={12} sm={8} xl={9} overflow="auto" pt={3}>
          <TrackerMap />
        </Grid>
      </Grid>
    </main>
  );
}
