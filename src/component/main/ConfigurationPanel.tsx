"use client";

import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { FilePond } from "react-filepond";
import { useState } from "react";

// Import FilePond styles
import "filepond/dist/filepond.min.css";
import { Save } from "@mui/icons-material";

const ConfigurationPanel = () => {
  const [shp, setShp] = useState<any>([]);
  const [dbf, setDbf] = useState<any>([]);
  const [shx, setShx] = useState<any>([]);
  const [affectedArea, setAffectedArea] = useState<any>([]);

  return (
    <Box px={3} py={4} display="flex" flexDirection="column" gap={2}>
      <Typography fontWeight="bold" textAlign="center" variant="h6">
        Main Configuration Panel
      </Typography>
      <Divider />
      <FilePond
        files={shp}
        onupdatefiles={setShp}
        labelIdle='Drag & Drop (.shp) or <span class="filepond--label-action">Browse</span>'
        credits={false}
      />
      <FilePond
        files={dbf}
        onupdatefiles={setDbf}
        labelIdle='Drag & Drop (.dbf) or <span class="filepond--label-action">Browse</span>'
        credits={false}
      />
      <FilePond
        files={shx}
        onupdatefiles={setShx}
        labelIdle='Drag & Drop (.shx) or <span class="filepond--label-action">Browse</span>'
        credits={false}
      />
      <Divider />
      <TextField
        label="Number of Constraints"
        type="number"
        variant="outlined"
        fullWidth
      />
      <TextField
        label="Cell size (km)"
        type="number"
        variant="outlined"
        fullWidth
      />
      <TextField
        label="Travel Speed (km/time)"
        type="number"
        variant="outlined"
        fullWidth
      />
      <Divider />
      <FormControl fullWidth>
        <FormLabel htmlFor="affectedArea">Affected Area</FormLabel>
        <FilePond
          id="affectedArea"
          files={affectedArea}
          onupdatefiles={setAffectedArea}
          labelIdle='Drag & Drop or <span class="filepond--label-action">Browse</span>'
          credits={false}
        />
      </FormControl>
      <Box>
        <Button
          variant="contained"
          type="submit"
          size="large"
          endIcon={<Save />}
        >
          Save Configurations
        </Button>
      </Box>
    </Box>
  );
};
export default ConfigurationPanel;
