'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import sdk from '@farcaster/frame-sdk';

// Dynamically import Three.js component to avoid SSR issues
const ThreeScene = dynamic(() => import('../components/ThreeScene'), {
  ssr: false
});

export default function Home() {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);

  useEffect(() => {
    const load = async () => {
      await sdk.actions.ready();
      setIsSDKLoaded(true);
    };

    load();
  }, []);

  if (!isSDKLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold mb-4">Three.js Frame Demo</h1>
      <ThreeScene />
    </main>
  );
}