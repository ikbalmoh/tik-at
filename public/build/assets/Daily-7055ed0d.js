import{q as d,r as x,j as e,a as p,y as u}from"./app-f89d5682.js";import{A as f}from"./AppLayout-b47c3be1.js";import{T as h}from"./Table-c181cb85.js";import{c as g}from"./formater-0851894b.js";import{D as j}from"./index.esm-2f5c706f.js";import"./ApplicationLogo-7fbc9fe3.js";import"./ResponsiveNavLink-6fb4b09b.js";import"./transition-162fcea7.js";import"./createReactComponent-82d9430f.js";import"./cls-ac679db6.js";const v=[{header:"Tanggal",value:"date"},{header:"Jumlah Tiket",value:a=>{var r;return((r=a==null?void 0:a.total_ticket)==null?void 0:r.all)??"0"},className:"text-center"},{header:"Dewasa",value:a=>(a==null?void 0:a.total_ticket[1])??"0",className:"text-center"},{header:"Anak-anak",value:a=>(a==null?void 0:a.total_ticket[2])??"0",className:"text-center"},{header:"Mancanegara",value:a=>(a==null?void 0:a.total_ticket[3])??"0",className:"text-center"},{header:"Total",value:a=>g(a.grand_total),className:"text-right font-medium"}];function D({auth:a,transactions:r}){const{data:s,...l}=r,{from:o,to:i}=d().props.dates,[m,c]=x.useState({startDate:o,endDate:i}),n=t=>{c(t),u.reload({only:["transactions"],data:{page:1,from:t==null?void 0:t.startDate,to:t==null?void 0:t.endDate}})};return e.jsxs(f,{title:"Laporan Harian",user:a==null?void 0:a.user,children:[e.jsx(p,{title:"Laporan Harian"}),e.jsx("div",{className:"py-10",children:e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:justify-between sm:items-center w-full mb-5",children:[e.jsx("h2",{className:"text-2xl font-medium text-gray-700 flex-1 mb-3 sm:mb-0",children:"Laporan Harian"}),e.jsx("div",{className:"flex items-center",children:e.jsx(j,{value:m,onChange:n,maxDate:new Date,placeholder:"Filter Tanggal",i18n:"id"})})]}),e.jsx("div",{className:"mt-5",children:e.jsx(h,{column:v,data:s,pagination:l,onClickRow:void 0})})]})})]})}export{D as default};