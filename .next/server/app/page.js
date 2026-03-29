(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4834:(e,a,s)=>{"use strict";s.r(a),s.d(a,{GlobalError:()=>t.a,__next_app__:()=>m,originalPathname:()=>p,pages:()=>d,routeModule:()=>h,tree:()=>c}),s(6941),s(7764),s(5866);var r=s(3191),i=s(8716),n=s(7922),t=s.n(n),l=s(5231),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);s.d(a,o);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,6941)),"/home/tushar/Portfolio/app/page.js"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,7764)),"/home/tushar/Portfolio/app/layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"]}],d=["/home/tushar/Portfolio/app/page.js"],p="/page",m={require:s,loadChunk:()=>Promise.resolve()},h=new r.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},3107:()=>{},7801:(e,a,s)=>{Promise.resolve().then(s.bind(s,8175)),Promise.resolve().then(s.bind(s,6564)),Promise.resolve().then(s.bind(s,7244)),Promise.resolve().then(s.bind(s,7239)),Promise.resolve().then(s.bind(s,2361)),Promise.resolve().then(s.bind(s,6413))},3187:(e,a,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},8175:(e,a,s)=>{"use strict";s.d(a,{default:()=>t});var r=s(326),i=s(7577);let n=["What ML projects has Tushar worked on?","What is his current role and tech stack?","Does he have experience with LLMs?","What cloud platforms has he used?","Is he available for full-time roles?"];function t(){let[e,a]=(0,i.useState)(!1),[s,t]=(0,i.useState)([]),[l,o]=(0,i.useState)(""),[c,d]=(0,i.useState)(!1),p=(0,i.useRef)(null),m=(0,i.useRef)(null),h=async e=>{let a=e||l.trim();if(!a||c)return;o("");let r=[...s,{role:"user",content:a}];t(r),d(!0);try{let e=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:r})}),a=await e.json();t(e=>[...e,{role:"assistant",content:a.reply||"Sorry, I had trouble answering that."}])}catch{t(e=>[...e,{role:"assistant",content:"Something went wrong. Please try again."}])}d(!1)};return(0,r.jsxs)(r.Fragment,{children:[r.jsx("style",{children:`
        .ask-fab {
          position: fixed; bottom: 28px; right: 28px; z-index: 500;
          width: 54px; height: 54px; border-radius: 50%;
          background: var(--accent); border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.3rem; box-shadow: 0 4px 24px rgba(0,245,196,0.35);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .ask-fab:hover { transform: scale(1.08); box-shadow: 0 6px 32px rgba(0,245,196,0.5); }
        .ask-fab-label {
          position: absolute; right: 62px; top: 50%; transform: translateY(-50%);
          background: var(--surface2); border: 1px solid var(--border);
          font-family: 'Space Mono', monospace; font-size: 0.62rem;
          letter-spacing: 1px; color: var(--accent); padding: 5px 10px;
          border-radius: 4px; white-space: nowrap; pointer-events: none;
          opacity: 0; transition: opacity 0.2s;
        }
        .ask-fab:hover .ask-fab-label { opacity: 1; }

        .ask-panel {
          position: fixed; bottom: 96px; right: 28px; z-index: 500;
          width: 370px; max-height: 540px;
          background: var(--surface); border: 1px solid rgba(0,245,196,0.2);
          border-radius: 16px; display: flex; flex-direction: column;
          box-shadow: 0 12px 48px rgba(0,0,0,0.5);
          transform: translateY(12px) scale(0.97);
          opacity: 0; pointer-events: none;
          transition: transform 0.25s ease, opacity 0.25s ease;
        }
        .ask-panel.open {
          transform: translateY(0) scale(1); opacity: 1; pointer-events: all;
        }
        .ask-panel-header {
          display: flex; align-items: center; gap: 10px; justify-content: space-between;
          padding: 16px 18px; border-bottom: 1px solid var(--border);
        }
        .ask-panel-title {
          font-family: 'Space Mono', monospace; font-size: 0.7rem;
          letter-spacing: 2px; color: var(--accent); text-transform: uppercase;
          display: flex; align-items: center; gap: 8px;
        }
        .ask-status-dot {
          width: 7px; height: 7px; border-radius: 50%; background: var(--accent);
          animation: pulse-dot 1.5s infinite;
        }
        @keyframes pulse-dot {
          0%,100% { opacity: 1; } 50% { opacity: 0.4; }
        }
        .ask-close {
          background: none; border: none; color: var(--muted); cursor: pointer;
          font-size: 1rem; transition: color 0.2s; line-height: 1;
        }
        .ask-close:hover { color: var(--text); }

        .ask-messages {
          flex: 1; overflow-y: auto; padding: 16px 16px 8px;
          display: flex; flex-direction: column; gap: 12px;
          scrollbar-width: thin; scrollbar-color: var(--accent2) transparent;
        }
        .ask-bubble {
          max-width: 88%; padding: 10px 14px; border-radius: 10px;
          font-size: 0.85rem; line-height: 1.65;
        }
        .ask-bubble.user {
          align-self: flex-end; background: rgba(0,245,196,0.1);
          border: 1px solid rgba(0,245,196,0.18); color: var(--text);
          border-bottom-right-radius: 3px;
        }
        .ask-bubble.assistant {
          align-self: flex-start; background: var(--surface2);
          border: 1px solid var(--border); color: var(--text);
          border-bottom-left-radius: 3px;
        }
        .ask-typing {
          align-self: flex-start; padding: 10px 16px;
          background: var(--surface2); border: 1px solid var(--border);
          border-radius: 10px; border-bottom-left-radius: 3px;
          display: flex; gap: 5px; align-items: center;
        }
        .ask-dot {
          width: 5px; height: 5px; border-radius: 50%; background: var(--muted);
          animation: ask-bounce 1.2s infinite;
        }
        .ask-dot:nth-child(2) { animation-delay: 0.18s; }
        .ask-dot:nth-child(3) { animation-delay: 0.36s; }
        @keyframes ask-bounce { 0%,80%,100% { transform: scale(0.7); opacity: 0.5; } 40% { transform: scale(1.1); opacity: 1; } }

        .ask-suggestions {
          padding: 0 14px 10px;
          display: flex; gap: 6px; flex-wrap: wrap;
        }
        .ask-suggestion {
          font-family: 'Space Mono', monospace; font-size: 0.58rem;
          letter-spacing: 0.5px; padding: 4px 9px; border-radius: 4px;
          background: rgba(0,245,196,0.04); border: 1px solid rgba(0,245,196,0.12);
          color: var(--muted); cursor: pointer; transition: all 0.2s;
        }
        .ask-suggestion:hover {
          border-color: var(--accent); color: var(--accent);
          background: rgba(0,245,196,0.07);
        }

        .ask-input-row {
          display: flex; gap: 8px; padding: 12px 14px;
          border-top: 1px solid var(--border);
        }
        .ask-input {
          flex: 1; background: var(--surface2); border: 1px solid var(--border);
          border-radius: 7px; padding: 9px 12px; color: var(--text);
          font-family: 'Syne', sans-serif; font-size: 0.85rem;
          outline: none; transition: border-color 0.25s; resize: none;
          height: 38px; overflow: hidden;
        }
        .ask-input:focus { border-color: var(--accent); }
        .ask-input::placeholder { color: var(--muted); }
        .ask-send {
          background: var(--accent); border: none; border-radius: 7px;
          width: 38px; height: 38px; cursor: pointer; color: #030712;
          font-size: 0.9rem; transition: opacity 0.2s, transform 0.2s;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .ask-send:disabled { opacity: 0.4; cursor: not-allowed; }
        .ask-send:not(:disabled):hover { transform: translateX(2px); }

        @media (max-width: 480px) {
          .ask-panel { width: calc(100vw - 40px); right: 20px; bottom: 88px; }
        }
      `}),(0,r.jsxs)("button",{className:"ask-fab",onClick:()=>a(e=>!e),"aria-label":"Ask me anything",children:[r.jsx("span",{className:"ask-fab-label",children:"Ask me anything"}),e?"✕":"\uD83D\uDCAC"]}),(0,r.jsxs)("div",{className:`ask-panel${e?" open":""}`,children:[(0,r.jsxs)("div",{className:"ask-panel-header",children:[(0,r.jsxs)("div",{className:"ask-panel-title",children:[r.jsx("div",{className:"ask-status-dot"}),"Ask About Tushar"]}),r.jsx("button",{className:"ask-close",onClick:()=>a(!1),children:"✕"})]}),(0,r.jsxs)("div",{className:"ask-messages",children:[s.map((e,a)=>r.jsx("div",{className:`ask-bubble ${e.role}`,children:e.content},a)),c&&(0,r.jsxs)("div",{className:"ask-typing",children:[r.jsx("div",{className:"ask-dot"}),r.jsx("div",{className:"ask-dot"}),r.jsx("div",{className:"ask-dot"})]}),r.jsx("div",{ref:p})]}),s.length<=1&&r.jsx("div",{className:"ask-suggestions",children:n.map(e=>r.jsx("button",{className:"ask-suggestion",onClick:()=>h(e),children:e},e))}),(0,r.jsxs)("div",{className:"ask-input-row",children:[r.jsx("input",{ref:m,className:"ask-input",placeholder:"Ask anything about Tushar...",value:l,onChange:e=>o(e.target.value),onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),h())}}),r.jsx("button",{className:"ask-send",disabled:!l.trim()||c,onClick:()=>h(),children:"→"})]})]})]})}},6564:(e,a,s)=>{"use strict";s.d(a,{default:()=>n});var r=s(326),i=s(7577);function n(){let e=(0,i.useRef)(null);return r.jsx("canvas",{id:"canvas-bg",ref:e})}},7244:(e,a,s)=>{"use strict";s.d(a,{default:()=>n});var r=s(326),i=s(7577);function n(){let[e,a]=(0,i.useState)({name:"",email:"",subject:"",message:""}),[s,n]=(0,i.useState)("idle"),t=async s=>{s.preventDefault(),n("loading");try{(await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).ok?(n("success"),a({name:"",email:"",subject:"",message:""}),setTimeout(()=>n("idle"),3500)):n("error")}catch(e){n("error")}};return(0,r.jsxs)("div",{className:"contact-form",children:[(0,r.jsxs)("form",{onSubmit:t,style:{display:"flex",flexDirection:"column",gap:"14px"},children:[(0,r.jsxs)("div",{className:"form-row",children:[(0,r.jsxs)("div",{className:"form-group",children:[r.jsx("label",{children:"Name"}),r.jsx("input",{required:!0,type:"text",placeholder:"Your name",value:e.name,onChange:s=>a({...e,name:s.target.value})})]}),(0,r.jsxs)("div",{className:"form-group",children:[r.jsx("label",{children:"Email"}),r.jsx("input",{required:!0,type:"email",placeholder:"your@email.com",value:e.email,onChange:s=>a({...e,email:s.target.value})})]})]}),(0,r.jsxs)("div",{className:"form-group",children:[r.jsx("label",{children:"Subject"}),r.jsx("input",{type:"text",placeholder:"What's this about?",value:e.subject,onChange:s=>a({...e,subject:s.target.value})})]}),(0,r.jsxs)("div",{className:"form-group",children:[r.jsx("label",{children:"Message"}),r.jsx("textarea",{required:!0,placeholder:"Tell me about your project...",value:e.message,onChange:s=>a({...e,message:s.target.value})})]}),r.jsx("button",{type:"submit",className:"form-submit",disabled:"loading"===s,children:"loading"===s?"Sending...":"Send Message →"})]}),r.jsx("div",{id:"toast",className:"success"===s?"show":"",children:"✓ Message sent securely!"})]})}},7239:(e,a,s)=>{"use strict";s.d(a,{default:()=>l});var r=s(326),i=s(7577);let n=[{id:1,num:"PROJECT — 01",title:"NILM Energy Disaggregation",meta:"Jan 2026 — Present \xb7 Klimashift",desc:"Non-Intrusive Load Monitoring ML model for energy disaggregation with ETL pipelines processing large-scale time-series datasets on AWS. Identifies appliance-level consumption from aggregate meter readings.",tags:["Python","AWS","PostgreSQL","ETL","Time-Series"],tagColors:{"Time-Series":"purple"},domain:"ML / AI"},{id:2,num:"PROJECT — 02",title:"Equipment Identification Pipeline",meta:"Jan 2026 — Present \xb7 Klimashift",desc:"Automated computer vision pipeline using YOLO, Grounding DINO, and Grounded-SAM to detect, segment, and catalogue commercial assets from raw image frames — eliminating manual inventory effort entirely.",tags:["YOLO","Grounding DINO","SAM","Computer Vision"],tagColors:{"Computer Vision":"purple"},domain:"ML / AI"},{id:3,num:"PROJECT — 03",title:"ML Model Monitoring Pipeline",meta:"",desc:"MLflow-tracked pipeline with automated performance dashboards, data drift detection, and CI/CD via GitHub Actions — surfaces model degradation before it impacts production.",tags:["MLflow","GitHub Actions","CI/CD","MLOps"],tagColors:{"CI/CD":"amber",MLOps:"purple"},domain:"MLOps"},{id:4,num:"PROJECT — 04",title:"Smart Attendance System",meta:"Aug – Nov 2022",desc:"Flask-based facial recognition web app achieving 92% accuracy with OpenCV deep learning. REST API integration for real-time data storage, user authentication, and audit-trail-ready PostgreSQL backend.",tags:["Flask","OpenCV","PostgreSQL","Deep Learning"],tagColors:{"Deep Learning":"purple"},domain:"Full Stack"},{id:5,num:"PROJECT — 05",title:"Credit Card Application Approval",meta:"Mar – Jun 2022",desc:"End-to-end ML pipeline comparing SVM, Logistic Regression, and Decision Tree classifiers on financial data with feature engineering. Achieved 94% classification accuracy with ROC-AUC and F1 metrics.",tags:["Scikit-learn","Pandas","SVM","94% Accuracy"],tagColors:{SVM:"purple","94% Accuracy":"amber"},domain:"ML / AI"},{id:6,num:"PROJECT — 06",title:"Supply Chain Process Analytics",meta:"Jul – Sept 2023 \xb7 Celonis Capstone",desc:"Analyzed end-to-end supply chain data in Celonis EMS with trend deduction and pattern recognition via ETL and REST APIs. Reduced business decision cycles from 4–5 days to 2 days.",tags:["Celonis EMS","SQL","ETL","Process Mining"],tagColors:{"Process Mining":"amber"},domain:"Data Engineering"},{id:7,num:"PROJECT — 07",title:"WSN Attack Detection",meta:"",desc:"ML system to detect and classify DoS attacks in Wireless Sensor Networks using anomaly detection and supervised classification on network telemetry features.",tags:["Python","ML","Security","Anomaly Detection"],tagColors:{ML:"purple",Security:"amber"},domain:"ML / AI"},{id:8,num:"PROJECT — 08",title:"Medical Store Management System",meta:"Sept – Dec 2021",desc:"Java GUI application integrated with MySQL with optimised database queries reducing end-to-end transaction time by 50%. Includes inventory management, billing, and reporting modules.",tags:["Java Swing","MySQL","GUI App"],tagColors:{"GUI App":"amber"},domain:"Full Stack"}],t=["All","ML / AI","MLOps","Data Engineering","Full Stack"];function l(){let[e,a]=(0,i.useState)("All"),[s,l]=(0,i.useState)(""),o=(0,i.useMemo)(()=>n.filter(a=>{let r="All"===e||a.domain===e,i=s.toLowerCase(),n=!i||a.title.toLowerCase().includes(i)||a.desc.toLowerCase().includes(i)||a.tags.some(e=>e.toLowerCase().includes(i));return r&&n}),[e,s]);return(0,r.jsxs)("section",{id:"projects",children:[r.jsx("style",{children:`
        .proj-controls {
          display: flex; gap: 12px; flex-wrap: wrap;
          align-items: center; margin-bottom: 36px;
        }
        .proj-filter-btn {
          font-family: 'Space Mono', monospace; font-size: 0.65rem;
          letter-spacing: 1.5px; text-transform: uppercase;
          padding: 7px 14px; border-radius: 5px; cursor: pointer;
          border: 1px solid var(--border); background: transparent;
          color: var(--muted); transition: all 0.22s;
        }
        .proj-filter-btn:hover { border-color: rgba(0,245,196,0.3); color: var(--text); }
        .proj-filter-btn.active {
          border-color: var(--accent); color: var(--accent);
          background: rgba(0,245,196,0.06);
        }
        .proj-search {
          margin-left: auto; position: relative;
        }
        .proj-search input {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: 6px; padding: 8px 14px 8px 34px;
          color: var(--text); font-family: 'Space Mono', monospace;
          font-size: 0.68rem; outline: none; transition: border-color 0.3s;
          width: 200px;
        }
        .proj-search input:focus { border-color: var(--accent); }
        .proj-search input::placeholder { color: var(--muted); }
        .proj-search-icon {
          position: absolute; left: 11px; top: 50%; transform: translateY(-50%);
          color: var(--muted); font-size: 0.75rem; pointer-events: none;
        }
        .proj-count {
          font-family: 'Space Mono', monospace; font-size: 0.62rem;
          color: var(--muted); letter-spacing: 1px; margin-left: 4px;
        }
        .proj-empty {
          grid-column: 1/-1; text-align: center; padding: 60px 0;
          font-family: 'Space Mono', monospace; font-size: 0.75rem;
          color: var(--muted); letter-spacing: 1px;
        }
        .project-card.filtered-out { display: none; }
        @media (max-width: 600px) {
          .proj-search { margin-left: 0; width: 100%; }
          .proj-search input { width: 100%; }
        }
      `}),r.jsx("div",{className:"section-eyebrow",children:"// 03 — Projects"}),(0,r.jsxs)("h2",{className:"section-title",children:["Things I've",r.jsx("br",{}),"Built."]}),r.jsx("div",{className:"section-rule"}),(0,r.jsxs)("div",{className:"proj-controls",children:[t.map(s=>r.jsx("button",{className:`proj-filter-btn${e===s?" active":""}`,onClick:()=>a(s),children:s},s)),(0,r.jsxs)("span",{className:"proj-count",children:[o.length," / ",n.length," projects"]}),(0,r.jsxs)("div",{className:"proj-search",children:[r.jsx("span",{className:"proj-search-icon",children:"⌕"}),r.jsx("input",{type:"text",placeholder:"Search projects...",value:s,onChange:e=>l(e.target.value)})]})]}),r.jsx("div",{className:"projects-grid",children:0===o.length?r.jsx("div",{className:"proj-empty",children:"// no matching projects found"}):o.map(e=>(0,r.jsxs)("div",{className:"project-card reveal",children:[r.jsx("div",{className:"project-num",children:e.num}),r.jsx("h3",{children:e.title}),e.meta&&r.jsx("div",{className:"project-meta",children:e.meta}),r.jsx("p",{children:e.desc}),r.jsx("div",{className:"project-tags",children:e.tags.map(a=>r.jsx("span",{className:function(e,a){let s=a[e];return"purple"===s?"tag purple":"amber"===s?"tag amber":"tag"}(a,e.tagColors),style:{cursor:"pointer"},onClick:()=>l(a),title:`Filter by ${a}`,children:a},a))})]},e.id))})]})}},2361:(e,a,s)=>{"use strict";s.d(a,{default:()=>n});var r=s(326),i=s(7577);function n({variant:e="primary",label:a="Download Resume"}){let[s,n]=(0,i.useState)("idle"),t=async()=>{if("idle"!==s)return;n("downloading");try{await fetch("/api/resume",{method:"POST"})}catch{}let e=document.createElement("a");e.href="/resume.pdf",e.download="Tushar_Sharma_Resume.pdf",e.click(),n("done"),setTimeout(()=>n("idle"),3e3)},l={idle:a,downloading:"Preparing...",done:"✓ Downloaded!"};return"ghost"===e?r.jsx("button",{className:"btn-ghost",onClick:t,disabled:"downloading"===s,style:{cursor:"idle"!==s?"default":"pointer",border:"none",background:"transparent"},children:l[s]}):r.jsx("button",{className:"btn-primary",onClick:t,disabled:"downloading"===s,style:{cursor:"idle"!==s?"default":"pointer",opacity:"downloading"===s?.7:1,border:"none",transition:"all 0.25s"},children:"done"===s?"✓ Downloaded!":`⬇ ${l[s]}`})}},6413:(e,a,s)=>{"use strict";s.d(a,{default:()=>l});var r=s(326),i=s(7577);let n=[{id:"languages",label:"Core Languages",icon:"{ }",color:"green",skills:["Python","SQL / PL-SQL","Java","JavaScript","R"]},{id:"ml",label:"ML & AI",icon:"⬡",color:"purple",skills:["Scikit-learn","TensorFlow","PyTorch","Hugging Face","YOLO","Grounding DINO","LLMs","GANs","NLP","MLflow","OpenCV","Prompt Engineering"]},{id:"data",label:"Data & Cloud",icon:"◈",color:"amber",skills:["AWS (EC2, S3, VPC)","Azure","PostgreSQL / MySQL","MongoDB","Apache Spark / Hadoop","Snowflake","Databricks"]},{id:"tools",label:"Frameworks & Tools",icon:"⊞",color:"green",skills:["Flask","Django","FastAPI","Docker","Git","Power BI","Alteryx","Celonis","UiPath","Pandas / NumPy"]}];function t({name:e,color:a,delay:s}){let[n,t]=(0,i.useState)(!1);return r.jsx("span",{className:`skill-chip-new skill-chip-${a}`,style:{opacity:n?1:0,transform:n?"translateY(0) scale(1)":"translateY(8px) scale(0.92)",transition:"opacity 0.35s ease, transform 0.35s ease"},children:e})}function l(){let[e,a]=(0,i.useState)("languages"),[s,l]=(0,i.useState)(!1),o=(0,i.useRef)(null),[c,d]=(0,i.useState)(!1),p=s=>{s!==e&&(l(!0),setTimeout(()=>{a(s),l(!1)},180))},m=n.find(a=>a.id===e);return(0,r.jsxs)("section",{id:"skills",ref:o,children:[r.jsx("style",{children:`
        .skills-tabs { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 36px; }
        .skill-tab {
          font-family: 'Space Mono', monospace; font-size: 0.68rem;
          letter-spacing: 2px; text-transform: uppercase;
          padding: 9px 16px; border-radius: 6px; cursor: pointer;
          border: 1px solid var(--border); background: transparent;
          color: var(--muted); transition: all 0.25s; display: flex;
          align-items: center; gap: 7px;
        }
        .skill-tab:hover { border-color: rgba(0,245,196,0.3); color: var(--text); }
        .skill-tab.active-green { border-color: var(--accent); color: var(--accent); background: rgba(0,245,196,0.06); }
        .skill-tab.active-purple { border-color: #a78bfa; color: #a78bfa; background: rgba(124,58,237,0.07); }
        .skill-tab.active-amber  { border-color: var(--accent3); color: var(--accent3); background: rgba(245,158,11,0.07); }
        .skill-tab-icon { font-size: 0.9rem; }

        .skills-panel {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: 14px; padding: 30px 28px; min-height: 210px;
          transition: opacity 0.18s ease, transform 0.18s ease;
        }
        .skills-panel.fading { opacity: 0; transform: translateY(6px); }
        .skills-panel-header {
          font-family: 'Space Mono', monospace; font-size: 0.7rem;
          letter-spacing: 3px; text-transform: uppercase;
          margin-bottom: 22px; padding-bottom: 14px;
          border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: 10px;
        }
        .skills-panel-header.green { color: var(--accent); border-bottom-color: rgba(0,245,196,0.15); }
        .skills-panel-header.purple { color: #a78bfa; border-bottom-color: rgba(124,58,237,0.2); }
        .skills-panel-header.amber  { color: var(--accent3); border-bottom-color: rgba(245,158,11,0.2); }

        .skills-chips-wrap { display: flex; flex-wrap: wrap; gap: 9px; }

        .skill-chip-new {
          font-family: 'Space Mono', monospace; font-size: 0.67rem;
          padding: 7px 13px; border-radius: 6px;
          border: 1px solid; cursor: default;
          letter-spacing: 0.5px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .skill-chip-new:hover { transform: translateY(-2px); }
        .skill-chip-green {
          background: rgba(0,245,196,0.06); color: var(--accent);
          border-color: rgba(0,245,196,0.22);
        }
        .skill-chip-green:hover { box-shadow: 0 4px 14px rgba(0,245,196,0.15); }
        .skill-chip-purple {
          background: rgba(124,58,237,0.07); color: #a78bfa;
          border-color: rgba(124,58,237,0.25);
        }
        .skill-chip-purple:hover { box-shadow: 0 4px 14px rgba(124,58,237,0.18); }
        .skill-chip-amber {
          background: rgba(245,158,11,0.07); color: var(--accent3);
          border-color: rgba(245,158,11,0.25);
        }
        .skill-chip-amber:hover { box-shadow: 0 4px 14px rgba(245,158,11,0.15); }

        .skills-meta-row {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 14px; margin-top: 30px;
        }
        .skills-meta-card {
          background: var(--surface2); border: 1px solid var(--border);
          border-radius: 10px; padding: 18px 16px; text-align: center;
          transition: border-color 0.3s, transform 0.3s;
          opacity: 0; transform: translateY(18px);
          transition: opacity 0.5s ease, transform 0.5s ease, border-color 0.3s;
        }
        .skills-meta-card.in-view { opacity: 1; transform: none; }
        .skills-meta-card:hover { border-color: var(--accent); transform: translateY(-3px); }
        .skills-meta-num { font-family: 'Space Mono', monospace; font-size: 1.8rem; font-weight: 700; color: var(--accent); }
        .skills-meta-lbl { font-size: 0.68rem; color: var(--muted); margin-top: 4px; letter-spacing: 1px; font-family: 'Space Mono', monospace; }
        @media (max-width: 600px) {
          .skills-meta-row { grid-template-columns: 1fr; }
          .skill-tab span:last-child { display: none; }
        }
      `}),r.jsx("div",{className:"section-eyebrow",children:"// 04 — Skills"}),r.jsx("h2",{className:"section-title",children:"My Toolkit."}),r.jsx("div",{className:"section-rule"}),r.jsx("div",{className:"skills-tabs",children:n.map(a=>(0,r.jsxs)("button",{className:`skill-tab${e===a.id?` active-${a.color}`:""}`,onClick:()=>p(a.id),children:[r.jsx("span",{className:"skill-tab-icon",children:a.icon}),r.jsx("span",{children:a.label})]},a.id))}),(0,r.jsxs)("div",{className:`skills-panel${s?" fading":""}`,children:[(0,r.jsxs)("div",{className:`skills-panel-header ${m.color}`,children:[r.jsx("span",{children:m.icon}),r.jsx("span",{children:m.label}),(0,r.jsxs)("span",{style:{marginLeft:"auto",fontSize:"0.62rem",opacity:.5},children:[m.skills.length," skills"]})]}),r.jsx("div",{className:"skills-chips-wrap",children:!s&&m.skills.map((e,a)=>r.jsx(t,{name:e,color:m.color,delay:c?45*a:9999},e))})]}),r.jsx("div",{className:"skills-meta-row",children:[{num:"30+",lbl:"Technologies"},{num:"4",lbl:"Skill Domains"},{num:"6+",lbl:"Years Coding"}].map((e,a)=>(0,r.jsxs)("div",{className:`skills-meta-card${c?" in-view":""}`,style:{transitionDelay:c?`${.2+.12*a}s`:"0s"},children:[r.jsx("div",{className:"skills-meta-num",children:e.num}),r.jsx("div",{className:"skills-meta-lbl",children:e.lbl})]},e.lbl))})]})}},7764:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>n,metadata:()=>i});var r=s(9510);s(7272);let i={title:"Tushar Sharma — ML Engineer & Data Scientist",description:"Portfolio of Tushar Sharma - ML Engineer, Data Scientist, and M.Tech student at IIIT Gwalior. Specializing in machine learning, data engineering, and backend development.",keywords:"Tushar Sharma, ML Engineer, Data Scientist, Machine Learning, IIIT Gwalior, Python, AWS, Data Engineering",authors:[{name:"Tushar Sharma"}],openGraph:{title:"Tushar Sharma — ML Engineer & Data Scientist",description:"Building intelligent systems at the intersection of machine learning, data engineering, and backend development.",type:"website"}};function n({children:e}){return(0,r.jsxs)("html",{lang:"en",children:[(0,r.jsxs)("head",{children:[r.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),r.jsx("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),r.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;500;600;700;800&display=swap",rel:"stylesheet"})]}),r.jsx("body",{children:e})]})}},6941:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>p});var r=s(9510),i=s(8570);let n=(0,i.createProxy)(String.raw`/home/tushar/Portfolio/components/CanvasBackground.jsx#default`),t=(0,i.createProxy)(String.raw`/home/tushar/Portfolio/components/ContactForm.jsx#default`),l=(0,i.createProxy)(String.raw`/home/tushar/Portfolio/components/SkillsSection.jsx#default`),o=(0,i.createProxy)(String.raw`/home/tushar/Portfolio/components/ProjectsSection.jsx#default`),c=(0,i.createProxy)(String.raw`/home/tushar/Portfolio/components/AskMeWidget.jsx#default`),d=(0,i.createProxy)(String.raw`/home/tushar/Portfolio/components/ResumeButton.jsx#default`);function p(){return(0,r.jsxs)(r.Fragment,{children:[r.jsx(n,{}),r.jsx("div",{className:"glow-cursor",id:"glowCursor"}),(0,r.jsxs)("nav",{children:[r.jsx("div",{className:"nav-logo",children:"TS_DEV"}),(0,r.jsxs)("div",{className:"nav-links",children:[r.jsx("a",{href:"#about",children:"About"}),r.jsx("a",{href:"#experience",children:"Experience"}),r.jsx("a",{href:"#projects",children:"Projects"}),r.jsx("a",{href:"#skills",children:"Skills"}),r.jsx("a",{href:"#contact",children:"Contact"}),r.jsx("a",{href:"#contact",className:"nav-cta",children:"Hire Me"})]})]}),(0,r.jsxs)("section",{id:"hero",children:[r.jsx("div",{className:"hero-tag",children:"// M.Tech @ IIIT Gwalior \xa0\xb7\xa0 ML Engineer \xa0\xb7\xa0 Data Scientist"}),(0,r.jsxs)("div",{className:"hero-name",children:["Tushar",r.jsx("br",{}),"Sharma"]}),r.jsx("div",{className:"hero-subtitle",id:"typingEl",children:r.jsx("span",{className:"cursor-blink"})}),(0,r.jsxs)("p",{className:"hero-desc",children:["Building intelligent systems at the intersection of"," ",r.jsx("strong",{style:{color:"var(--text)"},children:"machine learning"}),","," ",r.jsx("strong",{style:{color:"var(--text)"},children:"data engineering"}),", and"," ",r.jsx("strong",{style:{color:"var(--text)"},children:"backend development"}),". Currently working at Klimashift and pursuing M.Tech at IIIT Gwalior."]}),(0,r.jsxs)("div",{className:"hero-badges",children:[r.jsx("span",{className:"badge green",children:"GATE CS 2024 Qualified"}),r.jsx("span",{className:"badge purple",children:"400+ LeetCode"}),r.jsx("span",{className:"badge amber",children:"CGPA 8.21"}),r.jsx("span",{className:"badge",children:"Gwalior, India"})]}),(0,r.jsxs)("div",{className:"hero-cta",children:[r.jsx("a",{href:"#projects",className:"btn-primary",children:"View My Work"}),r.jsx(d,{variant:"ghost",label:"Download Resume"}),r.jsx("a",{href:"#contact",className:"btn-ghost",children:"Get In Touch"})]}),(0,r.jsxs)("div",{className:"scroll-hint",children:[r.jsx("div",{className:"scroll-line"}),r.jsx("span",{children:"Scroll"})]})]}),(0,r.jsxs)("section",{id:"about",children:[r.jsx("div",{className:"section-eyebrow",children:"// 01 — About"}),r.jsx("h2",{className:"section-title",children:"Who I Am."}),r.jsx("div",{className:"section-rule"}),(0,r.jsxs)("div",{className:"about-grid reveal",children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"about-text",children:[(0,r.jsxs)("p",{children:["I'm a ",r.jsx("strong",{children:"ML Engineer & Data Scientist"})," with a B.Tech in CSE (Data Science & ML) from ITM University and currently pursuing ",r.jsx("span",{className:"hl",children:"M.Tech at IIIT Gwalior"})," with a CGPA of 8.21."]}),(0,r.jsxs)("p",{children:["I specialize in building ",r.jsx("strong",{children:"end-to-end ML pipelines"}),", ",r.jsx("strong",{children:"computer vision systems"}),", and ",r.jsx("strong",{children:"LLM applications"}),". At Klimashift, I engineer energy disaggregation models and automated asset identification pipelines that run in production on AWS."]}),(0,r.jsxs)("p",{children:["Beyond ML, I work across the full stack — from ",r.jsx("strong",{children:"Flask/Django/FastAPI backends"})," and ",r.jsx("strong",{children:"PostgreSQL databases"})," to cloud infrastructure on ",r.jsx("strong",{children:"AWS and Azure"}),". Good engineering means solving the right problem, cleanly."]})]}),(0,r.jsxs)("div",{className:"stats-row",children:[(0,r.jsxs)("div",{className:"stat-box",children:[r.jsx("div",{className:"stat-num","data-count":"6",children:"0"}),r.jsx("div",{className:"stat-lbl",children:"Internships"})]}),(0,r.jsxs)("div",{className:"stat-box",children:[r.jsx("div",{className:"stat-num","data-count":"8",children:"0"}),r.jsx("div",{className:"stat-lbl",children:"Projects"})]}),(0,r.jsxs)("div",{className:"stat-box",children:[r.jsx("div",{className:"stat-num","data-count":"400",children:"0"}),r.jsx("div",{className:"stat-lbl",children:"LeetCode"})]})]})]}),(0,r.jsxs)("div",{className:"about-quick",children:[(0,r.jsxs)("div",{className:"quick-item",children:[r.jsx("div",{className:"quick-icon",children:"\uD83C\uDF93"}),(0,r.jsxs)("div",{children:[r.jsx("div",{className:"quick-label",children:"Education"}),r.jsx("div",{className:"quick-val",children:"M.Tech IT — IIIT Gwalior"})]})]}),(0,r.jsxs)("div",{className:"quick-item",children:[r.jsx("div",{className:"quick-icon",children:"\uD83D\uDCBC"}),(0,r.jsxs)("div",{children:[r.jsx("div",{className:"quick-label",children:"Currently"}),r.jsx("div",{className:"quick-val",children:"Data Analyst Intern @ Klimashift"})]})]}),(0,r.jsxs)("div",{className:"quick-item",children:[r.jsx("div",{className:"quick-icon",children:"\uD83D\uDCCD"}),(0,r.jsxs)("div",{children:[r.jsx("div",{className:"quick-label",children:"Location"}),r.jsx("div",{className:"quick-val",children:"Dabra, Madhya Pradesh"})]})]}),(0,r.jsxs)("div",{className:"quick-item",children:[r.jsx("div",{className:"quick-icon",children:"\uD83D\uDD2C"}),(0,r.jsxs)("div",{children:[r.jsx("div",{className:"quick-label",children:"Research"}),r.jsx("div",{className:"quick-val",children:"WSN Security \xb7 NILM \xb7 NLP"})]})]}),(0,r.jsxs)("div",{className:"quick-item",children:[r.jsx("div",{className:"quick-icon",children:"\uD83D\uDCF1"}),(0,r.jsxs)("div",{children:[r.jsx("div",{className:"quick-label",children:"Phone"}),r.jsx("div",{className:"quick-val",children:"+91 96693 66748"})]})]})]})]})]}),(0,r.jsxs)("section",{id:"experience",children:[r.jsx("div",{className:"section-eyebrow",children:"// 02 — Experience"}),(0,r.jsxs)("h2",{className:"section-title",children:["Where I've",r.jsx("br",{}),"Worked."]}),r.jsx("div",{className:"section-rule"}),(0,r.jsxs)("div",{className:"exp-timeline",children:[(0,r.jsxs)("div",{className:"exp-item reveal",children:[r.jsx("div",{className:"exp-date",children:"JAN 2026 — PRESENT"}),r.jsx("div",{className:"exp-role",children:"Data Analyst / Data Engineer Intern"}),(0,r.jsxs)("div",{className:"exp-company",children:["Klimashift, Gurugram (On-site) ",r.jsx("span",{className:"exp-type",children:"CURRENT"})]}),(0,r.jsxs)("ul",{className:"exp-bullets",children:[(0,r.jsxs)("li",{children:["Engineered a data-driven sanctioned load calculator using ",r.jsx("strong",{style:{color:"var(--text)"},children:"Python + PostgreSQL"})," processing minute-level power telemetry, optimising commercial client load recommendations by up to ",r.jsx("strong",{style:{color:"var(--accent)"},children:"40%"}),"."]}),(0,r.jsxs)("li",{children:["Designed and deployed a ",r.jsx("strong",{style:{color:"var(--text)"},children:"NILM ML model"})," for energy disaggregation with robust ETL pipelines on large-scale time-series datasets hosted on AWS."]}),(0,r.jsxs)("li",{children:["Built an automated equipment identification pipeline using ",r.jsx("strong",{style:{color:"var(--text)"},children:"YOLO, Grounding DINO, and Grounded-SAM"})," to detect, segment, and catalogue commercial assets — eliminating manual inventory effort."]}),r.jsx("li",{children:"Delivered comprehensive technical reports translating complex energy datasets into actionable, cost-saving electrical load strategies for clients."})]})]}),(0,r.jsxs)("div",{className:"exp-item reveal",children:[r.jsx("div",{className:"exp-date",children:"AUG 2024 — JAN 2026"}),r.jsx("div",{className:"exp-role",children:"Teaching Assistant"}),r.jsx("div",{className:"exp-company",children:"ABV-IIITM, Gwalior"}),(0,r.jsxs)("ul",{className:"exp-bullets",children:[(0,r.jsxs)("li",{children:["Conducted lab sessions and tutorials for ",r.jsx("strong",{style:{color:"var(--accent)"},children:"100+ students"})," across data structures and algorithms courses."]}),r.jsx("li",{children:"Authored structured technical documentation and evaluation frameworks for academic assessments."})]})]}),(0,r.jsxs)("div",{className:"exp-item reveal",children:[r.jsx("div",{className:"exp-date",children:"SEPT 2023 — NOV 2023"}),r.jsx("div",{className:"exp-role",children:"RPA Developer Intern"}),r.jsx("div",{className:"exp-company",children:"UiPath (Remote)"}),r.jsx("ul",{className:"exp-bullets",children:(0,r.jsxs)("li",{children:["Designed automated RPA workflows using UiPath with REST API integrations, increasing processing throughput by ",r.jsx("strong",{style:{color:"var(--accent)"},children:"80%"})," and reducing manual intervention."]})})]}),(0,r.jsxs)("div",{className:"exp-item reveal",children:[r.jsx("div",{className:"exp-date",children:"MAY 2023 — JUL 2023"}),r.jsx("div",{className:"exp-role",children:"Cloud Architect Intern"}),r.jsx("div",{className:"exp-company",children:"AWS Academy (Remote)"}),r.jsx("ul",{className:"exp-bullets",children:(0,r.jsxs)("li",{children:["Architected AWS cloud solutions (EC2, S3, VPC) and optimised storage retrieval, reducing infrastructure costs by ",r.jsx("strong",{style:{color:"var(--accent)"},children:"15%"}),"."]})})]}),(0,r.jsxs)("div",{className:"exp-item reveal",children:[r.jsx("div",{className:"exp-date",children:"DEC 2022 — FEB 2023"}),r.jsx("div",{className:"exp-role",children:"Data Analytics Intern"}),r.jsx("div",{className:"exp-company",children:"Alteryx Sparked (Remote)"}),r.jsx("ul",{className:"exp-bullets",children:(0,r.jsxs)("li",{children:["Automated end-to-end data pipelines with Alteryx and built Power BI dashboards, cutting processing time from multiple days to ",r.jsx("strong",{style:{color:"var(--accent)"},children:"under 1 hour"}),"."]})})]}),(0,r.jsxs)("div",{className:"exp-item reveal",children:[r.jsx("div",{className:"exp-date",children:"SEPT 2021 — JAN 2022"}),r.jsx("div",{className:"exp-role",children:"Java Developer Intern"}),r.jsx("div",{className:"exp-company",children:"Affy Informatics, Gwalior"}),r.jsx("ul",{className:"exp-bullets",children:(0,r.jsxs)("li",{children:["Developed ",r.jsx("strong",{style:{color:"var(--accent)"},children:"10+ custom GUI components"})," in Java Swing, streamlining data input workflows and improving average user productivity by ",r.jsx("strong",{style:{color:"var(--accent)"},children:"50%"}),"."]})})]})]})]}),r.jsx(o,{}),r.jsx(l,{}),(0,r.jsxs)("section",{id:"education",children:[r.jsx("div",{className:"section-eyebrow",children:"// 05 — Education"}),(0,r.jsxs)("h2",{className:"section-title",children:["Academic",r.jsx("br",{}),"Background."]}),r.jsx("div",{className:"section-rule"}),(0,r.jsxs)("div",{className:"edu-grid reveal",children:[(0,r.jsxs)("div",{className:"edu-card",children:[r.jsx("div",{className:"edu-deg",children:"M.TECH — INFORMATION TECHNOLOGY"}),r.jsx("div",{className:"edu-school",children:"ABV-IIITM Gwalior"}),r.jsx("div",{className:"edu-field",children:"Wireless Network and Computing"}),(0,r.jsxs)("div",{className:"edu-meta",children:[r.jsx("span",{className:"edu-badge cgpa",children:"CGPA: 8.21"}),r.jsx("span",{className:"edu-badge year",children:"Aug 2024 – Present"})]})]}),(0,r.jsxs)("div",{className:"edu-card",children:[r.jsx("div",{className:"edu-deg",children:"B.TECH — COMPUTER SCIENCE"}),r.jsx("div",{className:"edu-school",children:"ITM University Gwalior"}),r.jsx("div",{className:"edu-field",children:"Data Science & Machine Learning"}),(0,r.jsxs)("div",{className:"edu-meta",children:[r.jsx("span",{className:"edu-badge cgpa",children:"CGPA: 7.19"}),r.jsx("span",{className:"edu-badge year",children:"Aug 2020 – Jun 2024"})]})]})]}),r.jsx("div",{className:"section-eyebrow",style:{marginTop:"48px",marginBottom:"8px"},children:"// Achievements"}),(0,r.jsxs)("div",{className:"achieve-grid reveal",children:[(0,r.jsxs)("div",{className:"achieve-card",children:[r.jsx("div",{className:"achieve-icon",children:"\uD83C\uDFC6"}),(0,r.jsxs)("div",{children:[r.jsx("div",{className:"achieve-title",children:"GATE CS 2024 Qualified"}),r.jsx("div",{className:"achieve-desc",children:"Graduate Aptitude Test in Engineering — one of India's most competitive CS exams."})]})]}),(0,r.jsxs)("div",{className:"achieve-card",children:[r.jsx("div",{className:"achieve-icon",children:"⚡"}),(0,r.jsxs)("div",{children:[r.jsx("div",{className:"achieve-title",children:"LeetCode 400+"}),r.jsx("div",{className:"achieve-desc",children:"Solved 400+ problems across DSA, algorithms, and dynamic programming."})]})]}),(0,r.jsxs)("div",{className:"achieve-card",children:[r.jsx("div",{className:"achieve-icon",children:"\uD83D\uDCCA"}),(0,r.jsxs)("div",{children:[r.jsx("div",{className:"achieve-title",children:"M.Tech CGPA 8.21"}),r.jsx("div",{className:"achieve-desc",children:"Strong academic performance at IIIT Gwalior in Wireless Network & Computing."})]})]})]})]}),(0,r.jsxs)("section",{id:"contact",children:[r.jsx("div",{className:"section-eyebrow",children:"// 06 — Contact"}),(0,r.jsxs)("h2",{className:"section-title",children:["Let's Work",r.jsx("br",{}),"Together."]}),r.jsx("div",{className:"section-rule"}),(0,r.jsxs)("div",{className:"contact-layout reveal",children:[(0,r.jsxs)("div",{className:"contact-intro",children:[(0,r.jsxs)("p",{children:["I'm open to ",r.jsx("strong",{style:{color:"var(--text)"},children:"full-time roles, research collaborations, and freelance ML/data engineering work"}),". Whether you have a project in mind or just want to talk tech — reach out anytime."]}),r.jsx("p",{style:{marginBottom:"28px"},children:"I typically respond within 24 hours."}),(0,r.jsxs)("div",{className:"contact-links",children:[(0,r.jsxs)("a",{href:"mailto:tusharsharma20021114@gmail.com",className:"contact-link",children:[r.jsx("span",{className:"c-icon",children:"\uD83D\uDCE7"}),(0,r.jsxs)("div",{children:[r.jsx("div",{className:"c-label",children:"Email"}),r.jsx("span",{children:"tusharsharma20021114@gmail.com"})]})]}),(0,r.jsxs)("a",{href:"https://www.linkedin.com/in/tushar-sharma-4355051b5",target:"_blank",rel:"noreferrer",className:"contact-link",children:[r.jsx("span",{className:"c-icon",children:"\uD83D\uDCBC"}),(0,r.jsxs)("div",{children:[r.jsx("div",{className:"c-label",children:"LinkedIn"}),"TUSHAR"]})]}),(0,r.jsxs)("a",{href:"https://github.com/tusharsharma20021114-rgb",target:"_blank",rel:"noreferrer",className:"contact-link",children:[r.jsx("span",{className:"c-icon",children:"\uD83D\uDC19"}),(0,r.jsxs)("div",{children:[r.jsx("div",{className:"c-label",children:"GitHub"}),"TUSHAR"]})]}),(0,r.jsxs)("a",{href:"tel:+919669366748",className:"contact-link",children:[r.jsx("span",{className:"c-icon",children:"\uD83D\uDCF1"}),(0,r.jsxs)("div",{children:[r.jsx("div",{className:"c-label",children:"Phone"}),"+91 96693 66748"]})]})]})]}),r.jsx(t,{})]})]}),(0,r.jsxs)("footer",{children:[r.jsx("span",{children:"\xa9 2026 Tushar Sharma — ML Engineer & Data Scientist"}),(0,r.jsxs)("div",{className:"f-links",children:[r.jsx("a",{href:"https://github.com/tusharsharma20021114-rgb",target:"_blank",rel:"noreferrer",children:"GitHub"}),r.jsx("a",{href:"https://www.linkedin.com/in/tushar-sharma-4355051b5/",target:"_blank",rel:"noreferrer",children:"LinkedIn"}),r.jsx("a",{href:"mailto:tusharsharma20021114@gmail.com",children:"Email"}),r.jsx("a",{href:"/hr",style:{color:"var(--muted)",opacity:.4,fontSize:"0.65rem"},children:"HR Portal"})]})]}),r.jsx(c,{})]})}},7272:()=>{}};var a=require("../webpack-runtime.js");a.C(e);var s=e=>a(a.s=e),r=a.X(0,[276,471],()=>s(4834));module.exports=r})();