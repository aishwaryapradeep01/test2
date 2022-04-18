/* eslint-disable */
import React, { useState } from 'react';
import { Button, Loading, TableContainer, CodeSnippet, ToastNotification } from 'carbon-components-react';
import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from 'carbon-components-react';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { CopyFile24 } from '@carbon/icons-react';

function Datasetquality({ choice, filepath, filename, ufilepath, ufilename, setdataseterr1 }) {

  const [jobid, setjobid] = useState('');
  const [msg, setmsg] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [buttonstate, setbuttonstate] = useState(false);
  const [errstatus, seterrstatus] = useState(false);
  const [apierr, setapierr] = useState('');
  const [err1status, seterr1status] = useState(false);
  const [err2status, seterr2status] = useState(false);
  const [err3status, seterr3status] = useState(false);

  const onDCClickHandler = (e) => {

    setLoading(true);
    if (choice === "upload") {

      if (ufilename === "") {
        console.log('No file uploaded');
        seterr1status(true);
        setLoading(false);
      }
      else {
        callDatacompleteness()
          .then((resp) => {
            setjobid(resp["JobID"]);
            setmsg(resp["message"]);
            setLoading(false);
          })
          .catch((err) => {
            //console.log(err)
            setLoading(false);
            seterr3status(true);
          });
      }

    }

    if (choice === "sample") {

      if (filename === "Select Dataset" || filename === "") {
        setdataseterr1(true);
        setbuttonstate(true);
        setLoading(false);
      }

      else {
        setdataseterr1(false);
        setbuttonstate(false);

        callDatacompleteness()
          .then((resp) => {
            setjobid(resp["JobID"]);
            setmsg(resp["message"]);
            setLoading(false);
          })
          .catch((err) => {
            //console.log(err)
            setLoading(false);
            seterr3status(true);
          });
      }

    }

  }

  const onDDClickHandler = (e) => {

    setLoading(true);
    if (choice === "upload") {

      if (ufilename === "") {
        console.log('No file uploaded');
        seterr1status(true);
        setLoading(false);
      }
      else {
        callDataduplicates()
          .then((resp) => {
            setjobid(resp["JobID"]);
            setmsg(resp["message"]);
            setLoading(false);
          })
          .catch((err) => {
            //console.log(err)
            setLoading(false);
            seterr3status(true);
          });
      }

    }

    if (choice === "sample") {

      if (filename === "Select Dataset" || filename === "") {
        setdataseterr1(true);
        setbuttonstate(true);
        setLoading(false);
      }

      else {
        setdataseterr1(false);
        setbuttonstate(false)
        callDataduplicates()
          .then((resp) => {
            setjobid(resp["JobID"]);
            setmsg(resp["message"]);
            setLoading(false);
          })
          .catch((err) => {
            //console.log(err)
            setLoading(false);
            seterr3status(true);
          });
      }


    }
  }

  const onDHClickHandler = (e) => {

    setLoading(true);
    if (choice === "upload") {

      if (ufilename === "") {
        console.log('No file uploaded');
        seterr1status(true);
        setLoading(false);
      }

      else {
        callDatahomogeneity()
          .then((resp) => {
            setjobid(resp["JobID"]);
            setmsg(resp["message"]);
            setLoading(false);
          })
          .catch((err) => {
            //console.log(err)
            setLoading(false);
            seterr3status(true);
          });
      }

    }

    if (choice === "sample") {

      if (filename === "Select Dataset" || filename === "") {
        setdataseterr1(true);
        setbuttonstate(true);
        setLoading(false);
      }

      else {
        setdataseterr1(false);
        setbuttonstate(false);
        callDatahomogeneity()
          .then((resp) => {
            setjobid(resp["JobID"]);
            setmsg(resp["message"]);
            setLoading(false);
          })
          .catch((err) => {
            //console.log(err)
            setLoading(false);
            seterr3status(true);
          });
      }
    }
  }

  const onDPClickHandler = (e) => {

    setLoading(true);
    if (choice === "upload") {

      if (ufilename === "") {
        console.log('No file uploaded');
        seterr1status(true);
        setLoading(false);
      }
      else {
        setdataseterr1(false);
        setbuttonstate(false);
        callDataprofile()
          .then((resp) => {
            setjobid(resp["JobID"]);
            setmsg(resp["message"]);
            setLoading(false);
          })
          .catch((err) => {
            //console.log(err)
            setLoading(false);
            seterr3status(true);
          });

      }


    }

    if (choice === "sample") {

      if (filename === "Select Dataset" || filename === "") {
        setdataseterr1(true);
        setbuttonstate(true);
        setLoading(false);

      }

      else {
        setdataseterr1(false);
        setbuttonstate(false);
        callDataprofile()
          .then((resp) => {
            setjobid(resp["JobID"]);
            setmsg(resp["message"]);
            setLoading(false);
          })
          .catch((err) => {
            //console.log(err)
            setLoading(false);
            seterr3status(true);
          });

      }

    }

  }


  const callDatacompleteness = async () => {

    // let resp = await fetch('/conncheck');
    // let res = await resp.json();

    // if (res['result'] === '{"message": "Welcome to Data Quality for AI"}') {
    //   //console.log("Valid Credentials in use");
    // }
    // else {
    //   seterr2status(true);
    // }

    if (choice === "upload") {
      let response = await fetch('/datacompleteness?fpath=' + ufilepath + '&fname=' + ufilename);
      let body = await response.json();
      // if (response.status !== 200) {
      //   throw Error(body.message)
      // }
      // return body.result;

      if (response.status !== 200) {
        seterrstatus(true);
        setapierr(body.result);
      }
      else {
        return body.result;
      }

    }

    if (choice === "sample") {

      let response = await fetch('/datacompleteness?fpath=' + filepath + '&fname=' + filename);
      let body = await response.json();

      if (response.status !== 200) {
        console.log("datasetquality !200: ", body.result);
        seterrstatus(true);
        setapierr(body.result);
      }
      else {
        return body.result;
      }
    }
  };

  const callDataduplicates = async () => {

    // let resp = await fetch('/conncheck');
    // let res = await resp.json();

    // if (res['result'] === '{"message": "Welcome to Data Quality for AI"}') {
    //   //console.log("Valid Credentials in use");
    // }
    // else {
    //   seterr2status(true);
    // }

    if (choice === "upload") {
      let response = await fetch('/dataduplicates?fpath=' + ufilepath + '&fname=' + ufilename);
      let body = await response.json();

      if (response.status !== 200) {
        seterrstatus(true);
        setapierr(body.result);
      }
      else {
        return body.result;
      }


    }

    if (choice === "sample") {

      let response = await fetch('/dataduplicates?fpath=' + filepath + '&fname=' + filename);
      let body = await response.json();

      if (response.status !== 200) {
        seterrstatus(true);
        setapierr(body.result);
      }
      else {
        return body.result;
      }


    }


  };

  const callDatahomogeneity = async () => {

    // let resp = await fetch('/conncheck');
    // let res = await resp.json();

    // if (res['result'] === '{"message": "Welcome to Data Quality for AI"}') {
    //   //console.log("Valid Credentials in use");
    // }
    // else {
    //   seterr2status(true);
    // }

    if (choice === "upload") {
      let response = await fetch('/datahomogeneity?fpath=' + ufilepath + '&fname=' + ufilename);
      let body = await response.json();

      if (response.status !== 200) {
        seterrstatus(true);
        setapierr(body.result);
      }
      else {
        return body.result;
      }


    }

    if (choice === "sample") {

      let response = await fetch('/datahomogeneity?fpath=' + filepath + '&fname=' + filename);
      let body = await response.json();

      if (response.status !== 200) {
        seterrstatus(true);
        setapierr(body.result);
      }
      else {
        return body.result;
      }


    }


  };

  const callDataprofile = async () => {

    // let resp = await fetch('/conncheck');
    // let res = await resp.json();

    // if (res['result'] === '{"message": "Welcome to Data Quality for AI"}') {
    //   //console.log("Valid Credentials in use");
    // }
    // else {
    //   seterr2status(true);
    // }

    if (choice === "upload") {
      let response = await fetch('/dataprofile?fpath=' + ufilepath + '&fname=' + ufilename);
      let body = await response.json();

      if (response.status !== 200) {
        seterrstatus(true);
        setapierr(body.result);
      }
      else {
        return body.result;
      }


    }

    if (choice === "sample") {

      let response = await fetch('/dataprofile?fpath=' + filepath + '&fname=' + filename);
      let body = await response.json();

      if (response.status !== 200) {
        seterrstatus(true);
        setapierr(body.result);
      }
      else {
        return body.result;
      }


    }
  };

  function err1closef() {
    seterr1status(false);
  }

  function err2closef() {
    seterr2status(false);
  }
  function err3closef() {
    seterr3status(false); // For invalid results/undefined jobs
  }
  const headers = [
    {
      key: 'jobid',
      header: 'Job ID',
    },
    {
      key: 'message',
      header: 'Message',
    },
    {
      key: 'copyfunc',
      header: ''
    }
  ];
  const rows = [
    {
      id: 'a',
      jobid: jobid,
      message: msg,
      copyfunc: <CopyToClipboard text={jobid}>
        <CodeSnippet type="inline" feedback="Copied" ><CopyFile24 /></CodeSnippet>
      </CopyToClipboard>
    }
  ];

  return (
    <div className="dqdiv">
      <div className="ButtonArea">
        <Button className="parameterbutton" kind="tertiary" type="submit" onClick={onDCClickHandler} > Data Completeness </Button>
        <Button className="parameterbutton" kind="tertiary" type="submit" onClick={onDDClickHandler} > Data Duplicates </Button>
        <Button className="parameterbutton" kind="tertiary" type="submit" onClick={onDHClickHandler} > Data Homogeneity </Button>
        <Button className="parameterbutton" kind="tertiary" type="submit" onClick={onDPClickHandler} > Data Profile </Button>

      </div>

      {err1status &&
        <ToastNotification
          iconDescription="Close notification"
          subtitle={<span>No File uploaded</span>}
          timeout={3000}
          onClose={err1closef}
          title="Error Notification"
        />
      }

      {err2status &&
        <ToastNotification
          iconDescription="Close notification"
          subtitle={<span>Invalid Client ID or Secret. Stop the application before updating your credentials</span>}
          timeout={4000}
          onClose={err2closef}
          title="Error Notification"
        />
      }

      {err3status &&
        <ToastNotification
          iconDescription="Close notification"
          subtitle={<span>Invalid Results</span>}
          timeout={3000}
          onClose={err3closef}
          title="Error Notification"
        />
      }

      {errstatus &&
        <ToastNotification
          iconDescription="Close notification"
          subtitle={<span>{apierr}</span>}
          timeout={3000}
          onClose={() => { seterrstatus(false) }}
          title="Error Notification"
        />
      }

      <Loading active={isLoading} description="Active loading indicator" withOverlay={true} />


      {jobid && <div className="TableDisplay" >
        {jobid && <DataTable rows={rows} headers={headers}>
          {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) =>
          (
            <TableContainer title="Parameter Job">
              <Table {...getTableProps()}>
                <TableHead>
                  <TableRow>
                    {headers.map((header) => (
                      <TableHeader {...getHeaderProps({ header })}>
                        {header.header}
                      </TableHeader>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow {...getRowProps({ row })}>
                      {row.cells.map((cell) => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </DataTable>}
      </div>}

    </div>
  );

}

export default Datasetquality;
