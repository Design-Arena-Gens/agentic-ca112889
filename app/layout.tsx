export const metadata = {
  title: 'أسرار الثراء والكون - غلاف الكتاب',
  description: 'غلاف كتاب غامض يحاكي أسرار الثراء والكون',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
