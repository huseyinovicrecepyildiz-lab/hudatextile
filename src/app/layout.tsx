import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hüda Tekstil — Premium Textile Manufacturing',
  description: 'Hüda Tekstil: Suits, fabric jackets, and trousers manufacturer. 5000m² facility, 300+ employees, exporting to 25+ countries.',
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
