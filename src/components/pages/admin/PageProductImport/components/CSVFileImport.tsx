import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

import { getCredentials } from "components/App/App";

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 0, 3),
  },
}));

type Props = {
  url: string;
  title: string;
  onUpload(): void;
};

type FailResponse = {
  success: boolean;
  message: string;
}


export const CSVFileImport: React.FC<Props> = ({ url, title, onUpload }) => {
  const classes = useStyles();
  const [file, setFile] = useState<any>();

  const onFileChange = (e: any) => {
    console.log(e);
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length) return;
    setFile(files.item(0));
  };

  const removeFile = () => {
    setFile("");
  };

  const getSignedUrl = async (): Promise<any> => {
    const credentials = getCredentials();

    return axios({
        method: "GET",
        url,
        params: {
          name: encodeURIComponent(file.name),
        },
        headers: {
          Authorization: `Basic ${credentials}`,
        },
      });
  }

  const uploadFile = async () => {
    // Get the presigned URL
    const response = await getSignedUrl();
    
    console.log("File to upload: ", file.name);
    console.log("Uploading to: ", response.data);

    const result = await fetch(response.data.result, {
      method: "PUT",
      body: file,
    });
    console.log("Result: ", result);

    setFile("");
    onUpload();
  };
  return (
    <div className={classes.content}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {!file ? (
        <input type="file" onChange={onFileChange} />
      ) : (
        <div>
          <button onClick={removeFile}>Remove file</button>
          <button onClick={uploadFile}>Upload file</button>
        </div>
      )}
    </div>
  );
};
