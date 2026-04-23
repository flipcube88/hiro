import { SVGProps } from 'react';

export function ToriiIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      <defs>
        <linearGradient id="toriiGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#b91c1c" />
        </linearGradient>
        <linearGradient id="toriiDark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1c1917" />
          <stop offset="100%" stopColor="#292524" />
        </linearGradient>
      </defs>
      {/* Pillars */}
      <rect x="20" y="30" width="12" height="60" fill="url(#toriiGrad)" rx="2" />
      <rect x="68" y="30" width="12" height="60" fill="url(#toriiGrad)" rx="2" />
      {/* Top curved roof */}
      <path d="M 5 25 Q 50 12 95 25 L 95 32 Q 50 22 5 32 Z" fill="url(#toriiDark)" />
      {/* Top crossbar */}
      <rect x="10" y="32" width="80" height="10" fill="url(#toriiGrad)" rx="2" />
      {/* Lower crossbar */}
      <rect x="15" y="50" width="70" height="8" fill="url(#toriiGrad)" rx="1" />
      {/* Center block */}
      <rect x="44" y="42" width="12" height="16" fill="url(#toriiGrad)" rx="1" />
      {/* Base stones */}
      <path d="M 15 90 L 37 90 L 35 80 L 17 80 Z" fill="#a8a29e" />
      <path d="M 63 90 L 85 90 L 83 80 L 65 80 Z" fill="#a8a29e" />
    </svg>
  );
}

export function RabbitIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      {/* Body */}
      <path d="M 25 60 C 25 35, 75 35, 75 60 C 85 75, 80 90, 50 90 C 20 90, 15 75, 25 60 Z" fill="#fef3c7" />
      {/* Left Ear */}
      <path d="M 35 45 C 20 20, 30 5, 45 30 Z" fill="#fef3c7" />
      <path d="M 37 40 C 27 22, 33 12, 42 30 Z" fill="#fca5a5" />
      {/* Right Ear */}
      <path d="M 65 45 C 80 20, 70 5, 55 30 Z" fill="#fef3c7" />
      <path d="M 63 40 C 73 22, 67 12, 58 30 Z" fill="#fca5a5" />
      {/* Face */}
      <circle cx="40" cy="60" r="4" fill="#374151" />
      <circle cx="60" cy="60" r="4" fill="#374151" />
      <path d="M 48 68 Q 50 72 52 68" stroke="#374151" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M 50 68 L 50 75" stroke="#374151" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Blush */}
      <ellipse cx="32" cy="65" rx="4" ry="2" fill="#fca5a5" opacity="0.6" />
      <ellipse cx="68" cy="65" rx="4" ry="2" fill="#fca5a5" opacity="0.6" />
    </svg>
  );
}

export function ShinkansenIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      {/* Background speed lines */}
      <line x1="10" y1="20" x2="40" y2="20" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
      <line x1="60" y1="30" x2="90" y2="30" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="80" x2="50" y2="80" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
      
      {/* Train Body */}
      <path d="M 5 65 L 90 65 C 98 65, 95 40, 75 40 L 25 40 C 10 40, 5 50, 5 65 Z" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      {/* Blue Stripe */}
      <path d="M 5 60 L 92 60 C 95 60, 95 52, 80 52 L 20 52 C 10 52, 5 56, 5 60 Z" fill="#0284c7" />
      {/* Windows */}
      <rect x="30" y="44" width="12" height="6" rx="2" fill="#1e293b" />
      <rect x="48" y="44" width="12" height="6" rx="2" fill="#1e293b" />
      <rect x="66" y="44" width="12" height="6" rx="2" fill="#1e293b" />
      {/* Cockpit Window */}
      <path d="M 82 44 L 90 48 L 90 50 L 80 50 Z" fill="#1e293b" />
      {/* Wheels/Track */}
      <rect x="0" y="68" width="100" height="4" fill="#64748b" />
      <circle cx="25" cy="68" r="4" fill="#334155" />
      <circle cx="45" cy="68" r="4" fill="#334155" />
      <circle cx="65" cy="68" r="4" fill="#334155" />
    </svg>
  );
}

export function RamenIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      {/* Bowl */}
      <path d="M 10 50 C 10 80, 30 90, 50 90 C 70 90, 90 80, 90 50 Z" fill="#ef4444" />
      <path d="M 10 50 C 10 80, 30 90, 50 90 C 70 90, 90 80, 90 50 Z" fill="url(#bowlGrad)" opacity="0.2" />
      <ellipse cx="50" cy="50" rx="40" ry="10" fill="#fef3c7" />
      {/* Noodles */}
      <path d="M 20 48 Q 30 40 40 48 T 60 48 T 80 48" stroke="#f59e0b" strokeWidth="3" fill="none" />
      <path d="M 25 52 Q 35 44 45 52 T 65 52 T 75 52" stroke="#fbbf24" strokeWidth="3" fill="none" />
      {/* Egg */}
      <ellipse cx="35" cy="45" rx="12" ry="8" fill="#ffffff" transform="rotate(-20 35 45)" />
      <ellipse cx="35" cy="45" rx="6" ry="4" fill="#f59e0b" transform="rotate(-20 35 45)" />
      {/* Pork / Chashu */}
      <circle cx="65" cy="45" r="12" fill="#78350f" />
      <circle cx="65" cy="45" r="10" fill="#92400e" stroke="#78350f" strokeWidth="1" strokeDasharray="2 2" />
      {/* Chopsticks */}
      <line x1="85" y1="20" x2="60" y2="55" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
      <line x1="92" y1="25" x2="65" y2="58" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
      {/* Steam */}
      <path d="M 40 35 Q 35 25 45 15" stroke="#e2e8f0" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" />
      <path d="M 60 30 Q 55 20 65 10" stroke="#e2e8f0" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

export function CastleIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      {/* Base */}
      <path d="M 20 85 L 80 85 L 75 70 L 25 70 Z" fill="#94a3b8" />
      <path d="M 20 85 L 80 85 L 75 70 L 25 70 Z" fill="#000" opacity="0.1" />
      {/* Tier 1 */}
      <rect x="30" y="55" width="40" height="15" fill="#f8fafc" />
      <path d="M 15 55 L 85 55 L 75 45 L 25 45 Z" fill="#334155" />
      {/* Tier 2 */}
      <rect x="35" y="35" width="30" height="10" fill="#f8fafc" />
      <path d="M 25 35 L 75 35 L 65 25 L 35 25 Z" fill="#334155" />
      {/* Top Tier */}
      <rect x="40" y="15" width="20" height="10" fill="#f8fafc" />
      <path d="M 35 15 L 65 15 L 50 5 Z" fill="#334155" />
      {/* Details */}
      <rect x="45" y="60" width="10" height="10" fill="#1e293b" />
      <rect x="42" y="38" width="4" height="4" fill="#1e293b" />
      <rect x="54" y="38" width="4" height="4" fill="#1e293b" />
      <rect x="48" y="18" width="4" height="4" fill="#1e293b" />
    </svg>
  );
}

export function TakoyakiIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      {/* Box */}
      <path d="M 15 65 L 85 65 L 75 85 L 25 85 Z" fill="#fca5a5" />
      {/* Takoyaki Balls */}
      <circle cx="35" cy="60" r="14" fill="#f59e0b" />
      <circle cx="65" cy="60" r="14" fill="#f59e0b" />
      <circle cx="50" cy="50" r="14" fill="#f59e0b" />
      {/* Sauce */}
      <path d="M 25 55 Q 35 48 40 60" stroke="#451a03" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M 55 55 Q 65 48 70 60" stroke="#451a03" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M 40 45 Q 50 38 55 50" stroke="#451a03" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Mayo */}
      <path d="M 28 62 Q 35 65 40 58" stroke="#fef3c7" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M 58 62 Q 65 65 70 58" stroke="#fef3c7" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M 43 52 Q 50 55 55 48" stroke="#fef3c7" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function PlaneIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      {/* Plane Body */}
      <path d="M 20 70 L 45 60 L 70 20 L 80 20 C 85 20, 85 30, 80 35 L 55 65 L 85 55 L 95 55 L 85 70 L 20 85 Z" fill="#60a5fa" />
      {/* Jet Stream / Trail */}
      <path d="M 10 90 L 30 80" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" strokeDasharray="5, 5" />
      {/* Tail Wing */}
      <path d="M 80 20 C 85 20, 85 30, 80 35 L 70 20 Z" fill="#3b82f6" />
    </svg>
  );
}
