/*! For license information please see bundle.js.LICENSE.txt */
  display: ${e=>e.$visible?"flex":"none"};
`,Vt=({height:e=80,width:t=80,color:r="#4fa94d",ariaLabel:i="circles-loading",wrapperStyle:o,wrapperClass:a,visible:s=!0})=>(0,n.jsx)(jt,{style:o,$visible:s,className:a,"aria-label":i,"data-testid":"circles-loading",...Yt,children:(0,n.jsxs)("svg",{width:t,height:e,viewBox:"0 0 135 135",xmlns:"http://www.w3.org/2000/svg",fill:r,"data-testid":"circles-svg",children:[(0,n.jsx)("title",{children:"circles-loading"}),(0,n.jsx)("desc",{children:"Animated representation of circles"}),(0,n.jsx)("path",{d:"M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z",children:(0,n.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 67 67",to:"-360 67 67",dur:"2.5s",repeatCount:"indefinite"})}),(0,n.jsx)("path",{d:"M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z",children:(0,n.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 67 67",to:"360 67 67",dur:"8s",repeatCount:"indefinite"})})]})}),Wt=242.776657104492,zt=qt`
12.5% {
  stroke-dasharray: ${33.98873199462888}px, ${Wt}px;
  stroke-dashoffset: -${26.70543228149412}px;
}
43.75% {
  stroke-dasharray: ${84.97182998657219}px, ${Wt}px;
  stroke-dashoffset: -${84.97182998657219}px;
}
100% {
  stroke-dasharray: ${2.42776657104492}px, ${Wt}px;
  stroke-dashoffset: -${240.34889053344708}px;
}
`,Xt=(Kt.path`
  stroke-dasharray: ${2.42776657104492}px, ${Wt};
  stroke-dashoffset: 0;
  animation: ${zt} ${1.6}s linear infinite;
`,qt`
to {
   transform: rotate(360deg);
 }
`),Zt=(Kt.svg`
  animation: ${Xt} 0.75s steps(12, end) infinite;
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
`,qt`
to {
   stroke-dashoffset: 136;
 }
`);Kt.polygon`
  stroke-dasharray: 17;
  animation: ${Zt} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`,Kt.svg`
  transform-origin: 50% 65%;