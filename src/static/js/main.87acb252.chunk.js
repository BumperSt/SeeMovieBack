(this.webpackJsonpseetorrentmovies=this.webpackJsonpseetorrentmovies||[]).push([[0],{122:function(e,n,t){},171:function(e,n,t){"use strict";t.r(n);var r,o,c,i,a,s,l,j,u,b,d,h,O,m,f,p,x,g,v,y,w,k,S,A,C,B,D,M,R,E,T,L,U,z,F,q,Z=t(1),Q=t.n(Z),I=t(73),Y=t.n(I),G=t(20),X=t(6),K=t(5),P=t(2),V=t(3),N=V.a.div(r||(r=Object(P.a)(["\n  position: relative;\n"]))),W=V.a.input(o||(o=Object(P.a)(["\n  height: 30px;\n  width: 0;\n  border-style: none;\n  font-size: 18px;\n  letter-spacing: 2px;\n  outline: none;\n  border-radius: 25px;\n  transition: all .5s ease-in-out;\n  background-color: #22a6b3;\n  padding-right: 40px;\n  color:#fff;\n  font-weight: 300;\n\n  &::placeholder{\n    color:rgba(255,255,255,.5);\n    font-size: 18px;\n    letter-spacing: 2px;\n    font-weight: 100;\n  }\n\n  &:focus{\n    width: 300px;\n    border-radius: 0px;\n    background-color: transparent;\n    border-bottom:1px solid rgba(255,255,255,.5);\n    transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);\n  }\n"]))),J=V.a.button(c||(c=Object(P.a)(["\n  width: 0;\n  height: 30px;\n  border-style: none;\n  font-size: 20px;\n  font-weight: bold;\n  outline: none;\n  cursor: pointer;\n  border-radius: 50%;\n  position: absolute;\n  right: 25px;\n  color:#ffffff ;\n  background-color:transparent;\n  pointer-events: painted; \n  \n  &:focus ~ "," {\n    width: 300px;\n    border-radius: 0px;\n    background-color: transparent;\n    border-bottom:1px solid rgba(255,255,255,.5);\n    transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);\n  }\n"])),W),_=(t.p,t(18)),H=t.n(_),$=function(e,n,t){t.push({pathname:"/"+e,actualMovie:n})},ee=function(e,n){n.push("/"+e)},ne=t(78),te=t(77),re=t(0),oe=function(e){var n=e.setMoviesList,t=e.setSearchValue,r=e.SetLoading,o=Object(Z.useState)(""),c=Object(K.a)(o,2),i=c[0],a=c[1],s=Object(X.f)();Object(Z.useEffect)((function(){t(i.replaceAll("%20"," ")),""==i?(n(null),ee("",s)):r(!0)}),[i]);return Object(re.jsxs)(N,{children:[Object(re.jsx)(J,{children:Object(re.jsx)(te.a,{icon:ne.a})}),Object(re.jsx)(W,{onKeyDown:function(e){return"Enter"===e.key&&(console.log("callHere"),r(!0),clearTimeout(void 0),void H.a.get("https://yts.mx/api/v2/list_movies.json?query_term="+i).then((function(e){t(i.replaceAll("%20"," ")),r(!1),n(e.data.data.movies)})).catch((function(e){console.error(e)})))},onChange:function(e){return a(e.target.value.replaceAll(" ","%20"))}})]})},ce=V.a.a(i||(i=Object(P.a)(["\n    color: #fff;\n\n    &:hover{\n        cursor: pointer;\n        color:#7D3DDB;\n    }\n"]))),ie=V.a.li(a||(a=Object(P.a)(["\n    display: inline-block;\n    margin: 0 1rem;\n    \n    &:first-child{\n        margin-right: 2rem;\n    }\n"]))),ae=V.a.ol(s||(s=Object(P.a)(["\n\n"]))),se=V.a.nav(l||(l=Object(P.a)(["\n\n"]))),le=V.a.header(j||(j=Object(P.a)(["\n    background-color: #161414;\n    /* background-color: red; */\n    height: 3.25rem;\n    display: flex;\n    justify-content: space-between;\n    padding: 0 2.5rem;\n    align-items: center;\n"]))),je=(V.a.nav(u||(u=Object(P.a)(["\n    display: flex;\n    align-items: flex-end;\n"]))),V.a.div(b||(b=Object(P.a)(["\n    margin: 0 1rem 0.25rem 0;\n"]))),V.a.button(d||(d=Object(P.a)(["\n    background-color: #161414;\n    color: #B4B5B4;\n    border-radius: 40px;\n    padding: 5px 10px;\n    border: 1px solid #B4B5B4;\n    margin: 1rem 0.25rem 0.5rem 0.25rem;\n\n    &:hover{\n    background-color: #B4B5B4;\n    color: #161414;\n    cursor: pointer;\n    }\n"]))),V.a.div(h||(h=Object(P.a)(["\n    margin: 1rem 0.2rem;\n    color: #fff;\n"]))),V.a.a(O||(O=Object(P.a)(["\n    margin: 1rem 0.2rem;\n    color: #fff;\n\n    &:hover{\n        color: #ccc;\n        cursor: pointer;\n    }\n"]))),function(e){var n=e.setMoviesList,t=e.setSearchValue,r=e.SetLoading,o=Object(X.f)();return Object(re.jsxs)(le,{children:[Object(re.jsx)(se,{children:Object(re.jsxs)(ae,{children:[Object(re.jsx)(ie,{children:Object(re.jsx)(ce,{onClick:function(){return ee("",o)},children:"LOGO"})}),Object(re.jsx)(ie,{children:Object(re.jsx)(ce,{onClick:function(){return ee("movies",o)},children:"INICIO"})}),Object(re.jsx)(ie,{children:Object(re.jsx)(ce,{onClick:function(){return ee("movies",o)},children:"FILMES"})}),Object(re.jsx)(ie,{children:Object(re.jsx)(ce,{onClick:function(){return ee("",o)},children:"S\xc9RIES"})}),Object(re.jsx)(ie,{children:Object(re.jsx)(ce,{onClick:function(){return ee("listRooms",o)},children:"LISTA DE SALAS"})})]})}),n&&Object(re.jsx)(oe,{setMoviesList:n,setSearchValue:t,SetLoading:r})]})}),ue=V.a.div(m||(m=Object(P.a)(["\n    display:flex;\n    margin-left: 3.5rem;\n    flex-direction: column;\n    align-items: center;\n"]))),be=(V.a.div(f||(f=Object(P.a)(["\n    width: 5rem;\n"]))),V.a.h1(p||(p=Object(P.a)(["\n    text-transform: uppercase;\n    margin-top:1rem;\n"])))),de=V.a.select(x||(x=Object(P.a)(["\n    width: 25vw;\n    justify-self: center;\n    justify-content: center;\n"]))),he=V.a.div(g||(g=Object(P.a)(["\n    display:flex;\n    flex-direction: row;\n"]))),Oe=(V.a.aside(v||(v=Object(P.a)(["\nheight: 100vh;\nbackground-color: #161414;\nwidth: 3.5rem;\npadding: 1.5rem 0;\nposition: absolute;\nmargin: 0;\noverflow: auto;\n\nol{\n    list-style-type: none;\n    padding-left: 0;\n}\n\nli{\n    margin: 15px 0;\n}\n"]))),V.a.button(y||(y=Object(P.a)(["\n    background-color: #161414;\n    color: #7D3DDB;\n    border-radius: 40px;\n    padding: 9px 13px;\n    border: 1px solid #7D3DDB;\n    &:hover{\n        background-color: #7D3DDB;\n        color: #161414;\n        cursor: pointer;\n    }\n"]))),t(19)),me=V.a.div(w||(w=Object(P.a)(["\n    margin: 100px auto 0 43%;\n    perspective: 1000px;\n    margin-bottom: 15rem;\n"]))),fe=Object(V.a)(Oe.Bars)(k||(k=Object(P.a)(["\n\n"]))),pe=V.a.h1(S||(S=Object(P.a)(["\n\n    font-size: 2rem;\n    color: white;\n    margin-bottom: 3rem;\n    text-transform: uppercase;\n\n\n"]))),xe=V.a.div(A||(A=Object(P.a)(["\n\n    align-self: center;\n    transform-style: preserve-3d; \n    animation: rotate360 30s infinite  linear;\n\n    &:hover{\n        animation-play-state: paused;\n    }\n\n"]))),ge=V.a.div(C||(C=Object(P.a)(["\n\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-image: ",";\n    &:hover{\n\n        cursor: pointer;\n        opacity: 0.7;\n    \n    }\n    background-size: cover;\n    width: 100%;\n    height: 100%;\n\n"])),(function(e){return" url(".concat(e.url,")")})),ve=V.a.span(B||(B=Object(P.a)(["\n    color: #7D3DDB;\n    max-width: 3rem;\n    font-size: 2rem;\n    display: none;\n\n"]))),ye=V.a.div(D||(D=Object(P.a)(["\n\n    position: absolute;\n    width: 8rem;\n    height: 12rem;\n    &:nth-child(1) \n    {transform: rotateY(  0deg) translateZ(15rem); }\n    &:nth-child(2) { \n      transform: rotateY( 40deg) translateZ(15rem); }\n    &:nth-child(3) {\n        transform: rotateY( 80deg) translateZ(15rem); }\n    &:nth-child(4) {\n        transform: rotateY(120deg) translateZ(15rem); }\n    &:nth-child(5) { \n        transform: rotateY(160deg) translateZ(15rem); }\n    &:nth-child(6) { \n        transform: rotateY(200deg) translateZ(15rem); }\n    &:nth-child(7) { \n        transform: rotateY(240deg) translateZ(15rem); }\n    &:nth-child(8) {\n        transform: rotateY(280deg) translateZ(15rem); }\n    &:nth-child(9) {\n        transform: rotateY(320deg) translateZ(15rem); }\n    &:hover{\n        cursor: pointer;\n    }\n    &:hover ","{\n        display: inline;\n    }\n"])),ve),we=(t(122),function(e){var n=e.genery,t=e.filterSortBy,r=Object(Z.useState)(null),o=Object(K.a)(r,2),c=o[0],i=o[1],a=Object(X.f)(),s=Object(Z.useState)(!0),l=Object(K.a)(s,2),j=l[0],u=l[1];return Object(Z.useEffect)((function(){n&&H.a.get("https://yts.mx/api/v2/list_movies.json?genre=".concat(n,"&with_rt_ratings=true&sort_by=").concat(t)).then((function(e){i(e.data.data.movies),u(!1)})).catch((function(e){console.error(e)}))}),[n,t]),Object(re.jsxs)(me,{children:[Object(re.jsx)(pe,{children:n}),j&&Object(re.jsx)(fe,{}),Object(re.jsx)(xe,{children:c&&c.slice(0,9).map((function(e){return Object(re.jsxs)(ye,{onClick:function(){return $("selectTorrent",e,a)},children:[Object(re.jsx)(ge,{url:e.large_cover_image}),Object(re.jsx)(ve,{children:e.title}),Object(re.jsxs)("p",{children:[e.torrents[0].quality," : ",e.torrents[0].seeds]})]},e.id)}))})]})}),ke=V.a.h1(M||(M=Object(P.a)(["\n    font-weight: bold;\n    text-align: left;\n    text-transform: uppercase;\n    margin-bottom: .5rem;\n"]))),Se=Object(V.a)(Oe.Bars)(R||(R=Object(P.a)(["\n    \n"]))),Ae=V.a.div(E||(E=Object(P.a)(["\n    display: flex;\n    flex-direction: row;\n    transform: ",";\n    -webkit-transition: 0.5s ease-in-out;\n    -moz-transition: 0.5s ease-in-out;\n    -o-transition: 0.5s ease-in-out;\n    transition: 0.5s ease-in-out;\n    align-self: center;\n"])),(function(e){return"translate(-".concat(e.positionX,"%)")})),Ce=V.a.div(T||(T=Object(P.a)(["\n    height: 12rem;\n    width: 2.4rem;\n    z-index: 10;\n    position: absolute;\n    background-image: ",";\n    background-size: cover;\n    &:nth-child(2){\n        right: 0;\n    }\n    &:hover{\n        cursor: pointer;\n    }\n    display: none;\n\n"])),(function(e){return" url(".concat(e.url,")")})),Be=V.a.div(L||(L=Object(P.a)(["\n    width: 100%;\n    height: 15rem;\n    margin-top: 3rem;\n    overflow-x: hidden;\n    &:hover ","{\n        display: flex;\n\n    }\n\n"])),Ce),De=V.a.h3(U||(U=Object(P.a)(["\n    color: #7D3DDB;\n    max-width: 3rem;\n    font-size: 1rem;\n    display: none;\n"]))),Me=V.a.div(z||(z=Object(P.a)(["\n    min-width: 8rem;\n    max-width: 8rem;\n\n    height: 12rem;\n    margin-right: 1rem;\n    background-image: ",";\n    background-size: cover;\n    &:hover{\n        cursor: pointer;\n    }\n    &:hover ","{\n        display: inline;\n    }\n"])),(function(e){return" url(".concat(e.url,")")}),De),Re=(V.a.p(F||(F=Object(P.a)(["\n"]))),function(e){var n=Object(X.f)(),t=e.movie;return Object(re.jsx)(Me,{url:t.large_cover_image,onClick:function(){return $("selectTorrent",t,n)},children:Object(re.jsx)(De,{children:t.title})})}),Ee=t.p+"static/media/LeftCarrousel.71598f36.svg",Te=t.p+"static/media/RigthCarrousel.22acccc5.svg",Le=function(e){var n=e.typeToList,t=e.filterSortBy,r=Object(Z.useState)(null),o=Object(K.a)(r,2),c=o[0],i=o[1],a=Object(Z.useState)(0),s=Object(K.a)(a,2),l=s[0],j=s[1],u=Object(Z.useState)(!0),b=Object(K.a)(u,2),d=b[0],h=b[1],O=Object(Z.useState)(!1),m=Object(K.a)(O,2);m[0],m[1];Object(Z.useEffect)((function(){n&&H.a.get("https://yts.mx/api/v2/list_movies.json?genre=".concat(n,"&with_rt_ratings=true&sort_by=").concat(t)).then((function(e){h(!1),i(e.data.data.movies)})).catch((function(e){console.error(e)}))}),[n,t]);var f=function(e){e>0&&e<=100&&j(e)};return Object(re.jsx)(re.Fragment,{children:Object(re.jsxs)(Be,{children:[Object(re.jsx)(ke,{children:n}),d&&Object(re.jsx)(Se,{}),Object(re.jsx)(Ce,{url:Te,onClick:function(){return f(l+20)}}),Object(re.jsx)(Ce,{url:Ee,onClick:function(){return f(l-20)}}),Object(re.jsx)(Ae,{positionX:l,children:c&&c.map((function(e){return Object(re.jsx)(Re,{movie:e},e.id)}))})]})})},Ue=V.a.div(q||(q=Object(P.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    margin-top: 5rem;\n"]))),ze=function(e){var n=e.movieList;return console.log(n),Object(re.jsx)(Ue,{children:n&&n.map((function(e){return Object(re.jsx)(Re,{movie:e},e.id)}))})};var Fe,qe,Ze,Qe,Ie,Ye,Ge,Xe,Ke,Pe,Ve,Ne,We,Je,_e,He,$e,en,nn,tn,rn,on,cn,an,sn,ln,jn,un,bn,dn,hn,On,mn,fn,pn,xn,gn,vn,yn,wn,kn,Sn,An,Cn,Bn,Dn,Mn,Rn,En,Tn,Ln,Un,zn=function(){var e=Object(Z.useState)(null),n=Object(K.a)(e,2),t=n[0],r=n[1],o=Object(Z.useState)(""),c=Object(K.a)(o,2),i=c[0],a=c[1],s=Object(Z.useState)(""),l=Object(K.a)(s,2),j=l[0],u=l[1],b=Object(Z.useState)(""),d=Object(K.a)(b,2),h=d[0],O=d[1],m=Object(Z.useState)(!1),f=Object(K.a)(m,2),p=f[0],x=f[1];return Object(Z.useEffect)((function(){t&&console.log(t)}),[t]),Object(Z.useEffect)((function(){r(null),j&&(a(j),x(!0),H.a.get("https://yts.mx/api/v2/list_movies.json?genre=".concat(j,"&with_rt_ratings=true&limit=30&sort_by=").concat(h)).then((function(e){x(!1),r(e.data.data.movies)})).catch((function(e){console.error(e)})))}),[j,h]),Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)(je,{setMoviesList:r,setSearchValue:a,SetLoading:x}),Object(re.jsxs)(ue,{children:[Object(re.jsxs)(he,{children:[Object(re.jsxs)("div",{children:[Object(re.jsx)("h3",{children:"Select Type Sort"}),Object(re.jsxs)(de,{onChange:function(e){return O(e.target.value)},style:{width:"10vw"},children:[Object(re.jsx)("option",{value:"title",children:"title"}),Object(re.jsx)("option",{value:"year",children:"year"}),Object(re.jsx)("option",{selected:!0,value:"rating",children:"rating"}),Object(re.jsx)("option",{value:"peers",children:"peers"}),Object(re.jsx)("option",{value:"seeds",children:"seeds"}),Object(re.jsx)("option",{value:"download_count",children:"download_count"}),Object(re.jsx)("option",{value:"like_count",children:"like_count"}),Object(re.jsx)("option",{value:"date_added",children:"date_added"})]})]}),Object(re.jsxs)("div",{children:[Object(re.jsx)("h3",{children:"Select Movie Category"}),Object(re.jsxs)(de,{onChange:function(e){return u(e.target.value)},children:[Object(re.jsx)("option",{value:"comedy",children:"comedy"}),Object(re.jsx)("option",{value:"horror",children:"horror"}),Object(re.jsx)("option",{value:"animation",children:"animation"}),Object(re.jsx)("option",{value:"action",children:"action"}),Object(re.jsx)("option",{value:"romance",children:"romance"}),Object(re.jsx)("option",{value:"sci-fi",children:"sci-fi"}),Object(re.jsx)("option",{value:"mystery",children:"mystery"}),Object(re.jsx)("option",{value:"drama",children:"drama"}),Object(re.jsx)("option",{value:"crime",children:"crime"}),Object(re.jsx)("option",{value:"adventure",children:"adventure"}),Object(re.jsx)("option",{value:"fantasy",children:"fantasy"})]})]})]}),i?Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)(be,{children:i}),Object(re.jsx)(ze,{movieList:t})]}):Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)(Le,{filterSortBy:h,typeToList:"comedy"}),Object(re.jsx)(Le,{filterSortBy:h,typeToList:"horror"}),Object(re.jsx)(we,{filterSortBy:h,genery:"animation"}),Object(re.jsx)(we,{filterSortBy:h,genery:"fantasy"}),Object(re.jsx)(Le,{filterSortBy:h,typeToList:"mystery"})]}),p&&Object(re.jsx)(Oe.Circles,{stroke:"#000000"})]})]})},Fn=V.a.div(Fe||(Fe=Object(P.a)(["\n    color: white,\n"]))),qn=function(){var e=Object(Z.useState)(null),n=Object(K.a)(e,2),t=(n[0],n[1]),r=Object(Z.useState)(""),o=Object(K.a)(r,2),c=(o[0],o[1]);return Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)(je,{setMoviesList:t,setSearchValue:c}),Object(re.jsx)(Fn,{})]})},Zn=t(45),Qn=t(44),In=t.n(Qn),Yn=t(30),Gn=t.n(Yn),Xn=t(79),Kn=t.n(Xn),Pn=V.a.div(qe||(qe=Object(P.a)(["\n    overflow-y: auto;\n    position: absolute;\n    background: #2f323b;\n    display:flex;\n    flex-direction: column;\n    max-height: 10rem;\n    right: 25%;\n    padding: 20px;\n"]))),Vn=V.a.div(Ze||(Ze=Object(P.a)(["\n\n\n"]))),Nn=V.a.h3(Qe||(Qe=Object(P.a)(["\n    background: black;\n    border-radius: 12px;\n    padding:5px;\n    margin-block:.3rem;\n    :hover{\n        cursor: pointer;\n        background-color:#393D47;\n    }\n"]))),Wn=V.a.div(Ie||(Ie=Object(P.a)(["\n    display: flex;\n    margin-bottom: 1rem;\n"]))),Jn=V.a.div(Ye||(Ye=Object(P.a)(["\n    margin: 10px 10px 0px 10px;\n"]))),_n=V.a.button(Ge||(Ge=Object(P.a)(["\n    border-radius:60;\n    box-shadow: none;\n    background-color:purple;\n    color: white;\n    :hover{\n        cursor: pointer;\n    }\n"]))),Hn=V.a.h3(Xe||(Xe=Object(P.a)(["\n    align-self: center;\n"]))),$n=V.a.p(Ke||(Ke=Object(P.a)(["\n    position: absolute;\n    top:0;\n    right:10px;\n    :hover{\n        cursor: pointer;\n    }\n"]))),et=V.a.div(Pe||(Pe=Object(P.a)(["\n    position: absolute;\n    opacity: 0.1;\n    right:25%;\n    width: 64px;\n    height: 64px;\n    background-image:url(",");\n    :hover{\n        cursor: pointer;\n        opacity: 1;\n    }\n"])),"data:image/png;base64,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"),nt=function(e){var n=e.subtitles,t=e.reloadPlayer,r=e.subUrl,o=e.setSubUrl,c=e.setSelectedSub,i=window.require("electron").ipcRenderer,a=Object(Z.useState)(0),s=Object(K.a)(a,2),l=s[0],j=s[1],u=Object(Z.useState)(!0),b=Object(K.a)(u,2),d=b[0],h=b[1],O=function(e){var n=document.getElementById("subFile");j(l+e),n&&Array.from(n.textTracks).forEach((function(n){if("showing"===n.mode)return Array.from(n.cues).forEach((function(n){n.startTime+=e,n.endTime+=e})),!0}))};return Object(re.jsx)(re.Fragment,{children:d?Object(re.jsx)(re.Fragment,{children:Object(re.jsxs)(Pn,{children:[Object(re.jsx)($n,{onClick:function(){return h(!1)},children:"X"}),r?Object(re.jsxs)(re.Fragment,{children:[Object(re.jsxs)(Wn,{children:[Object(re.jsx)(Jn,{children:Object(re.jsx)(_n,{onClick:function(){return o(!1)},children:"Show sub"})}),Object(re.jsx)(Jn,{children:Object(re.jsx)(_n,{onClick:function(){return O(.5)},children:"Adiantar"})}),Object(re.jsx)(Jn,{children:Object(re.jsx)(_n,{onClick:function(){return O(-.5)},children:"Atrasar"})}),Object(re.jsx)(Jn,{children:Object(re.jsx)(_n,{onClick:function(){return t()},children:"Reload"})})]}),Object(re.jsxs)(Hn,{children:["offSet ",l]})]}):Object.keys(n).map((function(e){return Object(re.jsx)(Vn,{children:Object(re.jsx)(Nn,{onClick:function(){return r=n[e],i.invoke("selectSubtitle",r),c(r),void t();var r},children:n[e].lang})})}))]})}):Object(re.jsx)(et,{onClick:function(){return h(!0)}})})},tt=function(e){var n=e.movieUrl,t=e.subUrl,r=e.subtitles,o=e.reloadPlayer,c=e.playerReference,i=e.useGlobalSocket,a=e.setPlaying,s=e.playing,l=e.setSubUrl,j=e.roomObj,u=Object(Z.useState)({langcode:""}),b=Object(K.a)(u,2),d=b[0],h=b[1];return Object(Z.useEffect)((function(){console.log(d)}),[d]),Object(re.jsxs)(re.Fragment,{children:[n?Object(re.jsx)(Kn.a,{url:n,width:"75%",crossOrigin:"use-credentials",height:"100%",controls:!0,playing:s,preload:"false",ref:c,playsinline:!0,onPlay:function(){i&&j&&(a(!0),i.emit("playSend",c.current.getCurrentTime()))},onPause:function(){a(!1),i&&i.emit("pause")},config:{file:{attributes:{controlsList:"nodownload",crossOrigin:"true",style:{width:"100%",height:"100%",outline:"none"},id:"subFile"},tracks:[{kind:"subtitles",src:t,srcLang:d.langcode,default:!0}]}}}):Object(re.jsx)(Oe.Circles,{stroke:"#000000"}),r&&n&&Object(re.jsx)(nt,{setSubUrl:l,reloadPlayer:o,subUrl:t,subtitles:r,setSelectedSub:h})]})},rt=V.a.div(Ve||(Ve=Object(P.a)(["\n    height: 73vh;\n    width: 25%;\n    background: #2f323b;\n"]))),ot=V.a.div(Ne||(Ne=Object(P.a)(["\n    flex: auto;\n    padding: 20px;\n    ",";\n    ",";\n    background: #2f323b;\n    overflow: auto;\n"])),"min-height: calc(100% - 30px)","max-height: calc(100% - 30px)"),ct=V.a.div(We||(We=Object(P.a)(["\n\n    display: flex;\n"]))),it=V.a.div(Je||(Je=Object(P.a)(["\n    position: relative;\n    display: inline-block;\n    width: 100%;\n    margin: 0 0 10px 0;\n    padding: 0;\n\n"]))),at=V.a.div(_e||(_e=Object(P.a)(["\n    display: flex;\n    flex-direction: column;\n    background:",";    \n    padding: 10px 10px 0 10px;\n    border-radius: 0 6px 6px 0;\n    max-width: 80%;\n    width: auto;\n    float: ",";\n    box-shadow: 0 0 2px rgb(0 0 0 / 12%), 0 2px 4px rgb(0 0 0 / 24%);\n"])),(function(e){return e.myMsg?"#2671ff":"#5b5e6c"}),(function(e){return e.myMsg?"right":"left"})),st=V.a.p(He||(He=Object(P.a)(["\n    margin-top:8px;\n    display: inline-block;\n    font-size: 11pt;\n    line-height: 13pt;\n    margin: 0 0 4px 0;\n"]))),lt=V.a.input($e||($e=Object(P.a)(["\n    height: 30px;\n    padding: 0;\n    width: 99%;\n    background: #40434e;\n    color: white;\n    outline: none;\n    text-indent: 10px;\n"]))),jt=V.a.span(en||(en=Object(P.a)(["\n    color: rgba(0,0,0,.38);\n    font-size: 8pt;\n    margin-bottom: 10px;\n"]))),ut=V.a.span(nn||(nn=Object(P.a)(["\n    color: rgba(0,0,0,.38);\n    font-size: 8pt;\n"]))),bt=function(e){var n=e.userName,t=e.useGlobalSocket,r=e.roomName,o=Object(Z.useState)(null),c=Object(K.a)(o,2),i=c[0],a=c[1],s=Object(Z.useState)([{user:"Room",value:"Seja bem vindo",myMsg:!1}]),l=Object(K.a)(s,2),j=l[0],u=l[1];Object(Z.useEffect)((function(){t.on("chat-message",(function(e){var n=j;n.push(e),u(n)})),t.on("event-message",(function(e){var n=e.message;console.log("event-message"),console.log(n),b(n)}))}),[t]);var b=function(e){j.push({user:r,value:e,myMsg:!1})},d=function(){t.emit("sendMessage",{user:n,value:i,myMsg:!1},r)};return Object(re.jsxs)(rt,{children:[Object(re.jsx)(ot,{children:j.map((function(e,n){return Object(re.jsx)(it,{children:Object(re.jsxs)(at,{myMsg:e.myMsg,children:[Object(re.jsx)(ct,{children:Object(re.jsxs)(st,{children:[" ",e.value," "]})}),Object(re.jsxs)(jt,{children:[Object(re.jsx)(ut,{children:e.user}),Object(re.jsx)(ut,{children:"00:00"})]})]})},n)}))}),Object(re.jsx)(lt,{placeholder:"Esse filme \xe9 uma maravilha",value:i,onChange:function(e){return a(e.target.value)},onKeyDown:function(e){return"Enter"===e.key&&function(){if(""!=i){var e=j;e.push({user:n,value:i,myMsg:!0}),d(),u(e),a("")}}()}})]})},dt=V.a.div(tn||(tn=Object(P.a)(["\n    width: 100%;\n    text-align: center;\n    color:white;\n    \n"]))),ht=V.a.h1(rn||(rn=Object(P.a)(["\n    margin-left: 2rem;\n    font-size: 1rem;\n"]))),Ot=V.a.div(on||(on=Object(P.a)(["\n    width: 100%;\n    height: 5rem;\n    background-color: rgba(0,0,0,0.4);\n"]))),mt=V.a.div(cn||(cn=Object(P.a)(["\n    width:100%;\n"]))),ft=V.a.div(an||(an=Object(P.a)(["\n    display: flex;\n    flex-direction: row;\n    position: relative;\n"]))),pt=t(81),xt=function(e){var n=e.location,t=Object(Z.useState)(null),r=Object(K.a)(t,2),o=r[0],c=r[1],i=Object(Z.useState)(""),a=Object(K.a)(i,2),s=a[0],l=a[1],j=Object(Z.useState)(""),u=Object(K.a)(j,2),b=u[0],d=u[1],h=Object(Z.useState)(null),O=Object(K.a)(h,2),m=O[0],f=O[1],p=Object(Z.useState)(null),x=Object(K.a)(p,2),g=x[0],v=x[1],y=Object(Z.useState)(!1),w=Object(K.a)(y,2),k=w[0],S=w[1],A=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";var t=0>n?0:n,r=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,r)).toFixed(t))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][r]},C=Object(Z.useRef)(null),B=Object(Z.useState)(null),D=Object(K.a)(B,2),M=D[0],R=D[1],E=Object(Z.useState)(null),T=Object(K.a)(E,2),L=T[0],U=T[1],z=Object(Z.useState)(null),F=Object(K.a)(z,2),q=F[0],Q=F[1],I=Object(Z.useState)(null),Y=Object(K.a)(I,2),G=Y[0],X=Y[1],P=Object(Z.useState)(null),V=Object(K.a)(P,2),N=V[0],W=V[1],J=Object(Z.useState)(null),_=Object(K.a)(J,2),H=_[0],$=_[1],ee=window.require("electron").ipcRenderer,ne=function(){var e=Gn()("https://socket-stremio-6h5gx42wjq-uc.a.run.app");c(e),e.emit("enter",s,b,M,L)},te=Object(Z.useCallback)((function(e){console.log(e);var n=e[0];console.log("new File"),ee.invoke("selectMySub",n.path)}),[]),oe=Object(pt.a)({onDrop:te}).getRootProps;Object(Z.useEffect)((function(){var e=Gn()("http://127.0.0.1:8000");return In.a.setFontColor("white"),In.a.setFontSize(40),function(){e.disconnect()}}),[]),Object(Z.useEffect)((function(){b&&n.actualMovie.directConnect&&ne()}),[b]),Object(Z.useEffect)((function(){n.actualMovie&&(console.log(n),R(n.actualMovie.movie),U(n.actualMovie.torrent),n.actualMovie.directConnect&&(console.log(n.actualMovie.room.name),l(n.actualMovie.room.name),d(n.actualMovie.directConnect)))}),[n]),Object(Z.useEffect)((function(){L&&M&&ee.invoke("StartTorrent",{movieObject:M,myTorrent:L})}),[L,M]),ee.on("donwloadMovieUpdate",(function(e,n){n.totalSize>=1e6&&(X("http://localhost:8000/movie/".concat(n.movieUrl)),$(n))})),ee.on("setSubtiltes",(function(e,n){Q(n)}));return ee.on("setSubUrl",(function(e,n){W("http://localhost:8000/sub/".concat(n))})),Object(Z.useEffect)((function(){if(o)return o.on("userCreate",(function(e){var n=e.userId;console.log("userCreate"),console.log(n),f(n)})),o.on("roomCreatedEvent",(function(e){console.log("roomCreated"),v(e),console.log(e)})),o.on("enterRoom",(function(e){var n=e.movie;console.log("enterRoom"),console.log(n),R(n)})),o.on("pause",(function(){S(!1)})),o.on("play",(function(e){S(!0),C.current.seekTo(e)})),function(){o.disconnect()}}),[o]),Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)(je,{}),Object(re.jsxs)(dt,{children:[Object(re.jsxs)(Ot,{children:[Object(re.jsx)("input",{placeholder:"Room Name",value:s,onChange:function(e){return l(e.target.value)}}),Object(re.jsx)("input",{placeholder:"User Name",value:b,onChange:function(e){return d(e.target.value)}}),!m&&Object(re.jsx)("button",{onClick:ne,children:"Create Room or Enter Room"}),m&&Object(re.jsx)("button",{onClick:function(){o.disconnect(),c(null),f(null)},children:"Exit Rom"}),M&&Object(re.jsx)(ht,{children:M.title}),H&&Object(re.jsxs)(re.Fragment,{children:[Object(re.jsxs)("p",{children:["Baixado : ",A(H.percentDownload),"De : ",A(H.totalSize)]}),Object(re.jsxs)("p",{children:["DownloadSpeed: ",A(H.downloadSpeed)]})]})]}),Object(re.jsx)(mt,Object(Zn.a)(Object(Zn.a)({},oe()),{},{children:Object(re.jsxs)(ft,{children:[Object(re.jsx)(tt,{roomObj:g,movieUrl:G,setSubUrl:W,subUrl:N,subtitles:q,reloadPlayer:function(){var e=C.current.getCurrentTime();X(null),setTimeout((function(){X("http://localhost:8000/movie/".concat(H.movieUrl)),C.current.seekTo(e)}),2e3)},playerReference:C,useGlobalSocket:o,setPlaying:S,playing:k}),o&&Object(re.jsx)(bt,{userName:b,useGlobalSocket:o,roomName:s})]})}))]})]})},gt=V.a.div(sn||(sn=Object(P.a)(["\n    width: 100%;\n    color:white;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    \n"]))),vt=V.a.div(ln||(ln=Object(P.a)(["\n    display:flex;\n    width: 50%;\n    margin-top:1rem;\n    flex-direction: column;\n"]))),yt=V.a.div(jn||(jn=Object(P.a)(["\n    display:flex;\n    flex-direction: row;\n"]))),wt=V.a.div(un||(un=Object(P.a)(["\n    display:flex;\n    flex-direction: column;\n    width:80%;\n    justify-self: center;\n    position: relative;\n"]))),kt=V.a.div(bn||(bn=Object(P.a)(["\n    width: 12rem;\n    height: 12rem;\n    background-image: ",";\n    background-size: cover;\n    margin-top:.3rem;\n    \n"])),(function(e){return" url(".concat(e.url,")")})),St=V.a.h3(dn||(dn=Object(P.a)(["\n    \n    border-bottom: 1px solid white;\n\n"]))),At=V.a.h1(hn||(hn=Object(P.a)(["\n    justify-self: center;\n"]))),Ct=V.a.h3(On||(On=Object(P.a)(["\n\n"]))),Bt=V.a.button(mn||(mn=Object(P.a)(["\n    width:15rem;\n    align-self: center;\n    position: absolute;\n    bottom: 0;\n    border-radius:10px;\n    padding:0.5rem;\n    background-color:red;\n    border:0px;\n    transition: all 0.8s;\n    :hover{\n        cursor: pointer;\n        color:white;\n        padding:1rem;\n    }\n\n"]))),Dt=function(){var e=Object(Z.useState)([]),n=Object(K.a)(e,2),t=n[0],r=n[1],o=Object(Z.useState)(""),c=Object(K.a)(o,2),i=c[0],a=c[1],s=Object(Z.useState)(null),l=Object(K.a)(s,2),j=l[0],u=l[1],b=Object(X.f)();Object(Z.useEffect)((function(){var e=Gn()("https://socket-stremio-6h5gx42wjq-uc.a.run.app");u(e),e.emit("getAllRooms")}),[]),Object(Z.useEffect)((function(){j&&j.on("setRooms",(function(e){r(e)}))}),[j]),Object(Z.useEffect)((function(){console.log(t)}),[t]);return Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)(je,{}),Object(re.jsxs)(gt,{children:[Object(re.jsx)("input",{value:i,onChange:function(e){return a(e.target.value)},placeholder:"UserName"}),t.map((function(e){return Object(re.jsxs)(vt,{children:[Object(re.jsx)(St,{children:e.movie.title}),Object(re.jsxs)(yt,{children:[Object(re.jsx)(kt,{url:e.movie.medium_cover_image}),Object(re.jsxs)(wt,{children:[Object(re.jsx)(At,{children:e.name}),Object(re.jsxs)(Ct,{children:[e.users.length," User"]}),Object(re.jsx)(Bt,{onClick:function(){return function(e){""!=i&&$("player",{movie:e.movie,torrent:e.selectTorrent,directConnect:i,room:e},b)}(e)},children:"Entrar"})]})]})]})}))]})]})},Mt=Object(V.a)(Oe.Bars)(fn||(fn=Object(P.a)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n"]))),Rt=V.a.div(pn||(pn=Object(P.a)(["\n\n    display: flex;\n    height:100%;\n    flex-direction: column;\n\n"]))),Et=V.a.div(xn||(xn=Object(P.a)(["\n    width: 20%;\n    height:100%;\n    background-color: rgba(0,0,0,0.9);\n    position: relative;\n    color: white;\n    text-align:start ;\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n"]))),Tt=(V.a.div(gn||(gn=Object(P.a)(["\n\n"]))),V.a.div(vn||(vn=Object(P.a)(["\n    background-image: ",";\n    background-size: cover;\n    width:78vw;\n    height: 100%;\n    position: absolute;\n    right: 0;\n    z-index: -5;\n\n"])),(function(e){return" url(".concat(e.url,")")}))),Lt=V.a.h1(yn||(yn=Object(P.a)(["\n    margin-top: .5rem;\n    font-size: 1.8rem;\n    font-weight: bolder;\n\n"]))),Ut=(V.a.p(wn||(wn=Object(P.a)(["\n    font-size: 1rem;\n"]))),V.a.p(kn||(kn=Object(P.a)(["\n    margin-top: .8rem;\n\n"])))),zt=V.a.div(Sn||(Sn=Object(P.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    margin-top: 1rem;\n"]))),Ft=V.a.div(An||(An=Object(P.a)(["\n    background-color: white;\n    border-radius: 1rem;\n    text-align: center;\n    font-weight: bolder;\n    padding: 0 1rem 0 1rem;\n    color:#7D3DDB;\n    margin-right: 0.5rem;\n    margin-bottom:.5rem;\n    transition: .8s;\n    &:hover{\n        padding: 1rem 2rem 1rem 2rem;\n        background-color:#7D3DDB;\n        color:white;\n        font-size:20px;\n        cursor:default;\n    }\n\n"]))),qt=V.a.div(Cn||(Cn=Object(P.a)(["\n    display: flex;\n    flex-direction: row;\n    text-align: center;\n    margin-top: .5rem;\n    margin-right: 2rem;\n\n\n"]))),Zt=V.a.img(Bn||(Bn=Object(P.a)(["\n    width: 2rem;\n\n"]))),Qt=V.a.a(Dn||(Dn=Object(P.a)(["\n    font-size: .8rem;\n    font-weight: bolder;\n    max-width: 5rem;\n    align-self: center;\n    margin-left: 0.3rem;\n"]))),It=V.a.div(Mn||(Mn=Object(P.a)(["\n    display: flex;\n    width: 100%;\n    position: absolute;\n    flex-direction: row;\n    bottom: 2rem;\n\n    \n"]))),Yt=t.p+"static/media/FavIcon.9653a267.svg",Gt=t.p+"static/media/TrailerIcon.0dc1833c.svg",Xt=V.a.div(Rn||(Rn=Object(P.a)(["\n    display: flex;\n    position: absolute;\n    flex-wrap: wrap;\n    top:20%;\n    left:25%;\n"]))),Kt=V.a.div(En||(En=Object(P.a)(["\n    display: flex;\n    width: 20rem;\n    height: 5rem;\n    margin-right: 3rem;\n    background-color: white;\n    border: 5px;\n    border-radius: 60px;\n    text-align: center;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    animation: mymove 5s infinite;\n    transition: .8s;\n\n    *{\n        transition: .8s;\n    }\n\n    &:hover{\n        cursor: pointer;\n        width: 22rem;\n        height: 7rem;\n        background-color:black;\n        *{\n            color:white;\n            font-size:25px;\n        }\n    }\n"]))),Pt=V.a.h1(Tn||(Tn=Object(P.a)(["\n    color: black;\n    z-index: 50;\n"]))),Vt=V.a.h3(Ln||(Ln=Object(P.a)(["\n    color: black;\n\n"]))),Nt=V.a.h3(Un||(Un=Object(P.a)(["\n    color: black;\n\n"]))),Wt=function(e){var n=e.movie,t=n.torrents,r=Object(X.f)();return Object(re.jsx)(Xt,{children:t&&t.map((function(e){return Object(re.jsxs)(Kt,{onClick:function(){return $("player",{movie:n,torrent:e,directConnect:null},r)},children:[Object(re.jsx)(Pt,{}),Object(re.jsxs)(Vt,{children:["seeds : ",e.seeds]}),Object(re.jsx)(Nt,{children:e.quality})]})}))})};var Jt=function(e){var n=e.location,t=Object(Z.useState)(null),r=Object(K.a)(t,2),o=r[0],c=r[1],i=Object(Z.useState)(!0),a=Object(K.a)(i,2),s=a[0],l=a[1];return Object(Z.useEffect)((function(){n.actualMovie&&(H.a.get("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(n.actualMovie.id,"&with_images=true&with_cast=true")).then((function(e){console.log(e.data.data.movie),l(!1),c(e.data.data.movie)})).catch((function(e){console.error(e)})),console.log(n.actualMovie))}),[n]),Object(re.jsx)(re.Fragment,{children:Object(re.jsxs)(Rt,{children:[Object(re.jsx)(je,{}),s&&Object(re.jsx)(Mt,{}),o&&Object(re.jsxs)(re.Fragment,{children:[Object(re.jsxs)(Et,{children:[Object(re.jsx)(Lt,{children:o.title}),Object(re.jsx)(Ut,{children:o.description_intro.substring(0,800)+"..."}),Object(re.jsx)(zt,{children:o.genres.map((function(e){return Object(re.jsx)(Ft,{children:e},e)}))}),Object(re.jsxs)(It,{children:[Object(re.jsxs)(qt,{children:[Object(re.jsx)(Zt,{src:Yt}),Object(re.jsx)(Qt,{children:"ADICIONAR A MINHA LISTA"})]}),Object(re.jsxs)(qt,{children:[Object(re.jsx)(Zt,{src:Gt}),Object(re.jsx)(Qt,{children:"ASSISTIR AO TRAILER"})]})]})]}),Object(re.jsx)(Tt,{url:o.large_screenshot_image2}),Object(re.jsx)(Wt,{movie:o})]})]})})};var _t=function(){return Object(re.jsx)(G.a,{children:Object(re.jsxs)(X.c,{children:[Object(re.jsx)(X.a,{path:"/",component:zn,exact:!0}),Object(re.jsx)(X.a,{path:"/movie",component:qn}),Object(re.jsx)(X.a,{path:"/selectTorrent",component:Jt}),Object(re.jsx)(X.a,{path:"/player",component:xt}),Object(re.jsx)(X.a,{path:"/movies",component:qn}),Object(re.jsx)(X.a,{path:"/listRooms",component:Dt})]})})};Y.a.render(Object(re.jsx)(Q.a.StrictMode,{children:Object(re.jsx)(G.a,{children:Object(re.jsx)(_t,{})})}),document.getElementById("root"))}},[[171,1,2]]]);
//# sourceMappingURL=main.87acb252.chunk.js.map