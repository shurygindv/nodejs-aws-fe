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

const IMPORT_TITLE = "Import Products CSV";
const IMPORT_TITLE_IN_PROGRESS = "Import Products CSV (wait...)";

export default function PageProductImport() {
  const classes = useStyles();

  const [title, setTitle] = React.useState(IMPORT_TITLE);
  const [someUpdatesId, setSomeUpdates] = React.useState(0);

  const handleUpdate = () => {
    setTitle(IMPORT_TITLE_IN_PROGRESS);

    setTimeout(() => {
      setTitle(IMPORT_TITLE);
      setSomeUpdates((i) => ++i);
    }, 4000);
  };

  return (
    <div className={classes.content}>
      <Box display="flex" alignItems="center">
        <CSVFileImport
          url={`${API_PATHS.import}/import`}
          title={title}
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
