(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(47)},36:function(e,t,a){},37:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(18),r=a.n(s),u=(a(36),a(37),a(2)),c=a(3),o=a(6),l=a(4),m=a(5),d=a(9),p=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("header",null,n.a.createElement("div",{className:"container"},n.a.createElement("h1",{id:"logo"},"WEST COAST CRIBS"),n.a.createElement("nav",null,n.a.createElement("ul",null,n.a.createElement(d.b,{to:"/"},n.a.createElement("li",null,"Home")),n.a.createElement(d.b,{to:"/services"},n.a.createElement("li",null,"Services")),n.a.createElement(d.b,{to:"/about"},n.a.createElement("li",null,"About")))))))}}]),t}(i.Component),b=a(15),h=a(29),f=a.n(h);window.addEventListener("click",function(e){e.target===document.querySelector(".picModal")&&(document.querySelector(".picModal").style.display="none")});var E=function(e){function t(){var e,a;Object(u.a)(this,t);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(n)))).showInfoClick=function(e){f()(".".concat(e)).toggle()},a.viewPics=function(e){document.querySelector(".picModal").style.display="block",document.querySelector(".modalID").innerHTML=e},a.closeButton=function(){document.querySelector(".picModal").style.display="none"},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.props.fetchHouses()}},{key:"render",value:function(){var e=this,t=this.props.houses.map(function(t){return n.a.createElement("div",{className:"houseContainer"},n.a.createElement("img",{src:"".concat(t.pic,".jpg"),alt:"",className:"houseContainerPic"}),n.a.createElement("div",{className:"houseContainerInfo"},n.a.createElement("h2",null,"Price: $",t.priceInfo.price," ",n.a.createElement("i",{class:"fa fa-caret-down",onClick:e.showInfoClick.bind(e,t.id)})),n.a.createElement("div",{className:"".concat(t.id," priceInfo")},n.a.createElement("p",null,"Downpayment: ",t.priceInfo.downPayment),n.a.createElement("p",null,"15 Year Plan: ",t.priceInfo.year15),n.a.createElement("p",null,"30 Year Plan: ",t.priceInfo.year30)),n.a.createElement("p",null,t.address.city,", ",t.address.state),n.a.createElement("p",null,"Bedrooms:".concat(t.accomodation.beds," Bathrooms:").concat(t.accomodation.bath)),n.a.createElement("p",null,"SQFT: ",t.sqft),n.a.createElement("button",{id:"modalButton",className:"houseButton",onClick:e.viewPics.bind(e,t.priceInfo.price)},"View Pics")),n.a.createElement("div",{className:"clearDiv"}),n.a.createElement("div",{className:"picModal"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("span",{className:"closeBtn",onClick:e.closeButton},"\xd7"),n.a.createElement("h1",null,"More Pictures"),n.a.createElement("p",{className:"modalID"}))))});return n.a.createElement("div",null,n.a.createElement("h1",{className:"pageTitle"},"Houses For Sale"),t)}}]),t}(i.Component),v=Object(b.b)(function(e){return{houses:e.houses.houseItems}},{fetchHouses:function(){return function(e){fetch("houses.json").then(function(e){return e.json()}).then(function(t){return e({type:"FETCH_HOUSES",payload:t.houses})})}}})(E),q=a(13),y=a(30),g=a(24),N={houseItems:[],houseItem:{},aptItems:[],aptItem:{}},O=Object(q.c)({houses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_HOUSES":return Object(g.a)({},e,{houseItems:t.payload});case"FETCH_APTS":return Object(g.a)({},e,{aptItems:t.payload});default:return e}}}),j=[y.a],I=Object(q.e)(O,{},Object(q.d)(q.a.apply(void 0,j))),B=function(e){function t(){var e,a;Object(u.a)(this,t);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(n)))).viewPics=function(e,t){document.querySelector(".picModal").style.display="block",document.querySelector(".modalID").innerHTML=e,document.querySelector(".modalID2").innerHTML=t},a.moreInfo=function(){document.querySelector(".infoModal").style.display="block",document.querySelector(".modalID").innerHTML="wdvcwv",document.querySelector(".modalID2").innerHTML="state"},a.closeButton=function(){document.querySelector(".picModal").style.display="none",document.querySelector(".infoModal").style.display="none"},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.props.fetchApts()}},{key:"render",value:function(){var e=this,t=this.props.houses.map(function(t){return n.a.createElement("div",{className:"houseContainer"},n.a.createElement("img",{src:t.pic,alt:"",className:"houseContainerPic"}),n.a.createElement("div",{className:"houseContainerInfo"},n.a.createElement("h2",null,"$",t.priceInfo.minPrice,"-$",t.priceInfo.maxPrice,"/Per Month"),n.a.createElement("p",null,t.address.city,", ",t.address.state),n.a.createElement("p",null,"Bedrooms: ".concat(t.bedrooms.minBed,"-").concat(t.bedrooms.maxBed)),n.a.createElement("p",null,"Bathrooms: ".concat(t.bathrooms.minBath,"-").concat(t.bathrooms.maxBath)),n.a.createElement("div",{className:"buttonContainer"},n.a.createElement("button",{className:"houseButton",onClick:e.viewPics.bind(e,t.address.city,t.address.state)},"View Pics"),n.a.createElement("button",{className:"houseButton",onClick:e.moreInfo.bind(e,t.address.city,t.address.state)},"More Info"))),n.a.createElement("div",{className:"clearDiv"}),n.a.createElement("div",{className:"picModal"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("span",{className:"closeBtn",onClick:e.closeButton},"\xd7"),n.a.createElement("h1",null,"More Pictures"),n.a.createElement("p",{className:"modalID"}),n.a.createElement("p",{className:"modalID2"}))),n.a.createElement("div",{className:"infoModal"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("span",{className:"closeBtn",onClick:e.closeButton},"\xd7"),n.a.createElement("h1",null,"More Info"),n.a.createElement("p",{className:"modalID"}),n.a.createElement("p",{className:"modalID2"}))))});return n.a.createElement("div",null,n.a.createElement("h1",{className:"pageTitle"},"Apartments For Rent"),t)}}]),t}(i.Component),C=Object(b.b)(function(e){return{houses:e.houses.aptItems}},{fetchApts:function(){return function(e){fetch("apartments.json").then(function(e){return e.json()}).then(function(t){return e({type:"FETCH_APTS",payload:t.apartments})})}}})(B),x=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{id:"homeContainer"},n.a.createElement("div",{id:"mySidebar"},n.a.createElement(d.b,{to:"/houses",className:"sideBarList"},n.a.createElement("p",{className:"sideBarList2"},"Houses For Sale")),n.a.createElement(d.b,{to:"/apartments",className:"sideBarList"},n.a.createElement("p",{className:"sideBarList2"},"Apartments For Rent")),n.a.createElement(d.b,{to:"/rent/houses",className:"sideBarList"},n.a.createElement("p",{className:"sideBarList2"},"Houses For Rent")),n.a.createElement(d.b,{to:"/contact",className:"sideBarList"},n.a.createElement("p",{className:"sideBarList2"},"Contact Us"))),n.a.createElement("div",{id:"homeImage"})),n.a.createElement("div",{className:"infoBoxes"},n.a.createElement("div",{className:"infoBox"},n.a.createElement("img",{src:"./images/money.png",alt:"",className:"infoPic"}),n.a.createElement("h3",null,"Buy Houses"),n.a.createElement("p",null,"Buy Houses Accross the USA")),n.a.createElement("div",{className:"infoBox"},n.a.createElement("img",{src:"./images/rent.png",alt:"",className:"infoPic"}),n.a.createElement("h3",null,"Rent Houses"),n.a.createElement("p",null,"Rent Houses Accross the USA")),n.a.createElement("div",{className:"infoBox"},n.a.createElement("img",{src:"./images/rent2.png",alt:"",className:"infoPic"}),n.a.createElement("h3",null,"Buy Houses"),n.a.createElement("p",null,"Rent Apartments Accross the USA"))),n.a.createElement("div",{className:"clearDiv"}))}}]),t}(i.Component),S=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"service",className:"container"},n.a.createElement("h1",null,"Services"),n.a.createElement("h2",null,"Buy a House"),n.a.createElement("p",null,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis et facere illo magni ea unde saepe accusamus molestias. Laudantium aliquid, aspernatur voluptatum, ut modi tempore dolor minima odit cupiditate explicabo quidem quae reiciendis aliquam tempora, qui totam deleniti voluptatibus dignissimos ipsam consequuntur. Quaerat ipsa maxime eveniet recusandae aliquam repellendus quos deleniti facilis impedit ea, hic corporis assumenda corrupti blanditiis repellat tempore cum beatae minus animi sint, sapiente quas. Molestias adipisci omnis sint! Quis veniam atque vero, velit quasi eaque vel perferendis laudantium repellat? Deleniti, atque eaque? Impedit nobis ea veritatis fugiat, consectetur illum perferendis labore incidunt at, accusantium architecto aspernatur."),n.a.createElement("h2",null,"Rent an Apartment"),n.a.createElement("p",null,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis et facere illo magni ea unde saepe accusamus molestias. Laudantium aliquid, aspernatur voluptatum, ut modi tempore dolor minima odit cupiditate explicabo quidem quae reiciendis aliquam tempora, qui totam deleniti voluptatibus dignissimos ipsam consequuntur. Quaerat ipsa maxime eveniet recusandae aliquam repellendus quos deleniti facilis impedit ea, hic corporis assumenda corrupti blanditiis repellat tempore cum beatae minus animi sint, sapiente quas. Molestias adipisci omnis sint! Quis veniam atque vero, velit quasi eaque vel perferendis laudantium repellat? Deleniti, atque eaque? Impedit nobis ea veritatis fugiat, consectetur illum perferendis labore incidunt at, accusantium architecto aspernatur."),n.a.createElement("h2",null,"Rent a House"),n.a.createElement("p",null,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis et facere illo magni ea unde saepe accusamus molestias. Laudantium aliquid, aspernatur voluptatum, ut modi tempore dolor minima odit cupiditate explicabo quidem quae reiciendis aliquam tempora, qui totam deleniti voluptatibus dignissimos ipsam consequuntur. Quaerat ipsa maxime eveniet recusandae aliquam repellendus quos deleniti facilis impedit ea, hic corporis assumenda corrupti blanditiis repellat tempore cum beatae minus animi sint, sapiente quas. Molestias adipisci omnis sint! Quis veniam atque vero, velit quasi eaque vel perferendis laudantium repellat? Deleniti, atque eaque? Impedit nobis ea veritatis fugiat, consectetur illum perferendis labore incidunt at, accusantium architecto aspernatur."))}}]),t}(i.Component),w=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"about",className:"container"},n.a.createElement("h1",null,"About Us"),n.a.createElement("p",null,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, veritatis aperiam? Itaque saepe unde hic velit ab nobis labore explicabo odio ullam fuga laborum tempora quasi delectus necessitatibus alias vel, non fugit reiciendis, consequuntur doloribus! Cumque iure totam excepturi blanditiis perferendis, dignissimos ea aliquam, aperiam veritatis nam, doloribus quae velit doloremque ratione beatae at pariatur eveniet corrupti laborum. Necessitatibus consectetur deserunt dolor sint dolorum dicta similique at ad, dignissimos velit beatae fugiat magnam? Laboriosam accusamus illum totam atque unde ratione vel? Numquam quasi quam ipsum quo perspiciatis dolor vitae ab, provident exercitationem iste quibusdam! Omnis quisquam eos molestiae ea, blanditiis harum veritatis ipsa fuga quas, quos dicta. Odit suscipit voluptatem dolores rem unde cum repudiandae nobis quo dignissimos sapiente labore, a tenetur ullam reiciendis deleniti officiis, aspernatur adipisci molestiae ab alias ut? Nulla consequatur ea provident labore, qui quod atque illum inventore nam hic! Quaerat eligendi reprehenderit pariatur aspernatur saepe iure quidem sunt accusamus? Nihil eaque laborum eos fugit nobis consequuntur maxime. Quidem, voluptatum blanditiis quo accusantium temporibus possimus tenetur molestias explicabo, recusandae nisi repellendus iste consequuntur eius tempore impedit quisquam non accusamus optio maiores voluptatibus nulla quis. Voluptatibus corrupti eum at labore? Quam harum, ducimus tenetur quos dicta aperiam fugiat molestias ex est eaque eius perspiciatis laborum, unde iure excepturi similique asperiores enim obcaecati aliquid. Corrupti, pariatur quasi expedita aperiam reiciendis itaque possimus eum ut numquam harum cum at suscipit nisi dolor perferendis id officia? Nesciunt culpa odio quod quisquam nemo architecto perspiciatis beatae pariatur unde deserunt nostrum molestiae eaque aspernatur sunt asperiores tempore, magni magnam. Atque sed minus assumenda voluptatibus dignissimos tempore delectus ipsa soluta cupiditate cumque! Molestiae est fugiat nesciunt velit, alias minus pariatur. Placeat deleniti possimus assumenda? Quo sunt voluptatibus totam tenetur quisquam accusantium eum ratione, neque, voluptates illum officia fugiat! Vel incidunt dignissimos quam accusamus alias perferendis animi maiores, est unde ducimus. Sint reiciendis in necessitatibus praesentium! Velit tempora vero ex asperiores. Culpa dolor mollitia ipsa! Cum modi fugit totam autem similique accusamus deserunt in! Omnis debitis pariatur laborum inventore sequi ratione quisquam, dicta vel doloribus, iste repellat eligendi delectus tempore harum amet deleniti ullam reiciendis tenetur. Quos, distinctio id quidem in voluptatibus, et accusamus eveniet deleniti nobis perspiciatis velit exercitationem fuga soluta provident ipsum? Impedit odio soluta ipsam cum praesentium labore fuga, consequatur qui voluptas sapiente aliquam dolorem consequuntur consectetur pariatur atque dolore quisquam nihil optio ipsa quae repudiandae accusamus ea fugit fugiat! Ipsum."))}}]),t}(i.Component),M=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"myFooter"},n.a.createElement("p",null,"Copyright Me \xa9 2019"))}}]),t}(i.Component),k=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",{className:"pageTitle"},"Rent Houses"))}}]),t}(i.Component),P=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"contactForm"},n.a.createElement("h1",null,"Contact Us"),n.a.createElement("form",{className:"formContainer"},n.a.createElement("div",{className:"form-group"},n.a.createElement("p",null,"Name:"),n.a.createElement("input",{type:"text"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("p",null,"Email:"),n.a.createElement("input",{type:"text"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("p",null,"Message:"),n.a.createElement("textarea",null)),n.a.createElement("div",{className:"buttonDiv"},n.a.createElement("button",{id:"sendButton"},"Send"))))}}]),t}(i.Component),H=a(14);var L=function(){return n.a.createElement(b.a,{store:I},n.a.createElement(d.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(p,null),n.a.createElement(H.c,null,n.a.createElement(H.a,{exact:!0,path:"/",component:x}),n.a.createElement(H.a,{exact:!0,path:"/houses",component:v}),n.a.createElement(H.a,{exact:!0,path:"/apartments",component:C}),n.a.createElement(H.a,{exact:!0,path:"/services",component:S}),n.a.createElement(H.a,{exact:!0,path:"/about",component:w}),n.a.createElement(H.a,{exact:!0,path:"/rent/houses",component:k}),n.a.createElement(H.a,{exact:!0,path:"/contact",component:P})),n.a.createElement(M,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.801cf3c5.chunk.js.map