// app/api/chat/route.js
import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are an AI assistant for Tushar Sharma's portfolio. Answer questions about his skills, experience, and projects professionally and concisely.

ABOUT TUSHAR:
- M.Tech student at IIIT Gwalior (CGPA 8.21)
- Data Analyst/Engineer Intern at Klimashift
- Skills: Python, ML/AI (TensorFlow, PyTorch, YOLO), AWS, PostgreSQL
- 6 internships, 8+ projects, GATE CS 2024 qualified, 400+ LeetCode
- Available for full-time ML Engineer, Data Scientist, or Data Engineer roles
- Email: tusharsharma20021114@gmail.com

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
