"use client";

import React, { useEffect, useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

// A safe wrapper to prevent MUI Emotion hydration mismatches in Next.js App Router
function ClientOnly({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Return a blank placeholder of the same size to prevent layout shift before hydration
  if (!mounted) return <span className="inline-block w-5 h-5 opacity-0" aria-hidden="true" />;
  
  return <>{children}</>;
}

export function SafeLinkedInIcon({ className }: { className?: string }) {
  return <ClientOnly><LinkedInIcon className={className} /></ClientOnly>;
}

export function SafeTwitterIcon({ className }: { className?: string }) {
  return <ClientOnly><TwitterIcon className={className} /></ClientOnly>;
}

export function SafeAutoAwesomeIcon({ className }: { className?: string }) {
  return <ClientOnly><AutoAwesomeIcon className={className} /></ClientOnly>;
}
