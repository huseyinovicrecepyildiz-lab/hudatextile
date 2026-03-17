import '../globals.css';

export const metadata = {
  title: 'Admin Panel | Hüda Tekstil',
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
