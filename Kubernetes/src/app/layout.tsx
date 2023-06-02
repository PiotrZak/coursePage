import './globals.css'

export const metadata = {
  title: 'Kubernetes Course',
  description: 'Kubernetes Course',
}

export default function RootLayout({
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
