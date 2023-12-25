import{j as e,d as h,a as u,y as p}from"./app-15cd4be6.js";import{A as j}from"./AppLayout-17dcee34.js";import{a as c,I as v}from"./IconRefresh-12d0b1d9.js";import"./ApplicationLogo-07c0ff6b.js";import"./ResponsiveNavLink-ab299648.js";import"./transition-fd6182aa.js";function f({pagination:a}){return e.jsxs("div",{className:"flex justify-between mt-2 items-center",children:[e.jsxs("div",{className:"flex-1 text-xs",children:[a.total," data"]}),e.jsx("div",{className:"flex my-1",children:a.links.map((s,l)=>s.url?e.jsx(h,{href:s.url,className:"px-3 py-2 font-semibold text-sm border rounded mx-0.5 hover:bg-purple-200 "+(s.active?"bg-purple-100":"bg-white"),dangerouslySetInnerHTML:{__html:s.label}},l):e.jsx("div",{className:"px-3 py-2 font-semibold text-sm border rounded mx-0.5 cursor-not-allowed",dangerouslySetInnerHTML:{__html:s.label}},l))})]})}function b({data:a,pagination:s,column:l,className:d,onClickRow:t=void 0,markKey:i}){return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-full overflow-x-auto",children:e.jsxs("table",{className:c("app-table app-table-striped w-full",t!==void 0?"app-table-hover":"",d||""),children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"No."}),l.map((n,r)=>e.jsx("th",{children:n.header},"header-"+r))]})}),e.jsx("tbody",{children:a.map((n,r)=>e.jsxs("tr",{className:c(t!==void 0?"cursor-pointer":"",i&&n[i]==!1?"danger":""),onClick:()=>t?t(n):null,children:[e.jsx("td",{children:s?s.from+r:r}),l.map((o,m)=>{const x=typeof o.value=="function"?o.value(n,r):n[o.value];return e.jsx("td",{className:"text-right",children:x},"cell-"+r+"-"+m)})]},"row-"+r))})]})}),s?e.jsx(f,{pagination:s}):null]})}const N=[{header:"Tanggal",value:"date"},{header:"Kasir",value:"operator_name"},{header:"Jumlah Tiket",value:a=>{var s;return((s=a==null?void 0:a.total_ticket)==null?void 0:s.all)??"0"}},{header:"Dewasa",value:a=>(a==null?void 0:a.total_ticket[1])??"0"},{header:"Anak-anak",value:a=>(a==null?void 0:a.total_ticket[2])??"0"},{header:"Mancanegara",value:a=>(a==null?void 0:a.total_ticket[3])??"0"},{header:"Total",value:"grand_total",className:"text-right"}];function L({auth:a,transactions:s}){const l=()=>p.reload({only:["transactions"]}),{data:d,...t}=s;return e.jsxs(j,{title:"Laporan Transaksi",user:a==null?void 0:a.user,children:[e.jsx(u,{title:"Laporan Transaksi"}),e.jsx("div",{className:"py-10",children:e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"flex justify-between items-center w-full mb-5",children:[e.jsx("h2",{className:"text-2xl font-medium text-gray-700 flex-1",children:"Laporan Transaksi"}),e.jsx("div",{className:"flex items-center",children:e.jsx("button",{onClick:l,type:"button",className:"ml-3",children:e.jsx(v,{className:"h-4"})})})]}),e.jsx("div",{className:"mt-5",children:e.jsx(b,{column:N,data:d,pagination:t,onClickRow:void 0})})]})})]})}export{L as default};
