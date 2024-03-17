import { Box, Container, Grid, Typography, colors } from "@mui/material";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Box
        display="flex"
        flex="column"
        justifyContent="center"
        alignItems="center"
        height="50vh"
      >
        <Grid container sx={{ boxShadow: 3, mt: 36 }}> {/* Increase the value of mt to move the containers further down */}
          <Grid item sm={4} px={3} py={2} bgcolor={colors.grey[400]}>
            <Typography
              color="white"
              textAlign="center"
              variant="h4"
              component="img"
              src="https://i.pinimg.com/564x/ff/31/c4/ff31c4f7e2badadc5b94970e392171a2.jpg"
              alt="Custom Design"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                maxWidth: "100%",
                maxHeight: "100%", // Reduce the height of the image
              }}
            />
          </Grid>
          <Grid item sm={4} px={3} py={4}>
            {children}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AuthLayout;