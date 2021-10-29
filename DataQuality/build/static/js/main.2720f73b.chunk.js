(this["webpackJsonpdata-quality-ai-app"]=this["webpackJsonpdata-quality-ai-app"]||[]).push([[0],{103:function(e,t,a){},182:function(e,t,a){},183:function(e,t,a){},184:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(42),r=a.n(s),c=a(19),o=(a(103),a(205)),i=a(198),l=a(73),u=a(59),d=a(24),b=a.n(d),p=a(21),j=a(28),f=a(55),h=a.n(f),m=a(201),O=a(202),x=a(200),g=a(191),v=a(204),S=a(15),y=["uuid","name","filesize","status","iconDescription","invalid"],k=0;function D(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"id";return k++,"".concat(e).concat(k)}var I=function(e){var t=e.setuLabelInput,a=e.setufilepath,s=e.setufilename,r=e.ulabelerr,o=Object(n.useState)({}),i=Object(c.a)(o,2),l=i[0],d=i[1],f=Object(n.useState)(1),k=Object(c.a)(f,2),I=k[0],w=k[1],E=Object(n.useState)(""),T=Object(c.a)(E,2),N=T[0],C=T[1],P=Object(n.useState)(!1),A=Object(c.a)(P,2),M=A[0],L=A[1],G=Object(n.useState)(!1),J=Object(c.a)(G,2),U=J[0],F=J[1],q="datafolder/data.csv",z=Object(n.useState)([]),_=Object(c.a)(z,2),B=_[0],R=_[1],H=function(e){e.preventDefault(),e.stopPropagation(),console.log(e)},Q=function(e){e.preventDefault(),e.stopPropagation(),console.log(e)};Object(n.useEffect)((function(){return document.addEventListener("drop",H),document.addEventListener("dragover",Q),function(){document.removeEventListener("drop",H),document.removeEventListener("dragover",Q)}}),[]);var Y=function(){var e=Object(j.a)(b.a.mark((function e(t){var a,n,s,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.filesize<=15e6)){e.next=4;break}L(!1),e.next=8;break;case 4:return a=Object(p.a)(Object(p.a)({},t),{},{status:"edit",iconDescription:"Delete file",invalid:!0,errorSubject:"File size exceeds limit",errorBody:"Max file size is 15MB. Select a new file and try again."}),L(!0),R((function(e){return e.map((function(e){return e.uuid===t.uuid?a:e}))})),e.abrupt("return");case 8:if(!t.invalidFileType){e.next=12;break}return n=Object(p.a)(Object(p.a)({},t),{},{status:"edit",iconDescription:"Delete file",invalid:!0,errorSubject:"Invalid file type",errorBody:'"'.concat(t.name,'" does not have a valid file type.')}),R((function(e){return e.map((function(e){return e.uuid===t.uuid?n:e}))})),e.abrupt("return");case 12:return e.prev=12,e.next=15,fetch("https://www.mocky.io/v2/5185415ba171ea3a00704eed?mocky-delay=1000ms",{method:"POST",mode:"cors",body:t});case 15:if(e.sent.ok){e.next=18;break}throw new Error("Network response was not ok");case 18:s=Object(p.a)(Object(p.a)({},t),{},{status:"complete",iconDescription:"Upload complete"}),R((function(e){return e.map((function(e){return e.uuid===t.uuid?s:e}))})),setTimeout((function(){var e=Object(p.a)(Object(p.a)({},t),{},{status:"edit",iconDescription:"Remove file"});R((function(a){return a.map((function(a){return a.uuid===t.uuid?e:a}))}))}),1e3),e.next=28;break;case 23:e.prev=23,e.t0=e.catch(12),r=Object(p.a)(Object(p.a)({},t),{},{status:"edit",iconDescription:"Upload failed",invalid:!0}),R((function(e){return e.map((function(e){return e.uuid===t.uuid?r:e}))})),console.log(e.t0);case 28:case"end":return e.stop()}}),e,null,[[12,23]])})));return function(t){return e.apply(this,arguments)}}(),K=Object(n.useCallback)((function(e,t){var a=t.addedFiles;e.stopPropagation();var n=a.map((function(e){return{uuid:D(),name:e.name,filesize:e.size,status:"uploading",iconDescription:"Uploading"}}));console.log("addedFiles[0]"),a[0]?(console.log("addedFiles[0]:",a[0]),w(0),R([n[0]]),Y(n[0]),d(a[0])):console.log("No file uploaded : filetest")})),V=Object(n.useCallback)((function(e,t){var a=t.uuid;return R(B.filter((function(e){var t=e.uuid;return a!==t})))}),[B]);return Object(S.jsxs)("div",{className:"bx--file__container",children:[Object(S.jsx)(g.a,{labelText:"Drag and drop here or click to upload",onAddFiles:K,accept:[".csv"]}),Object(S.jsx)("div",{className:"uploaded-files",style:{width:"100%"},children:B.map((function(e){var t=e.uuid,a=e.name,n=e.filesize,s=e.status,r=e.iconDescription,c=e.invalid,o=Object(u.a)(e,y);return Object(S.jsx)(v.a,Object(p.a)({uuid:t,name:a,filesize:n,size:"lg",status:s,iconDescription:r,invalid:c,onDelete:V},o),D())}))}),U&&Object(S.jsx)(m.a,{iconDescription:"Close notification",subtitle:Object(S.jsx)("span",{children:"File Upload Successful"}),timeout:3e3,onClose:function(){F(!1)},kind:"success",title:"Success Notification"}),Object(S.jsx)("div",{className:"ButtonArea",children:Object(S.jsx)(O.a,{type:"submit",disabled:M,onClick:function(){var e=new FormData;e.append("file",l),h.a.post("/upload",e,{}).then((function(e){console.log("file response:",e),200===e.status&&0===I&&(F(!0),a(q),s("data.csv"))}))},children:"Upload "})}),Object(S.jsx)("div",{className:"LabelArea",children:Object(S.jsx)(x.a,{id:"label",labelText:"Label Column*",invalidText:"Mandatory field",invalid:r,size:"lg",placeholder:"Label",value:N,onChange:function(e){C(e.target.value),t(e.target.value),a(q),s("data.csv")}})})]})},w=a(193),E=a(194);var T=function(e){var t=e.setfilepath,a=e.setfilename,s=e.setLabelInput,r=e.labelerr,o=e.dataseterr,i=[{id:"",value:"Select Dataset"},{id:"adult.csv",value:"adult.csv"},{id:"breast-cancer.csv",value:"breast-cancer.csv"},{id:"credit-g.csv",value:"credit-g.csv"}],l=["Select Column","Class","age","menopause","tumor-size","inv-nodes","node-caps","deg-malig","breast","breast-quad","irradiat"],u=["Select Column","checking_status","duration","credit_history","purpose","credit_amount","savings_status","employment","installment_commitment","personal_status","other_parties","residence_since","property_magnitude","age","other_payment_plans","housing","existing_credits","job","num_dependents","own_telephone","foreign_worker","class"],d=["Select Column","age","workclass","fnlwgt","education","education-num","marital-status","occupation","relationship","race","sex","capital-gain","capital-loss","hours-per-week","native-country","income"],b=Object(n.useState)(i[0].id),p=Object(c.a)(b,2),j=p[0],f=p[1],h=Object(n.useState)([""]),m=Object(c.a)(h,2),O=m[0],x=m[1];return Object(S.jsxs)("div",{children:[Object(S.jsx)(w.a,{labelText:"Sample Dataset*",invalidText:"Mandatory field",invalid:o,size:"lg",value:j,onChange:function(e){f(e.target.value),x([""]),t(e.target.value),a(e.target.options[e.target.options.selectedIndex].text),setTimeout((function(){"credit-g.csv"===e.target.value?x(u):"breast-cancer.csv"===e.target.value?x(l):"adult.csv"===e.target.value&&x(d)}),100),console.log("(On dataset change): Sample file chosen: ",e.target.options[e.target.options.selectedIndex].text)},children:i.map((function(e,t){return Object(S.jsx)(E.a,{value:e.id,text:e.value},t)}))}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsx)("div",{className:"LabelArea",children:Object(S.jsx)(w.a,{labelText:"Label Column*",invalidText:"Mandatory field",invalid:r,size:"lg",onChange:function(e){s(e.target[e.target.selectedIndex].text),console.log("Label: ",e.target[e.target.selectedIndex].text)},children:O.map((function(e,t){return Object(S.jsx)(E.a,{value:e.id,text:e},t)}))})})]})},N=a(195),C=a(196);var P=function(e){var t=e.setbuttonstate,a=e.setchoice,s=e.setLabelInput,r=e.setuLabelInput,o=e.setfilepath,i=e.setfilename,l=e.setufilepath,u=e.setufilename,d=e.ulabelerr,b=e.labelerr,p=e.dataseterr,j=Object(n.useState)(""),f=Object(c.a)(j,2),h=f[0],m=f[1],O=Object(n.useState)(""),x=Object(c.a)(O,2),g=x[0],v=x[1];return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(N.a,{legendText:"Choose the type of Dataset",name:"radio-button-group",children:[Object(S.jsx)(C.a,{labelText:"Upload your Dataset ( < 15 MB )",value:"customdt",id:"customdt",onClick:function(){a("upload"),m("Show"),v("")}}),Object(S.jsx)(C.a,{labelText:"Use Sample Datasets",value:"sampledt",id:"sampledt",onClick:function(){a("sample"),v("Show"),m("")}})]}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),h&&Object(S.jsx)("div",{id:"custom-dataset",children:Object(S.jsx)(I,{ulabelerr:d,setuLabelInput:r,setufilepath:l,setufilename:u})}),g&&Object(S.jsx)("div",{id:"sample-dataset",children:Object(S.jsx)(T,{setbuttonstate:t,setLabelInput:s,setfilepath:o,setfilename:i,labelerr:b,dataseterr:p})}),Object(S.jsx)("br",{})]})},A=a(197),M=a(192),L=a(199),G=a(67),J=a(65),U=a(68),F=a(70),q=a(69),z=a(66),_=a(39),B=a(92);var R=function(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)(""),o=Object(c.a)(r,2),i=o[0],l=o[1],u=Object(n.useState)(""),d=Object(c.a)(u,2),f=d[0],h=d[1],m=Object(n.useState)(""),g=Object(c.a)(m,2),v=g[0],y=g[1],k=Object(n.useState)(""),D=Object(c.a)(k,2),I=D[0],w=D[1],E=Object(n.useState)(""),T=Object(c.a)(E,2),N=T[0],C=T[1],P=Object(n.useState)(!1),R=Object(c.a)(P,2),H=R[0],Q=R[1],Y=Object(n.useState)(""),K=Object(c.a)(Y,2),V=K[0],W=K[1],X=Object(n.useState)(""),Z=Object(c.a)(X,2),$=Z[0],ee=Z[1],te=Object(n.useState)(""),ae=Object(c.a)(te,2),ne=ae[0],se=ae[1],re=Object(n.useState)(""),ce=Object(c.a)(re,2),oe=ce[0],ie=ce[1],le=Object(n.useState)(""),ue=Object(c.a)(le,2),de=ue[0],be=ue[1],pe=function(){var e=Object(j.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/results?jobid="+a);case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,200===t.status){e.next=8;break}throw Error(n.message);case 8:return e.abrupt("return",n.result);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),je=[],fe=[];return"Data Profiler"===f?(je=[{key:"jobid",header:"Job ID"},{key:"message",header:"Message"},{key:"metric",header:"Metric"},{key:"methodology",header:"Methodology"},{key:"numbercolumns",header:"Number of Columns"},{key:"numbersamples",header:"Number of Samples"},{key:"datecolumns",header:"Date Columns"},{key:"numericalcolumns",header:"Numerical Columns"},{key:"stringcolumns",header:"String Columns"}],fe=[{id:"a",jobid:a,message:i,metric:f,methodology:v,numbercolumns:V,numbersamples:$,datecolumns:ne,numericalcolumns:oe,stringcolumns:de}]):(je=[{key:"jobid",header:"Job ID"},{key:"message",header:"Message"},{key:"metric",header:"Metric"},{key:"methodology",header:"Methodology"},{key:"result",header:"Result"},{key:"score",header:"Score"}],fe=[{id:"a",jobid:a,message:i,metric:f,methodology:v,result:Object(B.a)(I),score:N}]),Object(S.jsxs)("div",{children:[Object(S.jsxs)(A.a,{autoComplete:"off",onSubmit:function(e){Q(!0),e.preventDefault(),pe().then((function(e){console.log("RES: ",e["Job ID"]),console.log("RES MSG: ",e.Message),console.log("RES Metric : ",e["String Col"]),"Data Profiler"===e.Metric?(s(e["Job ID"]),l(e.Message),h(e.Metric),y(e.Methodology),W(e["Number of Columns"]),ee(e["Number of Samples"]),se(e["Date Col"].toString()),ie(e["Numerical Col"].toString()),be(e["String Col"].toString()),Q(!1)):(s(e["Job ID"]),l(e.Message),h(e.Metric),y(e.Methodology),w(e.Result),C(e.Score),Q(!1))})).catch((function(e){console.log(e),Q(!1)}))},children:[Object(S.jsx)("h2",{children:"Fetch Processed Results "}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsx)(x.a,{id:"result",labelText:"Fetch Results",placeholder:"Job ID",value:a,onChange:function(e){return s(e.target.value)}}),Object(S.jsx)("br",{}),Object(S.jsx)("div",{className:"ButtonArea",children:Object(S.jsx)(O.a,{className:"parameterbutton",kind:"tertiary",type:"submit",children:" Fetch Results "})})]}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsx)(M.a,{active:H,description:"Active loading indicator",withOverlay:!0}),v&&Object(S.jsx)(L.a,{rows:fe,headers:je,children:function(e){var t=e.rows,a=e.headers,n=e.getTableProps,s=e.getHeaderProps,r=e.getRowProps;return Object(S.jsx)(G.a,{title:"Results Analysis",children:Object(S.jsxs)(J.a,Object(p.a)(Object(p.a)({},n()),{},{children:[Object(S.jsx)(U.a,{children:Object(S.jsx)(F.a,{children:a.map((function(e){return Object(S.jsx)(q.a,Object(p.a)(Object(p.a)({},s({header:e})),{},{children:e.header}))}))})}),Object(S.jsx)(z.a,{children:t.map((function(e){return Object(S.jsx)(F.a,Object(p.a)(Object(p.a)({},r({row:e})),{},{children:e.cells.map((function(e){return Object(S.jsx)(_.a,{children:e.value},e.id)}))}))}))})]}))})}})]})},H=a(203),Q=a(58),Y=a(14);var K=function(e){var t=e.choice,a=e.LabelInput,s=e.uLabelInput,r=e.filepath,o=e.filename,i=e.ufilepath,l=e.ufilename,u=e.setulabelerr,d=e.setlabelerr,f=e.setdataseterr,h=Object(n.useState)(""),x=Object(c.a)(h,2),g=x[0],v=x[1],y=Object(n.useState)(""),k=Object(c.a)(y,2),D=k[0],I=k[1],w=Object(n.useState)(!1),E=Object(c.a)(w,2),T=E[0],N=E[1],C=Object(n.useState)(!1),P=Object(c.a)(C,2),A=(P[0],P[1],Object(n.useState)(!1)),B=Object(c.a)(A,2),R=B[0],K=B[1],V=function(){var e=Object(j.a)(b.a.mark((function e(){var n,c,u,d;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("upload"!==t){e.next=11;break}return e.next=3,fetch("/classparity?label="+s+"&fpath="+i+"&fname="+l);case 3:return n=e.sent,console.log("upload req api:  ",n.url),e.next=7,n.json();case 7:if(c=e.sent,200===n.status){e.next=10;break}throw Error(c.message);case 10:return e.abrupt("return",c.result);case 11:if("sample"!==t){e.next=22;break}return e.next=14,fetch("/classparity?label="+a+"&fpath="+r+"&fname="+o);case 14:return u=e.sent,console.log("sample req api:  ",u.url),e.next=18,u.json();case 18:if(d=e.sent,200===u.status){e.next=21;break}throw Error(d.message);case 21:return e.abrupt("return",d.result);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(j.a)(b.a.mark((function e(){var n,c,u,d;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("upload"!==t){e.next=11;break}return e.next=3,fetch("/labelpurity?label="+s+"&fpath="+i+"&fname="+l);case 3:return n=e.sent,console.log("upload req api:  ",n.url),e.next=7,n.json();case 7:if(c=e.sent,200===n.status){e.next=10;break}throw Error(c.message);case 10:return e.abrupt("return",c.result);case 11:if("sample"!==t){e.next=22;break}return e.next=14,fetch("/labelpurity?label="+a+"&fpath="+r+"&fname="+o);case 14:return u=e.sent,console.log("sample req api:  ",u.url),e.next=18,u.json();case 18:if(d=e.sent,200===u.status){e.next=21;break}throw Error(d.message);case 21:return e.abrupt("return",d.result);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(j.a)(b.a.mark((function e(){var n,c,u,d;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("upload"!==t){e.next=11;break}return e.next=3,fetch("/classoverlap?label="+s+"&fpath="+i+"&fname="+l);case 3:return n=e.sent,console.log("upload req api:  ",n.url),e.next=7,n.json();case 7:if(c=e.sent,200===n.status){e.next=10;break}throw Error(c.message);case 10:return e.abrupt("return",c.result);case 11:if("sample"!==t){e.next=23;break}return e.next=14,fetch("/classoverlap?label="+a+"&fpath="+r+"&fname="+o);case 14:return u=e.sent,console.log("sample req api:  ",u.url),e.next=18,u.json();case 18:if(d=e.sent,console.log("sample response:  ",d),200===u.status){e.next=22;break}throw Error(d.message);case 22:return e.abrupt("return",d.result);case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(j.a)(b.a.mark((function e(){var n,c,u,d;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("upload"!==t){e.next=11;break}return e.next=3,fetch("/outlierdetection?label="+s+"&fpath="+i+"&fname="+l);case 3:return n=e.sent,console.log("upload req api:  ",n.url),e.next=7,n.json();case 7:if(c=e.sent,200===n.status){e.next=10;break}throw Error(c.message);case 10:return e.abrupt("return",c.result);case 11:if("sample"!==t){e.next=22;break}return e.next=14,fetch("/outlierdetection?label="+a+"&fpath="+r+"&fname="+o);case 14:return u=e.sent,console.log("sample req api:  ",u.url),e.next=18,u.json();case 18:if(d=e.sent,200===u.status){e.next=21;break}throw Error(d.message);case 21:return e.abrupt("return",d.result);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=[{id:"a",jobid:g,message:D,copyfunc:Object(S.jsx)(Q.CopyToClipboard,{text:g,children:Object(S.jsx)(H.a,{type:"inline",feedback:"Copied to clipboard",children:Object(S.jsx)(Y.o,{Style:"width: 24px ; height: 24px"})})})}];return Object(S.jsxs)("div",{className:"dqdiv",children:[Object(S.jsxs)("div",{className:"ButtonArea",children:[Object(S.jsx)(O.a,{className:"parameterbutton",kind:"tertiary",type:"submit",onClick:function(e){N(!0),"upload"===t&&(console.log("TESTING (API End): Upload file chosen: ",l),console.log("TESTING (API End): Upload Label applied for Metric: ",s),""===l?(console.log("No file uploaded"),K(!0),N(!1)):s?(u(!1),X().then((function(e){v(e.JobID),I(e.message),N(!1)})).catch((function(e){console.log(e),N(!1)}))):(u(!0),N(!1))),"sample"===t&&(console.log("TESTING (API End): Sample file chosen: ",o),console.log("TESTING (API End): Label applied for Metric: ",a),"Select Dataset"===o||""===o?(f(!0),N(!1)):(f(!1),"Select Column"===a||""===a?(d(!0),N(!1)):(d(!1),X().then((function(e){v(e.JobID),I(e.message),N(!1)})).catch((function(e){console.log(e),N(!1)})))))},children:" Get Class Overlap "}),Object(S.jsx)(O.a,{className:"parameterbutton",kind:"tertiary",type:"submit",onClick:function(e){N(!0),"upload"===t&&(console.log("TESTING (API End): Upload file chosen: ",l),console.log("TESTING (API End): Upload Label applied for Metric: ",s),""===l?(console.log("No file uploaded"),K(!0),N(!1)):s?(u(!1),W().then((function(e){v(e.JobID),I(e.message),N(!1)})).catch((function(e){console.log(e),N(!1)}))):(u(!0),N(!1))),"sample"===t&&(console.log("TESTING (API End): Sample file chosen: ",o),console.log("TESTING (API End): Label applied for Metric: ",a),"Select Dataset"===o||""===o?(console.log("select dataset chosen"),f(!0),N(!1)):(f(!1),"Select Column"===a||""===a?(d(!0),N(!1)):(d(!1),W().then((function(e){v(e.JobID),I(e.message),N(!1)})).catch((function(e){console.log(e),N(!1)})))))},children:" Get Label Purity "}),Object(S.jsx)(O.a,{className:"parameterbutton",kind:"tertiary",type:"submit",onClick:function(e){N(!0),"upload"===t&&(console.log("TESTING (API End): Upload file chosen: ",l),console.log("TESTING (API End): Upload Label applied for Metric: ",s),""===l?(console.log("No file uploaded"),K(!0),N(!1)):s?(u(!1),Z().then((function(e){v(e.JobID),I(e.message),N(!1)})).catch((function(e){console.log(e),N(!1)}))):(u(!0),N(!1))),"sample"===t&&(console.log("TESTING (API End): Sample file chosen: ",o),console.log("TESTING (API End): Label applied for Metric: ",a),"Select Dataset"===o||""===o?(f(!0),N(!1)):(f(!1),"Select Column"===a||""===a?(d(!0),N(!1)):(d(!1),Z().then((function(e){v(e.JobID),I(e.message),N(!1)})).catch((function(e){console.log(e),N(!1)})))))},children:" Detect Outliers "}),Object(S.jsx)(O.a,{className:"parameterbutton",kind:"tertiary",type:"submit",onClick:function(e){N(!0),"upload"===t&&(console.log("TESTING (API End): Upload file chosen: ",l),console.log("TESTING (API End): Upload Label applied for Metric: ",s),""===l?(console.log("No file uploaded"),K(!0),N(!1)):s?(u(!1),V().then((function(e){v(e.JobID),I(e.message),N(!1)})).catch((function(e){console.log(e),N(!1)}))):(u(!0),N(!1))),"sample"===t&&(console.log("TESTING (API End): Sample file chosen: ",o),console.log("TESTING (API End): Label applied for Metric: ",a),"Select Dataset"===o||""===o?(f(!0),N(!1)):(f(!1),"Select Column"===a||""===a?(d(!0),N(!1)):(d(!1),V().then((function(e){v(e.JobID),I(e.message),N(!1)})).catch((function(e){console.log(e),N(!1)})))))},children:" Get Class Parity "})]}),R&&Object(S.jsx)(m.a,{iconDescription:"Close notification",subtitle:Object(S.jsx)("span",{children:"No File uploaded"}),timeout:3e3,onClose:function(){K(!1)},title:"Error Notification"}),Object(S.jsx)(M.a,{active:T,description:"Active loading indicator",withOverlay:!0}),g&&Object(S.jsx)("div",{className:"TableDisplay",children:g&&Object(S.jsx)(L.a,{rows:$,headers:[{key:"jobid",header:"Job ID"},{key:"message",header:"Message"},{key:"copyfunc",header:""}],children:function(e){var t=e.rows,a=e.headers,n=e.getTableProps,s=e.getHeaderProps,r=e.getRowProps;return Object(S.jsx)(G.a,{title:"Parameter Job",children:Object(S.jsxs)(J.a,Object(p.a)(Object(p.a)({},n()),{},{children:[Object(S.jsx)(U.a,{children:Object(S.jsx)(F.a,{children:a.map((function(e){return Object(S.jsx)(q.a,Object(p.a)(Object(p.a)({},s({header:e})),{},{children:e.header}))}))})}),Object(S.jsx)(z.a,{children:t.map((function(e){return Object(S.jsx)(F.a,Object(p.a)(Object(p.a)({},r({row:e})),{},{children:e.cells.map((function(e){return Object(S.jsx)(_.a,{children:e.value},e.id)}))}))}))})]}))})}})})]})},V=["uuid","name","filesize","status","iconDescription","invalid"],W=0;function X(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"id";return W++,"".concat(e).concat(W)}var Z=function(e){var t=e.setufilepath,a=e.setufilename,s=Object(n.useState)({}),r=Object(c.a)(s,2),o=r[0],i=r[1],l=Object(n.useState)(1),d=Object(c.a)(l,2),f=d[0],x=d[1],y=Object(n.useState)(!1),k=Object(c.a)(y,2),D=k[0],I=k[1],w=Object(n.useState)(!1),E=Object(c.a)(w,2),T=E[0],N=E[1],C=Object(n.useState)([]),P=Object(c.a)(C,2),A=P[0],M=P[1],L=function(e){e.preventDefault(),e.stopPropagation(),console.log(e)},G=function(e){e.preventDefault(),e.stopPropagation(),console.log(e)};Object(n.useEffect)((function(){return document.addEventListener("drop",L),document.addEventListener("dragover",G),function(){document.removeEventListener("drop",L),document.removeEventListener("dragover",G)}}),[]);var J=function(){var e=Object(j.a)(b.a.mark((function e(t){var a,n,s,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.filesize<=15e6)){e.next=4;break}I(!1),e.next=8;break;case 4:return a=Object(p.a)(Object(p.a)({},t),{},{status:"edit",iconDescription:"Delete file",invalid:!0,errorSubject:"File size exceeds limit",errorBody:"Max file size is 15MB. Select a new file and try again."}),I(!0),M((function(e){return e.map((function(e){return e.uuid===t.uuid?a:e}))})),e.abrupt("return");case 8:if(!t.invalidFileType){e.next=12;break}return n=Object(p.a)(Object(p.a)({},t),{},{status:"edit",iconDescription:"Delete file",invalid:!0,errorSubject:"Invalid file type",errorBody:'"'.concat(t.name,'" does not have a valid file type.')}),M((function(e){return e.map((function(e){return e.uuid===t.uuid?n:e}))})),e.abrupt("return");case 12:return e.prev=12,e.next=15,fetch("https://www.mocky.io/v2/5185415ba171ea3a00704eed?mocky-delay=1000ms",{method:"POST",mode:"cors",body:t});case 15:if(e.sent.ok){e.next=18;break}throw new Error("Network response was not ok");case 18:s=Object(p.a)(Object(p.a)({},t),{},{status:"complete",iconDescription:"Upload complete"}),M((function(e){return e.map((function(e){return e.uuid===t.uuid?s:e}))})),setTimeout((function(){var e=Object(p.a)(Object(p.a)({},t),{},{status:"edit",iconDescription:"Remove file"});M((function(a){return a.map((function(a){return a.uuid===t.uuid?e:a}))}))}),1e3),e.next=28;break;case 23:e.prev=23,e.t0=e.catch(12),r=Object(p.a)(Object(p.a)({},t),{},{status:"edit",iconDescription:"Upload failed",invalid:!0}),M((function(e){return e.map((function(e){return e.uuid===t.uuid?r:e}))})),console.log(e.t0);case 28:case"end":return e.stop()}}),e,null,[[12,23]])})));return function(t){return e.apply(this,arguments)}}(),U=Object(n.useCallback)((function(e,t){var a=t.addedFiles;e.stopPropagation();var n=a.map((function(e){return{uuid:X(),name:e.name,filesize:e.size,status:"uploading",iconDescription:"Uploading"}}));console.log("addedFiles[0]"),a[0]?(console.log("addedFiles[0]:",a[0]),x(0),M([n[0]]),J(n[0]),i(a[0])):console.log("No file uploaded : filetest")})),F=Object(n.useCallback)((function(e,t){var a=t.uuid;return M(A.filter((function(e){var t=e.uuid;return a!==t})))}),[A]);return Object(S.jsxs)("div",{className:"bx--file__container",children:[Object(S.jsx)(g.a,{labelText:"Drag and drop here or click to upload",onAddFiles:U,accept:[".csv"]}),Object(S.jsx)("div",{className:"uploaded-files",style:{width:"100%"},children:A.map((function(e){var t=e.uuid,a=e.name,n=e.filesize,s=e.status,r=e.iconDescription,c=e.invalid,o=Object(u.a)(e,V);return Object(S.jsx)(v.a,Object(p.a)({uuid:t,name:a,filesize:n,size:"lg",status:s,iconDescription:r,invalid:c,onDelete:F},o),X())}))}),Object(S.jsx)("div",{className:"ButtonArea",children:Object(S.jsx)(O.a,{type:"submit",disabled:D,onClick:function(){var e=new FormData;e.append("file",o),h.a.post("/upload",e,{}).then((function(e){console.log("file response:",e),200===e.status&&0===f&&(N(!0),t("datafolder/data.csv"),a("data.csv"))}))},children:"Upload "})}),T&&Object(S.jsx)(m.a,{iconDescription:"Close notification",subtitle:Object(S.jsx)("span",{children:"File Upload Successful"}),timeout:3e3,onClose:function(){N(!1)},kind:"success",title:"Success Notification"})]})};var $=function(e){var t=e.setfilepath,a=e.setfilename,s=e.dataseterr1,r=[{id:"",value:"Select Dataset"},{id:"adult.csv",value:"adult.csv"},{id:"breast-cancer.csv",value:"breast-cancer.csv"},{id:"credit-g.csv",value:"credit-g.csv"}],o=Object(n.useState)(r[0].id),i=Object(c.a)(o,2),l=i[0],u=i[1];return Object(S.jsxs)("div",{className:"tab",children:[Object(S.jsx)(w.a,{labelText:"Sample Dataset*",invalidText:"Choose Dataset",invalid:s,size:"lg",value:l,onChange:function(e){u(e.target.value),t(e.target.value),a(e.target.options[e.target.options.selectedIndex].text),setTimeout((function(){"credit-g.csv"===e.target.value||"breast-cancer.csv"===e.target.value||e.target.value}),100),console.log("(On dataset change): Sample file chosen: ",e.target.options[e.target.options.selectedIndex].text)},children:r.map((function(e,t){return Object(S.jsx)(E.a,{value:e.id,text:e.value},t)}))}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{})]})};var ee=function(e){var t=e.setbuttonstate,a=e.setchoice,s=e.setfilepath,r=e.setfilename,o=e.setufilepath,i=e.setufilename,l=(e.ulabelerr,e.labelerr,e.dataseterr1),u=Object(n.useState)(""),d=Object(c.a)(u,2),b=d[0],p=d[1],j=Object(n.useState)(""),f=Object(c.a)(j,2),h=f[0],m=f[1];return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(N.a,{legendText:"Choose the type of Dataset",name:"radio-button-group1",children:[Object(S.jsx)(C.a,{labelText:"Upload your Dataset ( < 15 MB )",value:"customdt1",id:"customdt1",onClick:function(){a("upload"),p("Show"),m("")}}),Object(S.jsx)(C.a,{labelText:"Use Sample Datasets",value:"sampledt1",id:"sampledt1",onClick:function(){a("sample"),m("Show"),p("")}})]}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),b&&Object(S.jsx)("div",{id:"custom-dataset1",children:Object(S.jsx)(Z,{setufilepath:o,setufilename:i})}),h&&Object(S.jsx)("div",{id:"sample-dataset1",children:Object(S.jsx)($,{setbuttonstate:t,setfilepath:s,setfilename:r,dataseterr1:l})}),Object(S.jsx)("br",{})]})};var te=function(e){var t=e.choice,a=e.filepath,s=e.filename,r=e.ufilepath,o=e.ufilename,i=e.setdataseterr1,l=Object(n.useState)(""),u=Object(c.a)(l,2),d=u[0],f=u[1],h=Object(n.useState)(""),x=Object(c.a)(h,2),g=x[0],v=x[1],y=Object(n.useState)(!1),k=Object(c.a)(y,2),D=k[0],I=k[1],w=Object(n.useState)(!1),E=Object(c.a)(w,2),T=(E[0],E[1]),N=Object(n.useState)(!1),C=Object(c.a)(N,2),P=C[0],A=C[1],B=function(){var e=Object(j.a)(b.a.mark((function e(){var n,c,i,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("upload"!==t){e.next=11;break}return e.next=3,fetch("/datacompleteness?fpath="+r+"&fname="+o);case 3:return n=e.sent,console.log("upload req api:  ",n.url),e.next=7,n.json();case 7:if(c=e.sent,200===n.status){e.next=10;break}throw Error(c.message);case 10:return e.abrupt("return",c.result);case 11:if("sample"!==t){e.next=22;break}return e.next=14,fetch("/datacompleteness?fpath="+a+"&fname="+s);case 14:return i=e.sent,console.log("sample req api:  ",i.url),e.next=18,i.json();case 18:if(l=e.sent,200===i.status){e.next=21;break}throw Error(l.message);case 21:return e.abrupt("return",l.result);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(j.a)(b.a.mark((function e(){var n,c,i,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("upload"!==t){e.next=11;break}return e.next=3,fetch("/dataduplicates?fpath="+r+"&fname="+o);case 3:return n=e.sent,console.log("upload req api:  ",n.url),e.next=7,n.json();case 7:if(c=e.sent,200===n.status){e.next=10;break}throw Error(c.message);case 10:return e.abrupt("return",c.result);case 11:if("sample"!==t){e.next=22;break}return e.next=14,fetch("/dataduplicates?fpath="+a+"&fname="+s);case 14:return i=e.sent,console.log("sample req api:  ",i.url),e.next=18,i.json();case 18:if(l=e.sent,200===i.status){e.next=21;break}throw Error(l.message);case 21:return e.abrupt("return",l.result);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(j.a)(b.a.mark((function e(){var n,c,i,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("upload"!==t){e.next=11;break}return e.next=3,fetch("/datahomogeneity?fpath="+r+"&fname="+o);case 3:return n=e.sent,console.log("upload req api:  ",n.url),e.next=7,n.json();case 7:if(c=e.sent,200===n.status){e.next=10;break}throw Error(c.message);case 10:return e.abrupt("return",c.result);case 11:if("sample"!==t){e.next=23;break}return e.next=14,fetch("/datahomogeneity?fpath="+a+"&fname="+s);case 14:return i=e.sent,console.log("sample req api:  ",i.url),e.next=18,i.json();case 18:if(l=e.sent,console.log("BODY: ",l),200===i.status){e.next=22;break}throw Error(l.message);case 22:return e.abrupt("return",l.result);case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(j.a)(b.a.mark((function e(){var n,c,i,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("upload"!==t){e.next=11;break}return e.next=3,fetch("/dataprofile?fpath="+r+"&fname="+o);case 3:return n=e.sent,console.log("upload req api:  ",n.url),e.next=7,n.json();case 7:if(c=e.sent,200===n.status){e.next=10;break}throw Error(c.message);case 10:return e.abrupt("return",c.result);case 11:if("sample"!==t){e.next=22;break}return e.next=14,fetch("/dataprofile?fpath="+a+"&fname="+s);case 14:return i=e.sent,console.log("sample req api:  ",i.url),e.next=18,i.json();case 18:if(l=e.sent,200===i.status){e.next=21;break}throw Error(l.message);case 21:return e.abrupt("return",l.result);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=[{id:"a",jobid:d,message:g,copyfunc:Object(S.jsx)(Q.CopyToClipboard,{text:d,children:Object(S.jsx)(H.a,{type:"inline",feedback:"Copied to clipboard",children:Object(S.jsx)(Y.o,{})})})}];return Object(S.jsxs)("div",{className:"dqdiv",children:[Object(S.jsxs)("div",{className:"ButtonArea",children:[Object(S.jsx)(O.a,{className:"parameterbutton",kind:"tertiary",type:"submit",onClick:function(e){I(!0),"upload"===t&&(console.log("TESTING (API End): Upload file chosen: ",o),""===o?(console.log("No file uploaded"),A(!0),I(!1)):B().then((function(e){f(e.JobID),v(e.message),I(!1)})).catch((function(e){console.log(e),I(!1)}))),"sample"===t&&(console.log("TESTING (API End): Sample file chosen: ",s),"Select Dataset"===s||""===s?(i(!0),T(!0),I(!1)):(i(!1),T(!1),B().then((function(e){f(e.JobID),v(e.message),I(!1)})).catch((function(e){console.log(e),I(!1)}))))},children:" Data Completeness "}),Object(S.jsx)(O.a,{className:"parameterbutton",kind:"tertiary",type:"submit",onClick:function(e){I(!0),"upload"===t&&(console.log("TESTING (API End): Upload file chosen: ",o),""===o?(console.log("No file uploaded"),A(!0),I(!1)):R().then((function(e){f(e.JobID),v(e.message),I(!1)})).catch((function(e){console.log(e),I(!1)}))),"sample"===t&&(console.log("TESTING (API End): Sample file chosen: ",s),"Select Dataset"===s||""===s?(i(!0),T(!0),I(!1)):(i(!1),T(!1),R().then((function(e){f(e.JobID),v(e.message),I(!1)})).catch((function(e){console.log(e),I(!1)}))))},children:" Data Duplicates "}),Object(S.jsx)(O.a,{className:"parameterbutton",kind:"tertiary",type:"submit",onClick:function(e){I(!0),"upload"===t&&(console.log("TESTING (API End): Upload file chosen: ",o),""===o?(console.log("No file uploaded"),A(!0),I(!1)):K().then((function(e){f(e.JobID),v(e.message),I(!1)})).catch((function(e){console.log(e),I(!1)}))),"sample"===t&&(console.log("TESTING (API End): Sample file chosen: ",s),"Select Dataset"===s||""===s?(i(!0),T(!0),I(!1)):(i(!1),T(!1),K().then((function(e){f(e.JobID),v(e.message),I(!1)})).catch((function(e){console.log(e),I(!1)}))))},children:" Data Homogeneity "}),Object(S.jsx)(O.a,{className:"parameterbutton",kind:"tertiary",type:"submit",onClick:function(e){I(!0),"upload"===t&&(console.log("TESTING (API End): Upload file chosen: ",o),""===o?(console.log("No file uploaded"),A(!0),I(!1)):(i(!1),T(!1),V().then((function(e){f(e.JobID),v(e.message),I(!1)})).catch((function(e){console.log(e),I(!1)})))),"sample"===t&&(console.log("TESTING (API End): Sample file chosen: ",s),"Select Dataset"===s||""===s?(i(!0),T(!0),I(!1)):(i(!1),T(!1),V().then((function(e){f(e.JobID),v(e.message),I(!1)})).catch((function(e){console.log(e),I(!1)}))))},children:" Data Profile "})]}),P&&Object(S.jsx)(m.a,{iconDescription:"Close notification",subtitle:Object(S.jsx)("span",{children:"No File uploaded"}),timeout:3e3,onClose:function(){A(!1)},title:"Error Notification"}),Object(S.jsx)(M.a,{active:D,description:"Active loading indicator",withOverlay:!0}),d&&Object(S.jsx)("div",{className:"TableDisplay",children:d&&Object(S.jsx)(L.a,{rows:W,headers:[{key:"jobid",header:"Job ID"},{key:"message",header:"Message"},{key:"copyfunc",header:""}],children:function(e){var t=e.rows,a=e.headers,n=e.getTableProps,s=e.getHeaderProps,r=e.getRowProps;return Object(S.jsx)(G.a,{title:"Parameter Job",children:Object(S.jsxs)(J.a,Object(p.a)(Object(p.a)({},n()),{},{children:[Object(S.jsx)(U.a,{children:Object(S.jsx)(F.a,{children:a.map((function(e){return Object(S.jsx)(q.a,Object(p.a)(Object(p.a)({},s({header:e})),{},{children:e.header}))}))})}),Object(S.jsx)(z.a,{children:t.map((function(e){return Object(S.jsx)(F.a,Object(p.a)(Object(p.a)({},r({row:e})),{},{children:e.cells.map((function(e){return Object(S.jsx)(_.a,{children:e.value},e.id)}))}))}))})]}))})}})})]})};var ae=function(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)(""),u=Object(c.a)(r,2),d=u[0],b=u[1],p=Object(n.useState)(""),j=Object(c.a)(p,2),f=j[0],h=j[1],m=Object(n.useState)(""),O=Object(c.a)(m,2),x=O[0],g=O[1],v=Object(n.useState)(""),y=Object(c.a)(v,2),k=y[0],D=y[1],I=Object(n.useState)(""),w=Object(c.a)(I,2),E=w[0],T=w[1],N=Object(n.useState)(""),C=Object(c.a)(N,2),A=C[0],M=C[1],L=Object(n.useState)(""),G=Object(c.a)(L,2),J=G[0],U=G[1],F=Object(n.useState)(""),q=Object(c.a)(F,2),z=q[0],_=q[1],B=Object(n.useState)(""),H=Object(c.a)(B,2),Q=H[0],Y=H[1],V=Object(n.useState)("upload"),W=Object(c.a)(V,2),X=W[0],Z=W[1],$=Object(n.useState)(!0),ae=Object(c.a)($,2),ne=ae[0],se=ae[1];return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(l.Header,{"aria-label":"IBM",children:Object(S.jsx)(l.HeaderName,{href:"#",prefix:"",children:Object(S.jsx)("div",{Style:"white-space: nowrap;",children:"Data Quality for AI Application"})})}),Object(S.jsx)("div",{className:"App",children:Object(S.jsxs)("div",{className:"AppContent",children:[Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsxs)(o.a,{type:"container",children:[Object(S.jsxs)(i.a,{id:"tab-q1",label:"Data Quality",children:[Object(S.jsx)("h2",{children:" Data Quality Processing "}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsx)(P,{setbuttonstate:se,setchoice:Z,labelerr:J,dataseterr:z,ulabelerr:f,setufilepath:g,setufilename:D,setfilepath:T,setfilename:M,setLabelInput:s,setuLabelInput:b}),Object(S.jsx)("h5",{children:" Check parameters "}),Object(S.jsx)("br",{}),Object(S.jsx)(K,{buttonstate:ne,choice:X,setlabelerr:U,setulabelerr:h,setdataseterr:_,filepath:E,filename:A,ufilepath:x,ufilename:k,LabelInput:a,uLabelInput:d})]}),Object(S.jsxs)(i.a,{id:"tab-q2",label:"Dataset Quality",children:[Object(S.jsx)("h2",{children:" Data Quality Processing "}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsx)(ee,{setbuttonstate:se,setchoice:Z,dataseterr1:Q,setufilepath:g,setufilename:D,setfilepath:T,setfilename:M}),Object(S.jsx)("h5",{children:" Check parameters "}),Object(S.jsx)("br",{}),Object(S.jsx)(te,{buttonstate:ne,choice:X,setdataseterr1:Y,filepath:E,filename:A,ufilepath:x,ufilename:k})]})]}),Object(S.jsx)(R,{})]})})]})};a(182),a(183);r.a.render(Object(S.jsx)(ae,{}),document.getElementById("root"))}},[[184,1,2]]]);
//# sourceMappingURL=main.2720f73b.chunk.js.map