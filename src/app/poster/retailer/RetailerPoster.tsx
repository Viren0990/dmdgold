'use client';

import React, { useRef } from 'react';
import { Printer, ScanBarcode, Ribbon, ScrollText, FileText, ShoppingBag, Users, MonitorSmartphone, Globe, ShieldCheck } from 'lucide-react';

export default function RetailerPoster() {
  const posterRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    window.print();
  };

  return (
    <>
      {/* Download Button — hidden during print */}
      <div className="print-hide" style={{
        position: 'fixed',
        top: '24px',
        right: '24px',
        zIndex: 1000,
        display: 'flex',
        gap: '12px',
      }}>
        <button
          onClick={handleDownload}
          style={{
            background: 'linear-gradient(135deg, #C6A87C, #A67C52)',
            color: '#fff',
            border: 'none',
            padding: '14px 32px',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: 700,
            cursor: 'pointer',
            letterSpacing: '0.05em',
            boxShadow: '0 8px 32px rgba(198,168,124,0.4)',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(198,168,124,0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(198,168,124,0.4)';
          }}
        >
          📄 Download as PDF
        </button>
      </div>

      {/* Print Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,700&family=Inter:wght@300;400;500;600;700;800&display=swap');

        @page {
          size: A4 portrait;
          margin: 0;
        }

        /* -------------------------- */
        /* PRINT SPECIFIC STYLES      */
        /* -------------------------- */
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          html, body {
            margin: 0 !important;
            padding: 0 !important;
            background: #FAF9F6 !important;
            width: 210mm !important;
            height: 297mm !important;
            overflow: hidden !important;
          }
          body * {
            visibility: hidden;
          }
          .poster-wrapper, .poster-wrapper * {
            visibility: visible;
          }
          .poster-wrapper {
            position: absolute;
            left: 0;
            top: 0;
            padding: 0 !important;
          }
          .print-hide {
            display: none !important;
          }
          .gold-shimmer {
            background: none !important;
            color: #A67C52 !important;
            -webkit-text-fill-color: #A67C52 !important;
            animation: none !important;
          }
          .offer-badge {
            box-shadow: none !important;
            animation: none !important;
            background: #c41e3a !important;
            border: none !important;
            top: 0 !important;
          }
          .poster-container {
            margin: 0 !important;
            width: 210mm !important;
            height: 297mm !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            overflow: hidden !important;
            page-break-inside: avoid !important;
            padding: 30px 40px 20px !important; /* Ensure strict print padding */
          }
        }

        /* -------------------------- */
        /* SCREEN (DESKTOP) STYLES    */
        /* -------------------------- */
        @media screen {
          body {
            background: #e6e6e6 !important;
          }
          .poster-wrapper {
            padding: 40px 0;
          }
        }

        /* -------------------------- */
        /* MOBILE RESPONSIVE STYLES   */
        /* -------------------------- */
        @media screen and (max-width: 768px) {
          .poster-wrapper {
            padding: 0;
          }
          .poster-container {
            width: 100% !important;
            height: auto !important;
            min-height: 100vh !important;
            margin: 0 !important;
            padding: 80px 24px 40px !important;
            border-radius: 0 !important;
            box-shadow: none !important;
          }
          /* Feature cards: show only headings, hide bullet points */
          .grid-2 { grid-template-columns: 1fr 1fr !important; gap: 12px !important; }
          .feature-card-bullets { display: none !important; }
          .feature-card { 
            padding: 16px !important; 
            text-align: center !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
          }
          .feature-card-header { 
            flex-direction: column !important; 
            gap: 8px !important; 
            margin-bottom: 0 !important;
            justify-content: center !important;
          }
          .feature-card-title { font-size: 13px !important; }

          .grid-4 { grid-template-columns: 1fr 1fr !important; gap: 16px !important; }
          
          /* Flex to Columns */
          .pricing-flex { flex-direction: column !important; gap: 20px !important; }
          .pricing-divider { width: 60% !important; height: 1px !important; background: linear-gradient(90deg, transparent, rgba(198,168,124,0.5), transparent) !important; align-self: center !important; }
          
          .amc-flex { flex-direction: column !important; gap: 20px !important; text-align: center !important; }
          .amc-flex > div { text-align: center !important; }
          .amc-flex-right { border-left: none !important; padding-left: 0 !important; border-top: 1px dashed rgba(198,168,124,0.3) !important; padding-top: 16px !important; }
          .amc-flex-right > div > div { justify-content: center !important; }
          
          .footer-flex { flex-direction: column !important; gap: 14px !important; }
          .footer-separator { display: none !important; }

          /* Typography Boosts for Mobile Readability */
          .resp-text-tiny { font-size: 14px !important; }
          .resp-text-sm { font-size: 16px !important; }
          .resp-text-base { font-size: 20px !important; }
          .resp-title { font-size: 36px !important; }
          .resp-price-large { font-size: 52px !important; }
          .resp-price-small { font-size: 32px !important; }
          
          /* Padding Adjustments */
          .resp-pad-card { padding: 24px !important; }
        }

        /* -------------------------- */
        /* BASE POSTER STYLES         */
        /* -------------------------- */
        .poster-container {
          font-family: 'Inter', sans-serif;
        }

        .poster-container h1,
        .poster-container h2,
        .poster-container h3,
        .poster-container .serif {
          font-family: 'Playfair Display', serif;
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 15px rgba(198,168,124,0.1); }
          50% { box-shadow: 0 0 25px rgba(198,168,124,0.3); }
        }

        .gold-shimmer {
          background: linear-gradient(90deg, #A67C52 0%, #C6A87C 25%, #8A633B 50%, #C6A87C 75%, #A67C52 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .offer-badge {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .rupee-symbol {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          margin-right: 2px;
          display: inline-block;
        }
      `}</style>

      {/* Main Poster */}
      <div className="poster-wrapper">
        <div
          ref={posterRef}
          className="poster-container"
          style={{
            width: '210mm',
            height: '297mm',
            margin: '0 auto',
            background: '#FAF9F6',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '8px',
            boxShadow: '0 25px 80px rgba(0,0,0,0.15)',
            color: '#2C2C2C',
            padding: '30px 40px 20px', // Moved from absolute inner div for easier responsive override
          }}
        >
        {/* Subtle Background Pattern / Gradient */}
        <div className="print-hide" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 0%, rgba(198, 168, 124, 0.08) 0%, rgba(255,255,255,0) 70%)',
          pointerEvents: 'none',
        }} />

        {/* Decorative thin borders */}
        <div style={{
          position: 'absolute',
          top: '15px',
          left: '15px',
          right: '15px',
          bottom: '15px',
          border: '1px solid rgba(198,168,124,0.4)',
          pointerEvents: 'none',
        }} />

        {/* Corner Elegance */}
        {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((pos, i) => (
          <div key={i} style={{
            position: 'absolute',
            ...(pos.includes('top') ? { top: '15px' } : { bottom: '15px' }),
            ...(pos.includes('left') ? { left: '15px' } : { right: '15px' }),
            width: '30px',
            height: '30px',
            borderTop: pos.includes('top') ? '2px solid #A67C52' : 'none',
            borderBottom: pos.includes('bottom') ? '2px solid #A67C52' : 'none',
            borderLeft: pos.includes('left') ? '2px solid #A67C52' : 'none',
            borderRight: pos.includes('right') ? '2px solid #A67C52' : 'none',
            opacity: 0.8,
          }} />
        ))}

        {/* Content Container */}
        <div style={{ position: 'relative', zIndex: 1 }}>

          {/* ===== HEADER ===== */}
          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
            {/* Logo */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              marginBottom: '14px',
            }}>
              <img
                src="/images/logo.png"
                alt="DMD Gold Logo"
                style={{ width: '80px', height: '80px', objectFit: 'contain' }}
              />
              <div>
                <h2 className="serif resp-title" style={{
                  fontSize: '42px',
                  fontWeight: 600,
                  color: '#5C3A21',
                  letterSpacing: '0.1em',
                  lineHeight: 1,
                  margin: 0,
                  textTransform: 'uppercase'
                }}>DMD GOLD</h2>
                <p className="resp-text-tiny" style={{
                  fontSize: '12px',
                  color: '#A67C52',
                  letterSpacing: '0.4em',
                  textTransform: 'uppercase',
                  margin: '4px 0 0 0',
                  fontWeight: 600,
                }}>India&apos;s #1 Jewellery Software</p>
              </div>
            </div>

            {/* Decorative divider */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              marginBottom: '16px',
            }}>
              <div style={{ width: '100px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(198,168,124,0.6))' }} />
              <div style={{ width: '6px', height: '6px', background: '#C6A87C', transform: 'rotate(45deg)' }} />
              <div style={{ width: '100px', height: '1px', background: 'linear-gradient(90deg, rgba(198,168,124,0.6), transparent)' }} />
            </div>

            {/* Edition Title */}
            <h1 className="serif resp-title" style={{
              fontSize: '52px',
              fontWeight: 600,
              color: '#2C2C2C',
              margin: '0 0 10px 0',
              letterSpacing: '0.05em',
            }}>
              Retailer <span style={{ color: '#A67C52', fontStyle: 'italic' }}>Edition</span>
            </h1>
            <p className="resp-text-sm" style={{
              fontSize: '14px',
              color: '#666',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              margin: 0,
              fontWeight: 500,
            }}>For Showroom Owners & Single-Store Jewellers</p>
          </div>

          {/* ===== PRICING SECTION ===== */}
          <div className="resp-pad-card" style={{
            background: 'linear-gradient(180deg, #ffffff 0%, #f9f6f0 100%)',
            border: '1px solid rgba(198,168,124,0.5)',
            borderRadius: '16px',
            padding: '20px 28px',
            marginBottom: '20px',
            textAlign: 'center',
            position: 'relative',
            boxShadow: '0 10px 30px rgba(198,168,124,0.15)',
          }}>
            {/* Limited Time Offer Badge */}
            <div className="offer-badge resp-text-tiny" style={{
              position: 'absolute',
              top: '0',
              right: '30px',
              background: 'linear-gradient(135deg, #c41e3a, #8b0000)',
              color: '#fff',
              padding: '6px 20px 8px',
              borderRadius: '0 0 8px 8px',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              zIndex: 2,
            }}>
              6 Months Only
            </div>

            <p className="resp-text-sm" style={{
              fontSize: '14px',
              color: '#A67C52',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              margin: '0 0 14px 0',
              fontWeight: 600,
            }}>Special Launch Offer</p>

            <div className="pricing-flex" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px',
              flexWrap: 'wrap',
            }}>
              {/* Original Price */}
              <div style={{ textAlign: 'center' }}>
                <p className="resp-text-tiny" style={{ fontSize: '13px', color: '#777', margin: '0 0 4px 0', fontWeight: 500, letterSpacing: '0.1em' }}>Original Price</p>
                <p className="resp-price-small" style={{
                  fontSize: '28px',
                  fontWeight: 600,
                  color: '#999',
                  textDecoration: 'line-through',
                  textDecorationColor: '#c41e3a',
                  textDecorationThickness: '2px',
                  margin: 0,
                  fontFamily: "'Inter', sans-serif",
                }}>
                  <span className="rupee-symbol" style={{ fontSize: '24px' }}>₹</span>1,20,000
                </p>
              </div>

              {/* Divider Line */}
              <div className="pricing-divider" style={{
                width: '1px',
                height: '40px',
                background: 'linear-gradient(180deg, transparent, rgba(198,168,124,0.5), transparent)',
              }} />

              {/* New Price */}
              <div style={{ textAlign: 'center' }}>
                <p className="resp-text-tiny" style={{ fontSize: '13px', color: '#A67C52', margin: '0 0 4px 0', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Now Only</p>
                <p className="gold-shimmer serif resp-price-large" style={{
                  fontSize: '52px',
                  fontWeight: 600,
                  margin: 0,
                  lineHeight: 1,
                  color: '#8A633B',
                }}>
                  <span className="rupee-symbol" style={{ fontSize: '44px', color: '#A67C52' }}>₹</span>90,000
                </p>
                <p className="resp-text-tiny" style={{
                  fontSize: '13px',
                  color: '#777',
                  margin: '6px 0 0 0',
                  fontWeight: 500,
                  letterSpacing: '0.05em'
                }}>One-time setup fee</p>
              </div>
            </div>
          </div>

          {/* ===== FEATURES ===== */}
          <div style={{ marginBottom: '16px' }}>
            <div style={{ textAlign: 'center', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '1px', background: 'rgba(198,168,124,0.4)' }} />
                <h3 className="serif resp-text-base" style={{
                  fontSize: '22px',
                  fontWeight: 600,
                  color: '#A67C52',
                  margin: 0,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase'
                }}>Premium Feature Suite</h3>
                <div style={{ width: '40px', height: '1px', background: 'rgba(198,168,124,0.4)' }} />
              </div>
            </div>

            <div className="grid-2" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
            }}>
              {/* Feature Card 1: Billing & Operations */}
              <FeatureCard
                icon={<MonitorSmartphone size={20} strokeWidth={1.5} color="#A67C52" />}
                title="Billing & Operations"
              />

              {/* Feature Card 2: Inventory & eCommerce */}
              <FeatureCard
                icon={<ShoppingBag size={20} strokeWidth={1.5} color="#A67C52" />}
                title="Inventory & B2B eCommerce"
              />

              {/* Feature Card 3: Customers & Quotes */}
              <FeatureCard
                icon={<Users size={20} strokeWidth={1.5} color="#A67C52" />}
                title="Customers & Quotations"
              />

              {/* Feature Card 4: Compliance & Reports */}
              <FeatureCard
                icon={<ShieldCheck size={20} strokeWidth={1.5} color="#A67C52" />}
                title="GST Compliance & Reports"
              />
            </div>
          </div>

          {/* ===== HARDWARE KIT ===== */}
          <div className="resp-pad-card" style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #fdfcf9 100%)',
            border: '1px solid rgba(198,168,124,0.4)',
            borderRadius: '12px',
            padding: '16px 20px',
            marginBottom: '16px',
            boxShadow: '0 4px 15px rgba(198,168,124,0.08)',
          }}>
            <div style={{ textAlign: 'center', marginBottom: '10px' }}>
              <h4 className="resp-text-sm" style={{
                fontSize: '18px',
                color: '#A67C52',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                margin: 0,
                fontWeight: 600,
              }}>Hardware Kit Included</h4>
            </div>

            <div className="grid-4" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '12px',
            }}>
              <HardwareItem icon={<Printer size={24} strokeWidth={1.5} color="#A67C52" />} label="Barcode Printer" sublabel="Premium Quality" />
              <HardwareItem icon={<ScanBarcode size={24} strokeWidth={1.5} color="#A67C52" />} label="Scanner" sublabel="High-Speed" />
              <HardwareItem icon={<Ribbon size={24} strokeWidth={1.5} color="#A67C52" />} label="1 Ribbon" sublabel="Print-Ready" />
              <HardwareItem icon={<ScrollText size={24} strokeWidth={1.5} color="#A67C52" />} label="3 Rolls" sublabel="Barcode Labels" />
            </div>
          </div>

          {/* ===== AMC ===== */}
          <div className="amc-flex" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px dashed rgba(198,168,124,0.5)',
            borderBottom: '1px dashed rgba(198,168,124,0.5)',
            padding: '16px 0',
            marginBottom: '18px',
          }}>
            <div style={{ padding: '0 12px' }}>
              <p className="resp-text-tiny" style={{
                fontSize: '13px',
                color: '#777',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: 600,
                margin: '0 0 6px 0',
              }}>Annual Maintenance (After 1st Year)</p>
              <p className="serif resp-price-small" style={{
                fontSize: '28px',
                fontWeight: 600,
                color: '#2C2C2C',
                margin: 0,
                letterSpacing: '0.05em'
              }}>
                <span className="rupee-symbol" style={{ fontSize: '24px', color: '#555' }}>₹</span>18,000<span className="resp-text-tiny" style={{ fontSize: '14px', color: '#888', fontFamily: "'Inter', sans-serif" }}>/year</span>
              </p>
            </div>
            <div className="amc-flex-right" style={{ textAlign: 'right', borderLeft: '1px solid rgba(198,168,124,0.3)', paddingLeft: '20px', paddingRight: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {['24/7 Priority Support', 'Free Updates & Security', 'Data Backup & Recovery'].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    justifyContent: 'flex-end',
                  }}>
                    <span className="resp-text-sm" style={{ fontSize: '13px', color: '#555', fontWeight: 500 }}>{item}</span>
                    <span style={{ color: '#C6A87C', fontSize: '12px' }}>✓</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ===== FOOTER CTA ===== */}
          <div style={{
            textAlign: 'center',
            padding: '2px 0 10px',
          }}>
            <p className="serif resp-text-base" style={{
              fontSize: '20px',
              color: '#A67C52',
              fontWeight: 600,
              margin: '0 0 14px 0',
              letterSpacing: '0.05em',
              fontStyle: 'italic'
            }}>Transform your jewelry business today.</p>
            <div className="footer-flex" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '36px',
            }}>
              <ContactItem text="+91 93711 23699" href="tel:+919371123699" />
              <div className="footer-separator" style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#ddd' }} />
              <ContactItem text="www.dmdgold.com" href="https://www.dmdgold.com" />
              <div className="footer-separator" style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#ddd' }} />
              <ContactItem text="info@dmdgold.com" href="mailto:info@dmdgold.com" />
            </div>
            <p className="resp-text-tiny" style={{
              fontSize: '11px',
              color: '#888',
              marginTop: '16px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase'
            }}>© DMD Gold · Pune, Maharashtra · All prices exclusive of GST</p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

/* ===== SUB-COMPONENTS ===== */

function FeatureCard({ icon, title }: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="resp-pad-card feature-card" style={{
      background: '#ffffff',
      border: '1px solid rgba(198,168,124,0.3)',
      borderRadius: '10px',
      padding: '12px 16px',
      boxShadow: '0 4px 15px rgba(198,168,124,0.05)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
    }}>
      <div style={{
        background: 'rgba(198,168,124,0.15)',
        padding: '8px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}>
        {icon}
      </div>
      <h4 className="resp-text-sm feature-card-title" style={{
        fontSize: '16px',
        fontWeight: 700,
        color: '#2C2C2C',
        margin: 0,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
      }}>{title}</h4>
    </div>
  );
}

function HardwareItem({ icon, label, sublabel }: {
  icon: React.ReactNode;
  label: string;
  sublabel: string;
}) {
  return (
    <div style={{
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '8px',
    }}>
      <div style={{ 
        marginBottom: '10px',
        background: 'rgba(198,168,124,0.1)',
        width: '64px',
        height: '64px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid rgba(198,168,124,0.2)'
      }}>
        {icon}
      </div>
      <p className="resp-text-sm" style={{
        fontSize: '16px',
        fontWeight: 700,
        color: '#2C2C2C',
        margin: '0 0 2px 0',
        letterSpacing: '0.05em'
      }}>{label}</p>
      <p className="resp-text-tiny" style={{
        fontSize: '13px',
        color: '#777',
        margin: 0,
        fontWeight: 500,
      }}>{sublabel}</p>
    </div>
  );
}

function ContactItem({ text, href }: { text: string; href?: string }) {
  const style: React.CSSProperties = {
    fontSize: '14px',
    color: '#555',
    fontWeight: 500,
    letterSpacing: '0.05em',
    textDecoration: 'none'
  };

  if (href) {
    return <a className="resp-text-sm" href={href} target="_blank" rel="noopener noreferrer" style={style}>{text}</a>;
  }
  return <span className="resp-text-sm" style={style}>{text}</span>;
}
