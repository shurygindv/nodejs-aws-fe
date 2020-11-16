import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import API_PATHS from "constants/apiPaths";
import { ProductsTable } from "./components/ProductsTable";
import { CSVFileImport } from "./components/CSVFileImport";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 0, 3),
  },
}));

export default function PageProductImport() {
  const classes = useStyles();
  const [someUpdatesId, setSomeUpdates] = React.useState(0);

  const handleUpdate = () => {
    setTimeout(() => {
      setSomeUpdates(i => ++i);
    }, 2000); // lambda-parser will trigger in few seconds
  }

  return (
    <div className={classes.content}>
      <Box display="flex" alignItems="center">
        <CSVFileImport
          url={`${API_PATHS.import}/import`}
          title="Import Products CSV"
          onUpload={handleUpdate}
        />
        <Button
          size="small"
          color="primary"
          variant="contained"
          component={Link}
          to={"/admin/product-form/"}
        >
          create product
        </Button>
      </Box>
      <ProductsTable someUpdatesId={someUpdatesId} />
    </div>
  );
}
