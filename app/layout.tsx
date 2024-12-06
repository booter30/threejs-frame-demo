import type { Metadata } from 'next';
import './globals.css';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

// Frame metadata following the spec
const frameMetadata = {
  version: 'vNext',
  imageUrl: `https://threejs-frame-demo-p2ckkxn5a-seths-projects-d3f71e4e.vercel.app/preview.svg`,  // Must be 3:2 ratio, < 10MB
  button: {
    title: "View 3D Scene",
    action: {
      type: "launch_frame",
      name: "Three.js Demo",
      url: baseUrl,
      splashImageUrl: `https://threejs-frame-demo-p2ckkxn5a-seths-projects-d3f71e4e.vercel.app/splash.svg`, // 200x200px, < 1MB
      splashBackgroundColor: "#1e1e1e"
    }
  }
};

export const metadata: Metadata = {
  title: 'Three.js Frame Demo',
  description: 'A Farcaster Frame with Three.js',
  other: {
    // Serialized FrameEmbed in fc:frame meta tag
    'fc:frame': JSON.stringify(frameMetadata),
    // Individual meta tags for better compatibility
    'fc:frame:image': `https://threejs-frame-demo-p2ckkxn5a-seths-projects-d3f71e4e.vercel.app/preview.svg`,
    'fc:frame:button:1': "View 3D Scene",
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