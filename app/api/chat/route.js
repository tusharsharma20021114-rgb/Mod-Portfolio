// app/api/chat/route.js
import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are an AI assistant for Tushar Sharma's portfolio. Answer questions about his skills, experience, and projects professionally and concisely.

ABOUT TUSHAR SHARMA:
- Software Developer & Data Scientist with strong foundations in ML, statistical modeling, and end-to-end ML pipelines
- Currently: Data Analyst/Engineer Intern at Klimashift, Gurugram (Jan 2026 - Present)
- Education: M.Tech IT (Wireless Network & Computing) at IIIT Gwalior (CGPA 8.21, Aug 2024-Present)
- Previous: B.Tech CSE (Data Science & ML) from ITM University (CGPA 7.19, Aug 2020-Jun 2024)

CURRENT WORK (Klimashift):
- Engineered sanctioned load calculator using Python + PostgreSQL, optimizing load recommendations by 40%
- Designed NILM ML model for energy disaggregation with ETL pipelines on AWS
- Built automated equipment identification pipeline using YOLO, Grounding DINO, Grounded-SAM
- Delivers technical reports translating energy datasets into cost-saving strategies

TECHNICAL SKILLS:
- Languages: Python (Pandas, NumPy, Scikit-learn, Django, Flask), Java, C/C++, JavaScript, R, PL/SQL
- ML/AI: Supervised/Unsupervised Learning, Deep Learning, NLP, LLMs, Generative AI, Computer Vision (YOLO), Hugging Face
- Data Engineering: ETL Pipelines (Kafka/Prefect), Time Series Analysis, Feature Engineering, SQL Optimization
- Cloud & Databases: AWS (EC2, S3, VPC), Azure, PostgreSQL, MySQL, Oracle, MongoDB
- Tools: Power BI, Matplotlib, Seaborn, Spark, Hadoop, Snowflake, Git
- Web: HTML, CSS, JavaScript (Basics), REST APIs

PREVIOUS EXPERIENCE:
- Teaching Assistant at ABV-IIITM Gwalior (Aug 2024-Jan 2026): 100+ students in DSA courses
- RPA Developer Intern at UiPath (Sept-Nov 2023): 80% throughput increase
- Cloud Architect Intern at AWS Academy (May-Jul 2023): 15% cost reduction
- Data Analytics Intern at Alteryx Sparked (Dec 2022-Feb 2023): Processing time from days to <1 hour
- Java Developer Intern at Affy Informatics (Sept 2021-Jan 2022): 10+ GUI components, 50% productivity boost

KEY PROJECTS:
- Credit Card Approval ML (94% accuracy using SVM, Logistic Regression, Decision Trees)
- Smart Attendance Web App (Flask + OpenCV, 92% accuracy, REST APIs)
- Celonis Process Mining (Reduced decision cycles from 4-5 days to 2 days)
- Medical Store Management (Java + MySQL, 50% faster transactions)

ACHIEVEMENTS:
- GATE CS 2024 Qualified
- LeetCode 400+ problems solved
- M.Tech CGPA 8.21

AVAILABILITY:
- Open to full-time roles as ML Engineer, Data Scientist, or Data Engineer
- Also open to research collaborations and freelance work
- Contact: tusharsharma20021114@gmail.com | +91 96693 66748
- Location: Dabra, Madhya Pradesh (currently working in Gurugram)

Keep responses under 3 sentences unless more detail is requested.`;

export async function POST(request) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ 
        reply: "Chatbot not configured. Contact Tushar at tusharsharma20021114@gmail.com" 
      }, { status: 200 });
    }

    // Get the last user message
    const lastMessage = messages[messages.length - 1];
    if (!lastMessage || lastMessage.role !== 'user') {
      return NextResponse.json({ error: 'Invalid message format' }, { status: 400 });
    }

    // Build conversation context
    let conversationText = SYSTEM_PROMPT + '\n\nConversation:\n';
    messages.slice(-5).forEach(msg => {
      conversationText += `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}\n`;
    });

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: conversationText
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 300,
        }
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API Error:', response.status, errorText);
      
      // Parse error for better message
      let errorMsg = `Error ${response.status}`;
      try {
        const errorJson = JSON.parse(errorText);
        if (errorJson.error?.message) {
          errorMsg = errorJson.error.message;
        }
      } catch (e) {
        // Use default error message
      }
      
      return NextResponse.json({ 
        reply: `Sorry, AI service error: ${errorMsg}. Contact Tushar at tusharsharma20021114@gmail.com` 
      }, { status: 200 });
    }

    const data = await response.json();
    
    // Extract the response text
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text 
      || "I couldn't generate a response. Please contact Tushar directly at tusharsharma20021114@gmail.com";

    return NextResponse.json({ reply }, { status: 200 });

  } catch (error) {
    console.error('Chat route error:', error);
    return NextResponse.json({
      reply: "Something went wrong. Contact Tushar at tusharsharma20021114@gmail.com"
    }, { status: 200 });
  }
}
