import styles from "./page.module.css";
import { Grid, Typography } from "@mui/material";
import ConfigurationPanel from "@/component/main/ConfigurationPanel";
import TrackerMap from "@/component/map/TrackerMap";
import TopLat from "@/component/last/TopLat";
import Bottom from "@/component/last/Bottom";

export default function Home() {
  return (
    <main className={styles.main}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} xl={3} sx={{ boxShadow: 2 }}>
          <ConfigurationPanel />
        </Grid>
        <Grid item xs={12} sm={8} xl={6} overflow="auto">
          <TrackerMap />
        </Grid>
        <Grid item xs={12} sm={4} xl={3} sx={{ boxShadow: 2 }}>
          <TopLat />
          <Bottom />
        </Grid>
      </Grid>
    </main>
  );
}
