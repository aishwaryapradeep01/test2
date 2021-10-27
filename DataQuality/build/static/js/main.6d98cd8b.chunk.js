(this["webpackJsonpdata-quality-ai-app"]=this["webpackJsonpdata-quality-ai-app"]||[]).push([[0],{103:function(e,t,a){},182:function(e,t,a){},183:function(e,t,a){},184:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(42),s=a.n(r),c=a(19),i=(a(103),a(205)),o=a(198),l=a(73),u=a(59),b=a(23),d=a.n(b),j=a(21),p=a(25),f=a(55),h=a.n(f),m=a(191),O=a(204),x=a(200),v=a(201),g=a(15),k=["uuid","name","filesize","status","iconDescription","invalid"],y=0;function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"id";return y++,"".concat(e).concat(y)}var D=function(e){var t=e.setuLabelInput,a=e.setufilepath,r=e.setufilename,s=e.ulabelerr,i=Object(n.useState)(""),o=Object(c.a)(i,2),l=o[0],b=o[1],f=Object(n.useState)(!1),y=Object(c.a)(f,2),D=y[0],w=y[1],C=Object(n.useState)(!1),N=Object(c.a)(C,2),I=N[0],E=N[1],T="datafolder/data.csv",M=!0,J=Object(n.useState)([]),F=Object(c.a)(J,2),L=F[0],P=F[1],z=function(e){e.preventDefault(),e.stopPropagation(),console.log(e)},U=function(e){e.preventDefault(),e.stopPropagation(),console.log(e)};Object(n.useEffect)((function(){return document.addEventListener("drop",z),document.addEventListener("dragover",U),function(){document.removeEventListener("drop",z),document.removeEventListener("dragover",U)}}),[]);var A=function(){var e=Object(p.a)(d.a.mark((function e(t){var a,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.filesize<=15e6)){e.next=4;break}M=!0,e.next=8;break;case 4:return M=!1,a=Object(j.a)(Object(j.a)({},t),{},{status:"edit",iconDescription:"Delete file",invalid:!0,errorSubject:"File size exceeds limit",errorBody:"Max file size is 15MB. Select a new file and try again."}),P((function(e){return e.map((function(e){return e.uuid===t.uuid?a:e}))})),e.abrupt("return");case 8:if(!t.invalidFileType){e.next=14;break}return n=Object(j.a)(Object(j.a)({},t),{},{status:"edit",iconDescription:"Delete file",invalid:!0,errorSubject:"Invalid file type",errorBody:'"'.concat(t.name,'" does not have a valid file type.')}),P((function(e){return e.map((function(e){return e.uuid===t.uuid?n:e}))})),e.abrupt("return");case 14:M=!0;case 15:return e.prev=15,e.next=18,fetch("https://www.mocky.io/v2/5185415ba171ea3a00704eed?mocky-delay=100ms",{method:"POST",mode:"cors",body:t});case 18:if(e.sent.ok){e.next=21;break}throw new Error("Network response was not ok");case 21:setTimeout((function(){var e=Object(j.a)(Object(j.a)({},t),{},{status:"edit",iconDescription:"Remove file"});P((function(a){return a.map((function(a){return a.uuid===t.uuid?e:a}))}))}),1e3),e.next=29;break;case 24:e.prev=24,e.t0=e.catch(15),M=!1,r=Object(j.a)(Object(j.a)({},t),{},{status:"edit",iconDescription:"Upload failed",invalid:!0}),P((function(e){return e.map((function(e){return e.uuid===t.uuid?r:e}))}));case 29:case"end":return e.stop()}}),e,null,[[15,24]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(p.a)(d.a.mark((function e(t,n){var s,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=n.addedFiles,t.stopPropagation(),c=s.map((function(e){return{uuid:S(),name:e.name,filesize:e.size,status:"uploading",iconDescription:"Uploading"}})),!s[0]){e.next=24;break}if(console.log("addedFiles[0]:",s[0]),P([c[0]]),A(c[0]),!M){e.next=22;break}return(i=new FormData).append("file",s[0]),e.prev=10,e.next=13,h.a.post("/upload",i,{});case 13:200===e.sent.status?(Object(j.a)(Object(j.a)({},c[0]),{},{status:"complete",iconDescription:"Upload complete"}),w(!0),a(T),r("data.csv"),console.log("file uploaded")):(console.log("file not uploaded"),E(!0)),e.next=22;break;case 17:e.prev=17,e.t0=e.catch(10),Object(j.a)(Object(j.a)({},c[0]),{},{status:"edit",iconDescription:"Upload failed",invalid:!0}),console.log("Issue with uploaded file"),E(!0);case 22:e.next=26;break;case 24:console.log("Issue with uploaded file"),E(!0);case 26:case"end":return e.stop()}}),e,null,[[10,17]])})));return function(t,a){return e.apply(this,arguments)}}(),R=Object(n.useCallback)((function(e,t){var a=t.uuid;return P(L.filter((function(e){var t=e.uuid;return a!==t})))}),[L]);return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{class:"bx--form-item",children:[Object(g.jsx)("strong",{class:"bx--file--label",children:"Upload File"}),Object(g.jsx)("p",{class:"bx--label-description",children:"Max file size of 15MB allowed"}),Object(g.jsx)(m.a,{labelText:"Drag and drop here or click to upload",onAddFiles:B,accept:[".csv"]}),Object(g.jsx)("div",{className:"uploaded-files",style:{width:"100%"},children:L.map((function(e){var t=e.uuid,a=e.name,n=e.filesize,r=e.status,s=e.iconDescription,c=e.invalid,i=Object(u.a)(e,k);return Object(g.jsx)(O.a,Object(j.a)({uuid:t,name:a,filesize:n,size:"lg",status:r,iconDescription:s,invalid:c,onDelete:R},i),S())}))})]}),Object(g.jsx)("br",{}),Object(g.jsx)("div",{className:"LabelArea",children:Object(g.jsx)(x.a,{id:"label",labelText:"Label Column*",invalidText:"Mandatory field",invalid:s,size:"lg",placeholder:"Label",value:l,onChange:function(e){b(e.target.value),t(e.target.value),a(T),r("data.csv")}})}),D&&Object(g.jsx)(v.a,{iconDescription:"Close notification",subtitle:Object(g.jsx)("span",{children:"File Upload Successful"}),timeout:3e3,onClose:function(){w(!1)},kind:"success",title:"Success Notification"}),I&&Object(g.jsx)(v.a,{iconDescription:"Close notification",subtitle:Object(g.jsx)("span",{children:"File upload failed"}),timeout:3e3,onClose:function(){E(!1)},title:"Error Notification"})]})},w=a(193),C=a(194);var N=function(e){var t=e.setfilepath,a=e.setfilename,r=e.setLabelInput,s=e.labelerr,i=e.dataseterr,o=[{id:"",value:"Select Dataset"},{id:"adult.csv",value:"adult.csv"},{id:"breast-cancer.csv",value:"breast-cancer.csv"},{id:"credit-g.csv",value:"credit-g.csv"}],l=["Select Column","Class","age","menopause","tumor-size","inv-nodes","node-caps","deg-malig","breast","breast-quad","irradiat"],u=["Select Column","checking_status","duration","credit_history","purpose","credit_amount","savings_status","employment","installment_commitment","personal_status","other_parties","residence_since","property_magnitude","age","other_payment_plans","housing","existing_credits","job","num_dependents","own_telephone","foreign_worker","class"],b=["Select Column","age","workclass","fnlwgt","education","education-num","marital-status","occupation","relationship","race","sex","capital-gain","capital-loss","hours-per-week","native-country","income"],d=Object(n.useState)(o[0].id),j=Object(c.a)(d,2),p=j[0],f=j[1],h=Object(n.useState)([""]),m=Object(c.a)(h,2),O=m[0],x=m[1];return Object(g.jsxs)("div",{children:[Object(g.jsx)(w.a,{labelText:"Sample Dataset*",invalidText:"Mandatory field",invalid:i,size:"lg",value:p,onChange:function(e){f(e.target.value),x([""]),t(e.target.value),a(e.target.options[e.target.options.selectedIndex].text),setTimeout((function(){"credit-g.csv"===e.target.value?x(u):"breast-cancer.csv"===e.target.value?x(l):"adult.csv"===e.target.value&&x(b)}),100)},children:o.map((function(e,t){return Object(g.jsx)(C.a,{value:e.id,text:e.value},t)}))}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("div",{className:"LabelArea",children:Object(g.jsx)(w.a,{labelText:"Label Column*",invalidText:"Mandatory field",invalid:s,size:"lg",onChange:function(e){r(e.target[e.target.selectedIndex].text),console.log("Label: ",e.target[e.target.selectedIndex].text)},children:O.map((function(e,t){return Object(g.jsx)(C.a,{value:e.id,text:e},t)}))})})]})},I=a(195),E=a(196);var T=function(e){var t=e.setbuttonstate,a=e.setchoice,r=e.setLabelInput,s=e.setuLabelInput,i=e.setfilepath,o=e.setfilename,l=e.setufilepath,u=e.setufilename,b=e.ulabelerr,d=e.labelerr,j=e.dataseterr,p=Object(n.useState)(""),f=Object(c.a)(p,2),h=f[0],m=f[1],O=Object(n.useState)(""),x=Object(c.a)(O,2),v=x[0],k=x[1];return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(I.a,{legendText:"Choose the type of Dataset",name:"radio-button-group",children:[Object(g.jsx)(E.a,{labelText:"Upload your Dataset ( < 15 MB )",value:"customdt",id:"customdt",onClick:function(){a("upload"),m("Show"),k("")}}),Object(g.jsx)(E.a,{labelText:"Use Sample Datasets",value:"sampledt",id:"sampledt",onClick:function(){a("sample"),k("Show"),m("")}})]}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),h&&Object(g.jsx)("div",{id:"custom-dataset",children:Object(g.jsx)(D,{ulabelerr:b,setuLabelInput:s,setufilepath:l,setufilename:u})}),v&&Object(g.jsx)("div",{id:"sample-dataset",children:Object(g.jsx)(N,{setbuttonstate:t,setLabelInput:r,setfilepath:i,setfilename:o,labelerr:d,dataseterr:j})}),Object(g.jsx)("br",{})]})},M=a(197),J=a(202),F=a(192),L=a(199),P=a(67),z=a(65),U=a(68),A=a(70),B=a(69),R=a(66),_=a(39),q=a(92);var H=function(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(""),i=Object(c.a)(s,2),o=i[0],l=i[1],u=Object(n.useState)(""),b=Object(c.a)(u,2),f=b[0],h=b[1],m=Object(n.useState)(""),O=Object(c.a)(m,2),k=O[0],y=O[1],S=Object(n.useState)(""),D=Object(c.a)(S,2),w=D[0],C=D[1],N=Object(n.useState)(""),I=Object(c.a)(N,2),E=I[0],T=I[1],H=Object(n.useState)(!1),Q=Object(c.a)(H,2),G=Q[0],K=Q[1],V=Object(n.useState)(!1),W=Object(c.a)(V,2),X=W[0],Y=W[1],Z=Object(n.useState)(""),$=Object(c.a)(Z,2),ee=$[0],te=$[1],ae=Object(n.useState)(""),ne=Object(c.a)(ae,2),re=ne[0],se=ne[1],ce=Object(n.useState)(""),ie=Object(c.a)(ce,2),oe=ie[0],le=ie[1],ue=Object(n.useState)(""),be=Object(c.a)(ue,2),de=be[0],je=be[1],pe=Object(n.useState)(""),fe=Object(c.a)(pe,2),he=fe[0],me=fe[1],Oe=function(){var e=Object(p.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/results?jobid="+a);case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,200===t.status){e.next=8;break}throw Error(n.message);case 8:return e.abrupt("return",n.result);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),xe=[],ve=[];return"Data Profiler"===f?(xe=[{key:"jobid",header:"Job ID"},{key:"message",header:"Message"},{key:"metric",header:"Metric"},{key:"methodology",header:"Methodology"},{key:"numbercolumns",header:"Number of Columns"},{key:"numbersamples",header:"Number of Samples"},{key:"datecolumns",header:"Date Columns"},{key:"numericalcolumns",header:"Numerical Columns"},{key:"stringcolumns",header:"String Columns"}],ve=[{id:"a",jobid:a,message:o,metric:f,methodology:k,numbercolumns:ee,numbersamples:re,datecolumns:oe,numericalcolumns:de,stringcolumns:he}]):(xe=[{key:"jobid",header:"Job ID"},{key:"message",header:"Message"},{key:"metric",header:"Metric"},{key:"methodology",header:"Methodology"},{key:"result",header:"Result"},{key:"score",header:"Score"}],ve=[{id:"a",jobid:a,message:o,metric:f,methodology:k,result:Object(q.a)(w),score:E}]),Object(g.jsxs)("div",{children:[Object(g.jsxs)(M.a,{autoComplete:"off",onSubmit:function(e){K(!0),e.preventDefault(),Oe().then((function(e){JSON.stringify(e)===JSON.stringify({})?(Y(!0),K(!1)):(console.log("RES: ",e["Job ID"]),console.log("RES MSG: ",e.Message),console.log("RES Metric : ",e["String Col"]),"Data Profiler"===e.Metric?(r(e["Job ID"]),l(e.Message),h(e.Metric),y(e.Methodology),te(e["Number of Columns"]),se(e["Number of Samples"]),le(e["Date Col"].toString()),je(e["Numerical Col"].toString()),me(e["String Col"].toString()),K(!1)):(r(e["Job ID"]),l(e.Message),h(e.Metric),y(e.Methodology),C(e.Result),T(e.Score),K(!1)))})).catch((function(e){console.log(e),K(!1)}))},children:[Object(g.jsx)("h2",{children:"Fetch Processed Results "}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)(x.a,{id:"result",labelText:"Fetch Results",placeholder:"Job ID",value:a,onChange:function(e){return r(e.target.value)}}),Object(g.jsx)("br",{}),Object(g.jsx)("div",{className:"ButtonArea",children:Object(g.jsx)(J.a,{className:"parameterbutton",kind:"tertiary",type:"submit",children:" Fetch Results "})})]}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)(F.a,{active:G,description:"Active loading indicator",withOverlay:!0}),k&&Object(g.jsx)(L.a,{rows:ve,headers:xe,children:function(e){var t=e.rows,a=e.headers,n=e.getTableProps,r=e.getHeaderProps,s=e.getRowProps;return Object(g.jsx)(P.a,{title:"Results Analysis",children:Object(g.jsxs)(z.a,Object(j.a)(Object(j.a)({},n()),{},{children:[Object(g.jsx)(U.a,{children:Object(g.jsx)(A.a,{children:a.map((function(e){return Object(g.jsx)(B.a,Object(j.a)(Object(j.a)({},r({header:e})),{},{children:e.header}))}))})}),Object(g.jsx)(R.a,{children:t.map((function(e){return Object(g.jsx)(A.a,Object(j.a)(Object(j.a)({},s({row:e})),{},{children:e.cells.map((function(e){return Object(g.jsx)(_.a,{children:e.value},e.id)}))}))}))})]}))})}}),X&&Object(g.jsx)(v.a,{iconDescription:"Close notification",subtitle:Object(g.jsx)("span",{children:"Results are getting processed. Try again in a few moments"}),timeout:3e3,onClose:function(){Y(!1)},title:"Error Notification"})]})},Q=a(203),G=a(58),K=a(14);var V=function(e){var t=e.choice,a=e.LabelInput,r=e.uLabelInput,s=e.filepath,i=e.filename,o=e.ufilepath,l=e.ufilename,u=e.setulabelerr,b=e.setlabelerr,f=e.setdataseterr,h=Object(n.useState)(""),m=Object(c.a)(h,2),O=m[0],x=m[1],k=Object(n.useState)(""),y=Object(c.a)(k,2),S=y[0],D=y[1],w=Object(n.useState)(!1),C=Object(c.a)(w,2),N=C[0],I=C[1],E=Object(n.useState)(!1),T=Object(c.a)(E,2),M=T[0],q=T[1],H=function(){var e=Object(p.a)(d.a.mark((function e(){var n,c,u,b;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("upload"!==t){e.next=10;break}return e.next=3,fetch("/classparity?label="+r+"&fpath="+o+"&fname="+l);case 3:return n=e.sent,e.next=6,n.json();case 6:if(c=e.sent,200===n.status){e.next=9;break}throw Error(c.message);case 9:return e.abrupt("return",c.result);case 10:if("sample"!==t){e.next=20;break}return e.next=13,fetch("/classparity?label="+a+"&fpath="+s+"&fname="+i);case 13:return u=e.sent,e.next=16,u.json();case 16:if(b=e.sent,200===u.status){e.next=19;break}throw Error(b.message);case 19:return e.abrupt("return",b.result);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(p.a)(d.a.mark((function e(){var n,c,u,b;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("upload"!==t){e.next=10;break}return e.next=3,fetch("/labelpurity?label="+r+"&fpath="+o+"&fname="+l);case 3:return n=e.sent,e.next=6,n.json();case 6:if(c=e.sent,200===n.status){e.next=9;break}throw Error(c.message);case 9:return e.abrupt("return",c.result);case 10:if("sample"!==t){e.next=20;break}return e.next=13,fetch("/labelpurity?label="+a+"&fpath="+s+"&fname="+i);case 13:return u=e.sent,e.next=16,u.json();case 16:if(b=e.sent,200===u.status){e.next=19;break}throw Error(b.message);case 19:return e.abrupt("return",b.result);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(p.a)(d.a.mark((function e(){var n,c,u,b;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("upload"!==t){e.next=10;break}return e.next=3,fetch("/classoverlap?label="+r+"&fpath="+o+"&fname="+l);case 3:return n=e.sent,e.next=6,n.json();case 6:if(c=e.sent,200===n.status){e.next=9;break}throw Error(c.message);case 9:return e.abrupt("return",c.result);case 10:if("sample"!==t){e.next=20;break}return e.next=13,fetch("/classoverlap?label="+a+"&fpath="+s+"&fname="+i);case 13:return u=e.sent,e.next=16,u.json();case 16:if(b=e.sent,200===u.status){e.next=19;break}throw Error(b.message);case 19:return e.abrupt("return",b.result);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(p.a)(d.a.mark((function e(){var n,c,u,b;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("upload"!==t){e.next=10;break}return e.next=3,fetch("/outlierdetection?label="+r+"&fpath="+o+"&fname="+l);case 3:return n=e.sent,e.next=6,n.json();case 6:if(c=e.sent,200===n.status){e.next=9;break}throw Error(c.message);case 9:return e.abrupt("return",c.result);case 10:if("sample"!==t){e.next=20;break}return e.next=13,fetch("/outlierdetection?label="+a+"&fpath="+s+"&fname="+i);case 13:return u=e.sent,e.next=16,u.json();case 16:if(b=e.sent,200===u.status){e.next=19;break}throw Error(b.message);case 19:return e.abrupt("return",b.result);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=[{id:"a",jobid:O,message:S,copyfunc:Object(g.jsx)(G.CopyToClipboard,{text:O,children:Object(g.jsx)(Q.a,{type:"inline",feedback:"Copied to clipboard",children:Object(g.jsx)(K.o,{Style:"width: 24px ; height: 24px"})})})}];return Object(g.jsxs)("div",{className:"dqdiv",children:[Object(g.jsxs)("div",{className:"ButtonArea",children:[Object(g.jsx)(J.a,{className:"parameterbutton",kind:"tertiary",type:"submit",onClick:function(e){I(!0),"upload"===t&&(""===l?(console.log("No file uploaded"),q(!0),I(!1)):r?(u(!1),W().then((function(e){x(e.JobID),D(e.message),I(!1)})).catch((function(e){console.log(e),I(!1)}))):(u(!0),I(!1))),"sample"===t&&("Select Dataset"===i||""===i?(f(!0),I(!1)):(f(!1),"Select Column"===a||""===a?(b(!0),I(!1)):(b(!1),W().then((function(e){x(e.JobID),D(e.message),I(!1)})).catch((function(e){console.log(e),I(!1)})))))},children:" Get Class Overlap "}),Object(g.jsx)(J.a,{className:"parameterbutton",kind:"tertiary",type:"submit",onClick:function(e){I(!0),"upload"===t&&(""===l?(console.log("No file uploaded"),q(!0),I(!1)):r?(u(!1),V().then((function(e){x(e.JobID),D(e.message),I(!1)})).catch((function(e){console.log(e),I(!1)}))):(u(!0),I(!1))),"sample"===t&&("Select Dataset"===i||""===i?(f(!0),I(!1)):(f(!1),"Select Column"===a||""===a?(b(!0),I(!1)):(b(!1),V().then((function(e){x(e.JobID),D(e.message),I(!1)})).catch((function(e){console.log(e),I(!1)})))))},children:" Get Label Purity "}),Object(g.jsx)(J.a,{className:"parameterbutton",kind:"tertiary",type:"submit",onClick:function(e){I(!0),"upload"===t&&(""===l?(console.log("No file uploaded"),q(!0),I(!1)):r?(u(!1),X().then((function(e){x(e.JobID),D(e.message),I(!1)})).catch((function(e){console.log(e),I(!1)}))):(u(!0),I(!1))),"sample"===t&&("Select Dataset"===i||""===i?(f(!0),I(!1)):(f(!1),"Select Column"===a||""===a?(b(!0),I(!1)):(b(!1),X().then((function(e){x(e.JobID),D(e.message),I(!1)})).catch((function(e){console.log(e),I(!1)})))))},children:" Detect Outliers "}),Object(g.jsx)(J.a,{className:"parameterbutton",kind:"tertiary",type:"submit",onClick:function(e){I(!0),"upload"===t&&(""===l?(console.log("No file uploaded"),q(!0),I(!1)):r?(u(!1),H().then((function(e){x(e.JobID),D(e.message),I(!1)})).catch((function(e){console.log(e),I(!1)}))):(u(!0),I(!1))),"sample"===t&&("Select Dataset"===i||""===i?(f(!0),I(!1)):(f(!1),"Select Column"===a||""===a?(b(!0),I(!1)):(b(!1),H().then((function(e){x(e.JobID),D(e.message),I(!1)})).catch((function(e){console.log(e),I(!1)})))))},children:" Get Class Parity "})]}),M&&Object(g.jsx)(v.a,{iconDescription:"Close notification",subtitle:Object(g.jsx)("span",{children:"No File uploaded"}),timeout:3e3,onClose:function(){q(!1)},title:"Error Notification"}),Object(g.jsx)(F.a,{active:N,description:"Active loading indicator",withOverlay:!0}),O&&Object(g.jsx)("div",{className:"TableDisplay",children:O&&Object(g.jsx)(L.a,{rows:Y,headers:[{key:"jobid",header:"Job ID"},{key:"message",header:"Message"},{key:"copyfunc",header:""}],children:function(e){var t=e.rows,a=e.headers,n=e.getTableProps,r=e.getHeaderProps,s=e.getRowProps;return Object(g.jsx)(P.a,{title:"Parameter Job",children:Object(g.jsxs)(z.a,Object(j.a)(Object(j.a)({},n()),{},{children:[Object(g.jsx)(U.a,{children:Object(g.jsx)(A.a,{children:a.map((function(e){return Object(g.jsx)(B.a,Object(j.a)(Object(j.a)({},r({header:e})),{},{children:e.header}))}))})}),Object(g.jsx)(R.a,{children:t.map((function(e){return Object(g.jsx)(A.a,Object(j.a)(Object(j.a)({},s({row:e})),{},{children:e.cells.map((function(e){return Object(g.jsx)(_.a,{children:e.value},e.id)}))}))}))})]}))})}})})]})},W=["uuid","name","filesize","status","iconDescription","invalid"],X=0;function Y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"id";return X++,"".concat(e).concat(X)}var Z=function(e){var t=e.setufilepath,a=e.setufilename,r=Object(n.useState)([]),s=Object(c.a)(r,2),i=s[0],o=s[1],l=Object(n.useState)(!1),b=Object(c.a)(l,2),f=b[0],x=b[1],k=Object(n.useState)(!1),y=Object(c.a)(k,2),S=y[0],D=y[1],w=!0,C=function(e){e.preventDefault(),e.stopPropagation(),console.log(e)},N=function(e){e.preventDefault(),e.stopPropagation(),console.log(e)};Object(n.useEffect)((function(){return document.addEventListener("drop",C),document.addEventListener("dragover",N),function(){document.removeEventListener("drop",C),document.removeEventListener("dragover",N)}}),[]);var I=function(){var e=Object(p.a)(d.a.mark((function e(t){var a,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.filesize<=15e6)){e.next=4;break}w=!0,e.next=8;break;case 4:return w=!1,a=Object(j.a)(Object(j.a)({},t),{},{status:"edit",iconDescription:"Delete file",invalid:!0,errorSubject:"File size exceeds limit",errorBody:"Max file size is 15MB. Select a new file and try again."}),o((function(e){return e.map((function(e){return e.uuid===t.uuid?a:e}))})),e.abrupt("return");case 8:if(!t.invalidFileType){e.next=14;break}return n=Object(j.a)(Object(j.a)({},t),{},{status:"edit",iconDescription:"Delete file",invalid:!0,errorSubject:"Invalid file type",errorBody:'"'.concat(t.name,'" does not have a valid file type.')}),o((function(e){return e.map((function(e){return e.uuid===t.uuid?n:e}))})),e.abrupt("return");case 14:w=!0;case 15:return e.prev=15,e.next=18,fetch("https://www.mocky.io/v2/5185415ba171ea3a00704eed?mocky-delay=100ms",{method:"POST",mode:"cors",body:t});case 18:if(e.sent.ok){e.next=21;break}throw new Error("Network response was not ok");case 21:setTimeout((function(){var e=Object(j.a)(Object(j.a)({},t),{},{status:"edit",iconDescription:"Remove file"});o((function(a){return a.map((function(a){return a.uuid===t.uuid?e:a}))}))}),1e3),e.next=29;break;case 24:e.prev=24,e.t0=e.catch(15),w=!1,r=Object(j.a)(Object(j.a)({},t),{},{status:"edit",iconDescription:"Upload failed",invalid:!0}),o((function(e){return e.map((function(e){return e.uuid===t.uuid?r:e}))}));case 29:case"end":return e.stop()}}),e,null,[[15,24]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(p.a)(d.a.mark((function e(n,r){var s,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=r.addedFiles,n.stopPropagation(),c=s.map((function(e){return{uuid:Y(),name:e.name,filesize:e.size,status:"uploading",iconDescription:"Uploading"}})),!s[0]){e.next=24;break}if(console.log("addedFiles[0]:",s[0]),o([c[0]]),I(c[0]),!w){e.next=22;break}return(i=new FormData).append("file",s[0]),e.prev=10,e.next=13,h.a.post("/upload",i,{});case 13:200===e.sent.status?(Object(j.a)(Object(j.a)({},c[0]),{},{status:"complete",iconDescription:"Upload complete"}),x(!0),t("datafolder/data.csv"),a("data.csv"),console.log("file uploaded")):(console.log("file not uploaded"),D(!0)),e.next=22;break;case 17:e.prev=17,e.t0=e.catch(10),Object(j.a)(Object(j.a)({},c[0]),{},{status:"edit",iconDescription:"Upload failed",invalid:!0}),console.log("Issue with uploaded file"),D(!0);case 22:e.next=26;break;case 24:console.log("Issue with uploaded file"),D(!0);case 26:case"end":return e.stop()}}),e,null,[[10,17]])})));return function(t,a){return e.apply(this,arguments)}}(),T=Object(n.useCallback)((function(e,t){var a=t.uuid;return o(i.filter((function(e){var t=e.uuid;return a!==t})))}),[i]);return Object(g.jsxs)("div",{class:"bx--form-item",children:[Object(g.jsx)("strong",{class:"bx--file--label",children:"Upload File"}),Object(g.jsx)("p",{class:"bx--label-description",children:"Max file size of 15MB allowed"}),Object(g.jsx)(m.a,{labelText:"Drag and drop here or click to upload",onAddFiles:E,accept:[".csv"]}),Object(g.jsx)("div",{className:"uploaded-files",style:{width:"100%"},children:i.map((function(e){var t=e.uuid,a=e.name,n=e.filesize,r=e.status,s=e.iconDescription,c=e.invalid,i=Object(u.a)(e,W);return Object(g.jsx)(O.a,Object(j.a)({uuid:t,name:a,filesize:n,size:"lg",status:r,iconDescription:s,invalid:c,onDelete:T},i),Y())}))}),f&&Object(g.jsx)(v.a,{iconDescription:"Close notification",subtitle:Object(g.jsx)("span",{children:"File Upload Successful"}),timeout:3e3,onClose:function(){x(!1)},kind:"success",title:"Success Notification"}),S&&Object(g.jsx)(v.a,{iconDescription:"Close notification",subtitle:Object(g.jsx)("span",{children:"File upload failed"}),timeout:3e3,onClose:function(){D(!1)},title:"Error Notification"}),Object(g.jsx)("br",{})]})};var $=function(e){var t=e.setfilepath,a=e.setfilename,r=e.dataseterr1,s=[{id:"",value:"Select Dataset"},{id:"adult.csv",value:"adult.csv"},{id:"breast-cancer.csv",value:"breast-cancer.csv"},{id:"credit-g.csv",value:"credit-g.csv"}],i=Object(n.useState)(s[0].id),o=Object(c.a)(i,2),l=o[0],u=o[1];return Object(g.jsxs)("div",{className:"tab",children:[Object(g.jsx)(w.a,{labelText:"Sample Dataset*",invalidText:"Choose Dataset",invalid:r,size:"lg",value:l,onChange:function(e){u(e.target.value),t(e.target.value),a(e.target.options[e.target.options.selectedIndex].text),setTimeout((function(){"credit-g.csv"===e.target.value||"breast-cancer.csv"===e.target.value||e.target.value}),100)},children:s.map((function(e,t){return Object(g.jsx)(C.a,{value:e.id,text:e.value},t)}))}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{})]})};var ee=function(e){var t=e.setbuttonstate,a=e.setchoice,r=e.setfilepath,s=e.setfilename,i=e.setufilepath,o=e.setufilename,l=(e.ulabelerr,e.labelerr,e.dataseterr1),u=Object(n.useState)(""),b=Object(c.a)(u,2),d=b[0],j=b[1],p=Object(n.useState)(""),f=Object(c.a)(p,2),h=f[0],m=f[1];return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(I.a,{legendText:"Choose the type of Dataset",name:"radio-button-group1",children:[Object(g.jsx)(E.a,{labelText:"Upload your Dataset ( < 15 MB )",value:"customdt1",id:"customdt1",onClick:function(){a("upload"),j("Show"),m("")}}),Object(g.jsx)(E.a,{labelText:"Use Sample Datasets",value:"sampledt1",id:"sampledt1",onClick:function(){a("sample"),m("Show"),j("")}})]}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),d&&Object(g.jsx)("div",{id:"custom-dataset1",children:Object(g.jsx)(Z,{setufilepath:i,setufilename:o})}),h&&Object(g.jsx)("div",{id:"sample-dataset1",children:Object(g.jsx)($,{setbuttonstate:t,setfilepath:r,setfilename:s,dataseterr1:l})}),Object(g.jsx)("br",{})]})};var te=function(e){var t=e.choice,a=e.filepath,r=e.filename,s=e.ufilepath,i=e.ufilename,o=e.setdataseterr1,l=Object(n.useState)(""),u=Object(c.a)(l,2),b=u[0],f=u[1],h=Object(n.useState)(""),m=Object(c.a)(h,2),O=m[0],x=m[1],k=Object(n.useState)(!1),y=Object(c.a)(k,2),S=y[0],D=y[1],w=Object(n.useState)(!1),C=Object(c.a)(w,2),N=(C[0],C[1]),I=Object(n.useState)(!1),E=Object(c.a)(I,2),T=E[0],M=E[1],q=function(){var e=Object(p.a)(d.a.mark((function e(){var n,c,o,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("upload"!==t){e.next=10;break}return e.next=3,fetch("/datacompleteness?fpath="+s+"&fname="+i);case 3:return n=e.sent,e.next=6,n.json();case 6:if(c=e.sent,200===n.status){e.next=9;break}throw Error(c.message);case 9:return e.abrupt("return",c.result);case 10:if("sample"!==t){e.next=20;break}return e.next=13,fetch("/datacompleteness?fpath="+a+"&fname="+r);case 13:return o=e.sent,e.next=16,o.json();case 16:if(l=e.sent,200===o.status){e.next=19;break}throw Error(l.message);case 19:return e.abrupt("return",l.result);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(p.a)(d.a.mark((function e(){var n,c,o,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("upload"!==t){e.next=10;break}return e.next=3,fetch("/dataduplicates?fpath="+s+"&fname="+i);case 3:return n=e.sent,e.next=6,n.json();case 6:if(c=e.sent,200===n.status){e.next=9;break}throw Error(c.message);case 9:return e.abrupt("return",c.result);case 10:if("sample"!==t){e.next=20;break}return e.next=13,fetch("/dataduplicates?fpath="+a+"&fname="+r);case 13:return o=e.sent,e.next=16,o.json();case 16:if(l=e.sent,200===o.status){e.next=19;break}throw Error(l.message);case 19:return e.abrupt("return",l.result);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(p.a)(d.a.mark((function e(){var n,c,o,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("upload"!==t){e.next=10;break}return e.next=3,fetch("/datahomogeneity?fpath="+s+"&fname="+i);case 3:return n=e.sent,e.next=6,n.json();case 6:if(c=e.sent,200===n.status){e.next=9;break}throw Error(c.message);case 9:return e.abrupt("return",c.result);case 10:if("sample"!==t){e.next=20;break}return e.next=13,fetch("/datahomogeneity?fpath="+a+"&fname="+r);case 13:return o=e.sent,e.next=16,o.json();case 16:if(l=e.sent,200===o.status){e.next=19;break}throw Error(l.message);case 19:return e.abrupt("return",l.result);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(p.a)(d.a.mark((function e(){var n,c,o,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("upload"!==t){e.next=10;break}return e.next=3,fetch("/dataprofile?fpath="+s+"&fname="+i);case 3:return n=e.sent,e.next=6,n.json();case 6:if(c=e.sent,200===n.status){e.next=9;break}throw Error(c.message);case 9:return e.abrupt("return",c.result);case 10:if("sample"!==t){e.next=20;break}return e.next=13,fetch("/dataprofile?fpath="+a+"&fname="+r);case 13:return o=e.sent,e.next=16,o.json();case 16:if(l=e.sent,200===o.status){e.next=19;break}throw Error(l.message);case 19:return e.abrupt("return",l.result);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=[{id:"a",jobid:b,message:O,copyfunc:Object(g.jsx)(G.CopyToClipboard,{text:b,children:Object(g.jsx)(Q.a,{type:"inline",feedback:"Copied to clipboard",children:Object(g.jsx)(K.o,{})})})}];return Object(g.jsxs)("div",{className:"dqdiv",children:[Object(g.jsxs)("div",{className:"ButtonArea",children:[Object(g.jsx)(J.a,{className:"parameterbutton",kind:"tertiary",type:"submit",onClick:function(e){D(!0),"upload"===t&&(""===i?(console.log("No file uploaded"),M(!0),D(!1)):q().then((function(e){f(e.JobID),x(e.message),D(!1)})).catch((function(e){console.log(e),D(!1)}))),"sample"===t&&("Select Dataset"===r||""===r?(o(!0),N(!0),D(!1)):(o(!1),N(!1),q().then((function(e){f(e.JobID),x(e.message),D(!1)})).catch((function(e){console.log(e),D(!1)}))))},children:" Data Completeness "}),Object(g.jsx)(J.a,{className:"parameterbutton",kind:"tertiary",type:"submit",onClick:function(e){D(!0),"upload"===t&&(""===i?(console.log("No file uploaded"),M(!0),D(!1)):H().then((function(e){f(e.JobID),x(e.message),D(!1)})).catch((function(e){console.log(e),D(!1)}))),"sample"===t&&("Select Dataset"===r||""===r?(o(!0),N(!0),D(!1)):(o(!1),N(!1),H().then((function(e){f(e.JobID),x(e.message),D(!1)})).catch((function(e){console.log(e),D(!1)}))))},children:" Data Duplicates "}),Object(g.jsx)(J.a,{className:"parameterbutton",kind:"tertiary",type:"submit",onClick:function(e){D(!0),"upload"===t&&(""===i?(console.log("No file uploaded"),M(!0),D(!1)):V().then((function(e){f(e.JobID),x(e.message),D(!1)})).catch((function(e){console.log(e),D(!1)}))),"sample"===t&&("Select Dataset"===r||""===r?(o(!0),N(!0),D(!1)):(o(!1),N(!1),V().then((function(e){f(e.JobID),x(e.message),D(!1)})).catch((function(e){console.log(e),D(!1)}))))},children:" Data Homogeneity "}),Object(g.jsx)(J.a,{className:"parameterbutton",kind:"tertiary",type:"submit",onClick:function(e){D(!0),"upload"===t&&(""===i?(console.log("No file uploaded"),M(!0),D(!1)):(o(!1),N(!1),W().then((function(e){f(e.JobID),x(e.message),D(!1)})).catch((function(e){console.log(e),D(!1)})))),"sample"===t&&("Select Dataset"===r||""===r?(o(!0),N(!0),D(!1)):(o(!1),N(!1),W().then((function(e){f(e.JobID),x(e.message),D(!1)})).catch((function(e){console.log(e),D(!1)}))))},children:" Data Profile "})]}),T&&Object(g.jsx)(v.a,{iconDescription:"Close notification",subtitle:Object(g.jsx)("span",{children:"No File uploaded"}),timeout:3e3,onClose:function(){M(!1)},title:"Error Notification"}),Object(g.jsx)(F.a,{active:S,description:"Active loading indicator",withOverlay:!0}),b&&Object(g.jsx)("div",{className:"TableDisplay",children:b&&Object(g.jsx)(L.a,{rows:X,headers:[{key:"jobid",header:"Job ID"},{key:"message",header:"Message"},{key:"copyfunc",header:""}],children:function(e){var t=e.rows,a=e.headers,n=e.getTableProps,r=e.getHeaderProps,s=e.getRowProps;return Object(g.jsx)(P.a,{title:"Parameter Job",children:Object(g.jsxs)(z.a,Object(j.a)(Object(j.a)({},n()),{},{children:[Object(g.jsx)(U.a,{children:Object(g.jsx)(A.a,{children:a.map((function(e){return Object(g.jsx)(B.a,Object(j.a)(Object(j.a)({},r({header:e})),{},{children:e.header}))}))})}),Object(g.jsx)(R.a,{children:t.map((function(e){return Object(g.jsx)(A.a,Object(j.a)(Object(j.a)({},s({row:e})),{},{children:e.cells.map((function(e){return Object(g.jsx)(_.a,{children:e.value},e.id)}))}))}))})]}))})}})})]})};var ae=function(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(""),u=Object(c.a)(s,2),b=u[0],d=u[1],j=Object(n.useState)(""),p=Object(c.a)(j,2),f=p[0],h=p[1],m=Object(n.useState)(""),O=Object(c.a)(m,2),x=O[0],v=O[1],k=Object(n.useState)(""),y=Object(c.a)(k,2),S=y[0],D=y[1],w=Object(n.useState)(""),C=Object(c.a)(w,2),N=C[0],I=C[1],E=Object(n.useState)(""),M=Object(c.a)(E,2),J=M[0],F=M[1],L=Object(n.useState)(""),P=Object(c.a)(L,2),z=P[0],U=P[1],A=Object(n.useState)(""),B=Object(c.a)(A,2),R=B[0],_=B[1],q=Object(n.useState)(""),Q=Object(c.a)(q,2),G=Q[0],K=Q[1],W=Object(n.useState)("upload"),X=Object(c.a)(W,2),Y=X[0],Z=X[1],$=Object(n.useState)(!0),ae=Object(c.a)($,2),ne=ae[0],re=ae[1];return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(l.Header,{"aria-label":"IBM",children:Object(g.jsx)(l.HeaderName,{href:"#",prefix:"",children:Object(g.jsx)("div",{Style:"white-space: nowrap;",children:"Data Quality for AI Sample Application"})})}),Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)("div",{className:"AppContent",children:[Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsxs)(i.a,{type:"container",children:[Object(g.jsxs)(o.a,{id:"tab-q1",label:"Data Quality",children:[Object(g.jsx)("h2",{children:" Data Quality Processing "}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)(T,{setbuttonstate:re,setchoice:Z,labelerr:z,dataseterr:R,ulabelerr:f,setufilepath:v,setufilename:D,setfilepath:I,setfilename:F,setLabelInput:r,setuLabelInput:d}),Object(g.jsx)("h5",{children:" Check parameters "}),Object(g.jsx)("br",{}),Object(g.jsx)(V,{buttonstate:ne,choice:Y,setlabelerr:U,setulabelerr:h,setdataseterr:_,filepath:N,filename:J,ufilepath:x,ufilename:S,LabelInput:a,uLabelInput:b})]}),Object(g.jsxs)(o.a,{id:"tab-q2",label:"Dataset Quality",children:[Object(g.jsx)("h2",{children:" Data Quality Processing "}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)(ee,{setbuttonstate:re,setchoice:Z,dataseterr1:G,setufilepath:v,setufilename:D,setfilepath:I,setfilename:F}),Object(g.jsx)("h5",{children:" Check parameters "}),Object(g.jsx)("br",{}),Object(g.jsx)(te,{buttonstate:ne,choice:Y,setdataseterr1:K,filepath:N,filename:J,ufilepath:x,ufilename:S})]})]}),Object(g.jsx)(H,{})]})})]})};a(182),a(183);s.a.render(Object(g.jsx)(ae,{}),document.getElementById("root"))}},[[184,1,2]]]);
//# sourceMappingURL=main.6d98cd8b.chunk.js.map