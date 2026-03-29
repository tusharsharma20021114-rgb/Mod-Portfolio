// app/api/resume/route.js
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // Track resume download in database
    await sql`
      INSERT INTO resume_downloads (downloaded_at)
      VALUES (NOW());
    `;

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Resume tracking error:', error);
    // Don't fail the download if tracking fails
    return NextResponse.json({ success: true }, { status: 200 });
  }
}
