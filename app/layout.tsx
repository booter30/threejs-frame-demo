import type { Metadata } from 'next';
import './globals.css';

// Replace YOUR_VERCEL_URL with your actual deployment URL
const baseUrl = 'https://your-project-name.vercel.app';

// Frame metadata configuration
const frameMetadata = {
  version: 'vNext',
  image: `${baseUrl}/preview.svg`,
  buttons: [
    {
      label: 'View 3D Scene',
      action: 'post'
    }
  ],
  splashImage: `${baseUrl}/splash.svg`
};

export const metadata: Metadata = {
  title: 'Three.js Frame Demo',
  description: 'A Farcaster Frame with Three.js',
  other: {
    'fc:frame': JSON.stringify(frameMetadata),
    'fc:frame:image': `${baseUrl}/preview.svg`,
    'fc:frame:button:1': 'View 3D Scene',
    'fc:frame:splash_image': `${baseUrl}/splash.svg`
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}