require('dotenv/config');
var request = require('request');
var fs = require('fs');

// var env_var = JSON.stringify(process.env.PLAYGROUND_ENVIRONMENT);
// env_var = env_var.substring(1,8);
var env_var = "product"

const clientid = process.env.CLIENT_ID;
const clientsecret = process.env.CLIENT_SECRET;

var globalsv_filename = 'datafolder/data.csv';

exports.getclassoverlap = function (label = '', fpath = '', fname = '') {

  label = label.toString();

  if ((fpath === "") && (fname === "")) {
    fpath = globalsv_filename;
    fname = 'data.csv'
  }
  else {
    fpath = fpath.toString();
    fname = fname.toString();
  }

  return new Promise((resolve, reject) => {
    var options = {
      'method': 'POST',
      'url': process.env[env_var.concat("_").concat("coverlap")],
      'headers': {
        'X-IBM-Client-Id': clientid,
        'X-IBM-Client-Secret': clientsecret,
        'accept': 'application/json',
        'content-type': 'multipart/form-data; boundary=---011000010111000001101001'
      },
      formData: {
        'data_file': {
          'value': fs.createReadStream(fpath),
          'options': {
            'filename': fname,
            'contentType': null
          }
        },
        'label_column': label
      }
    };

    var c_overlap = {};
    request(options, function (error, response) {
      if (!error && response.statusCode == 200) {
        let jobId = JSON.parse(response.body).job_id
        let message = JSON.parse(response.body).message
        c_overlap["JobID"] = jobId;
        c_overlap["message"] = message;
        // console.log("complete: ", jobId, message);
        resolve(c_overlap);
      }
      else {
        // console.log(response.statusCode)
        // console.log(JSON.parse(response.body).moreInformation);
        reject(JSON.parse(response.body).moreInformation);
      }
    });

  })
}

exports.getclassparity = function (label = '', fpath = '', fname = '') {

  label = label.toString();

  if ((fpath === "") && (fname === "")) {
    fpath = globalsv_filename;
    fname = 'data.csv'
  }
  else {
    fpath = fpath.toString();
    fname = fname.toString();
  }

  return new Promise((resolve, reject) => {

    var options = {
      'method': 'POST',
      'url': process.env[env_var.concat("_").concat("cparity")],
      'headers': {
        'X-IBM-Client-Id': clientid,
        'X-IBM-Client-Secret': clientsecret,
        'accept': 'application/json',
        'content-type': 'multipart/form-data; boundary=---011000010111000001101001',
      },
      formData: {
        'data_file': {
          'value': fs.createReadStream(fpath),
          'options': {
            'filename': fname,
            'contentType': null
          }
        },
        'label_column': label
      }
    };

    var c_parity = {};
    request(options, function (error, response) {
      if (!error && response.statusCode == 200) {
        let jobId = JSON.parse(response.body).job_id
        let message = JSON.parse(response.body).message
        c_parity["JobID"] = jobId;
        c_parity["message"] = message;
        // console.log("complete: ", jobId, message);
        resolve(c_parity);
      }
      else {
        // console.log(response.statusCode)
        // console.log(JSON.parse(response.body).moreInformation);
        reject(JSON.parse(response.body).moreInformation);
      }
    });

  })
}

exports.getlabelpurity = function (label = "", fpath = "", fname = "") {

  label = label.toString();

  if ((fpath === "") && (fname === "")) {
    fpath = globalsv_filename;
    fname = 'data.csv'
  }
  else {
    fpath = fpath.toString();
    fname = fname.toString();
  }

  return new Promise((resolve, reject) => {

    var options = {
      'method': 'POST',
      'url': process.env[env_var.concat("_").concat("labelpurity")],
      'headers': {
        'X-IBM-Client-Id': clientid,
        'X-IBM-Client-Secret': clientsecret,
        'accept': 'application/json',
        'content-type': 'multipart/form-data; boundary=---011000010111000001101001',
      },
      formData: {
        'data_file': {
          'value': fs.createReadStream(fpath),
          'options': {
            'filename': fname,
            'contentType': null
          }
        },
        'label_column': label
      }
    };

    var l_purity = {};
    request(options, function (error, response) {
      if (!error && response.statusCode == 200) {
        let jobId = JSON.parse(response.body).job_id
        let message = JSON.parse(response.body).message
        l_purity["JobID"] = jobId;
        l_purity["message"] = message;
        // console.log("complete: ", jobId, message);
        resolve(l_purity);
      }
      else {
        // console.log(response.statusCode)
        // console.log(JSON.parse(response.body).moreInformation);
        reject(JSON.parse(response.body).moreInformation);
      }
    });

  });

}

exports.getoutlierdetection = function (label = "", fpath = "", fname = "") {

  label = label.toString();

  if ((fpath === "") && (fname === "")) {
    fpath = globalsv_filename;
    fname = 'data.csv'
  }
  else {
    fpath = fpath.toString();
    fname = fname.toString();
  }

  return new Promise((resolve, reject) => {

    var options = {
      'method': 'POST',
      'url': process.env[env_var.concat("_").concat("outlierdetect")],
      'headers': {
        'X-IBM-Client-Id': clientid,
        'X-IBM-Client-Secret': clientsecret,
        'accept': 'application/json',
        'content-type': 'multipart/form-data; boundary=---011000010111000001101001',
      },
      formData: {
        'data_file': {
          'value': fs.createReadStream(fpath),
          'options': {
            'filename': fname,
            'contentType': null
          }
        },
        'label_column': label
      }
    };

    var o_detect = {};
    request(options, function (error, response) {
      if (!error && response.statusCode == 200) {
        let jobId = JSON.parse(response.body).job_id
        let message = JSON.parse(response.body).message
        o_detect["JobID"] = jobId;
        o_detect["message"] = message;
        // console.log("complete: ", jobId, message);
        resolve(o_detect);
      }
      else {
        // console.log(response.statusCode)
        // console.log(JSON.parse(response.body).moreInformation);
        reject(JSON.parse(response.body).moreInformation);
      }
    });

  });
}

exports.chkdatacompleteness = function (fpath = "", fname = "") {

  if ((fpath === "") && (fname === "")) {
    fpath = globalsv_filename;
    fname = 'data.csv'
  }
  else {
    fpath = fpath.toString();
    fname = fname.toString();
  }

  return new Promise((resolve, reject) => {

    var options = {
      'method': 'POST',
      'url': process.env[env_var.concat("_").concat("dcompleteness")],
      'headers': {
        'X-IBM-Client-Id': clientid,
        'X-IBM-Client-Secret': clientsecret,
        'accept': 'application/json',
        'content-type': 'multipart/form-data; boundary=---011000010111000001101001',
      },
      formData: {
        'data_file': {
          'value': fs.createReadStream(fpath),
          'options': {
            'filename': fname,
            'contentType': null
          }
        }
      }
    };

    var d_complete = {};
    request(options, function (error, response) {
      if (!error && response.statusCode == 200) {
        let jobId = JSON.parse(response.body).job_id
        let message = JSON.parse(response.body).message
        d_complete["JobID"] = jobId;
        d_complete["message"] = message;
        // console.log("complete: ", jobId, message);
        resolve(d_complete);
      }
      else {
        // console.log(response.statusCode)
        // console.log(JSON.parse(response.body).moreInformation);
        reject(JSON.parse(response.body).moreInformation);
      }
    });
  });
}

exports.chkdataduplicates = function (fpath = "", fname = "") {

  if ((fpath === "") && (fname === "")) {
    fpath = globalsv_filename;
    fname = 'data.csv'
  }
  else {
    fpath = fpath.toString();
    fname = fname.toString();
  }

  return new Promise((resolve, reject) => {

    var options = {
      'method': 'POST',
      'url': process.env[env_var.concat("_").concat("dduplicates")],
      'headers': {
        'X-IBM-Client-Id': clientid,
        'X-IBM-Client-Secret': clientsecret,
        'accept': 'application/json',
        'content-type': 'multipart/form-data; boundary=---011000010111000001101001',
      },
      formData: {
        'data_file': {
          'value': fs.createReadStream(fpath),
          'options': {
            'filename': fname,
            'contentType': null
          }
        }
      }
    };

    var d_duplicate = {};
    request(options, function (error, response) {
      if (!error && response.statusCode == 200) {
        let jobId = JSON.parse(response.body).job_id
        let message = JSON.parse(response.body).message
        d_duplicate["JobID"] = jobId;
        d_duplicate["message"] = message;
        // console.log("complete: ", jobId, message);
        resolve(d_duplicate);
      }
      else {
        // console.log(response.statusCode)
        // console.log(JSON.parse(response.body).moreInformation);
        reject(JSON.parse(response.body).moreInformation);
      }
    });

    // request(options, function (error, response) {
    //   if (error) { reject(error) }

    //   try {
    //     const jsondata5 = JSON.parse(response.body);

    //     d_duplicate["JobID"] = jsondata5["job_id"];
    //     d_duplicate["message"] = jsondata5["message"];

    //     resolve(d_duplicate);
    //   }
    //   catch (err) {
    //     //console.log("error in inputs provided");
    //   }
    // });

  });
}

exports.chkdatahomogeneity = function (fpath = "", fname = "") {

  if ((fpath === "") && (fname === "")) {
    fpath = globalsv_filename;
    fname = 'data.csv'
  }
  else {
    fpath = fpath.toString();
    fname = fname.toString();
  }
  return new Promise((resolve, reject) => {

    var options = {
      'method': 'POST',
      'url': process.env[env_var.concat("_").concat("dhomogeneity")],
      'headers': {
        'X-IBM-Client-Id': clientid,
        'X-IBM-Client-Secret': clientsecret,
        'accept': 'application/json',
        'content-type': 'multipart/form-data; boundary=---011000010111000001101001',
      },
      formData: {
        'data_file': {
          'value': fs.createReadStream(fpath),
          'options': {
            'filename': fname,
            'contentType': null
          }
        }
      }
    };

    var d_homogen = {};
    request(options, function (error, response) {
      if (!error && response.statusCode == 200) {
        let jobId = JSON.parse(response.body).job_id
        let message = JSON.parse(response.body).message
        d_homogen["JobID"] = jobId;
        d_homogen["message"] = message;
        // console.log("complete: ", jobId, message);
        resolve(d_homogen);
      }
      else {
        // console.log(response.statusCode)
        // console.log(JSON.parse(response.body).moreInformation);
        reject(JSON.parse(response.body).moreInformation);
      }
    });

  });
}

exports.chkdataprofile = function (fpath = "", fname = "") {

  if ((fpath === "") && (fname === "")) {
    fpath = globalsv_filename;
    fname = 'data.csv'
  }
  else {
    fpath = fpath.toString();
    fname = fname.toString();
  }

  return new Promise((resolve, reject) => {

    var options = {
      'method': 'POST',
      'url': process.env[env_var.concat("_").concat("dprofile")],
      'headers': {
        'X-IBM-Client-Id': clientid,
        'X-IBM-Client-Secret': clientsecret,
        'accept': 'application/json',
        'content-type': 'multipart/form-data; boundary=---011000010111000001101001',
      },
      formData: {
        'data_file': {
          'value': fs.createReadStream(fpath),
          'options': {
            'filename': fname,
            'contentType': null
          }
        }
      }
    };

    var d_profile = {};
    request(options, function (error, response) {
      if (!error && response.statusCode == 200) {
        let jobId = JSON.parse(response.body).job_id
        let message = JSON.parse(response.body).message
        d_profile["JobID"] = jobId;
        d_profile["message"] = message;
        // console.log("complete: ", jobId, message);
        resolve(d_profile);
      }
      else {
        // console.log(response.statusCode)
        // console.log(JSON.parse(response.body).moreInformation);
        reject(JSON.parse(response.body).moreInformation);
      }
    });

  });
}

exports.getresults = function (jobid = "") {

  jobid = jobid.toString();

  return new Promise((resolve, reject) => {

    var options = {
      'method': 'POST',
      'url': process.env[env_var.concat("_").concat("results")],
      'headers': {
        'X-IBM-Client-Id': clientid,
        'X-IBM-Client-Secret': clientsecret,
        'accept': 'application/json',
        'content-type': 'multipart/form-data; boundary=---011000010111000001101001',
      },
      formData: {
        'job_id': jobid
      }
    };

    var finalresult = {}
    request(options, function (error, response) {
      if (!error && response.statusCode == 200) {
        const jsondata1 = JSON.parse(response.body);

        if (jsondata1["message"] == "Job Finished") {

          if (jsondata1["response"]["results"]["title"] == "Data Profiler") {
            finalresult["Job ID"] = jsondata1["job_id"];
            finalresult["Message"] = jsondata1["message"];
            finalresult["Metric"] = jsondata1["response"]["results"]["title"];
            finalresult["Methodology"] = jsondata1["response"]["metadata"]["method_details"]["definition"];
            //finalresult["Dataset"] = jsondata1["response"]["metadata"]["dataset_details"][0]["name"];

            finalresult["Number of Columns"] = jsondata1["response"]["results"]["details"]["Basic_Profile"]["num_columns"]
            finalresult["Number of Samples"] = jsondata1["response"]["results"]["details"]["Basic_Profile"]["num_samples"]

            // var ky = "Date Columns" + ": " + JSON.stringify(jsondata1["response"]["results"]["details"]["Basic_Profile"]["date_columns"]["count"]);
            if (JSON.stringify(jsondata1["response"]["results"]["details"]["Basic_Profile"]["date_columns"]["column_names"]) === JSON.stringify({})) {
              finalresult["Date Col"] = "N/A"
            }
            else {
              finalresult["Date Col"] = jsondata1["response"]["results"]["details"]["Basic_Profile"]["date_columns"]["column_names"]
            }
            // ky = "Numerical Columns" + ": " + JSON.stringify(jsondata1["response"]["results"]["details"]["Basic_Profile"]["numerical_columns"]["count"]);
            finalresult["Numerical Col"] = jsondata1["response"]["results"]["details"]["Basic_Profile"]["numerical_columns"]["column_names"]

            //var sc = "String Columns".concat(": ").concat(JSON.stringify(jsondata1["response"]["results"]["details"]["Basic_Profile"]["string_columns"]["count"]));

            finalresult["String Col"] = jsondata1["response"]["results"]["details"]["Basic_Profile"]["string_columns"]["column_names"]


            finalresult["Score"] = jsondata1["response"]["results"]["score"];
            resolve(finalresult)
          }

          else {

            finalresult["Job ID"] = jsondata1["job_id"];
            finalresult["Message"] = jsondata1["message"];
            finalresult["Metric"] = jsondata1["response"]["results"]["title"];
            finalresult["Methodology"] = jsondata1["response"]["metadata"]["method_details"]["definition"];
            //finalresult["Dataset"] = jsondata1["response"]["metadata"]["dataset_details"][0]["name"];
            finalresult["Result"] = jsondata1["response"]["results"]["explanation"];
            finalresult["Score"] = jsondata1["response"]["results"]["score"];

            if (JSON.stringify(jsondata1["response"]["results"]["explanation"]) == JSON.stringify({})) {
              finalresult["Result"] = "--"
            }
            resolve(finalresult)
          }
        }

        else if (jsondata1["message"] == "Job ID doesn't exist") {
          finalresult = { result: "Invalid" }
          resolve(finalresult);
        }
        else {
          finalresult = {};
          resolve(finalresult);
        }
      }
      else {
        // console.log(response.statusCode);
        // console.log(JSON.parse(response.body).moreInformation);
        reject(JSON.parse(response.body).moreInformation);
      }
    });
  });
}

// exports.chkconn = function () {

//   return new Promise((resolve, reject) => {

//     var options = {
//       'method': 'GET',
//       'url': process.env[env_var.concat("_").concat("check")],
//       'headers': {
//         'X-IBM-Client-Id': clientid,
//         'X-IBM-Client-Secret': clientsecret,
//         'accept': 'application/json',
//       }
//     };
//     request(options, function (error, response) {
//       if (error) { reject(error) }

//       resolve(response.body);
//     });

//   })
//     .catch(() => { });

// }
