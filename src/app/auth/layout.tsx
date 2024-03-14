import { Box, Container, Grid, Typography, colors } from "@mui/material";

const AuthLayout = ({ children }: { children: Readonly<React.ReactNode> }) => {
  return (
    <Container>
      <Box
        display="flex"
        flex="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Grid container sx={{ boxShadow: 3 }}>
          <Grid item sm={6} px={3} py={2} bgcolor={colors.grey[400]}>
            <Typography color="white" textAlign="center" variant="h4">
              Customize Design Here
            </Typography>
          </Grid>
          <Grid item sm={6} px={3} py={4}>
            {children}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export default AuthLayout;
