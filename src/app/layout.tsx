import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Har Har Maidan Fateh | Serving Humanity with Compassion',
  description: 'Har Har Maidan Fateh is a community-based NGO in Yamunanagar, Haryana dedicated to serving underprivileged communities through food distribution, health camps, and educational support.',
  keywords: ['NGO', 'charity', 'Yamunanagar', 'Haryana', 'Langar Sewa', 'health camps', 'education', 'community service', 'Har Har Maidan Fateh'],
  authors: [{ name: 'Har Har Maidan Fateh' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://harharmaidan.org',
    siteName: 'Har Har Maidan Fateh',
    title: 'Har Har Maidan Fateh | Serving Humanity with Compassion',
    description: 'A community-based NGO in Yamunanagar, Haryana serving the underprivileged through Langar Sewa, health camps, and educational support.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Har Har Maidan Fateh',
    description: 'A community-based NGO serving humanity through Langar Sewa, health camps, and educational support.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
        <link rel="shortcut icon" href="/assets/images/logo.jpeg" />
        <link rel="icon" type="image/jpeg" href="/assets/images/logo.jpeg" />
        <link rel="apple-touch-icon" href="/assets/images/logo.jpeg" />
        <link rel="preload" href="/assets/fonts/NotoSerifDisplay-Medium.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/assets/fonts/NotoSerif-Regular.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/assets/fonts/NotoSerif-Bold.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/assets/fonts/NotoSans-Condensed.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/assets/fonts/NotoSans-CondensedBold.woff2" as="font" type="font/woff2" crossOrigin="" />
      </head>
      <body>
        <div className="js-page-content-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
