/*! For license information please see bundle.js.LICENSE.txt */
  display: ${e=>e.$visible?"flex":"none"};
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
