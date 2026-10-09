export type FeaturePage = {
  slug: string;
  path: string;
  navLabel: string;
  title: string;
  description: string;
  keywords: string[];
  eyebrow: string;
  h1: string;
  intro: string;
  benefits: { title: string; text: string }[];
  steps: string[];
  faqs: { question: string; answer: string }[];
  related: string[];
  // Has its own hand-built route instead of the shared [slug] template
  customPage?: boolean;
};

export const featurePages: FeaturePage[] = [
  {
    slug: 'custom-order-management',
    path: '/features/custom-order-management',
    navLabel: 'Custom Order Management',
    title: 'Jewellery Order Management Software — Karigar Job Cards & Customer Receipts',
    description: 'Take custom jewellery orders, assign each item to a karigar with a return date, and print karigar job cards and customer order receipts. Order management for retailers and wholesalers, from ₹6,000/year.',
    keywords: ['jewellery order management software', 'jewellery job card software', 'custom jewellery order software', 'karigar job card', 'jewellery order tracking', 'jewellery order receipt'],
    eyebrow: 'Custom Order Management',
    h1: 'Track every custom order — from the counter to the karigar and back',
    intro: 'In India, a lot of jewellery is sold on order: the customer chooses a design, an approximate weight and a delivery date, and the piece is made by a karigar. DMD Gold tracks that whole cycle — for retail showrooms taking customer orders and for wholesalers taking orders from retailers.',
    benefits: [
      { title: 'Create the order in minutes', text: 'Record each item with its design, approximate weight and the delivery date promised to the customer.' },
      { title: 'Confirm, then assign', text: 'Once the order is confirmed, assign each item to a karigar — different items in the same order can go to different karigars.' },
      { title: 'Return dates per item', text: 'Set the date you expect each piece back from the karigar, so you know what is due and when.' },
      { title: 'Revoke and reassign', text: 'If something goes wrong, revoke an item from one karigar and give it to another without redoing the order.' },
      { title: 'Karigar job cards', text: 'Download proper job cards to hand to your karigars with the details of the work.' },
      { title: 'Customer order receipt', text: 'Give your customer a professional order receipt the moment the order is taken.' },
    ],
    steps: [
      'Create the order with design, approximate weight and delivery date — and give the customer their receipt.',
      'Mark the order as confirmed.',
      'Assign each item to a karigar with a return date, and download job cards.',
      'Track every item until it is back from the karigar and delivered — reassign if anything changes.',
    ],
    faqs: [
      { question: 'Can I split one order between different karigars?', answer: 'Yes. Each item in an order can be assigned to a different karigar, each with its own return date.' },
      { question: 'What if a karigar can’t complete an item?', answer: 'You can revoke the assignment and assign the item to another karigar, without recreating the order.' },
      { question: 'Do I get documents for the karigar and the customer?', answer: 'Yes. Download job cards for your karigars and an order receipt for your customer.' },
      { question: 'Can wholesalers use it for orders from retailers?', answer: 'Yes. Wholesalers and manufacturers can take orders from retailers or customers and assign each item to their karigars in exactly the same way.' },
      { question: 'When can items be assigned to karigars?', answer: 'Once you change the order status to confirmed, you can assign each item to a karigar and set its return date.' },
      { question: 'Is order management in both editions?', answer: 'Yes. Custom order management is available in both the Retailer Edition (₹6,000/year) and the Wholesaler Edition (₹12,000/year).' },
    ],
    related: ['karigar-gold-tracking', 'gst-e-invoice-jewellery', 'b2b-wholesale-order-app'],
    customPage: true,
  },
  {
    slug: 'karigar-gold-tracking',
    path: '/features/karigar-gold-tracking',
    navLabel: 'Karigar Gold Tracking',
    title: 'Karigar Management Software — Track Gold Issued to Karigars',
    description: 'Track every gram of gold issued to and returned by your karigars with outward and inward challans, automatic fine-gold balance and ghat tracking. DMD Gold karigar management software, from ₹6,000/year.',
    keywords: ['karigar management software', 'karigar gold tracking', 'jewellery karigar software', 'karigar challan software', 'gold issue receive software jewellery', 'ghat tracking jewellery'],
    eyebrow: 'Karigar Management',
    h1: 'Know exactly how much gold every karigar holds',
    intro: 'Most jewellers still track gold given to karigars in a register — and lose grams to mistakes, missing entries and disputes. DMD Gold replaces the register with outward and inward challans that calculate each karigar’s fine-gold balance automatically, so you always know what is with whom.',
    benefits: [
      { title: 'Outward & inward challans', text: 'Record gold issued to a karigar on an outward challan and finished goods returned on an inward challan. Every movement is dated and signed.' },
      { title: 'Automatic fine-gold balance', text: 'The software converts gross weight and purity to fine gold and keeps a running balance per karigar — no manual calculation.' },
      { title: 'Ghat (gold loss) monitoring', text: 'See the loss on every job and spot karigars whose ghat is higher than agreed, before it becomes a dispute.' },
      { title: 'Complete karigar profiles', text: 'Keep Aadhaar, PAN and GST details, payment history and every past job for each artisan in one place.' },
      { title: 'Signed paper trail', text: 'Mandatory signatures on every challan give you a clear record for every gram that leaves and returns to your shop.' },
      { title: 'Multiple karigars, multiple locations', text: 'Manage all your artisans from one dashboard, wherever they work.' },
    ],
    steps: [
      'Add the karigar with Aadhaar, PAN and GST details.',
      'Issue gold on an outward challan — weight and purity are recorded and the karigar signs.',
      'Receive finished pieces on an inward challan — the fine-gold balance and ghat update automatically.',
      'Review each karigar’s balance, history and payments any time, or export to Excel.',
    ],
    faqs: [
      { question: 'Can I track how much gold is pending with each karigar?', answer: 'Yes. DMD Gold keeps a running fine-gold balance for every karigar, calculated from each outward and inward challan, so you can see pending gold at a glance.' },
      { question: 'Does DMD Gold calculate ghat (gold loss)?', answer: 'Yes. The software records the weight issued and returned on every job and shows the loss, so you can compare it with the agreed ghat.' },
      { question: 'Is karigar management available in both editions?', answer: 'Yes. Customer and karigar management is included in both the Retailer Edition (₹6,000/year) and the Wholesaler Edition (₹12,000/year).' },
    ],
    related: ['custom-order-management', 'huid-hallmark-tracking', 'gst-e-invoice-jewellery'],
  },
  {
    slug: 'huid-hallmark-tracking',
    path: '/features/huid-hallmark-tracking',
    navLabel: 'HUID & Stock Tracking',
    title: 'HUID Tracking Software for Jewellery Shops — Hallmark & Barcode Stock',
    description: 'Tag every piece with its HUID, print barcode labels and count your whole showroom by scanning. DMD Gold jewellery stock software with HUID hallmark tracking, from ₹6,000/year.',
    keywords: ['HUID tracking software', 'hallmark software jewellery', 'jewellery stock management software', 'jewellery barcode software', 'jewellery inventory software india'],
    eyebrow: 'HUID & Inventory',
    h1: 'Every piece tagged with its HUID — and counted in minutes',
    intro: 'With hallmarking mandatory, every piece needs its HUID recorded and traceable. DMD Gold stores the HUID with each item’s gross weight, net weight and purity, prints barcode tags, and lets you scan your entire showroom for a stock-take.',
    benefits: [
      { title: 'HUID on every item', text: 'Add the HUID while creating a product or through bulk upload, then search and trace any piece by its HUID.' },
      { title: 'Barcode & QR tags', text: 'Print barcode tags with the item’s details and scan them at the counter to bill in seconds.' },
      { title: 'Scan-based stock-take', text: 'Scan the showroom and match physical stock against the software, instead of counting against a ledger.' },
      { title: 'Gross, net weight & purity', text: 'A stock register that understands jewellery — weight, purity and stone details for every item.' },
      { title: 'Every metal in one place', text: 'Gold, diamond (natural & lab-grown), silver, platinum, bullion, loose stones and gems, each with the right fields.' },
      { title: 'Fast & slow movers', text: 'See which designs sell and which sit in the tray, and export stock reports to Excel for your CA.' },
    ],
    steps: [
      'Add products one by one or in bulk, with HUID, weight and purity.',
      'Print barcode tags on a DMD barcode printer.',
      'Scan tags at the billing counter — the item, HUID and price fill in automatically.',
      'Scan the showroom to reconcile stock whenever you need.',
    ],
    faqs: [
      { question: 'Can I search my stock by HUID number?', answer: 'Yes. Every product can carry its HUID, and you can search, filter and trace any piece by HUID across your inventory.' },
      { question: 'Do I need special hardware?', answer: 'You can scan with a phone camera, or use the barcode printer and scanner we supply (see the pricing page for hardware add-ons).' },
      { question: 'Can I upload my existing stock in bulk?', answer: 'Yes. Bulk upload lets you add hundreds of products in one go, including HUID numbers.' },
    ],
    related: ['karigar-gold-tracking', 'gst-e-invoice-jewellery'],
  },
  {
    slug: 'gst-e-invoice-jewellery',
    path: '/features/gst-e-invoice-jewellery',
    navLabel: 'GST Billing & E-Invoice',
    title: 'GST Billing & E-Invoice Software for Jewellers — IRN in One Click',
    description: 'Jewellery GST billing with daily gold rate, making charges and old-gold (URD) exchange, plus one-click e-invoices with IRN and QR code. DMD Gold, from ₹6,000/year.',
    keywords: ['jewellery billing software', 'jewellery GST billing software', 'e-invoice software jewellery', 'jewellery e-invoice', 'gold billing software', 'URD invoice software'],
    eyebrow: 'Billing & E-Invoice',
    h1: 'GST bills and e-invoices built for how jewellers sell',
    intro: 'Generic billing software doesn’t understand gold rate, making charges, wastage or old-gold exchange. DMD Gold does — and wholesalers can generate a government-valid e-invoice with IRN and QR code in one click.',
    benefits: [
      { title: 'Jewellery-aware billing', text: 'Daily gold rate, making charges, wastage and auto CGST/SGST/IGST on every bill, linked to the customer’s profile.' },
      { title: 'Old-gold (URD) exchange', text: 'Generate URD purchase invoices and deduct old gold from a new bill in one workflow.' },
      { title: 'One-click e-invoice', text: 'The Wholesaler Edition generates the IRN and QR-coded e-invoice from your invoice data — no re-typing on the portal.' },
      { title: 'Every invoice type', text: 'Retail and B2B GST invoices, metal, diamond, bullion and loose-stone invoices, labour invoices and challans.' },
      { title: 'Quotations', text: 'Make formal quotations for wedding sets and large orders, then convert them to invoices.' },
      { title: 'Purchase history & CA exports', text: 'Record what you bought, from whom and when, and export sales, purchase and GST data to Excel for your CA.' },
    ],
    steps: [
      'Enter today’s gold rate once.',
      'Scan the item or pick it from stock — weight, purity and making charges fill in.',
      'Add old gold for exchange if needed; GST is calculated automatically.',
      'Wholesalers: click once to generate the e-invoice with IRN and QR code.',
    ],
    faqs: [
      { question: 'Does DMD Gold generate e-invoices with IRN?', answer: 'Yes. The Wholesaler Edition includes an integrated e-invoice module that generates the IRN and QR code. E-invoice packs start at ₹3 per invoice and go down to ₹1.95 per invoice at volume.' },
      { question: 'Can I bill old-gold exchange?', answer: 'Yes. DMD Gold creates URD purchase invoices for old gold and deducts the value from the new bill automatically.' },
      { question: 'Can I export GST data for my CA?', answer: 'Yes. Sales, purchases, stock and GST data export to Excel in a format your CA can use.' },
    ],
    related: ['huid-hallmark-tracking', 'b2b-wholesale-order-app'],
  },
  {
    slug: 'b2b-wholesale-order-app',
    path: '/features/b2b-wholesale-order-app',
    navLabel: 'Wholesale Order App',
    title: 'B2B Jewellery Wholesale Order App — Let Retailers Order Online',
    description: 'Give your retailers an online catalogue to browse, add to cart and place orders, with KYC-verified buyers, rate locking and order tracking. DMD Gold Wholesaler Edition, ₹12,000/year.',
    keywords: ['B2B jewellery app', 'jewellery wholesale order app', 'jewellery wholesale software india', 'B2B jewellery platform', 'jewellery catalogue app for retailers'],
    eyebrow: 'B2B Wholesale Marketplace',
    h1: 'Let retailers order from you online — without travelling to your shop',
    intro: 'Retailers in smaller cities still travel for days to wholesale markets. With DMD Gold, wholesalers and manufacturers list their catalogue online and retailers browse, add to cart and order from their own shop — while you control what is visible and when rates are locked.',
    benefits: [
      { title: 'Your digital catalogue', text: 'List every product with photos, videos, weight, purity and certificates. Nothing goes live without supervisor approval.' },
      { title: 'Shopping-app experience for retailers', text: 'Search and filters, wishlist, cart and checkout with purchase-order support — from a browser or phone.' },
      { title: 'KYC-verified buyers', text: 'Every retailer is verified with PAN, GST and Aadhaar before they can see prices or order.' },
      { title: 'Rate locking & order tracking', text: 'Track each order from cart to rate lock, invoice, payment, dispatch and delivery in one dashboard.' },
      { title: 'Enrol your retailers free', text: 'Bring your existing retailer network onto the platform at no cost to them.' },
      { title: 'Role-based staff access', text: 'Separate access for product upload, billing, supervision and admin keeps operations secure.' },
    ],
    steps: [
      'Upload your catalogue in bulk and approve what goes live.',
      'Invite your retailers — they complete KYC and get access.',
      'Retailers browse, add to cart and place orders online.',
      'Lock the rate, invoice (with e-invoice) and track dispatch to delivery.',
    ],
    faqs: [
      { question: 'Do my retailers have to pay to use the app?', answer: 'No. Wholesalers on the Wholesaler Edition (₹12,000/year) can enrol their retailers on the DMD platform free.' },
      { question: 'Can I control which products retailers see?', answer: 'Yes. Every listing needs supervisor approval to go live, and you can edit, re-price or hide any product with one click.' },
      { question: 'What happens to the gold rate after an order?', answer: 'Once the rate is confirmed and locked, the order cannot be cancelled — protecting both you and the retailer from rate swings.' },
    ],
    related: ['gst-e-invoice-jewellery', 'jewellery-crm', 'karigar-gold-tracking'],
  },
  {
    slug: 'jewellery-software-pune',
    path: '/jewellery-software-pune',
    navLabel: 'Jewellery Software in Pune',
    title: 'Jewellery Software in Pune — Billing, Stock & Karigar Tracking',
    description: 'DMD Gold is jewellery software built in Wagholi, Pune by a jeweller with 25+ years in the trade. Billing, HUID stock, karigar tracking and B2B wholesale orders. Visit or book a free demo.',
    keywords: ['jewellery software pune', 'jewellery billing software pune', 'gold shop software pune', 'jewellery software maharashtra', 'jewellery software near me'],
    eyebrow: 'Jewellery Software in Pune',
    h1: 'Jewellery software from Pune, built by a Pune jeweller',
    intro: 'DMD Gold is designed and supported from our office in Wagholi, Pune. Jewellers in Pune and across Maharashtra can visit us, see the software running, and get set up with in-person help — and we support shops across India remotely.',
    benefits: [
      { title: 'Visit our Pune office', text: 'Office No-01, Amaryllis, Domkhel Rd, Wagholi, Pune 412207. Open Monday to Saturday, 9am–6pm.' },
      { title: 'Built by a jeweller', text: 'Founder Dhanaji Macchindra Dabade spent 25+ years in the jewellery and bullion trade before building DMD Gold.' },
      { title: 'Free demo, no commitment', text: 'See every module running on real jewellery workflows before you decide.' },
      { title: 'Retail & wholesale editions', text: 'Retailer Edition at ₹6,000/year and Wholesaler Edition at ₹12,000/year, support included.' },
      { title: 'Hardware from us', text: 'Barcode label printers, scanners, ribbons and labels available alongside the software.' },
      { title: 'Phone & WhatsApp support', text: 'Call or WhatsApp +91 93711 23699 — in English or Hindi.' },
    ],
    steps: [
      'Book a free demo — at our Wagholi office or online.',
      'Choose the Retailer or Wholesaler Edition.',
      'Add your stock and karigars — one by one or by bulk upload.',
      'Start billing — with phone and WhatsApp support when you need it.',
    ],
    faqs: [
      { question: 'Where is DMD Gold’s office in Pune?', answer: 'Office No-01, Amaryllis, Domkhel Rd, Wagholi, Pune, Maharashtra 412207. We are open Monday to Saturday, 9am to 6pm.' },
      { question: 'How do I see a demo in Pune?', answer: 'Book a free demo using the form on this page or WhatsApp +91 93711 23699. You can see DMD Gold at our Wagholi office or online.' },
      { question: 'Do you support jewellers outside Pune?', answer: 'Yes. DMD Gold is used by jewellers across India, with remote setup, phone and WhatsApp support.' },
    ],
    related: ['karigar-gold-tracking', 'huid-hallmark-tracking', 'b2b-wholesale-order-app'],
  },
  {
    slug: 'jewellery-crm',
    path: '/features/jewellery-crm',
    navLabel: 'Jewellery CRM',
    title: 'Jewellery CRM Software — Customer Records, Birthday Offers & Repeat Sales',
    description: 'A digital customer register for jewellers: purchase history for every customer, loyal-customer insights, birthday offers and targeted campaigns — plus retailer payment history for wholesalers. DMD Gold, from ₹6,000/year.',
    keywords: ['jewellery CRM software', 'CRM for jewellery shop', 'jewellery customer management software', 'jewellery customer database', 'jewellery birthday offers software'],
    eyebrow: 'Customer Management (CRM)',
    h1: 'Know every customer — and bring them back',
    intro: 'Jewellery is a relationship business: the same families come back for weddings, festivals and anniversaries. DMD Gold replaces the paper customer register with a simple digital one, so you remember what every customer bought and can reach them at the right moment.',
    benefits: [
      { title: 'One digital customer register', text: 'Every customer in one place instead of scattered registers, diaries and phone contacts.' },
      { title: 'Purchase history per customer', text: 'Every bill is linked to the customer’s profile, so you can see what they bought and when.' },
      { title: 'Spot your loyal customers', text: 'Identify repeat customers so you can give them the attention — and offers — they deserve.' },
      { title: 'Birthday offers', text: 'Send personalised birthday offers to customers automatically, so you are remembered on the days that matter.' },
      { title: 'Targeted campaigns', text: 'Share new designs and exclusive offers directly with existing customers.' },
      { title: 'For wholesalers: retailer history', text: 'See your top retailers by order volume, each retailer’s payment history and outstanding balance, and export reports to Excel.' },
    ],
    steps: [
      'Customers are added as you bill them — no separate data entry.',
      'Every invoice is linked to the customer’s profile automatically.',
      'Look up any customer to see their full purchase history.',
      'Send birthday wishes, new designs and offers to the right customers.',
    ],
    faqs: [
      { question: 'Do I have to enter customers separately?', answer: 'No. Customers are linked to their bills as you invoice, so your customer register builds itself as you work.' },
      { question: 'Can I send birthday offers?', answer: 'Yes. DMD Gold can send personalised birthday offers to your customers automatically.' },
      { question: 'Is CRM included in both editions?', answer: 'Yes. Customer management is included in the Retailer Edition (₹6,000/year), and the Wholesaler Edition (₹12,000/year) includes client and order history for your retailers, with payment history and outstanding balances.' },
    ],
    related: ['purchase-history', 'custom-order-management', 'gst-e-invoice-jewellery'],
  },
  {
    slug: 'purchase-history',
    path: '/features/purchase-history',
    navLabel: 'Purchase History',
    title: 'Purchase Records Software for Jewellers — What You Bought, From Whom',
    description: 'Keep a complete digital record of every purchase — what you bought, from which supplier and when. Purchase history for jewellery retailers and wholesalers, included in DMD Gold from ₹6,000/year.',
    keywords: ['jewellery purchase register software', 'jewellery purchase records', 'supplier purchase history jewellery', 'jewellery purchase book software', 'gold purchase records'],
    eyebrow: 'Purchase History',
    h1: 'Every purchase recorded — what you bought, from whom, and when',
    intro: 'Most jewellers know their sales well but keep purchases in old bills, diaries and WhatsApp chats. DMD Gold gives retailers and wholesalers one simple place to record every purchase, so the full history is always there when you need it.',
    benefits: [
      { title: 'One place for all purchases', text: 'No more searching through files of supplier bills — every purchase is recorded in the software.' },
      { title: 'What, from whom, when', text: 'Each record shows what you bought, which supplier you bought it from and the date.' },
      { title: 'Know your suppliers', text: 'See at a glance what you have bought from each supplier over time.' },
      { title: 'Ready when questions come up', text: 'When a supplier, partner or your CA asks about a past purchase, the record is already there.' },
      { title: 'For retailers and wholesalers', text: 'Available in both the Retailer and Wholesaler editions.' },
      { title: 'Simple to keep up', text: 'Adding a purchase takes moments, so the record actually stays up to date.' },
    ],
    steps: [
      'Open Purchase History and add the purchase.',
      'Enter what you bought, the supplier and the date.',
      'Your record is saved alongside all earlier purchases.',
      'Look back at your purchase history any time.',
    ],
    faqs: [
      { question: 'Is purchase history available for retailers?', answer: 'Yes. Purchase history is included in both the Retailer Edition (₹6,000/year) and the Wholesaler Edition (₹12,000/year).' },
      { question: 'What does a purchase record include?', answer: 'What you bought, which supplier you bought it from, and when.' },
      { question: 'Why record purchases if I already keep supplier bills?', answer: 'Paper bills are hard to search and easy to lose. A digital record lets you see your purchase history — and what you have bought from each supplier — in one place.' },
    ],
    related: ['jewellery-crm', 'gst-e-invoice-jewellery', 'huid-hallmark-tracking'],
  },
];

export const getFeaturePage = (slug: string) => featurePages.find((p) => p.slug === slug);
