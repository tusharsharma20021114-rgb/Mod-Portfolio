// app/api/test-chat/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  const hasKey = !!process.env.GEMINI_API_KEY;
  const keyPreview = process.env.GEMINI_API_KEY 
    ? `${process.env.GEMINI_API_KEY.substring(0, 10)}...` 
    : 'NOT SET';

  return NextResponse.json({
    status: 'ok',
    geminiKeyConfigured: hasKey,
    keyPreview: keyPreview,
    timestamp: new Date().toISOString()
  });
}
