import{U as o,aG as i,aH as u,aI as l,aJ as c,aK as f,aL as d,aM as m,aN as h,aO as g,aP as A,d as P,u as R,o as v,z as w,aQ as y,aR as C,aS as S,a2 as b}from"./chunks/framework.Bjg6B_ll.js";import{R as E}from"./chunks/theme.CDTg8wPK.js";function p(e){if(e.extends){const a=p(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=p(E),T=P({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=R();return v(()=>{w(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&y(),C(),S(),s.setup&&s.setup(),()=>b(s.Layout)}});async function D(){globalThis.__VITEPRESS__=!0;const e=O(),a=L();a.provide(u,e);const t=l(e.route);return a.provide(c,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function L(){return h(T)}function O(){let e=o,a;return g(t=>{let n=A(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&D().then(({app:e,router:a,data:t})=>{a.go().then(()=>{i(a.route,t.site),e.mount("#app")})});export{D as createApp};
