// app/api/resume/route.js
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // Track resume download in database (skip if database not configured)
    if (process.env.POSTGRES_URL) {
      try {
        await sql`
          INSERT INTO resume_downloads (downloaded_at)
          VALUES (NOW());
        `;
      } catch (dbError) {
        console.error('Database error (non-fatal):', dbError);
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Resume tracking error:', error);
    // Don't fail the download if tracking fails
    return NextResponse.json({ success: true }, { status: 200 });
  }
}
