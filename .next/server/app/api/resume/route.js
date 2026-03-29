"use strict";(()=>{var e={};e.id=951,e.ids=[951],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},3729:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>m,patchFetch:()=>h,requestAsyncStorage:()=>p,routeModule:()=>c,serverHooks:()=>g,staticGenerationAsyncStorage:()=>d});var a={};r.r(a),r.d(a,{POST:()=>l});var n=r(9303),o=r(8716),s=r(670),i=r(7070);let u=`You are an AI assistant embedded in Tushar Sharma's personal portfolio website. 
Your job is to answer questions from HR professionals, recruiters, and potential employers about Tushar's background, skills, and experience. Be concise, professional, and enthusiastic about Tushar's profile.

Here is Tushar's complete background:

PERSONAL
- Full name: Tushar Sharma
- Location: Dabra, Madhya Pradesh / Gurugram (current work)
- Email: tusharsharma20021114@gmail.com
- Phone: +91 96693 66748
- LinkedIn: linkedin.com/in/tushar-sharma-4355051b5
- GitHub: github.com/tusharsharma20021114-rgb

EDUCATION
- M.Tech in Information Technology (Wireless Network & Computing) — ABV-IIITM Gwalior, CGPA 8.21, Aug 2024 – Present
- B.Tech in Computer Science (Data Science & ML) — ITM University Gwalior, CGPA 7.19, Aug 2020 – Jun 2024

CURRENT ROLE
- Data Analyst / Data Engineer Intern at Klimashift, Gurugram (On-site), Jan 2026 – Present
  - Built a sanctioned load calculator (Python + PostgreSQL) optimizing load recommendations by 40%
  - Designed NILM ML model for energy disaggregation with ETL pipelines on AWS
  - Built automated equipment identification pipeline using YOLO, Grounding DINO, and Grounded-SAM
  - Delivers technical reports for energy cost-saving strategies

PREVIOUS EXPERIENCE
- Teaching Assistant, ABV-IIITM Gwalior (Aug 2024 – Jan 2026): Conducted labs for 100+ students in DSA
- RPA Developer Intern, UiPath (Sept–Nov 2023): RPA workflows with REST APIs, 80% throughput increase
- Cloud Architect Intern, AWS Academy (May–Jul 2023): EC2, S3, VPC; reduced infra costs by 15%
- Data Analytics Intern, Alteryx Sparked (Dec 2022–Feb 2023): Power BI dashboards, processing time from days to <1 hour
- Java Developer Intern, Affy Informatics (Sept 2021–Jan 2022): 10+ Java Swing components, 50% productivity boost

PROJECTS
1. NILM Energy Disaggregation – Python, AWS, PostgreSQL, ETL, time-series ML
2. Equipment Identification Pipeline – YOLO, Grounding DINO, SAM, computer vision
3. ML Model Monitoring Pipeline – MLflow, GitHub Actions, CI/CD, MLOps
4. Smart Attendance System – Flask, OpenCV, PostgreSQL, deep learning (92% accuracy)
5. Credit Card Approval – Scikit-learn, SVM, Logistic Regression (94% accuracy)
6. Supply Chain Process Analytics – Celonis EMS, SQL, ETL, process mining
7. WSN Attack Detection – Python, anomaly detection, ML for network security
8. Medical Store Management – Java Swing, MySQL, optimized queries (50% faster transactions)

SKILLS
- Languages: Python (primary), SQL/PL-SQL, Java, JavaScript, R
- ML/AI: Scikit-learn, TensorFlow, PyTorch, Hugging Face, YOLO, Grounding DINO, LLMs, GANs, NLP, MLflow, OpenCV, Prompt Engineering
- Data & Cloud: AWS (EC2, S3, VPC), Azure, PostgreSQL/MySQL, MongoDB, Apache Spark, Hadoop, Snowflake, Databricks
- Frameworks & Tools: Flask, Django, FastAPI, Docker, Git, Power BI, Alteryx, Celonis, UiPath, Pandas, NumPy

ACHIEVEMENTS
- GATE CS 2024 Qualified
- LeetCode 400+ problems solved
- M.Tech CGPA 8.21 at IIIT Gwalior

AVAILABILITY
- Open to full-time ML Engineer, Data Scientist, or Data Engineer roles
- Also open to research collaborations and freelance ML/data engineering work
- Typically responds within 24 hours

IMPORTANT RULES:
- Answer questions about Tushar only — do not answer general coding or unrelated questions
- Be concise (2–4 sentences per answer max unless detail is requested)
- If asked something you don't know, say so honestly
- If asked about salary expectations, say that's best discussed directly with Tushar
- Never fabricate achievements or details not listed above
- Be warm and professional — you're representing Tushar's brand`;async function l(e){try{let{messages:t}=await e.json();if(!t||!Array.isArray(t))return i.NextResponse.json({error:"Invalid request"},{status:400});let r=t.filter(e=>"user"===e.role||"assistant"===e.role).slice(-10).map(e=>({role:e.role,content:String(e.content).slice(0,1e3)})).map(e=>({role:"assistant"===e.role?"model":"user",parts:[{text:e.content}]})),a=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:r,systemInstruction:{parts:[{text:u}]},generationConfig:{maxOutputTokens:400,temperature:.7}})});if(!a.ok){let e=await a.text();return console.error("Gemini API error:",e),i.NextResponse.json({reply:"Sorry, I'm having trouble right now. Please try again or contact Tushar directly."},{status:200})}let n=await a.json(),o=n.candidates?.[0]?.content?.parts?.[0]?.text||"I couldn't generate a response. Please contact Tushar directly.";return i.NextResponse.json({reply:o},{status:200})}catch(e){return console.error("Chat route error:",e),i.NextResponse.json({reply:"Something went wrong. Please reach out to Tushar directly at tusharsharma20021114@gmail.com"},{status:200})}}let c=new n.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/resume/route",pathname:"/api/resume",filename:"route",bundlePath:"app/api/resume/route"},resolvedPagePath:"/home/tushar/Portfolio/app/api/resume/route.js",nextConfigOutput:"",userland:a}),{requestAsyncStorage:p,staticGenerationAsyncStorage:d,serverHooks:g}=c,m="/api/resume/route";function h(){return(0,s.patchFetch)({serverHooks:g,staticGenerationAsyncStorage:d})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[276,972],()=>r(3729));module.exports=a})();