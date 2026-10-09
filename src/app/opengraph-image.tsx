import { ImageResponse } from 'next/og';

export const alt = 'DMD Gold — Jewellery software built by a jeweller, for jewellers';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#1A1A1A',
          color: '#FFFFFF',
          fontFamily: 'serif',
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 8, color: '#C6A87C', fontWeight: 700 }}>DMD GOLD</div>
        <div style={{ fontSize: 72, marginTop: 24, lineHeight: 1.15 }}>Built by a Jeweller,</div>
        <div style={{ fontSize: 72, lineHeight: 1.15, color: '#C6A87C', fontStyle: 'italic' }}>for Jewellers.</div>
        <div style={{ fontSize: 30, marginTop: 36, color: '#BBBBBB' }}>
          Billing · Stock · Karigars · Wholesale orders — one software
        </div>
        <div style={{ fontSize: 28, marginTop: 16, color: '#C6A87C' }}>From Rs. 6,000/year · Trusted by 500+ jewellery shops</div>
      </div>
    ),
    size,
  );
}
