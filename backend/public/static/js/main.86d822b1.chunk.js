(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{144:function(e,a,t){},242:function(e,a,t){e.exports=t(558)},247:function(e,a,t){},307:function(e,a){},309:function(e,a){},341:function(e,a){},342:function(e,a){},410:function(e,a){},556:function(e,a,t){},558:function(e,a,t){"use strict";t.r(a);var n,o=t(0),r=t.n(o),c=t(99),l=t.n(c),s=(t(247),t(6)),i=t(7),m=t(9),u=t(8),d=t(10),p=t(565),h=t(561),b=t(16),E=t.n(b),g=t(560),y=t(23),v=t.n(y);v.a.accessToken="pk.eyJ1IjoiZGl1cml2aiIsImEiOiJjanAxdjA2cTQwMGp1M2tvYzZmZGp3bWc3In0.4cZEyLkU2ikqx_wb4A1z8A";var f,j=function(e){function a(){var e,t;Object(s.a)(this,a);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={user:{},totals:{jobType:[],address:{alcaldia:[]},company:{name:[],companyType:[]}},zoom:12,jobs:[{address:{location:{}},company:{},apply:{}}]},t.getJobs=function(){E.a.get("https://trabajocerca.herokuapp.com/api/trabajos"+t.props.location.search,{withCredentials:!0}).then(function(e){t.setState({jobs:e.data}),t.getMap()}).catch(function(e){console.log(e)})},t.getTotals=function(e){E.a.get("https://trabajocerca.herokuapp.com/api/totals?"+e,{withCredentials:!0}).then(function(a){var n=t.state.totals;"address.alcaldia"===e?n.address.alcaldia=a.data:"company.name"===e?n.company.name=a.data:"company.companyType"===e?n.company.companyType=a.data:n[e]=a.data,t.setState({totals:n})}).catch(function(e){console.log(e)})},t.getMarker=function(e,a,t,o,r){new v.a.Marker({color:"red"}).setLngLat([e,a]).setPopup(new v.a.Popup({offset:25}).setHTML("<a href='/trabajo/"+r+"'><h3>"+t+"</h3><p>"+o+"</p></a>")).addTo(n)},t.setMarkers=function(){t.state.jobs.forEach(function(e){t.getMarker(e.address.location.lng,e.address.location.lat,e.position,e.company.name,e._id)})},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getJobs(),this.getTotals("jobType"),this.getTotals("address.alcaldia"),this.getTotals("company.name"),this.getTotals("company.companyType")}},{key:"getMap",value:function(){var e=this.state.jobs[0].address.location,a=e.lng,t=e.lat;n=new v.a.Map({container:this.mapContainer,style:"mapbox://styles/mapbox/streets-v9",center:[a,t],zoom:12}),this.setMarkers()}},{key:"render",value:function(){var e=this,a=this.state,t=a.jobs,n=a.totals;return r.a.createElement("div",null,r.a.createElement("header",{className:"cover"},r.a.createElement("h2",null,"Encuentra trabajo en CDMX"),r.a.createElement("p",null,"Sin colas, s\xe9 el primero en aplicar.")),r.a.createElement("section",{className:"container job-container"},r.a.createElement("div",{className:"shortlink-container"},"Top vacantes:",n.jobType.map(function(e,a){return r.a.createElement(g.a,{key:a,to:"/trabajos/?jobType=".concat(e._id),className:"shortlinks"},e._id," (",e.count,")")})),r.a.createElement("div",{className:"shortlink-container"},"Top zonas:",n.address.alcaldia.map(function(e,a){return r.a.createElement(g.a,{key:a,to:"/trabajos/?address.alcaldia=".concat(e._id),className:"shortlinks"},e._id," (",e.count,")")})),r.a.createElement("div",{className:"shortlink-container"},"Top sectores:",n.company.companyType.map(function(e,a){return r.a.createElement(g.a,{key:a,to:"/trabajos/?company.companyType=".concat(e._id),className:"shortlinks"},e._id," (",e.count,")")})),r.a.createElement("div",{className:"shortlink-container"},"Top empresas:",n.company.name.map(function(e,a){return r.a.createElement(g.a,{key:a,to:"/trabajos/?company.name=".concat(e._id),className:"shortlinks"},e._id," (",e.count,")")})),r.a.createElement("div",{style:{width:"100%",height:"300px"},ref:function(a){return e.mapContainer=a}})),r.a.createElement("h2",{className:"center"},"\xdaltimas vacantes"),r.a.createElement("section",{className:"container job-container"},t.map(function(e,a){return r.a.createElement("div",{key:a,className:"job-card"},r.a.createElement("div",null,r.a.createElement(g.a,{to:"/trabajo/".concat(e._id)},r.a.createElement("img",{src:e.image,alt:e.position}))),r.a.createElement("div",null,r.a.createElement("h3",null,e.company.name),r.a.createElement("p",null," ",r.a.createElement(g.a,{to:"/trabajos/?address.alcaldia=".concat(e.address.alcaldia)},e.address.alcaldia))))})))}}]),a}(r.a.Component);v.a.accessToken="pk.eyJ1IjoiZGl1cml2aiIsImEiOiJjanAxdjA2cTQwMGp1M2tvYzZmZGp3bWc3In0.4cZEyLkU2ikqx_wb4A1z8A";var C=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(o)))).state={job:{address:{location:{}},company:{},apply:{onsite:""}},zoom:12},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentWillMount",value:function(){var e=this,a=this.props.match.params.id;console.log(this.props.match.params),E.a.get("https://trabajocerca.herokuapp.com/api/vacante/"+a,{withCredentials:!0}).then(function(a){document.title=a.data.position+" en "+a.data.company.name,e.setState({job:a.data}),e.getMap()}).catch(function(e){console.log(e)})}},{key:"getMap",value:function(){var e=this.state.job.address.location,a=e.lng,t=e.lat;f=new v.a.Map({container:this.mapContainer,style:"mapbox://styles/mapbox/streets-v9",center:[a,t],zoom:14}),new v.a.Marker({color:"red"}).setLngLat([a,t]).addTo(f)}},{key:"render",value:function(){var e=this,a=this.state.job;return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,a.position),r.a.createElement("p",null,"En"," ",r.a.createElement(g.a,{to:"/trabajos/?address.alcaldia=".concat(a.address.alcaldia)},a.address.alcaldia),","," ",r.a.createElement(g.a,{to:"/trabajos/?address.ciudad=".concat(a.address.ciudad)},a.address.ciudad)),r.a.createElement("div",{className:"form-container"},a.description&&r.a.createElement("h3",null,"Descripcion de la vacante"),a.jobType&&r.a.createElement("p",null,"Tipo de trabajo:",r.a.createElement(g.a,{to:"/trabajos/?jobType=".concat(a.jobType)},a.jobType)),a.description&&r.a.createElement("p",null,a.description),a.requirements&&r.a.createElement("h3",null,"Requisitos"),a.requirements&&r.a.createElement("p",null,a.requirements),r.a.createElement("h3",null,"Imagen de la vacante"),r.a.createElement("img",{src:a.image,alt:a.position})),r.a.createElement("div",{className:"form-container"},r.a.createElement("h3",null,"Empresa"),r.a.createElement("p",null,r.a.createElement(g.a,{to:"/trabajos/?company.name=".concat(a.company.name)},a.company.name)),a.company.companyType&&r.a.createElement("p",null,"Tipo de empresa:"," ",r.a.createElement(g.a,{to:"/trabajos/?company.companyType=".concat(a.company.companyType)},a.company.companyType)),a.address.direccion&&r.a.createElement("p",null,"Direccion: ",a.address.direccion),a.address.alcaldia&&r.a.createElement("p",null,"Alcaldia:"," ",r.a.createElement(g.a,{to:"/trabajos/?address.alcaldia=".concat(a.address.alcaldia)},a.address.alcaldia)),a.address.ciudad&&r.a.createElement("p",null,"Ciudad:"," ",r.a.createElement(g.a,{to:"/trabajos/?address.ciudad=".concat(a.address.ciudad)},a.address.ciudad)),a.address.pais&&r.a.createElement("p",null,"Pais: ",a.address.pais),r.a.createElement("div",{style:{width:"100%",height:"300px"},ref:function(a){return e.mapContainer=a}})),r.a.createElement("div",{className:"form-container"},r.a.createElement("h3",null,"Como aplicar"),a.apply.onsite&&r.a.createElement("p",null,"Presencialmente"),a.apply.whatsapp&&r.a.createElement("p",null,"Por Whatsapp:"," ",r.a.createElement("a",{href:"https://wa.me/".concat(a.apply.whatsapp)},a.apply.whatsapp)),a.apply.phone&&r.a.createElement("p",null,"Por telefono:"," ",r.a.createElement("a",{href:"tel:".concat(a.apply.phone)},a.apply.phone))))}}]),a}(r.a.Component),k=t(235),O=t.n(k);v.a.accessToken="pk.eyJ1IjoiZGl1cml2aiIsImEiOiJjanAxdjA2cTQwMGp1M2tvYzZmZGp3bWc3In0.4cZEyLkU2ikqx_wb4A1z8A";var T,w=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(o)))).state={lng:-99.4238064,lat:19.300519,zoom:8,job:{address:{location:{}},company:{}},isEnabled:!1},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=this.state,t=a.lng,n=a.lat,o=a.zoom,r=a.job,c=new O.a({accessToken:v.a.accessToken,countries:"mx"});new v.a.Map({container:this.mapContainer,style:"mapbox://styles/mapbox/streets-v9",center:[t,n],zoom:o}).addControl(c),c.on("result",function(a){var t=a.result;r.address.location.coords=t.geometry.coordinates||"",r.address.location.lng=t.geometry.coordinates[0]||"",r.address.location.lat=t.geometry.coordinates[1]||"","poi"===t.place_type[0]?(r.company.name=t.text||"",r.address.direccion=t.properties.address||""):"address"===t.place_type[0]&&(r.address.direccion=t.text||""+t.address||"");for(var n=0;n<t.context.length;n++)/postcode.*/.test(t.context[n].id)?r.address.postalCode=t.context[n].text:/locality.*/.test(t.context[n].id)?r.address.alcaldia=t.context[n].text:/place.*/.test(t.context[n].id)?r.address.ciudad=t.context[n].text:/region.*/.test(t.context[n].id)?r.address.estado=t.context[n].text:/country.*/.test(t.context[n].id)&&(r.address.pais=t.context[n].text);e.setState({job:r,isEnabled:!0}),localStorage.setItem("job",JSON.stringify(r))})}},{key:"render",value:function(){var e=this,a=this.props.updateCurrent,t=this.state.isEnabled;return r.a.createElement("div",{className:"form-container"},r.a.createElement("h4",null,"Lugar de trabajo"),r.a.createElement("p",null,"Escoge en el mapa el negocio que esta contratando para esta posicion. Puedes buscar por el nombre del negocio o la calle y el numero."),r.a.createElement("div",{style:{width:"100%",height:"300px"},ref:function(a){return e.mapContainer=a}}),r.a.createElement("button",{disabled:!t,onClick:function(){return a(2)},className:"btn btn-positive"},"Confirmar"),!t&&r.a.createElement("p",null,"Selecciona en el mapa la empresa que esta contratando antes de seguir."))}}]),a}(o.Component),x=t(562),N=x.a.Step,M=function(e){var a=e.current;return console.log("Step:",a),r.a.createElement("div",{className:"form-progress"},r.a.createElement(x.a,{size:"small",current:a},r.a.createElement(N,{title:"Sube la oferta",description:"Toma una foto del cartel"}),r.a.createElement(N,{title:"Indica la empresa",description:"Indica donde tomaste la foto"}),r.a.createElement(N,{title:"Confirma los detalles",description:"This is a description."})))},S=t(146),q=t.n(S),I=(t(554),"https://trabajocerca.herokuapp.com/api/upload"),A=E.a.create({url:I,withCredentials:!0}),P=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(o)))).state={loading:!1,cameraOn:!1,image:{},laimage:""},t.handleChange=function(e){t.setState({loading:!0});var a=e.target.files[0];t.sendPhoto(a)},t.cameraOn=function(){t.state.cameraOn?t.setState({cameraOn:!1}):t.setState({cameraOn:!0})},t.sendToServer=function(e,a){var t=new FormData;return t.append("image",e),A.post(a,t,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){return console.log("sendtoserver",e),e}).catch(function(e){return console.log(e)})},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"sendPhoto",value:function(e){var a=this;this.sendToServer(e,I).then(function(t){a.props.handleImage(t.data.image),E.a.get("https://api.ocr.space/parse/imageurl?apikey=ab48b0421688957&language=spa&detectOrientation=true&url="+t.data.api).then(function(e){a.props.handleImageText(e.data.ParsedResults[0].ParsedText),console.log(e.data.ParsedResults[0].ParsedText),a.props.updateCurrent(1)}).catch(function(e){return console.log(e)}),a.setState({image:e})}).catch(function(e){return console.log(e)})}},{key:"onTakePhoto",value:function(e){var a=this;console.log("takePhoto",e),fetch(e).then(function(e){return e.blob()}).then(function(e){var t=new File([e],"File name");console.log(t),a.sendPhoto(t)})}},{key:"render",value:function(){var e=this,a=this.state,t=a.loading,n=a.cameraOn;return r.a.createElement("div",{className:"form-container"},r.a.createElement("div",null,r.a.createElement("p",null,"Sube una imagen que ya has tomado o toma una ahora. Extraeremos el texto de la imagen para que no tengas que escribir tanto :)"),t&&r.a.createElement("p",{className:"loading"},"Subiendo la imagen"),r.a.createElement("input",{type:"file",accept:"image/*",onChange:this.handleChange,name:"image"}),n&&r.a.createElement(q.a,{idealFacingMode:S.FACING_MODES.ENVIRONMENT,onTakePhoto:function(a){e.onTakePhoto(a)}}),r.a.createElement("button",{className:"btn btn-positive",onClick:this.cameraOn},"Tomar foto")))}}]),a}(r.a.Component),_=t(566),L=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(o)))).state={job:{jobType:"Tipo de trabajo",gender:"Genero",address:{location:{}},company:{companyType:"Tipo de empresa"},apply:{}},isEnabled:!1},t.handleChange=function(e){var a=t.state.job;a[e.target.name]=e.target.value,t.setState({job:a})},t.handleSubmit=function(){var e=t.state.job;E.a.post("https://trabajocerca.herokuapp.com/api/nuevo",e,{withCredentials:!0}).then(function(e){return t.props.history.push("/trabajo/".concat(e.data.job._id))}).catch(function(e){return console.log(e)})},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentWillMount",value:function(){var e=JSON.parse(localStorage.getItem("job"));e.image=this.props.image,e.description=this.props.job.description,this.setState({job:e})}},{key:"render",value:function(){return console.log(this.state.job),r.a.createElement("section",null,r.a.createElement("div",{className:"form-container"},r.a.createElement("h3",null,"Oferta de trabajo"),r.a.createElement("p",null,"Cuanto mas detallada la oferta este, mas aplicantes tendra."),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"position"},"Posicion vacante"),r.a.createElement("input",{type:"text",name:"position",placeholder:"Posicion vacante",required:!0,onChange:this.handleChange})),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"jobType"},"Tipo de posicion"),r.a.createElement("select",{name:"jobType",defaultValue:this.state.job.jobType,onChange:this.handleChange,required:!0},r.a.createElement("option",{value:"Tipo de trabajo",disabled:!0,hidden:!0},"Tipo de trabajo"),r.a.createElement("option",{value:"Ayudante de cocina"},"Ayudante de cocina"),r.a.createElement("option",{value:"Ayudante de tienda"},"Ayudante de tienda"),r.a.createElement("option",{value:"Ejecutivo de ventas"},"Ejecutivo de ventas"),r.a.createElement("option",{value:"Empleado general"},"Empleado general"),r.a.createElement("option",{value:"Gerente de tienda"},"Gerente de tienda"),r.a.createElement("option",{value:"Lavaloza"},"Lavaloza"),r.a.createElement("option",{value:"Mesero"},"Mesero"),r.a.createElement("option",{value:"Personal de cocina"},"Personal de cocina"),r.a.createElement("option",{value:"Personal de limpieza"},"Personal de limpieza"),r.a.createElement("option",{value:"Recepcionista"},"Recepcionista"))),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"gender"},"Preferencia de genero"),r.a.createElement("select",{name:"gender",defaultValue:this.state.job.gender,onChange:this.handleChange},r.a.createElement("option",{value:"",defaultValue:!0,disabled:!0,hidden:!0},"Genero"),r.a.createElement("option",{value:"indistinto"},"Indistinto"),r.a.createElement("option",{value:"mujer"},"Mujer"),r.a.createElement("option",{value:"hombre"},"Hombre"))),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"description"},"Descripcion de la vacante"),r.a.createElement("input",{type:"text",name:"description",placeholder:"Descripcion de la vacante",onChange:this.handleChange,defaultValue:this.state.job.description})),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"requirements"},"Requisitos de la vacante"),r.a.createElement("input",{type:"text",name:"requirements",placeholder:"Requisitos",onChange:this.handleChange})),this.state.job.image&&r.a.createElement("p",null,"Imagen de la oferta:"),this.state.job.image&&r.a.createElement("img",{src:this.state.job.image,alt:"Oferta de trabajo"})),r.a.createElement("div",{className:"form-container"},r.a.createElement("h3",null,"Lugar de trabajo"),r.a.createElement("p",null,"Que empresa ofrece la vacante ?"),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"company.name"},"Nombre del a empresa"),r.a.createElement("input",{type:"text",name:"company.name",placeholder:"Nombre de la empresa",required:!0,defaultValue:this.state.job.company.name,onChange:this.handleChange})),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"company.companyType"},"Tipo de empresa"),r.a.createElement("select",{name:"company.companyType",defaultValue:this.state.job.company.companyType,onChange:this.handleChange,required:!0},r.a.createElement("option",{value:"",defaultValue:!0,disabled:!0,hidden:!0},"Tipo de empresa"),r.a.createElement("option",{value:"Hotel"},"Hotel"),r.a.createElement("option",{value:"Tienda"},"Tienda"),r.a.createElement("option",{value:"Restaurante"},"Restaurante"),r.a.createElement("option",{value:"Otro"},"Otro"))),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"address.direccion"},"Direccion"),r.a.createElement("input",{type:"text",name:"address.direccion",placeholder:"Direccion",required:!0,defaultValue:this.state.job.address.direccion,onChange:this.handleChange})),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"address.alcaldia"},"Alcaldia"),r.a.createElement("input",{type:"text",name:"address.alcaldia",placeholder:"Alcaldia",required:!0,defaultValue:this.state.job.address.alcaldia,onChange:this.handleChange})),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"address.ciudad"},"Ciudad"),r.a.createElement("input",{type:"text",name:"address.ciudad",placeholder:"Ciudad",required:!0,defaultValue:this.state.job.address.ciudad,onChange:this.handleChange})),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"address.estado"},"Estado"),r.a.createElement("input",{type:"text",name:"address.estado",placeholder:"Estado",required:!0,defaultValue:this.state.job.address.estado,onChange:this.handleChange})),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"address.pais"},"Pais"),r.a.createElement("input",{type:"text",name:"address.pais",placeholder:"Pais",required:!0,defaultValue:this.state.job.address.pais,onChange:this.handleChange}))),r.a.createElement("div",{className:"form-container"},r.a.createElement("h3",null,"Como aplicar"),r.a.createElement("p",null,"Elige por lo menos una de las formas para aplicar."),r.a.createElement("input",{type:"checkbox",name:"apply.onsite",onChange:this.handleChange}),"En persona",r.a.createElement("input",{type:"email",name:"apply.email",placeholder:"Email",required:!0,onChange:this.handleChange}),r.a.createElement("input",{type:"text",name:"apply.whatsapp",placeholder:"Whatsapp",required:!0,onChange:this.handleChange}),r.a.createElement("input",{type:"text",name:"apply.phone",placeholder:"Telefono",required:!0,onChange:this.handleChange})),r.a.createElement("button",{onClick:this.handleSubmit,className:"btn btn-positive"},"Confirmar"))}}]),a}(r.a.Component),z=Object(_.a)(L),D=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(o)))).state={current:0,image:{},job:{}},t.handleImage=function(e){t.setState({image:e}),console.log(t.state.image)},t.handleImageText=function(e){var a=t.state.job;a.description=e,t.setState({job:a})},t.updateCurrent=function(e){t.setState({current:e})},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){document.title="Crea una nueva oferta de trabajo"}},{key:"render",value:function(){var e=this.state,a=e.current,t=e.image,n=e.job;switch(a){case 0:return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Crear una nueva vacante"),r.a.createElement(M,{current:a}),r.a.createElement(P,{updateCurrent:this.updateCurrent,handleImage:this.handleImage,handleImageText:this.handleImageText}));case 1:return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Crear una nueva vacante"),r.a.createElement(M,{current:a}),r.a.createElement(w,{updateCurrent:this.updateCurrent}));case 2:return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Crear una nueva vacante"),r.a.createElement(M,{current:a}),r.a.createElement(z,{updateCurrent:this.updateCurrent,image:t,job:n}));default:return null}}}]),a}(r.a.Component),F=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(o)))).state={auth:{}},t.handleChange=function(e){var a=t.state.auth;a[e.target.name]=e.target.value,t.setState({auth:a})},t.sendToServer=function(){var e=t.state.auth;E.a.post("https://trabajocerca.herokuapp.com/auth/login",e,{withCredentials:!0}).then(function(e){console.log(e.data),window.location.replace("/")}).catch(function(e){alert("nanai")})},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){document.title="Entra con tu cuenta"}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Entra con tu cuenta"),r.a.createElement("div",{className:"form-container"},r.a.createElement("input",{onChange:this.handleChange,placeholder:"email",name:"email",type:"email"}),r.a.createElement("br",null),r.a.createElement("input",{onChange:this.handleChange,placeholder:"tu password",name:"password",type:"password"}),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.sendToServer,className:"btn btn-positive"},"Iniciar")))}}]),a}(r.a.Component),G=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(o)))).state={newUser:{},errors:{}},t.handleChange=function(e){var a=t.state,n=a.newUser,o=a.errors;n[e.target.name]=e.target.value,o={},n.password!==n.password2&&(o.password="no coinciden"),t.setState({newUser:n,errors:o})},t.sendToServer=function(){var e=t.state.newUser;E.a.post("https://trabajocerca.herokuapp.com/auth/signup",e).then(function(e){console.log("Nuevo usuario ? ",e),t.props.history.push("/login")}).catch(function(e){return console.log(e)})},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){document.title="Crea una cuenta"}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Crea tu cuenta"),r.a.createElement("div",{className:"form-container"},r.a.createElement("input",{onChange:this.handleChange,placeholder:"Email",name:"email",type:"email"}),r.a.createElement("br",null),r.a.createElement("input",{onChange:this.handleChange,placeholder:"Contrasena",name:"password",type:"password"}),r.a.createElement("br",null),r.a.createElement("input",{onChange:this.handleChange,placeholder:"Repite tu contrasena",name:"password2",type:"password"}),r.a.createElement("p",{style:{color:"red"}},e.password),r.a.createElement("button",{onClick:this.sendToServer,className:"btn btn-positive"},"Crear cuenta")))}}]),a}(r.a.Component),V=t(564),J=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){E.a.get("https://trabajocerca.herokuapp.com/auth/logout",{withCredentials:!0}).then(function(e){console.log("Logged out"),window.location.replace("/")})}},{key:"render",value:function(){return r.a.createElement(V.a,{to:"/"})}}]),a}(r.a.Component),Z=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(o)))).state={user:{},jobs:[{address:{location:{}},company:{},apply:{}}]},t.getMarker=function(e,a,t,n,o){new v.a.Marker({color:"red"}).setLngLat([e,a]).setPopup(new v.a.Popup({offset:25}).setHTML("<a href='/trabajo/"+o+"'><h3>"+t+"</h3><p>"+n+"</p></a>")).addTo(T)},t.setMarkers=function(){t.state.jobs.forEach(function(e){t.getMarker(e.address.location.lng,e.address.location.lat,e.position,e.company.name,e._id)})},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get("https://trabajocerca.herokuapp.com/api/trabajos"+this.props.location.search,{withCredentials:!0}).then(function(a){document.title="Tus trabajos cerca  de ti",e.setState({jobs:a.data}),e.getMap()}).catch(function(e){console.log(e)})}},{key:"getMap",value:function(){var e=this.state.jobs[0].address.location,a=e.lng,t=e.lat;T=new v.a.Map({container:this.mapContainer,style:"mapbox://styles/mapbox/streets-v9",center:[a,t],zoom:12}),this.setMarkers()}},{key:"render",value:function(){var e=this,a=this.state.jobs;return r.a.createElement("div",null,r.a.createElement("h2",{className:"center"},"\xdaltimas vacantes"),r.a.createElement("section",{className:"container job-container"},r.a.createElement("div",{style:{width:"100%",height:"300px"},ref:function(a){return e.mapContainer=a}}),a.map(function(e,a){return r.a.createElement("div",{key:a,className:"job-card"},r.a.createElement("div",null,r.a.createElement(g.a,{to:"/trabajo/".concat(e._id)},r.a.createElement("img",{src:e.image,alt:e.position}))),r.a.createElement("div",null,r.a.createElement("h3",null,e.company.name),r.a.createElement("p",null," ",e.address.alcaldia)))})))}}]),a}(r.a.Component),R=function(){return r.a.createElement(p.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:j}),r.a.createElement(h.a,{exact:!0,path:"/nuevo",component:D}),r.a.createElement(h.a,{exact:!0,path:"/login",component:F}),r.a.createElement(h.a,{exact:!0,path:"/signup",component:G}),r.a.createElement(h.a,{exact:!0,path:"/logout",component:J}),r.a.createElement(h.a,{path:"/trabajo/:id",component:C}),r.a.createElement(h.a,{path:"/trabajos/",component:Z}))},W=(t(144),function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.url,t=e.text;return r.a.createElement(g.a,{to:a,title:t},t)}}]),a}(o.Component)),U=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).text=e.text,t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"top-menu-lead"},r.a.createElement(g.a,{to:"/"},this.text))}}]),a}(o.Component),Q=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(o)))).state={isLogged:!1,menu_class:"",search:""},t.checkLogged=function(){E.a.get("https://trabajocerca.herokuapp.com/auth/loggedin",{withCredentials:!0}).then(function(e){t.setState({isLogged:!0,user:e.data.user},function(e){})}).catch(function(e){return console.log(e)})},t.setToggleTopMenuClass=function(){""===t.state.menu_class?t.setState({menu_class:"toggled"}):t.setState({menu_class:""})},t.searchQuery=function(e){e.preventDefault();var a=e.target.value;E.a.post("https://trabajocerca.herokuapp.com/api/trabajos",{query:a}).then(function(e){t.props.history.push("/trabajos/?query=".concat(e.data.query))})},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.checkLogged()}},{key:"render",value:function(){var e=this.state.isLogged,a="top-menu ".concat(this.state.menu_class);return r.a.createElement("div",null,r.a.createElement("div",{className:a},r.a.createElement(U,{text:"Trabajo cerca"}),r.a.createElement("div",{className:"top-menu-icon",onClick:this.setToggleTopMenuClass},r.a.createElement("span",{role:"img","aria-label":"menu"},"\ud83c\udf54")),r.a.createElement("div",{className:"left"},r.a.createElement("form",{action:"/trabajos/"},r.a.createElement("input",{type:"text",name:"query",placeholder:"Busca por zona, empresa...",onSubmit:this.searchQuery,className:"search"}))),e?r.a.createElement("div",{className:"right"},r.a.createElement(W,{text:"Nueva vacante",url:"/nuevo"}),r.a.createElement(W,{text:"Logout",url:"/logout"})):r.a.createElement("div",{className:"right"},r.a.createElement(W,{text:"Crear cuenta",url:"/signup"}),r.a.createElement(W,{text:"Entrar",url:"/login"}))))}}]),a}(o.Component),H=Object(_.a)(Q),B=(t(556),function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(H,null),r.a.createElement(R,null))}}]),a}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=t(563);t(557);l.a.render(r.a.createElement(function(){return r.a.createElement(Y.a,null,r.a.createElement(B,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[242,1,2]]]);
//# sourceMappingURL=main.86d822b1.chunk.js.map