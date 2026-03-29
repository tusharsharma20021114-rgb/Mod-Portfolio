import './globals.css';

export const metadata = {
  title: 'Tushar Sharma — ML Engineer & Data Scientist',
  description: 'Portfolio of Tushar Sharma - ML Engineer, Data Scientist, and M.Tech student at IIIT Gwalior. Specializing in machine learning, data engineering, and backend development.',
  keywords: 'Tushar Sharma, ML Engineer, Data Scientist, Machine Learning, IIIT Gwalior, Python, AWS, Data Engineering',
  authors: [{ name: 'Tushar Sharma' }],
  openGraph: {
    title: 'Tushar Sharma — ML Engineer & Data Scientist',
    description: 'Building intelligent systems at the intersection of machine learning, data engineering, and backend development.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
