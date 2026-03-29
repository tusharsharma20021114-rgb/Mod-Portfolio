(()=>{var e={};e.id=254,e.ids=[254],e.modules={399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},8893:e=>{"use strict";e.exports=require("buffer")},4770:e=>{"use strict";e.exports=require("crypto")},7702:e=>{"use strict";e.exports=require("events")},2048:e=>{"use strict";e.exports=require("fs")},2615:e=>{"use strict";e.exports=require("http")},8791:e=>{"use strict";e.exports=require("https")},8216:e=>{"use strict";e.exports=require("net")},9801:e=>{"use strict";e.exports=require("os")},5315:e=>{"use strict";e.exports=require("path")},6162:e=>{"use strict";e.exports=require("stream")},2452:e=>{"use strict";e.exports=require("tls")},7360:e=>{"use strict";e.exports=require("url")},1568:e=>{"use strict";e.exports=require("zlib")},3739:()=>{},4941:(e,t,s)=>{"use strict";s.r(t),s.d(t,{originalPathname:()=>R,patchFetch:()=>_,requestAsyncStorage:()=>p,routeModule:()=>c,serverHooks:()=>E,staticGenerationAsyncStorage:()=>l});var r={};s.r(r),s.d(r,{GET:()=>n});var a=s(9303),o=s(8716),i=s(670),u=s(6923),d=s(7070);async function n(e){if(e.headers.get("x-hr-token")!==process.env.HR_DASHBOARD_TOKEN)return d.NextResponse.json({error:"Unauthorized"},{status:401});try{let{rows:e}=await (0,u.i6)`
      SELECT
        COUNT(*) AS total_downloads,
        COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '7 days') AS downloads_last_7d,
        COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '30 days') AS downloads_last_30d
      FROM resume_downloads;
    `,{rows:t}=await (0,u.i6)`
      SELECT
        COUNT(*) AS total_messages,
        COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '7 days') AS messages_last_7d
      FROM contact_messages;
    `,{rows:s}=await (0,u.i6)`
      SELECT name, email, subject, created_at
      FROM contact_messages
      ORDER BY created_at DESC
      LIMIT 10;
    `,{rows:r}=await (0,u.i6)`
      SELECT
        DATE(created_at) AS day,
        COUNT(*) AS count
      FROM resume_downloads
      WHERE created_at >= NOW() - INTERVAL '14 days'
      GROUP BY DATE(created_at)
      ORDER BY day;
    `,{rows:a}=await (0,u.i6)`
      SELECT
        DATE(created_at) AS day,
        COUNT(*) AS count
      FROM contact_messages
      WHERE created_at >= NOW() - INTERVAL '14 days'
      GROUP BY DATE(created_at)
      ORDER BY day;
    `;return d.NextResponse.json({downloads:{total:parseInt(e[0].total_downloads,10),last7d:parseInt(e[0].downloads_last_7d,10),last30d:parseInt(e[0].downloads_last_30d,10),timeline:r},contacts:{total:parseInt(t[0].total_messages,10),last7d:parseInt(t[0].messages_last_7d,10),recent:s,timeline:a}})}catch(e){return console.error("HR stats error:",e),d.NextResponse.json({error:"Failed to fetch stats"},{status:500})}}let c=new a.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/hr/stats/route",pathname:"/api/hr/stats",filename:"route",bundlePath:"app/api/hr/stats/route"},resolvedPagePath:"/home/tushar/Portfolio/app/api/hr/stats/route.js",nextConfigOutput:"",userland:r}),{requestAsyncStorage:p,staticGenerationAsyncStorage:l,serverHooks:E}=c,R="/api/hr/stats/route";function _(){return(0,i.patchFetch)({serverHooks:E,staticGenerationAsyncStorage:l})}}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[276,972,923],()=>s(4941));module.exports=r})();