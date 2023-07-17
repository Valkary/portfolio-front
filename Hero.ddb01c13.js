import{r as s}from"./chunks/index.d828e9db.js";import{u as p,C as d}from"./chunks/index.6404b5be.js";import{j as e,m as c}from"./chunks/motion.7daa71ba.js";function u({}){return e.exports.jsxs(c.div,{initial:{opacity:0},animate:{scale:[1,2,2,3,1],opacity:[.1,.2,.3,.4,.8,.1,1]},transition:{duration:2.5},className:"relative flex justify-center items-center",children:[e.exports.jsx("div",{className:"absolute border border-[#333333] rounded-full h-[200px] w-[200px] animate-ping mt-52"}),e.exports.jsx("div",{className:"absolute border border-[#333333] rounded-full h-[300px] w-[300px] animate-ping mt-52"}),e.exports.jsx("div",{className:"absolute border border-[#333333] rounded-full h-[425px] w-[425px] animate-ping mt-52"}),e.exports.jsx("div",{className:"absolute border border-[#f43f5e] rounded-full h-[550px] w-[550px] animate-pulse mt-52"}),e.exports.jsx("div",{className:"absolute border border-[#333333] rounded-full h-[625px] w-[625px] animate-ping mt-52"})]})}const x=["Welcome to my portfolio!","I'm Pepe Salcedo","FullStack_Dev"];function b({}){const[t,o]=s.exports.useState(-1),[l,i]=s.exports.useState(!0),[n,a]=p({words:x,loop:!0,delaySpeed:2e3});return s.exports.useEffect(()=>{l!==a.isDelete&&l&&(t===x.length-1?o(0):o(r=>r+1)),i(r=>!r)},[a.isDelete]),e.exports.jsxs("section",{id:"hero",className:"min-h-screen w-full flex flex-col space-y-8 items-center justify-center text-center overflow-hidden snap-center font-bold",children:[e.exports.jsx(u,{}),e.exports.jsx("img",{src:"/portfolio-front/profile_pic.jpg",alt:"profile picture",className:"relative rounded-full h-32 w-32 mx-auto object-cover"}),e.exports.jsxs("div",{children:[e.exports.jsx("h2",{className:"text-sm uppercase text-gray-500 pb-2 tracking-[10px]",children:"Software Developer"}),e.exports.jsxs("h1",{className:"flex justify-center text-3xl md:text-5xl lg:text-6xl font-semibold px-10",children:[t===2&&e.exports.jsx("span",{children:"<"}),e.exports.jsx("span",{className:`${t===2&&"text-blue-300"}`,children:n}),t===2&&e.exports.jsx("span",{children:"/>"}),e.exports.jsx(d,{cursorColor:"#f43f5e"})]})]}),e.exports.jsxs("div",{className:"z-20 flex flex-row flex-wrap gap-5 justify-center",children:[e.exports.jsx("a",{href:"#about",children:e.exports.jsx("button",{className:"px-6 py-2 border border-[#242424] rounded-full text-xs uppercase tracking-widest text-gray-500 transition-all hover:border-[#f43f5e]/40 hover:text-[#f43f5e]",children:"About"})}),e.exports.jsx("a",{href:"#experience",children:e.exports.jsx("button",{className:"px-6 py-2 border border-[#242424] rounded-full text-xs uppercase tracking-widest text-gray-500 transition-all hover:border-[#f43f5e]/40 hover:text-[#f43f5e]",children:"Experience"})}),e.exports.jsx("a",{href:"#skills",children:e.exports.jsx("button",{className:"px-6 py-2 border border-[#242424] rounded-full text-xs uppercase tracking-widest text-gray-500 transition-all hover:border-[#f43f5e]/40 hover:text-[#f43f5e]",children:"Skills"})})]})]})}export{b as default};