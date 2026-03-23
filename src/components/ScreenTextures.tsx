'use client';

import { useMemo, useEffect, useRef } from 'react';
import * as THREE from 'three';

// ─── PALETTE ────────────────────────────────────────────────────────────────
// All screens now share this warm cream/gold palette to match the site
const P = {
  cream:      '#FAF7F2',   // page background
  creamDark:  '#F2EDE4',   // subtle panel bg
  creamMid:   '#EDE6D8',   // divider / border
  gold:       '#C9973E',   // primary accent — clean warm gold, no muddy brown
  goldLight:  '#E2BA6A',   // lighter bright gold
  goldDeep:   '#A67C28',   // deeper rich gold for contrast
  ink:        '#2C2522',   // primary text (warm near-black)
  inkMid:     '#7A6E65',   // secondary text
  inkLight:   '#B8AFA6',   // muted text / labels
  white:      '#FFFFFF',
  green:      '#4A7C59',   // success (muted, warm)
  greenBg:    '#EAF3EC',
  red:        '#9B4A3A',   // error/deduct
  redBg:      '#F7EDEB',
};

// ─── HELPERS ────────────────────────────────────────────────────────────────
function drawText(
    ctx: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number,
    opts: {
        color?: string;
        size?: number;
        font?: string;
        align?: CanvasTextAlign;
        baseline?: CanvasTextBaseline;
        bold?: boolean;
        italic?: boolean;
        maxWidth?: number;
    } = {}
) {
    const {
        color = P.ink, size = 14, font = 'Georgia',
        align = 'left', baseline = 'top',
        bold = false, italic = false, maxWidth
    } = opts;
    ctx.fillStyle = color;
    ctx.font = `${italic ? 'italic ' : ''}${bold ? 'bold ' : ''}${size}px ${font}`;
    ctx.textAlign = align;
    ctx.textBaseline = baseline;
    if (maxWidth) ctx.fillText(text, x, y, maxWidth);
    else ctx.fillText(text, x, y);
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.arcTo(x + w, y, x + w, y + r, r);
    ctx.lineTo(x + w, y + h - r);
    ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
    ctx.lineTo(x + r, y + h);
    ctx.arcTo(x, y + h, x, y + h - r, r);
    ctx.lineTo(x, y + r);
    ctx.arcTo(x, y, x + r, y, r);
    ctx.closePath();
}

// Warm cream card with optional gold border
function card(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r = 10, accent = false) {
    roundRect(ctx, x, y, w, h, r);
    ctx.fillStyle = P.white;
    ctx.fill();
    ctx.strokeStyle = accent ? P.gold : P.creamMid;
    ctx.lineWidth = accent ? 1.5 : 1;
    ctx.stroke();
}

// Gold pill label
function pill(ctx: CanvasRenderingContext2D, label: string, cx: number, cy: number, color = P.gold, bg = 'rgba(198,168,124,0.12)') {
    const w = label.length * 7 + 24;
    roundRect(ctx, cx - w / 2, cy - 11, w, 22, 11);
    ctx.fillStyle = bg;
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.stroke();
    drawText(ctx, label, cx, cy - 7, { color, size: 10, bold: true, align: 'center', font: 'system-ui' });
}

// Horizontal divider
function divider(ctx: CanvasRenderingContext2D, x1: number, x2: number, y: number) {
    ctx.strokeStyle = P.creamMid;
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(x1, y); ctx.lineTo(x2, y); ctx.stroke();
}

// Section label (spaced caps)
function label(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, color = P.inkLight) {
    drawText(ctx, text, x, y, { color, size: 9, bold: true, font: 'system-ui' });
}

// Clean white background with thin border frame
function warmBg(ctx: CanvasRenderingContext2D, W: number, H: number) {
    ctx.fillStyle = P.white;
    ctx.fillRect(0, 0, W, H);

    // Very thin warm-black border around the entire screen
    const B = 1.5;
    roundRect(ctx, B, B, W - B * 2, H - B * 2, 4);
    ctx.strokeStyle = 'rgba(28,18,10,0.28)';
    ctx.lineWidth = B * 2;
    ctx.stroke();
}

// ─── SCREEN 1 (OUTER LEFT): LOGIN ───────────────────────────────────────────
export function paintLogin(ctx: CanvasRenderingContext2D, W: number, H: number) {
    warmBg(ctx, W, H);

    // Decorative gold arch top
    const archGrad = ctx.createRadialGradient(W / 2, -20, 20, W / 2, -20, 220);
    archGrad.addColorStop(0, 'rgba(198,168,124,0.18)');
    archGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = archGrad;
    ctx.fillRect(0, 0, W, H);

    // Top wordmark
    drawText(ctx, 'DMD GOLD', W / 2, 22, { color: P.gold, size: 18, bold: true, align: 'center', font: 'Georgia', italic: true });
    drawText(ctx, 'Jewellery Management', W / 2, 46, { color: P.inkLight, size: 10, align: 'center', font: 'system-ui' });

    const cw = W - 60, ch = H - 110;
    const cx = 30, cy = 75;

    card(ctx, cx, cy, cw, ch, 14, true);

    // Tabs inside card
    const tabY = cy + 18;
    drawText(ctx, 'Store Login', cx + 24, tabY, { color: P.gold, size: 13, bold: true, font: 'Georgia' });
    ctx.strokeStyle = P.gold; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(cx + 24, tabY + 19); ctx.lineTo(cx + 24 + 80, tabY + 19); ctx.stroke();
    drawText(ctx, 'B2B Buyer', cx + cw - 24, tabY, { color: P.inkLight, size: 12, align: 'right', font: 'Georgia' });
    divider(ctx, cx + 20, cx + cw - 20, tabY + 22);

    // Fields
    let fy = cy + 52;
    const fw = cw - 48;
    const fx = cx + 24;

    const fields = [
        { lbl: 'STORE CODE / GSTIN', val: 'DMD-JEWELS-01', hint: '' },
        { lbl: 'REGISTERED MOBILE', val: '+91 98765 43210', hint: 'Get OTP →' },
    ];

    fields.forEach(f => {
        label(ctx, f.lbl, fx, fy);
        fy += 16;
        card(ctx, fx, fy, fw, 36, 8);
        drawText(ctx, f.val, fx + 14, fy + 10, { color: P.ink, size: 13, bold: true, font: 'system-ui' });
        if (f.hint) drawText(ctx, f.hint, fx + fw - 14, fy + 11, { color: P.gold, size: 11, align: 'right', font: 'system-ui', bold: true });
        fy += 48;
    });

    // PIN row label
    label(ctx, 'SECURITY PIN', fx, fy);
    fy += 16;
    const pinW = (fw - 25) / 6;
    for (let i = 0; i < 6; i++) {
        const px = fx + i * (pinW + 5);
        roundRect(ctx, px, fy, pinW, 36, 7);
        if (i < 4) {
            ctx.fillStyle = P.gold;
            ctx.fill();
            ctx.fillStyle = P.white;
            ctx.beginPath(); ctx.arc(px + pinW / 2, fy + 18, 5, 0, Math.PI * 2); ctx.fill();
        } else {
            ctx.fillStyle = P.white; ctx.fill();
            ctx.strokeStyle = P.creamMid; ctx.lineWidth = 1; ctx.stroke();
        }
    }

    // Login button
    fy += 50;
    roundRect(ctx, fx, fy, fw, 40, 10);
    ctx.fillStyle = P.gold; ctx.fill();
    drawText(ctx, 'Secure Login →', fx + fw / 2, fy + 12, { color: P.white, size: 13, bold: true, align: 'center', font: 'Georgia' });

    // Lock note
    fy += 52;
    drawText(ctx, '🔒  End-to-end encrypted', fx + fw / 2, fy, { color: P.inkLight, size: 10, align: 'center', font: 'system-ui' });
}

// ─── SCREEN 5 (OUTER RIGHT): ORDER TRACKING ─────────────────────────────────
export function paintOrderTracking(ctx: CanvasRenderingContext2D, W: number, H: number) {
    warmBg(ctx, W, H);

    // Header
    label(ctx, 'ORDER LIFECYCLE', 30, 22);
    drawText(ctx, '#DMD-2847', W - 30, 20, { color: P.gold, size: 12, bold: true, align: 'right', font: 'Georgia' });
    divider(ctx, 30, W - 30, 40);

    // Order summary mini-card
    card(ctx, 30, 48, W - 60, 52, 10, true);
    drawText(ctx, 'Bridal Choker Set', 46, 58, { color: P.ink, size: 13, bold: true, font: 'Georgia' });
    drawText(ctx, '22K · 45.5g · Due: 18 Mar', 46, 76, { color: P.inkMid, size: 10, font: 'system-ui' });
    pill(ctx, 'IN PROGRESS', W - 70, 76, P.gold);

    // Timeline
    const lineX = 52;
    const lineStartY = 118;
    const lineEndY = H - 70;

    // Track bg
    ctx.strokeStyle = P.creamMid; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(lineX, lineStartY); ctx.lineTo(lineX, lineEndY); ctx.stroke();
    // Gold fill 40%
    ctx.strokeStyle = P.gold; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(lineX, lineStartY); ctx.lineTo(lineX, lineStartY + (lineEndY - lineStartY) * 0.42); ctx.stroke();

    const steps = [
        { label: 'Order Placed & Advance', status: 'done', detail: '₹50,000 received' },
        { label: 'With Karigar (Casting)', status: 'active', detail: 'Est. 3 days remaining' },
        { label: 'Hallmarking (HUID)', status: 'pending', detail: 'BIS Queue' },
        { label: 'Quality Check', status: 'pending', detail: 'Final inspection' },
        { label: 'Ready for Delivery', status: 'pending', detail: 'Customer pickup' },
    ];
    const stepSpacing = (lineEndY - lineStartY) / (steps.length - 1);

    steps.forEach((step, i) => {
        const y = lineStartY + i * stepSpacing;
        const textX = lineX + 28;
        ctx.beginPath(); ctx.arc(lineX, y, 11, 0, Math.PI * 2);
        if (step.status === 'done') {
            ctx.fillStyle = P.green; ctx.fill();
            ctx.strokeStyle = P.white; ctx.lineWidth = 2;
            ctx.beginPath(); ctx.moveTo(lineX - 5, y); ctx.lineTo(lineX - 1, y + 4); ctx.lineTo(lineX + 6, y - 4); ctx.stroke();
        } else if (step.status === 'active') {
            ctx.fillStyle = P.gold; ctx.fill();
            drawText(ctx, `${i + 1}`, lineX, y - 6, { color: P.white, size: 11, bold: true, align: 'center', font: 'system-ui' });
        } else {
            ctx.fillStyle = P.creamDark; ctx.fill();
            ctx.strokeStyle = P.creamMid; ctx.lineWidth = 1.5; ctx.stroke();
            drawText(ctx, `${i + 1}`, lineX, y - 6, { color: P.inkLight, size: 10, align: 'center', font: 'system-ui' });
        }
        const labelColor = step.status === 'active' ? P.ink : step.status === 'done' ? P.inkMid : P.inkLight;
        drawText(ctx, step.label, textX, y - 10, { color: labelColor, size: 12, bold: step.status === 'active', font: step.status === 'active' ? 'Georgia' : 'system-ui' });
        drawText(ctx, step.detail, textX, y + 6, { color: step.status === 'active' ? P.gold : P.inkLight, size: 10, font: 'system-ui' });
    });

    // Footer action
    const cardY = H - 56;
    roundRect(ctx, 30, cardY, W - 60, 42, 10);
    ctx.fillStyle = P.gold; ctx.fill();
    drawText(ctx, 'Send Customer Update →', W / 2, cardY + 13, { color: P.white, size: 12, bold: true, align: 'center', font: 'Georgia' });
}

// ─── SCREEN 2 (INNER LEFT): KARIGAR TRACKER ─────────────────────────────────
export function paintInventory(ctx: CanvasRenderingContext2D, W: number, H: number) {
    warmBg(ctx, W, H);

    // Header
    label(ctx, 'KARIGAR TRACKER', 30, 22);
    pill(ctx, '4 Active Jobs', W - 62, 27, P.green, P.greenBg);
    divider(ctx, 30, W - 30, 40);

    // Summary stat row
    const sumW = (W - 70) / 3;
    const sumY = 50;
    [
        { lbl: 'TOTAL GIVEN', val: '312g' },
        { lbl: 'RETURNED', val: '284g' },
        { lbl: 'PENDING', val: '28g', highlight: true },
    ].forEach((s, i) => {
        const sx = 30 + i * (sumW + 5);
        card(ctx, sx, sumY, sumW, 50, 8, i === 2);
        label(ctx, s.lbl, sx + 10, sumY + 8);
        drawText(ctx, s.val, sx + 10, sumY + 24, {
            color: s.highlight ? P.gold : P.ink,
            size: 16, bold: true, font: 'Georgia'
        });
    });

    // Karigar job cards
    const jobs = [
        { name: 'Ramesh Soni',     item: 'Bridal Necklace Set',  wt: '85.5g', due: '18 Mar', status: 'overdue'  },
        { name: 'Suresh Ornaments',item: 'Bangles × 4 pairs',    wt: '62.0g', due: '20 Mar', status: 'active'   },
        { name: 'Mehta & Sons',    item: 'Ring Set (22K)',        wt: '24.2g', due: '22 Mar', status: 'active'   },
        { name: 'Dilip Karigar',   item: 'Earring Jhumkas × 6',  wt: '18.3g', due: '25 Mar', status: 'pending'  },
    ];

    const cardH = 54;
    const cardGap = 8;
    const listStartY = 112;

    jobs.forEach((job, i) => {
        const y = listStartY + i * (cardH + cardGap);
        const isOverdue = job.status === 'overdue';
        const isActive  = job.status === 'active';

        card(ctx, 30, y, W - 60, cardH, 10, isOverdue);

        // Status dot
        ctx.beginPath();
        ctx.arc(48, y + 18, 5, 0, Math.PI * 2);
        ctx.fillStyle = isOverdue ? P.red : isActive ? P.green : P.inkLight;
        ctx.fill();

        // Name + item
        drawText(ctx, job.name, 62, y + 9, { color: P.ink, size: 12, bold: true, font: 'Georgia' });
        drawText(ctx, job.item, 62, y + 27, { color: P.inkMid, size: 10, font: 'system-ui' });

        // Weight badge
        roundRect(ctx, 62, y + 38, job.wt.length * 7 + 12, 13, 6);
        ctx.fillStyle = 'rgba(198,168,124,0.12)'; ctx.fill();
        ctx.strokeStyle = P.gold; ctx.lineWidth = 0.8; ctx.stroke();
        drawText(ctx, job.wt, 68, y + 40, { color: P.gold, size: 9, bold: true, font: 'system-ui' });

        // Due date
        drawText(ctx, 'Due ' + job.due, W - 46, y + 12, {
            color: isOverdue ? P.red : P.inkMid,
            size: 10, align: 'right', font: 'system-ui', bold: isOverdue
        });

        // Status pill right-bottom
        const statusText = isOverdue ? 'OVERDUE' : isActive ? 'IN WORK' : 'QUEUED';
        const statusColor = isOverdue ? P.red : isActive ? P.green : P.inkLight;
        const statusBg = isOverdue ? P.redBg : isActive ? P.greenBg : 'rgba(0,0,0,0.04)';
        const sw2 = statusText.length * 6.5 + 14;
        roundRect(ctx, W - 46 - sw2, y + 32, sw2, 14, 7);
        ctx.fillStyle = statusBg; ctx.fill();
        ctx.strokeStyle = statusColor; ctx.lineWidth = 0.8; ctx.stroke();
        drawText(ctx, statusText, W - 46 - sw2 / 2, y + 34, { color: statusColor, size: 8, bold: true, align: 'center', font: 'system-ui' });
    });

    // CTA button
    const barY = H - 52;
    roundRect(ctx, 30, barY, W - 60, 40, 10);
    ctx.fillStyle = P.gold; ctx.fill();
    drawText(ctx, 'Issue Gold to Karigar →', W / 2, barY + 12, { color: P.white, size: 12, bold: true, align: 'center', font: 'Georgia' });
}

// ─── SCREEN 3 (CENTER): DASHBOARD ───────────────────────────────────────────
export function paintDashboard(ctx: CanvasRenderingContext2D, W: number, H: number) {
    warmBg(ctx, W, H);
    // Erase border — center screen is framed by the laptop bezel already
    roundRect(ctx, 0, 0, W, H, 4);
    ctx.strokeStyle = P.white;
    ctx.lineWidth = 4;
    ctx.stroke();

    // Mac-style dots
    ['#ef4444', '#eab308', '#22c55e'].forEach((c, i) => {
        ctx.fillStyle = c;
        ctx.beginPath(); ctx.arc(28 + i * 18, 24, 5, 0, Math.PI * 2); ctx.fill();
    });
    drawText(ctx, 'DMD GOLD', W - 28, 16, { color: P.gold, size: 14, bold: true, align: 'right', font: 'Georgia', italic: true });
    divider(ctx, 18, W - 18, 40);

    // Stat cards
    const cardW = (W - 80) / 3;
    const stats = [
        { label: 'TOTAL INVENTORY', value: '1,240', unit: 'g', bar: 0.75 },
        { label: 'SALES TODAY', value: '₹ 8.4L', unit: '', bar: 0.52 },
        { label: 'PENDING ORDERS', value: '12', unit: '', bar: 0 },
    ];
    stats.forEach((s, i) => {
        const x = 28 + i * (cardW + 12);
        const y = 52;
        card(ctx, x, y, cardW, 78, 10, i === 1);
        label(ctx, s.label, x + 12, y + 10);
        drawText(ctx, s.value, x + 12, y + 26, { color: P.ink, size: 22, font: 'Georgia' });
        if (s.unit) drawText(ctx, s.unit, x + 14 + ctx.measureText(s.value).width + 4, y + 34, { color: P.inkLight, size: 11, font: 'system-ui' });
        if (s.bar > 0) {
            roundRect(ctx, x + 12, y + 60, cardW - 24, 4, 2);
            ctx.fillStyle = P.creamMid; ctx.fill();
            roundRect(ctx, x + 12, y + 60, (cardW - 24) * s.bar, 4, 2);
            ctx.fillStyle = i === 0 ? P.gold : P.goldDeep; ctx.fill();
        }
        if (i === 2) {
            [P.goldLight, P.gold, P.goldDeep].forEach((ac, ai) => {
                ctx.fillStyle = ac;
                ctx.beginPath(); ctx.arc(x + 18 + ai * 13, y + 64, 8, 0, Math.PI * 2); ctx.fill();
                ctx.strokeStyle = P.white; ctx.lineWidth = 2; ctx.stroke();
            });
            drawText(ctx, '+4', x + 18 + 2 * 13 + 12, y + 60, { color: P.inkMid, size: 9, font: 'system-ui' });
        }
    });

    // Chart card
    const chartY = 144;
    const chartH = H - chartY - 22;
    card(ctx, 28, chartY, W - 56, chartH, 12);

    // Chart header
    drawText(ctx, 'Gold Rate Analytics', 42, chartY + 12, { color: P.ink, size: 13, font: 'Georgia', italic: true });
    pill(ctx, 'Last 12 Months', W - 76, chartY + 20, P.goldDeep, 'rgba(168,136,90,0.1)');

    // Y-axis guide lines
    for (let g = 0; g < 4; g++) {
        const gy = chartY + chartH - 20 - g * ((chartH - 48) / 4);
        ctx.strokeStyle = P.creamMid; ctx.lineWidth = 1;
        ctx.setLineDash([3, 4]);
        ctx.beginPath(); ctx.moveTo(42, gy); ctx.lineTo(W - 42, gy); ctx.stroke();
        ctx.setLineDash([]);
    }

    // Bars
    const bars = [42, 68, 50, 88, 62, 78, 54, 72, 65, 92, 58, 84];
    const bw = (W - 90) / bars.length - 4;
    bars.forEach((h, i) => {
        const bx = 42 + i * (bw + 4);
        const bh = (chartH - 48) * (h / 100);
        const by = chartY + chartH - 20 - bh;
        const grd = ctx.createLinearGradient(bx, by, bx, by + bh);
        grd.addColorStop(0, i === 9 ? P.gold : P.goldLight);
        grd.addColorStop(1, 'rgba(198,168,124,0.15)');
        roundRect(ctx, bx, by, bw, bh, 3);
        ctx.fillStyle = grd; ctx.fill();
        if (i === 9) {
            ctx.strokeStyle = P.gold; ctx.lineWidth = 1.5; ctx.stroke();
        }
    });

    // Tooltip on peak bar
    const peakIdx = 9;
    const bx = 42 + peakIdx * (bw + 4);
    const bh = (chartH - 48) * (92 / 100);
    const by = chartY + chartH - 20 - bh;
    roundRect(ctx, bx - 20, by - 32, 60, 24, 6);
    ctx.fillStyle = P.gold; ctx.fill();
    drawText(ctx, '₹6,842/g', bx + bw / 2 - 20, by - 28, { color: P.white, size: 10, bold: true, font: 'system-ui', align: 'left' });
}

// ─── SCREEN 4 (INNER RIGHT): BILLING ────────────────────────────────────────
export function paintBilling(ctx: CanvasRenderingContext2D, W: number, H: number) {
    warmBg(ctx, W, H);

    label(ctx, 'BILLING & POS', 30, 22);
    pill(ctx, 'LIVE: ₹6,200/g', W - 62, 27, P.goldDeep, 'rgba(168,136,90,0.12)');
    divider(ctx, 30, W - 30, 40);

    // Customer card
    let cy = 50;
    card(ctx, 30, cy, W - 60, 90, 10, true);
    label(ctx, 'CUSTOMER', 46, cy + 10);
    drawText(ctx, 'Mrs. Anjali Sharma', 46, cy + 24, { color: P.ink, size: 14, bold: true, font: 'Georgia' });
    drawText(ctx, '+91 99887 76655', 46, cy + 42, { color: P.inkMid, size: 11, font: 'system-ui' });
    drawText(ctx, 'PAN: ABCDE1234F', 46, cy + 58, { color: P.inkLight, size: 10, font: 'system-ui' });
    pill(ctx, 'LOYAL CUSTOMER', W - 74, cy + 32, P.gold);

    // Line item card
    cy = 150;
    card(ctx, 30, cy, W - 60, 62, 10);
    label(ctx, 'ITEM', 46, cy + 10);
    drawText(ctx, 'Bridal Choker Set (22K · 45.5g)', 46, cy + 24, { color: P.ink, size: 12, bold: true, font: 'Georgia' });
    drawText(ctx, 'Making: ₹450/g · Stone: ₹2,500', 46, cy + 42, { color: P.inkMid, size: 10, font: 'system-ui' });
    drawText(ctx, '₹2,45,000', W - 46, cy + 28, { color: P.ink, size: 14, bold: true, align: 'right', font: 'Georgia' });

    // Totals card
    cy = 222;
    card(ctx, 30, cy, W - 60, 118, 10);
    const rows: [string, string, string, boolean][] = [
        ['Subtotal', '₹2,45,000', P.inkMid, false],
        ['GST (3%)', '₹7,350', P.inkMid, false],
        ['Festive Discount', '− ₹2,350', P.green, true],
    ];
    rows.forEach((r, i) => {
        const ry = cy + 14 + i * 22;
        drawText(ctx, r[0], 46, ry, { color: r[2], size: 11, bold: r[3], font: 'system-ui' });
        drawText(ctx, r[1], W - 46, ry, { color: r[2], size: 11, bold: r[3], align: 'right', font: 'system-ui' });
    });
    ctx.setLineDash([4, 4]); ctx.strokeStyle = P.creamMid;
    ctx.beginPath(); ctx.moveTo(46, cy + 78); ctx.lineTo(W - 46, cy + 78); ctx.stroke(); ctx.setLineDash([]);
    label(ctx, 'NET PAYABLE', 46, cy + 86);
    drawText(ctx, '₹2,50,000', W - 46, cy + 82, { color: P.gold, size: 22, bold: true, align: 'right', font: 'Georgia' });

    // Payment method row
    cy = 350;
    card(ctx, 30, cy, W - 60, 42, 10);
    label(ctx, 'PAYMENT MODE', 46, cy + 8);
    const modes = ['Cash', 'UPI', 'Card', 'Gold'];
    modes.forEach((m, i) => {
        const mx = 46 + i * 58;
        roundRect(ctx, mx, cy + 22, 50, 14, 7);
        if (i === 1) { ctx.fillStyle = P.gold; ctx.fill(); }
        else { ctx.fillStyle = P.creamDark; ctx.fill(); ctx.strokeStyle = P.creamMid; ctx.lineWidth = 1; ctx.stroke(); }
        drawText(ctx, m, mx + 25, cy + 24, { color: i === 1 ? P.white : P.inkMid, size: 9, align: 'center', font: 'system-ui' });
    });

    // CTA button
    const barY = H - 52;
    roundRect(ctx, 30, barY, W - 60, 40, 10);
    ctx.fillStyle = P.gold; ctx.fill();
    drawText(ctx, 'Generate GST Invoice →', W / 2, barY + 12, { color: P.white, size: 12, bold: true, align: 'center', font: 'Georgia' });
}

// ─── SCREEN 5 (OUTER LEFT): PRODUCT CREATION ────────────────────────────────
export function paintProduct(ctx: CanvasRenderingContext2D, W: number, H: number) {
    warmBg(ctx, W, H);

    label(ctx, 'ADD TO MASTER STOCK', 30, 22);
    pill(ctx, '✦ RFID READY', W - 56, 27, P.gold);
    divider(ctx, 30, W - 30, 40);

    // Layout
    const uy = 50;
    const sw = (W - 70) / 2;

    // Photo upload box
    roundRect(ctx, 30, uy, sw, 72, 10);
    const uploadGrd = ctx.createLinearGradient(30, uy, 30, uy + 72);
    uploadGrd.addColorStop(0, P.creamDark);
    uploadGrd.addColorStop(1, P.creamMid);
    ctx.fillStyle = uploadGrd; ctx.fill();
    ctx.setLineDash([5, 5]); ctx.strokeStyle = P.gold; ctx.lineWidth = 1; ctx.stroke(); ctx.setLineDash([]);
    drawText(ctx, '📷', 30 + sw / 2, uy + 16, { size: 20, align: 'center' });
    drawText(ctx, 'UPLOAD PHOTO', 30 + sw / 2, uy + 46, { color: P.gold, size: 9, bold: true, align: 'center', font: 'system-ui' });

    // SKU + HUID inputs
    const sx = 30 + sw + 10;
    [[`SKU`, 'RN-882'], [`HUID`, 'AB123C']].forEach(([lbl, val], i) => {
        const iy = uy + i * 40;
        card(ctx, sx, iy, sw, 32, 7);
        label(ctx, lbl + ':', sx + 10, iy + 8);
        drawText(ctx, val, sx + 46, iy + 7, { color: P.ink, size: 12, bold: true, font: 'Georgia' });
    });

    // Category / Purity
    let fy = 134;
    [['CATEGORY', 'Gold Ring'], ['PURITY', '22K (916)']].forEach((f, i) => {
        const fx = 30 + i * (sw + 10);
        label(ctx, f[0], fx + 4, fy);
        card(ctx, fx, fy + 14, sw, 30, 6);
        drawText(ctx, f[1], fx + 12, fy + 22, { color: P.ink, size: 11, font: 'Georgia' });
        drawText(ctx, '▾', fx + sw - 12, fy + 22, { color: P.inkLight, size: 11, align: 'right', font: 'system-ui' });
    });

    // Weight breakdown card
    fy = 186;
    roundRect(ctx, 30, fy, W - 60, 48, 10);
    ctx.fillStyle = P.creamDark; ctx.fill();
    ctx.strokeStyle = P.gold; ctx.lineWidth = 1; ctx.stroke();
    const wCols = [
        ['GROSS WT', '12.500 g', P.ink],
        ['STONE WT', '−1.200 g', P.red],
        ['NET WT', '11.300 g', P.green],
    ];
    const ww = (W - 80) / 3;
    wCols.forEach((w, i) => {
        const wx = 40 + i * ww;
        label(ctx, w[0], wx, fy + 8);
        drawText(ctx, w[1], wx, fy + 24, { color: w[2], size: 13, bold: true, font: 'Georgia' });
        if (i < 2) { divider(ctx, wx + ww - 8, wx + ww - 8, fy + 6); /* vertical */ }
    });

    // Making + Stone
    fy = 246;
    [['MAKING CHARGE', '₹450 / gm'], ['STONE VALUE', '₹2,500']].forEach((f, i) => {
        const fx = 30 + i * (sw + 10);
        label(ctx, f[0], fx + 4, fy);
        card(ctx, fx, fy + 14, sw, 30, 6);
        drawText(ctx, f[1], fx + 12, fy + 22, { color: P.gold, size: 12, bold: true, font: 'Georgia' });
    });

    // Tag preview mini-card
    fy = 294;
    card(ctx, 30, fy, W - 60, 50, 10, true);
    label(ctx, 'BARCODE PREVIEW', 46, fy + 8);
    // Fake barcode lines
    for (let b = 0; b < 28; b++) {
        const bx = 46 + b * 6.5;
        ctx.fillStyle = b % 3 === 0 ? P.ink : P.inkLight;
        ctx.fillRect(bx, fy + 22, b % 5 === 0 ? 3 : 2, 18);
    }
    drawText(ctx, 'RN-882 · DMD JEWELS', W - 46, fy + 30, { color: P.inkMid, size: 9, align: 'right', font: 'system-ui' });

    // CTA
    const cardY = H - 52;
    roundRect(ctx, 30, cardY, W - 60, 40, 10);
    ctx.fillStyle = P.gold; ctx.fill();
    drawText(ctx, 'Save & Print Barcode →', W / 2, cardY + 12, { color: P.white, size: 12, bold: true, align: 'center', font: 'Georgia' });
}

// ─── HOOK ────────────────────────────────────────────────────────────────────
type PaintFn = (ctx: CanvasRenderingContext2D, W: number, H: number) => void;

export function useScreenTexture(paintFn: PaintFn, width: number, height: number): THREE.CanvasTexture {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const texture = useMemo(() => {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        canvasRef.current = canvas;
        const ctx = canvas.getContext('2d')!;
        paintFn(ctx, width, height);
        const tex = new THREE.CanvasTexture(canvas);
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.flipY = false;
        tex.needsUpdate = true;
        return tex;
    }, [paintFn, width, height]);

    useEffect(() => () => { texture.dispose(); }, [texture]);
    return texture;
}