import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const tasksFilePath = path.join(process.cwd(), 'data', 'db.json');
    
    try {
      const data = await fs.readFile(tasksFilePath, 'utf-8');
      const parsedData = JSON.parse(data);
      
      console.log('Parsed Data:', parsedData); // Add this line for server-side logging
      
      return NextResponse.json(parsedData, { status: 200 });
    } catch (readError) {
      console.error('Error reading file:', readError);
      return NextResponse.json({ 
        message: 'Failed to read file', 
        error: readError.message 
      }, { status: 404 });
    }
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ 
      message: 'Unexpected error occurred',
      error: error.message 
    }, { status: 500 });
  }
}