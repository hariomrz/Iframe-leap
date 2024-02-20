/*! For license information please see bundle.js.LICENSE.txt */
  display: ${e=>e.$visible?"flex":"none"};
`,Vt=242.776657104492,Wt=qt`
12.5% {
  stroke-dasharray: ${33.98873199462888}px, ${Vt}px;
  stroke-dashoffset: -${26.70543228149412}px;
}
43.75% {
  stroke-dasharray: ${84.97182998657219}px, ${Vt}px;
  stroke-dashoffset: -${84.97182998657219}px;
}
100% {
  stroke-dasharray: ${2.42776657104492}px, ${Vt}px;
  stroke-dashoffset: -${240.34889053344708}px;
}
`,zt=(Kt.path`
  stroke-dasharray: ${2.42776657104492}px, ${Vt};
  stroke-dashoffset: 0;
  animation: ${Wt} ${1.6}s linear infinite;
`,qt`
to {
   transform: rotate(360deg);
 }
`),Xt=(Kt.svg`
  animation: ${zt} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`,Kt.polyline`
  stroke-width: ${e=>e.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`,({height:e=80,width:t=80,strokeWidth:r=2,radius:i=1,color:o="#4fa94d",ariaLabel:a="tail-spin-loading",wrapperStyle:s,wrapperClass:A,visible:c=!0})=>{const d=parseInt(String(r)),u=d+36,l=d/2,g=l+parseInt(String(i))-1;return(0,n.jsx)(jt,{style:s,$visible:c,className:A,"data-testid":"tail-spin-loading","aria-label":a,...Yt,children:(0,n.jsxs)("svg",{width:t,height:e,viewBox:`0 0 ${u} ${u}`,xmlns:"http://www.w3.org/2000/svg","data-testid":"tail-spin-svg",children:[(0,n.jsx)("defs",{children:(0,n.jsxs)("linearGradient",{x1:"8.042%",y1:"0%",x2:"65.682%",y2:"23.865%",id:"a",children:[(0,n.jsx)("stop",{stopColor:o,stopOpacity:"0",offset:"0%"}),(0,n.jsx)("stop",{stopColor:o,stopOpacity:".631",offset:"63.146%"}),(0,n.jsx)("stop",{stopColor:o,offset:"100%"})]})}),(0,n.jsx)("g",{fill:"none",fillRule:"evenodd",children:(0,n.jsxs)("g",{transform:`translate(${l} ${l})`,children:[(0,n.jsx)("path",{d:"M36 18c0-9.94-8.06-18-18-18",id:"Oval-2",stroke:o,strokeWidth:r,children:(0,n.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})}),(0,n.jsx)("circle",{fill:"#fff",cx:"36",cy:"18",r:g,children:(0,n.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})})]})})]})})}),Zt=qt`
to {
   stroke-dashoffset: 136;
 }
`;Kt.polygon`
  stroke-dasharray: 17;
  animation: ${Zt} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`,Kt.svg`
  transform-origin: 50% 65%;