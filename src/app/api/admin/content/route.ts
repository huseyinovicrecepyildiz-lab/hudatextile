import { NextRequest, NextResponse } from 'next/server';
import { put, list } from '@vercel/blob';

// Vercel Blob'da tutacağımız sabit dosyanın adı
const BLOB_FILENAME = 'huda-content.json';

function isAuthenticated(request: NextRequest): boolean {
  return request.cookies.get('admin_session')?.value === 'authenticated';
}

export async function GET(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Blob deposundaki dosyaları listele ve bizim JSON dosyamızı bul
    const { blobs } = await list();
    const contentBlob = blobs.find((b) => b.pathname === BLOB_FILENAME);

    if (!contentBlob) {
      // Sitede henüz hiç kayıt yapılmamışsa boş obje dön
      return NextResponse.json({});
    }

    // Dosya varsa içeriğini indirip panele gönder
    const response = await fetch(contentBlob.url);
    const content = await response.json();
    return NextResponse.json(content);
  } catch (error) {
    console.error('Blob okuma hatası:', error);
    return NextResponse.json({});
  }
}

export async function PUT(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const content = await request.json();

    // addRandomSuffix: false diyerek, hep aynı dosyanın üzerine yazmasını sağlıyoruz
    await put(BLOB_FILENAME, JSON.stringify(content, null, 2), {
      access: 'public',
      addRandomSuffix: false,
      contentType: 'application/json',
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Blob kaydetme hatası:', error);
    return NextResponse.json(
      { error: 'Failed to save content' },
      { status: 500 }
    );
  }
}