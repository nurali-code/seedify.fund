(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[88],{93555:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/igo/[project]",function(){return s(85376)}])},23205:function(e,t){"use strict";t.Z={src:"/_next/static/media/bnb.f1ac775d.svg",height:30,width:30}},36160:function(e,t){"use strict";t.Z={src:"/_next/static/media/usdt.fcb2e38d.svg",height:222,width:222}},31691:function(e,t,s){"use strict";var n=s(85893);s(67294);var i=s(55512),a=s.n(i),l=s(94184),o=s.n(l);let r=e=>{let{showOnlyRight:t=!1,showOnlyTop:s=!1}=e;return(0,n.jsx)("div",{className:o()(a().container,t?a().flip:null),children:s?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:a().Rect}),(0,n.jsx)("div",{className:a().Elip})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:a().RectL}),(0,n.jsx)("div",{className:a().ElipL}),(0,n.jsx)("div",{className:a().ElipR})]})})};t.Z=r},57861:function(e,t,s){"use strict";var n=s(85893),i=s(25675),a=s.n(i);s(67294);var l=s(68056),o=s.n(l),r=s(76976);let c=e=>{let{ratio:t=3}=e;return(0,n.jsxs)("div",{className:[o().show,o().container].join(" "),style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,n.jsxs)("div",{className:o().demo,style:{width:"".concat(350/t,"px"),height:"".concat(350/t,"px")},children:[(0,n.jsx)("div",{className:o().circle,children:(0,n.jsx)("div",{className:o().inner})}),(0,n.jsx)("div",{className:o().circle,children:(0,n.jsx)("div",{className:o().inner})}),(0,n.jsx)("div",{className:o().circle,children:(0,n.jsx)("div",{className:o().inner})}),(0,n.jsx)("div",{className:o().circle,children:(0,n.jsx)("div",{className:o().inner})}),(0,n.jsx)("div",{className:o().circle,children:(0,n.jsx)("div",{className:o().inner})})]}),(0,n.jsx)(a(),{className:o().logo,src:r.Z,width:234/t,height:234/t,quality:100,priority:!0,alt:"Loading"})]})};t.Z=c},79928:function(e,t,s){"use strict";var n=s(85893),i=s(67294),a=s(53459),l=s.n(a),o=s(51639),r=s(67550),c=s(49458),d=s(95840),_=s(43933),m=s(48228),p=s(56481),u=s(37811),h=s(90552),g=s(18715);let x=e=>{let{igoInfo:t,status:s,size:a="lg"}=e,x=(0,d.pm)(),{showModal:v}=(0,p.d)(),{wallet:y}=(0,i.useContext)(g.zM),{id:j,title:N}=t,{data:A,isLoading:b}=(0,h.y9)(y.address),C=b?"loading":null==A?void 0:A.kyc,f="approved"===C,w=(0,m.D)({mutationFn:_.TV,onSuccess(e){f&&x("Registration successful!",c.MR),T()},onError(){x("Failed to register",c.pn)}}),I=()=>{v(u.Zh,"Register IDO - ".concat(N),"medium",{id:j,kyc:C}),E||w.mutate({projectID:j,wallet:y.address})},{data:E,refetch:T,isLoading:S}=(0,_.vX)(j,y.address);return(0,n.jsx)("div",{className:"sm"===a?l().buttonContainerSm:l().buttonContainer,onClick(e){e.preventDefault(),e.stopPropagation()},children:y.address?(0,n.jsx)(o.Z,{onClick:I,label:E&&f?"Registered":"live"===s?"Register":"upcoming"===s?"Coming Soon":"Registration Ended",isLoading:S,disabled:"live"!==s,size:a,color:E&&f?"success":"active"}):(0,n.jsx)(r.Z,{size:"sm"===a?a:""})})};t.Z=x},85376:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSP:function(){return em},default:function(){return ep}});var n=s(85893),i=s(67294),a=s(43933),l=s(56481),o=s(96564),r=s.n(o),c=s(21834),d=s.n(c),_=s(25675),m=s.n(_),p=s(18715),u=s(96985),h=s.n(u),g=s(89932),x=s.n(g);let v=e=>{var t;let{startDate:s,endDate:a,type:l,hasReachedMaxCap:o=!1}=e,r="TBA"===s||"TBA"===a,[c,d]=(0,i.useState)(0),[_,m]=(0,i.useState)(0),[p,u]=(0,i.useState)(!1),[h,g]=(0,i.useState)(""),v=()=>{let e=new Date().getTime(),t=Number(s)-e,n=Number(a)-e;t>0?(d(Math.floor(t/1e3)),m(Math.floor(n/1e3)),g("Starts in"),u(!1),setTimeout(v,1e3)):n>0?(d(0),m(Math.floor(n/1e3)),g("Ends in"),u(!1),setTimeout(v,1e3)):(d(0),m(0),g(""),u(!0))};return((0,i.useEffect)(()=>{r||o||v()},[s,a,r,o]),r)?(0,n.jsxs)("div",{className:"home"===l?x().home:x().detail,children:[(0,n.jsx)("span",{children:h}),(0,n.jsx)("span",{children:"TBA"})]}):o||p?(0,n.jsx)("div",{className:"home"===l?x().homeHasEnded:x().detail,children:"Ended"}):(0,n.jsxs)("div",{className:"home"===l?x().home:x().detail,children:[(0,n.jsx)("span",{children:h}),(0,n.jsx)("span",{children:(t=c>0?c:_,"".concat(Math.floor(t/86400).toString().padStart(2,"0"),":").concat(Math.floor(t%86400/3600).toString().padStart(2,"0"),":").concat(Math.floor(t%3600/60).toString().padStart(2,"0"),":").concat((t%60).toString().padStart(2,"0")))})]})};var y=s(57114),j=s(77294),N=s(35553),A=s(66762),b=s(32508);let C=e=>{let{totalSupply:t,participants:s,cryptoType:i,progress:a,allocation:l}=e;return(0,n.jsxs)("div",{className:h().progressWrapper,children:[(0,n.jsxs)("div",{className:h().progressStatus,children:[(0,n.jsxs)("span",{className:h().progressNumbers,children:[(0,n.jsx)(b.Z,{disableExtraDecimalsIndicator:!0,disableTooltip:!0,children:l}),"/",(0,n.jsx)(b.Z,{disableExtraDecimalsIndicator:!0,disableTooltip:!0,children:t}),i]}),(0,n.jsxs)("div",{className:h().progressPercentage,children:["Progress",(0,n.jsx)(b.Z,{disableExtraDecimalsIndicator:!0,percentage:!0,disableTooltip:!0,children:a})]})]}),(0,n.jsx)("div",{className:h().progressBar,children:(0,n.jsx)("div",{className:h().progress,style:{width:"calc(".concat((a?a<=.2?.2:a>99&&a<100?99:a:0)/100," * 100%)")}})}),(0,n.jsxs)("div",{className:h().participants,children:[(0,n.jsx)("span",{children:"LIMITED"}),(0,n.jsxs)("span",{children:["PARTICIPANTS: ",s||"--"]})]})]})};var f=s(30707),w=s(95840),I=s(38202),E=s(51639),T=s(9473),S=s(47312),k=s(10707),R=s(23205),M=s(36160);let Z=e=>{let{projectID:t,pool:s}=e,o=(0,w.pm)(),r=(0,T.I0)(),{wallet:c,chainId:d,connectionType:_,connectionProvider:u}=(0,i.useContext)(p.zM),{isApproving:g,handleApprove:x,isBuying:Z,handleBuy:D}=(0,i.useContext)(S.Xw),[B,L]=(0,i.useState)(0),[P,O]=(0,i.useState)(0),[W,F]=(0,i.useState)(!1),[U,H]=(0,i.useState)(0),[V,X]=(0,i.useState)(new Date>new Date(s.end_date)),{data:G,isLoading:K}=(0,a.LE)(t,c.address),{showModal:z}=(0,l.d)(),Y=(0,i.useMemo)(()=>!!c.address&&(d!==k.cc.chainId||_===p.Qz.PHANTOM),[d,_,c]),{poolType:q,contract:J}=(0,i.useMemo)(()=>({poolType:null==s?void 0:s.crypto_type,contract:null==s?void 0:s.address}),[s]),Q=!!c.address,$=(0,i.useMemo)(()=>(null==G?void 0:G.status)&&(null==G?void 0:G.tier),[G]),{allowance:ee,isNotApproved:et}=(0,T.v9)(e=>e.approval.busd),es=(0,i.useCallback)(async()=>{let e=new y.Q(u),t=new j.CH(J,A,e);try{let s=await t.maxCap(),n=parseFloat(N.dF(s)),i=await t.totalBUSDReceivedInAllTier(),a=parseFloat(N.dF(i));L(a),O(a/n*100),a>=n&&F(!0)}catch(l){console.log("Error white getting IDO Total Raised",l)}},[J,u]),en=(0,i.useCallback)(async()=>{if(!c.address||!J)return;let e=new y.Q(u),t=e.getSigner(),s=new j.CH(J,A,t);try{let n=await s.userDetails(c.address),i=parseFloat(N.dF(n.investedAmount));H((null==G?void 0:G.maxAllocation)-i)}catch(a){console.log("Error while getting IDO user investment",a)}},[J,c.address,u,null==G?void 0:G.maxAllocation]);(0,i.useEffect)(()=>{!Q||(null==J?void 0:J.includes("TBA"))||r((0,f.$F)({walletAddress:c.address,contractAddress:s.address,token:s.crypto_type,connectionProvider:u})),es(),en()},[s.address,c.address,d,g,Z,s.crypto_type,Q,en,es,r,u,J]),(0,i.useEffect)(()=>{let e=new Date,t=new Date(s.end_date);e>t&&X(!0)},[s.end_date]);let ei=()=>{z("buy_igo_modal","Buy IDO Tokens","medium",{token:s.crypto_type,handleCall(e){D(e,J,null==G?void 0:G.tier,null==G?void 0:G.proof,null==G?void 0:G.minAllocation)},max:U})},ea=(0,i.useMemo)(()=>(null==s?void 0:s.total_supply)*(null==s?void 0:s.up_pool_raise),[null==s?void 0:s.total_supply,null==s?void 0:s.up_pool_raise]);return(0,n.jsxs)("div",{className:h().contentContainer,children:[(0,n.jsxs)("div",{className:h().raisedContainer,children:[(0,n.jsxs)("div",{className:h().totalRaised,children:[(0,n.jsx)("span",{className:h().titkeRaised,children:"TOTAL RAISED"}),(0,n.jsxs)("div",{className:h().raisedContent,children:[(0,n.jsx)(m(),{src:"USDT"===s.crypto_type?M.Z:R.Z,width:23,height:23,alt:s.crypto_type}),(0,n.jsxs)("span",{className:h().amountBNB,children:[(0,n.jsx)(b.Z,{disableExtraDecimalsIndicator:!0,isLoading:0===B,children:B}),q]})]})]}),(0,n.jsxs)("div",{className:h().price,children:[(0,n.jsx)("span",{children:(null==s?void 0:s.up_pool_raise)||"--"}),(0,n.jsx)("span",{children:null==s?void 0:s.crypto_type})]})]}),(0,n.jsxs)("div",{className:h().progressContainer,children:[(0,n.jsx)(C,{totalSupply:ea,participants:null==s?void 0:s.participants,cryptoType:null==s?void 0:s.crypto_type,progress:P,allocation:B}),(0,n.jsxs)("div",{className:h().allocationRow,children:[(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{children:["Total Allocation:"," ",K?"--":(null==G?void 0:G.maxAllocation)||"0"]}),(0,n.jsxs)("div",{children:["Remaining Allocation:"," ",K?"--":U||"0"]})]}),et?null:(0,n.jsxs)("div",{className:h().allowance,children:["Allowance:",(0,n.jsx)(b.Z,{bigDecimals:!0,isLoading:"loading"===et||"pending"===g,children:ee}),(0,n.jsx)("button",{disabled:!U,className:h().label__button,onClick(){x(s.crypto_type,J,U)},children:"(Edit)"})]})]}),(0,n.jsxs)("div",{className:h().actions,children:[(()=>{if(!V)return c.address?Y?(0,n.jsx)(E.Z,{className:h().btn,label:"Approve",size:"sm",disabled:!0}):et?(0,n.jsx)(E.Z,{className:h().btn,label:"Approve",size:"sm",isLoading:"pending"===g,disabled:!$||W,onClick(){(null==G?void 0:G.tier)>0?x(s.crypto_type,J,U):o("You are not whitelisted for this IDO","error")}}):(0,n.jsx)(E.Z,{className:h().btn,label:"Buy Token",size:"sm",isLoading:"pending"===Z,disabled:"pending"===Z||!$||W,onClick:ei}):(0,n.jsx)(I.Z,{className:h().connectWalletButton,children:"Connect"})})(),(0,n.jsx)(v,{type:"detail",hasReachedMaxCap:W,startDate:s.start_date,endDate:s.end_date})]}),Y&&(0,n.jsx)("p",{className:h().notice,children:"NOTICE: Data on this page is outdated, please switch to Binance Network."})]})]})},D=[{image:{src:"/_next/static/media/website.c4b1d8c7.svg",height:20,width:20},name:"browser_web_link",width:18.53,height:18.53},{image:{src:"/_next/static/media/twitter.c91f411e.svg",height:18,width:22},name:"twitter_link",width:21.04,height:17.1},{image:{src:"/_next/static/media/discord.a2d59adf.svg",height:18,width:24},name:"discord",width:22.5,height:16.88},{image:{src:"/_next/static/media/telegram.098c628b.svg",height:19,width:23},name:"telegram_link",width:22,height:18.33},{image:{src:"/_next/static/media/instagram.603100ef.svg",height:20,width:20},name:"instagram",width:18.75,height:18.75},{image:{src:"/_next/static/media/medium.70021f88.svg",height:16,width:21},name:"medium_link",width:18.75,height:18.75}];var B={src:"/_next/static/media/placeholder.a643c020.png",height:549,width:1440,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAJFBMVEVCDEZrFV9EHke/n6UuFjpYQllUEUwdCy5lIFZHMk9ZGVGGYnrEu5HSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIElEQVR4nAXBhQEAAAjAoNn1/78CPnFmUZS3ai8kApI8BrsAZ2p+B9EAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3},L=s(57861),P=s(34117),O=s(69599),W=s(94184),F=s.n(W),U=s(10415),H=s(79928),V=s(6524),X=s.n(V);let G=e=>{let{id:t,register_start_date:s,register_end_date:a,up_pool_access:l,title:o}=e,r=Date.now(),c=(0,i.useMemo)(()=>"number"!=typeof s?s:(0,P.Z)((0,O.Z)(new Date(s),"UTC"),"d MMM yyyy, ha 'UTC'"),[s]),d=(0,i.useMemo)(()=>"number"!=typeof a?a:(0,P.Z)((0,O.Z)(new Date(a),"UTC"),"d MMM yyyy, ha 'UTC'"),[a]),_=s>r||"TBA"===d?"upcoming":r>=s&&a>r?"live":"ended",{days:m,hours:p,minutes:u,seconds:h}=(0,U.Z)("upcoming"===_?s:a);return(0,n.jsx)("div",{className:X().container,children:(0,n.jsxs)("div",{className:X().smallInfoContainer,children:[(0,n.jsx)("div",{className:X().leftInfoContainer,children:(0,n.jsxs)("div",{className:X().subInfoContainer,children:["live"===_?"REGISTRATION ENDS IN":"upcoming"===_?"REGISTRATION STARTS IN":"REGISTRATION ENDED",(0,n.jsxs)("span",{children:[(0,n.jsx)("span",{className:X().smallRegisterPeriod,children:"upcoming"===_?c:d}),(0,n.jsxs)("div",{className:F()(X().smallCountdownContainer),children:[(0,n.jsxs)("div",{className:F()(X().timeContainer),children:["ended"===_||"TBA"===d?"-":m,(0,n.jsx)("span",{className:X().timeChar,children:m>1?"Days":"Day"})]}),(0,n.jsxs)("div",{className:X().timeContainer,children:["ended"===_||"TBA"===d?"-":p,(0,n.jsx)("span",{className:X().timeChar,children:"Hours"})]}),(0,n.jsxs)("div",{className:X().timeContainer,children:["ended"===_||"TBA"===d?"-":u,(0,n.jsx)("span",{className:X().timeChar,children:"Minutes"})]}),(0,n.jsxs)("div",{className:X().timeContainer,children:["ended"===_||"TBA"===d?"-":h,(0,n.jsx)("span",{className:X().timeChar,children:"Seconds"})]})]})]})]})}),(0,n.jsx)(H.Z,{igoInfo:{id:t,igoType:l,title:o},status:_,size:"sm"})]})})},K=e=>{let{pool:t,token:s,isLoading:a,projectID:l}=e;return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:d().content,children:[(null==t?void 0:t.headerimage)?(0,n.jsx)("img",{className:d().mainImage,src:t.headerimage,alt:"Header",height:500}):(0,n.jsx)(m(),{draggable:!1,className:d().mainImage,src:B,alt:"",priority:!0,quality:100,width:1440,height:831}),(0,n.jsx)("div",{className:d().cover})]}),(0,n.jsx)("div",{className:d().subcontentContainer,children:a?(0,n.jsx)(L.Z,{ratio:2}):(0,n.jsxs)(i.Fragment,{children:[(0,n.jsxs)("div",{className:d().descriptionContainer,children:[(0,n.jsxs)("div",{className:d().name,children:[" ",null==t?void 0:t.title," "]}),(0,n.jsx)("div",{className:d().description,children:null==t?void 0:t.content}),(0,n.jsx)("div",{className:d().socials,children:t&&D.map((e,s)=>{let i=t[e.name];return i.length>0?(0,n.jsx)("a",{rel:"noopener noreferrer",target:"_blank",draggable:!1,href:i,className:d().socialBox,children:(0,n.jsx)(m(),{draggable:!1,src:e.image,alt:e.name,width:e.width,height:e.height})},s):null})})]}),(0,n.jsxs)("div",{className:d().rightContainer,children:[(0,n.jsx)(Z,{projectID:l,pool:t,token:s}),(null==t?void 0:t.pool_type)==="upcomming"?(0,n.jsx)(G,{id:l,register_start_date:null==t?void 0:t.register_start_date,register_end_date:null==t?void 0:t.register_end_date,up_pool_access:null==t?void 0:t.up_pool_access,title:null==t?void 0:t.title}):null]})]})})]})};var z=s(61161),Y=s(14759),q=s.n(Y),J={src:"/_next/static/media/supply.6c22d5f6.png",height:29,width:26,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAM1BMVEVMaXH////////////////////////////////////////////////////////////////x7/yuAAAAEHRSTlMAUHaG4AxZP9Fmk6Yqva7sqeH21QAAAAlwSFlzAAALEwAACxMBAJqcGAAAADhJREFUeJwVxUcSwDAIALE1mOaS8P/XZqKLgKFlcOR66GBuc5Eke9bVIrvfCP9PbHF2z7ECiKfgAy2lAYgDU83SAAAAAElFTkSuQmCC",blurWidth:7,blurHeight:8},Q={src:"/_next/static/media/lock.040d1889.svg",height:13,width:10};let $=e=>{let{title:t,image:s,amount:i}=e;return(0,n.jsxs)("div",{className:q().tokenInformationBarContainer,children:[(0,n.jsx)("div",{className:q().title,children:t}),(0,n.jsxs)("div",{className:q().data,children:[s?(0,n.jsx)(m(),{src:s,alt:""}):(0,n.jsx)(n.Fragment,{}),i]})]})},ee=e=>{let{title:t,value:s}=e;return(0,n.jsxs)("div",{className:q().poolInformationBarContainer,children:[(0,n.jsx)("div",{className:q().title,children:t}),(0,n.jsx)("div",{className:F()("ACCESS TYPE"!==t?q().data:q().acessType),children:s})]})},et=e=>{let{token:t,pool:s}=e;return(0,n.jsxs)("div",{className:q().projectInformationContainer,children:[(0,n.jsxs)("div",{className:q().informationWrapper,children:[(0,n.jsx)("h1",{className:q().informationWrapper__title,children:"Token Information"}),(0,n.jsxs)("div",{className:q().tokenInformationContainer,children:[(0,n.jsx)($,{title:"TOKEN TICKER",amount:(null==t?void 0:t.symbol)||"--"}),(0,n.jsx)($,{title:"TOKENS FOR SALE",image:J,amount:(0,n.jsx)(b.Z,{disableExtraDecimalsIndicator:!0,disableTooltip:!0,isLoading:!(null==t?void 0:t.total_supply),children:null==t?void 0:t.total_supply})}),(0,n.jsx)($,{title:"NETWORK",amount:(null==t?void 0:t.network_type)||"--"}),(0,n.jsx)($,{title:"TOKEN ADDRESS",amount:(null==t?void 0:t.token_address)?(0,z.T)(null==t?void 0:t.token_address):"TBA"}),(0,n.jsx)($,{title:"DECIMALS",amount:(null==t?void 0:t.decimal)||"--"})]})]}),(0,n.jsxs)("div",{className:q().informationWrapper,children:[(0,n.jsx)("h1",{className:q().informationWrapper__title,children:"Pool Information"}),(0,n.jsxs)("div",{className:q().poolInformationContainer,children:[(0,n.jsx)(ee,{title:"TOKEN DISTRIBUTION",value:(null==s?void 0:s.distribute_token)||"--"}),(0,n.jsx)(ee,{title:"MIN. ALLOCATION",value:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b.Z,{children:null==s?void 0:s.min_allocation}),null==s?void 0:s.crypto_type]})}),(0,n.jsx)(ee,{title:"MAX. ALLOCATION",value:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b.Z,{children:null==s?void 0:s.max_allocation}),null==s?void 0:s.crypto_type]})}),(0,n.jsx)(ee,{title:"MIN SWAP LEVEL",value:(0,n.jsx)(b.Z,{disableExtraDecimalsIndicator:!0,disableTooltip:!0,isLoading:!(null==s?void 0:s.min_swap_level),children:null==s?void 0:s.min_swap_level})}),(0,n.jsx)(ee,{title:"ACCESS TYPE",value:(0,n.jsxs)("div",{className:q().access_type,children:[(0,n.jsx)("span",{children:(null==s?void 0:s.access_type)||"--"}),(0,n.jsx)(m(),{src:Q,alt:"lock"})]})})]})]})]})};var es=s(31691),en=s(55223),ei=s.n(en);let ea=()=>(0,n.jsx)("div",{className:ei().incubation,children:(0,n.jsxs)("div",{className:ei().container,children:[(0,n.jsx)("h1",{className:ei().incubation__title,children:"Bringing you the best Web3 games"}),(0,n.jsx)("p",{className:ei().incubation__subtext,children:"We have an exciting range of projects in our roster, waiting to be discovered."}),(0,n.jsx)("button",{className:ei().incubation__btn,children:"More soon..."}),(0,n.jsx)("div",{className:ei().incubation__metrics__overlay,children:(0,n.jsxs)("div",{className:ei().incubation__metrics,children:[(0,n.jsxs)("div",{className:ei().incubation__box,children:[(0,n.jsx)("span",{children:"17"}),(0,n.jsx)("p",{children:"Projects in Incubation"})]}),(0,n.jsxs)("div",{className:ei().incubation__box,children:[(0,n.jsx)("span",{children:"50+"}),(0,n.jsx)("p",{children:"PROJECTS LAUNCHED"})]}),(0,n.jsxs)("div",{className:ei().incubation__box,children:[(0,n.jsx)("span",{children:"32x"}),(0,n.jsx)("p",{children:"ATH ROI"})]})]})})]})});var el={src:"/_next/static/media/questionIcon.929bb4d4.svg",height:127,width:71},eo=s(25219),er=s.n(eo);let ec=()=>(0,n.jsx)("div",{className:er().sectionWrapper,children:(0,n.jsxs)("div",{className:er().container,children:[(0,n.jsx)(es.Z,{showOnlyRight:!0}),(0,n.jsx)(m(),{src:el,alt:"Question mark",width:70,height:127}),(0,n.jsx)("p",{className:er().gettingTokens__text,children:"Did you know that $SFUND stakers and farmers get tokens from all our incubated projects?"}),(0,n.jsx)("button",{className:er().gettingTokens__btn,children:"More soon..."})]})});var ed=s(37811);let e_=e=>{var t;let{projectID:s}=e,{data:o,isLoading:c}=(0,a.Kl)(s),{showModal:d}=(0,l.d)();return(0,i.useEffect)(()=>{var e;(null==o?void 0:null===(e=o.pool)||void 0===e?void 0:e.network_type)==="SEI"&&d(ed.yA,"Include Sei Wallet","medium")},[null==o?void 0:null===(t=o.pool)||void 0===t?void 0:t.network_type]),(0,n.jsxs)("div",{className:r().details_igo_wrapper,children:[(0,n.jsx)(K,{pool:null==o?void 0:o.pool,token:null==o?void 0:o.token,isLoading:c,projectID:s}),(0,n.jsxs)("div",{className:r().backgroundContainerWrapper,children:[(0,n.jsx)(es.Z,{}),(0,n.jsx)(et,{pool:null==o?void 0:o.pool,token:null==o?void 0:o.token}),(0,n.jsx)(es.Z,{showOnlyRight:!0})]}),(0,n.jsx)(ea,{}),(0,n.jsx)(ec,{})]})};var em=!0,ep=e_},43933:function(e,t,s){"use strict";s.d(t,{Ep:function(){return r},Kl:function(){return m},LE:function(){return c},TV:function(){return _},eS:function(){return l},k5:function(){return o},vX:function(){return d}});var n=s(67848),i=s(23731),a=s(74253);let l=()=>(0,n.a)(["completed-pools"],async()=>{let e=new URLSearchParams;e.append("poolType","completed");let{data:t}=await a.Z.get("/pools",{params:e});return t},{retry:!1}),o=()=>(0,n.a)(["upcoming-pools"],async()=>{let e=new URLSearchParams;e.append("poolType","upcoming");let{data:t}=await a.Z.get("/pools",{params:e});return t},{retry:!1}),r=()=>(0,n.a)(["featured-pools"],async()=>{let e=new URLSearchParams;e.append("poolType","featured");let{data:t}=await a.Z.get("/pools",{params:e});return t},{retry:!1}),c=(e,t)=>(0,n.a)([e,t,"igo-merkle-proof"],async()=>{let{data:s}=await i.Z.get("/getMerkleProof?id=".concat(e,"&wallet=").concat(t));return s},{retry:!1,enabled:Boolean(t)}),d=(e,t)=>(0,n.a)(["interest",e,t],async()=>{let{data:s}=await a.Z.get("igo/".concat(e,"/interest/user/").concat(t));return null==s?void 0:s.isInterested},{retry:!1,enabled:Boolean(t)}),_=e=>{let{projectID:t,wallet:s}=e;return a.Z.post("/igo/".concat(t,"/interest/user/").concat(s))},m=e=>(0,n.a)(["pool-info",e],async()=>{let{data:t}=await a.Z.get("/pools/".concat(e));return t},{retry:!1})},55512:function(e){e.exports={container:"style_container__X4yvb",flip:"style_flip__YWC1B",RectL:"style_RectL__Mt0Lr",ElipL:"style_ElipL__BdFo3",ElipR:"style_ElipR__nPQvu",Rect:"style_Rect__m7Jn9",Elip:"style_Elip__3GtRc"}},89932:function(e){e.exports={detail:"style_detail__3vkcs",home:"style_home__W6caX",homeHasEnded:"style_homeHasEnded__wuycy"}},25219:function(e){e.exports={sectionWrapper:"style_sectionWrapper__spVVq",container:"style_container__PQngY",gettingTokens__text:"style_gettingTokens__text__GI6IY",gettingTokens__btn:"style_gettingTokens__btn__29OH9"}},55223:function(e){e.exports={incubation:"style_incubation__JXqtY",container:"style_container__uzfqy",incubation__title:"style_incubation__title__F0c91",incubation__subtext:"style_incubation__subtext__JJh16",incubation__btn:"style_incubation__btn__qm5Oo",incubation__metrics__overlay:"style_incubation__metrics__overlay__QHzUX",incubation__metrics:"style_incubation__metrics__N_fHp",incubation__box:"style_incubation__box___kZ80"}},96985:function(e){e.exports={contentContainer:"style_contentContainer__cXasA",raisedContainer:"style_raisedContainer__50_o_",totalRaised:"style_totalRaised__7LKvk",titkeRaised:"style_titkeRaised__u4ZdG",raisedContent:"style_raisedContent__Grt9W",amountBNB:"style_amountBNB__V1sYP",status:"style_status__45zrK",price:"style_price__pWz_g",progressContainer:"style_progressContainer__bHPzO",progressWrapper:"style_progressWrapper__Mh8hY",progressStatus:"style_progressStatus__ECGMc",progressNumbers:"style_progressNumbers__bNIwN",progressPercentage:"style_progressPercentage__dH3uW",progressBar:"style_progressBar__9xgZw",progress:"style_progress__W02JK",participants:"style_participants__30392",actions:"style_actions__7XbEs",container:"style_container__hQpSN",connectWalletButton:"style_connectWalletButton__Asdi_",btn:"style_btn__un_iT",notice:"style_notice__X9RJZ",dateWrapper:"style_dateWrapper__O771f",allocationRow:"style_allocationRow__20SMw",allowance:"style_allowance__zHHap",label__button:"style_label__button__Ut4Hk"}},21834:function(e){e.exports={container:"style_container__P3yTj",rightContainer:"style_rightContainer__CMIvo",content:"style_content__SgVuq",mainImage:"style_mainImage__ShxxT",cover:"style_cover__PCFmc",subcontentContainer:"style_subcontentContainer__PZ99d",descriptionContainer:"style_descriptionContainer__RS5om",name:"style_name__sDAN_",description:"style_description__dDiy6",socials:"style_socials__CfB_0",socialBox:"style_socialBox__xi3_J",loader:"style_loader__r7Gch"}},14759:function(e){e.exports={projectInformationContainer:"style_projectInformationContainer__MdMRs",informationWrapper:"style_informationWrapper__xwCLg",informationWrapper__title:"style_informationWrapper__title__1gGE7",tokenInformationContainer:"style_tokenInformationContainer__3NM9d",poolInformationContainer:"style_poolInformationContainer___L2dC",tokenInformationBarContainer:"style_tokenInformationBarContainer__CS5vV",title:"style_title__G5XfR",data:"style_data__lERaJ",poolInformationBarContainer:"style_poolInformationBarContainer__XGFbk",acessType:"style_acessType__GdiMn"}},6524:function(e){e.exports={container:"style_container__lNfG9",smallInfoContainer:"style_smallInfoContainer__Gxrar",targetedContainer:"style_targetedContainer__9Pemb",subInfoContainer:"style_subInfoContainer__XvTxf",smallRegisterPeriod:"style_smallRegisterPeriod__XLOGK",largeInfoMinMaxValue:"style_largeInfoMinMaxValue__iWPR3",smallInfoMinMaxValue:"style_smallInfoMinMaxValue__ZXOMb",raise:"style_raise__yxYne",largeCountdownContainer:"style_largeCountdownContainer__VlDNb",timeChar:"style_timeChar__kPZXs",smallCountdownContainer:"style_smallCountdownContainer__mkFUf",timeContainer:"style_timeContainer__DVCHB"}},68056:function(e){e.exports={logo:"style_logo__g1ktW",shine:"style_shine__YV3dh",container:"style_container__VB9kv",show:"style_show___ePKj",demo:"style_demo__5Ai74",circle:"style_circle__lYN5I",inner:"style_inner__Wgyf7",spin:"style_spin__BUU5w"}},53459:function(e){e.exports={buttonContainer:"style_buttonContainer__9HHN2",buttonContainerSm:"style_buttonContainerSm__6ZV25"}},96564:function(e){e.exports={container:"igo_container__IaoM_",backgroundContainerWrapper:"igo_backgroundContainerWrapper__iyPRN",details_igo_wrapper:"igo_details_igo_wrapper__z_aUX",loader:"igo_loader__Uo1ko",poolsContainer:"igo_poolsContainer__sOqtv",poolsFilter:"igo_poolsFilter__FNtK1",poolTitleAndNetwork:"igo_poolTitleAndNetwork__lomIc",choosePool:"igo_choosePool__Y_3Ez",igoStatus:"igo_igoStatus__d87Ti",selectedIgoStatus:"igo_selectedIgoStatus__eTV2x",choosenLine:"igo_choosenLine__s16_M"}}},function(e){e.O(0,[599,117,774,888,179],function(){return e(e.s=93555)}),_N_E=e.O()}]);