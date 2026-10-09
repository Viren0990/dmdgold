export type GuideBlock =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'callout'; text: string }
  | { type: 'table'; head: string[]; rows: string[][] };

export type Guide = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  category: 'Guide' | 'Comparison';
  readMinutes: number;
  published: string;
  updated: string;
  summary: string;
  sections: { heading: string; blocks: GuideBlock[] }[];
  faqs: { question: string; answer: string }[];
  cta: { label: string; href: string; text: string };
  regulatoryNote?: boolean;
  disclaimer?: string;
};

const SIMPLE_UI =
  'DMD Gold is made only for the jewellery trade, with a simple screen that shop owners, family members and counter staff can learn without any computer background.';

export const guides: Guide[] = [
  {
    slug: 'how-to-track-gold-given-to-karigars',
    title: 'How to Track Gold Given to Karigars (Without Losing a Gram)',
    description: 'A practical guide for jewellers on tracking gold issued to karigars — issue and receive challans, fine-gold balance, ghat (loss) and the records you should keep.',
    keywords: ['how to track gold given to karigar', 'karigar gold tracking', 'karigar ghat calculation', 'karigar challan', 'karigar fine gold balance'],
    category: 'Guide',
    readMinutes: 6,
    published: '2026-10-09',
    updated: '2026-10-09',
    summary: 'Record every issue and receipt on a signed challan, convert everything to fine gold, keep a running balance per karigar, and compare actual loss with the agreed ghat on every job.',
    sections: [
      {
        heading: 'Why karigar gold goes missing',
        blocks: [
          { type: 'p', text: 'Almost every jeweller who works with karigars has faced it: the register says one thing, the karigar says another, and a few grams are unaccounted for. Usually nobody is dishonest — the problem is the record-keeping. Entries are made later from memory, purity is not noted, returned pieces are weighed but not converted to fine gold, and loss (ghat) is never compared against what was agreed.' },
          { type: 'p', text: 'The fix is a simple, consistent routine. It works on paper, but it is far easier — and far harder to get wrong — in software built for jewellers.' },
        ],
      },
      {
        heading: 'Step 1: Issue gold on a signed outward challan',
        blocks: [
          { type: 'p', text: 'Every time gold leaves your shop for a karigar, record it on an outward (issue) challan at that moment — not at the end of the day.' },
          { type: 'ul', items: ['Karigar name and date', 'Gross weight issued', 'Purity (e.g. 22K / 91.6%, 18K / 75%)', 'What the gold is for — the order or design', 'Signatures of the person issuing and the karigar'] },
        ],
      },
      {
        heading: 'Step 2: Convert everything to fine gold',
        blocks: [
          { type: 'p', text: 'Karigars receive and return gold at different purities, so gross weight alone is misleading. Convert to fine (pure) gold: fine gold = gross weight × purity.' },
          { type: 'callout', text: 'Example: 50 g of 22K (91.6%) gold issued = 45.8 g fine gold. If the karigar returns 48.5 g of 22K jewellery, that is 44.43 g fine gold — the difference of 1.37 g fine is the loss on that job, before any scrap returned.' },
        ],
      },
      {
        heading: 'Step 3: Receive finished work on an inward challan',
        blocks: [
          { type: 'p', text: 'When pieces come back, record them on an inward (receive) challan: weight, purity, any scrap or leftover gold returned, and signatures. Weigh in front of the karigar so both sides agree on the numbers.' },
        ],
      },
      {
        heading: 'Step 4: Keep a running balance per karigar',
        blocks: [
          { type: 'p', text: 'For each karigar, the fine-gold balance is simply: total fine gold issued − total fine gold received (jewellery + scrap). This is the gold that is with the karigar right now. Check it every week; if it keeps growing while work is not pending, ask why.' },
        ],
      },
      {
        heading: 'Step 5: Compare actual loss with agreed ghat',
        blocks: [
          { type: 'p', text: 'Agree the allowed ghat (loss percentage) with each karigar for each type of work. After every job, compare the actual loss with the agreed figure. Small, consistent differences are normal; large or growing ones need a conversation early — before they become a dispute.' },
        ],
      },
      {
        heading: 'Doing this in software',
        blocks: [
          { type: 'p', text: `${SIMPLE_UI} In DMD Gold, you create outward and inward challans in a few taps; the software converts weight and purity to fine gold, keeps every karigar's balance up to date, and shows the loss on each job automatically. Signatures are mandatory on every challan, and karigar profiles hold Aadhaar, PAN and GST details with full history.` },
        ],
      },
    ],
    faqs: [
      { question: 'How do I calculate fine gold?', answer: 'Multiply the gross weight by the purity. For example, 10 g of 22K (91.6%) gold contains 9.16 g of fine gold.' },
      { question: 'What is ghat in jewellery making?', answer: 'Ghat is the gold lost during manufacturing — through filing, polishing, soldering and melting. Jewellers usually agree an allowed ghat percentage with each karigar.' },
      { question: 'How often should I check karigar balances?', answer: 'Weekly is a good habit, and always before giving a karigar new gold for a large order.' },
    ],
    cta: { label: 'See karigar gold tracking', href: '/features/karigar-gold-tracking', text: 'DMD Gold calculates fine-gold balance and ghat for every karigar automatically.' },
  },
  {
    slug: 'huid-hallmarking-rules-for-jewellery-shops',
    title: 'HUID Hallmarking Rules for Jewellery Shops — Explained Simply',
    description: 'What HUID is, what a BIS hallmark contains, what jewellery shops must do, and how to keep HUID records for every piece in your stock.',
    keywords: ['HUID rules for jewellers', 'HUID hallmark explained', 'BIS hallmarking rules', 'HUID number jewellery', 'hallmark jewellery shop india'],
    category: 'Guide',
    readMinutes: 6,
    published: '2026-10-09',
    updated: '2026-10-09',
    regulatoryNote: true,
    summary: 'Gold jewellery sold in hallmarking-mandatory districts must carry a BIS hallmark with a 6-character HUID. Jewellers need BIS registration, and should record the HUID of every piece in stock and on every bill.',
    sections: [
      {
        heading: 'What is HUID?',
        blocks: [
          { type: 'p', text: 'HUID stands for Hallmark Unique Identification. It is a 6-character alphanumeric code given to each hallmarked piece of gold jewellery by an Assaying & Hallmarking Centre (AHC) recognised by the Bureau of Indian Standards (BIS). No two pieces share the same HUID, so any piece can be traced back to the jeweller and the centre that hallmarked it.' },
          { type: 'p', text: 'Customers can verify a piece’s HUID themselves using the BIS CARE app, so a correct, well-kept record matters for your shop’s trust.' },
        ],
      },
      {
        heading: 'What a BIS hallmark contains',
        blocks: [
          { type: 'p', text: 'Today’s hallmark has three marks:' },
          { type: 'ol', items: ['The BIS standard mark (logo)', 'Purity / fineness grade — for example 22K916, 18K750, 14K585', 'The 6-character HUID'] },
          { type: 'p', text: 'Older hallmarks also included the jeweller’s mark and year mark. From 1 April 2023, gold jewellery sold in hallmarking-mandatory areas must carry the HUID-based hallmark.' },
        ],
      },
      {
        heading: 'What jewellery shops need to do',
        blocks: [
          { type: 'ul', items: [
            'Register with BIS if you sell gold jewellery in a district where hallmarking is mandatory (small jewellers below the turnover limit set by BIS may be exempt — check the current rule).',
            'Get pieces hallmarked at a BIS-recognised AHC before selling them.',
            'Record the HUID of every piece you hold in stock.',
            'Mention the HUID and purity on the customer’s bill.',
            'Know the exemptions — BIS has excluded some items (for example very light jewellery below the notified weight and certain traditional types) from mandatory hallmarking.',
          ] },
        ],
      },
      {
        heading: 'Keeping HUID records that hold up',
        blocks: [
          { type: 'p', text: 'The practical challenge is not the rule — it is keeping track of hundreds or thousands of HUIDs. A paper list cannot tell you instantly whether a HUID is in stock, sold, or out with a karigar for repair.' },
          { type: 'ul', items: ['Enter the HUID when the piece enters stock, along with gross weight, net weight and purity', 'Print it on the barcode tag so it is never re-typed at billing', 'Let the bill pick up the HUID automatically when the tag is scanned', 'Search by HUID when a customer comes back with a piece'] },
        ],
      },
      {
        heading: 'Doing this in software',
        blocks: [
          { type: 'p', text: `${SIMPLE_UI} DMD Gold stores the HUID with every item — added one by one or through bulk upload — prints barcode tags, and lets you search and trace any piece by its HUID. Scan the tag at the counter and the item, HUID and price fill in on the bill.` },
        ],
      },
    ],
    faqs: [
      { question: 'How many characters is a HUID?', answer: 'A HUID is a 6-character alphanumeric code, unique to each hallmarked piece.' },
      { question: 'Can a customer check a HUID?', answer: 'Yes. Customers can verify a HUID using the BIS CARE app.' },
      { question: 'Is hallmarking mandatory everywhere in India?', answer: 'Hallmarking is mandatory in districts notified by BIS, and the list has been expanded in phases. Check the current BIS notification for your district.' },
    ],
    cta: { label: 'See HUID & stock tracking', href: '/features/huid-hallmark-tracking', text: 'Tag, search and bill every piece by HUID in DMD Gold.' },
  },
  {
    slug: 'e-invoice-for-jewellery-wholesalers',
    title: 'E-Invoice for Jewellery Wholesalers: When It Applies and How to Do It',
    description: 'When GST e-invoicing applies to jewellery wholesalers and manufacturers, what IRN and the QR code are, and a simple step-by-step process.',
    keywords: ['e-invoice for jewellers', 'e-invoice jewellery wholesaler', 'IRN jewellery', 'gst e-invoice threshold', 'e-invoice gold'],
    category: 'Guide',
    readMinutes: 6,
    published: '2026-10-09',
    updated: '2026-10-09',
    regulatoryNote: true,
    summary: 'If your aggregate annual turnover has crossed ₹5 crore in any financial year since 2017-18, your B2B invoices must be e-invoices: registered on the Invoice Registration Portal to get an IRN and a signed QR code.',
    sections: [
      {
        heading: 'Does e-invoicing apply to you?',
        blocks: [
          { type: 'p', text: 'Since 1 August 2023, GST e-invoicing is mandatory for businesses whose aggregate annual turnover (AATO) has exceeded ₹5 crore in any financial year from 2017-18 onwards. Once you cross the limit in any year, the requirement continues even if turnover later falls.' },
          { type: 'ul', items: ['Applies to B2B invoices (sales to GST-registered buyers — retailers, other wholesalers), credit notes and debit notes, and exports', 'Does not apply to B2C bills to walk-in retail customers', 'Many jewellery wholesalers and manufacturers cross ₹5 crore quickly because of gold value — check your AATO even if your margins are small'] },
        ],
      },
      {
        heading: 'What is an IRN and the QR code?',
        blocks: [
          { type: 'p', text: 'An e-invoice is a normal GST invoice that you report to the government’s Invoice Registration Portal (IRP). The portal validates it and returns an IRN (Invoice Reference Number) and a digitally signed QR code. The IRN and QR code must appear on the invoice you give the buyer. The details also flow into GST returns automatically.' },
          { type: 'callout', text: 'Time limit: larger taxpayers must report invoices to the IRP within a set number of days of the invoice date, or the portal will reject them. The turnover level this applies to has been lowered over time — check the latest GSTN advisory.' },
        ],
      },
      {
        heading: 'How to generate an e-invoice — step by step',
        blocks: [
          { type: 'ol', items: ['Create the GST invoice with correct buyer GSTIN, HSN code (7113 for gold jewellery), weights, rate and tax', 'Submit the invoice data to the IRP (directly or through your software)', 'Receive the IRN and signed QR code', 'Print or share the invoice with the IRN and QR code on it', 'If there is a mistake, cancel the IRN within the allowed window and issue a fresh invoice'] },
          { type: 'p', text: 'Doing this by hand on the portal for every invoice is slow and error-prone — the biggest risk is re-typing invoice data and getting a GSTIN, HSN or amount wrong.' },
        ],
      },
      {
        heading: 'Doing this in software',
        blocks: [
          { type: 'p', text: `${SIMPLE_UI} In the DMD Gold Wholesaler Edition, e-invoicing is built in: you make the invoice as usual and click once — the software sends the data, gets the IRN and QR code, and gives you the finished e-invoice. Bulk e-invoices for multi-piece orders are supported, and e-invoice packs start at ₹3 per invoice and go down to ₹1.95 at volume.` },
        ],
      },
    ],
    faqs: [
      { question: 'What is the e-invoice turnover limit?', answer: 'E-invoicing is mandatory when aggregate annual turnover has exceeded ₹5 crore in any financial year from 2017-18 onwards (effective 1 August 2023).' },
      { question: 'Do retail jewellery bills need e-invoices?', answer: 'No. E-invoicing applies to B2B invoices, credit and debit notes and exports — not B2C bills to retail customers.' },
      { question: 'What is the HSN code for gold jewellery?', answer: 'Gold jewellery falls under HSN 7113 (articles of jewellery of precious metal).' },
    ],
    cta: { label: 'See GST billing & e-invoice', href: '/features/gst-e-invoice-jewellery', text: 'Generate the IRN and QR code in one click from your DMD Gold invoice.' },
  },
  {
    slug: 'how-to-manage-custom-jewellery-orders',
    title: 'How to Manage Custom Jewellery Orders — From Counter to Karigar and Back',
    description: 'A step-by-step system for custom jewellery orders: taking the order, confirming it, assigning items to karigars, job cards, return dates and customer receipts.',
    keywords: ['how to manage jewellery orders', 'custom jewellery order process', 'jewellery job card', 'jewellery order book', 'karigar order tracking'],
    category: 'Guide',
    readMinutes: 5,
    published: '2026-10-09',
    updated: '2026-10-09',
    summary: 'Write every order down with design, approximate weight and delivery date; give the customer a receipt; confirm before work starts; assign each item to a karigar with a job card and a return date; and track every item until delivery.',
    sections: [
      {
        heading: 'Why custom orders go wrong',
        blocks: [
          { type: 'p', text: 'A large share of jewellery in India is sold on order — especially wedding sets. The customer chooses a design, an approximate weight and a date, and the piece is made by a karigar. Problems start when the order lives in an order book or on a slip: details are misread, nobody remembers which karigar has which item, and the customer’s call asking “is it ready?” turns into a search.' },
        ],
      },
      {
        heading: 'A simple six-step order system',
        blocks: [
          { type: 'ol', items: [
            'Take the order: record each item, the design (photo or reference), approximate weight and promised delivery date.',
            'Give the customer an order receipt immediately, listing items and the delivery date.',
            'Confirm the order before any work starts — no karigar should begin on an unconfirmed order.',
            'Assign each item to a karigar. Different items in one order can go to different karigars — the necklace to one, the earrings to another.',
            'Give every karigar a job card with the item, approximate weight and the date you need it back.',
            'Track each item until it returns and is delivered. If a karigar cannot finish, reassign the item instead of restarting the order.',
          ] },
        ],
      },
      {
        heading: 'What to put on a job card',
        blocks: [
          { type: 'ul', items: ['Order number and item', 'Design reference', 'Approximate weight and purity', 'Karigar name', 'Return-by date', 'Signatures of the person issuing and the karigar'] },
          { type: 'callout', text: 'Keep the return date on the job card earlier than the customer’s delivery date. The gap is your buffer for finishing, hallmarking and any rework.' },
        ],
      },
      {
        heading: 'Doing this in software',
        blocks: [
          { type: 'p', text: `${SIMPLE_UI} DMD Gold’s order management follows exactly this cycle for both retailers and wholesalers: create the order, mark it confirmed, assign each item to a karigar with a return date, revoke and reassign when needed, and download job cards for karigars and an order receipt for the customer.` },
        ],
      },
    ],
    faqs: [
      { question: 'Can one order be split between karigars?', answer: 'Yes — and it should be tracked item by item, each with its own karigar and return date.' },
      { question: 'What should an order receipt include?', answer: 'Customer name, order number, each item with its approximate weight, and the promised delivery date.' },
    ],
    cta: { label: 'See custom order management', href: '/features/custom-order-management', text: 'Run the full order cycle — job cards, receipts and karigar assignments — in DMD Gold.' },
  },
  {
    slug: 'moving-from-paper-registers-to-jewellery-software',
    title: 'Moving From Paper Registers to Jewellery Software — Before the Festive Season',
    description: 'How a jewellery shop can switch from paper registers or old desktop software to jewellery software without disrupting billing — what to prepare, when to switch, and how to train staff.',
    keywords: ['jewellery software for beginners', 'switch to jewellery software', 'paper register to software jewellery', 'easy jewellery billing software', 'jewellery shop computerisation'],
    category: 'Guide',
    readMinutes: 5,
    published: '2026-10-09',
    updated: '2026-10-09',
    summary: 'Pick a quiet month, clean up your stock list and karigar balances first, run software alongside paper for a short period, and choose software simple enough that the people at your counter will actually use it.',
    sections: [
      {
        heading: 'The real worry: “Will my billing stop?”',
        blocks: [
          { type: 'p', text: 'Most jewellers who still use registers are not against software — they are worried that switching will disrupt billing during Dhanteras, Diwali or the wedding season, and that their staff will not be able to use it. Both worries are fair, and both are avoidable.' },
        ],
      },
      {
        heading: 'Choose software your counter can actually use',
        blocks: [
          { type: 'p', text: 'The biggest reason computerisation fails in jewellery shops is software that only one “computer person” understands. Generic accounting packages are built for accountants; jewellery needs gold rate, making charges, wastage, purity, HUID and old-gold exchange to be first-class — not workarounds.' },
          { type: 'ul', items: ['Can the owner, a family member or counter staff make a bill after one short session?', 'Does it understand gross weight, net weight, purity and making charges without custom setup?', 'Does it handle karigars, HUID and old gold (URD) out of the box?', 'Is support available on phone or WhatsApp in your language?'] },
        ],
      },
      {
        heading: 'A switch-over plan that protects billing',
        blocks: [
          { type: 'ol', items: [
            'Switch in a quiet month — well before the festive rush, not during it.',
            'Clean up first: count stock, note each item’s weight, purity and HUID, and settle karigar balances.',
            'Load stock in bulk rather than one item at a time.',
            'Print barcode tags so billing becomes scan-and-print.',
            'Run software and paper side by side for a week or two, then stop the register.',
            'Train everyone who bills — keep the first session short and practical.',
          ] },
        ],
      },
      {
        heading: 'Where DMD Gold fits',
        blocks: [
          { type: 'p', text: `${SIMPLE_UI} It was built by a jeweller with 25+ years in the trade, so the screens follow how a jewellery counter already works. Bulk upload, barcode tags, karigar challans, HUID and URD exchange are built in, and support is available on phone and WhatsApp.` },
        ],
      },
    ],
    faqs: [
      { question: 'When is the best time to switch to jewellery software?', answer: 'In a quiet month, ideally several weeks before the festive or wedding season, so staff are comfortable before the rush.' },
      { question: 'Do I need computer knowledge to use jewellery software?', answer: 'Not with software designed for jewellers. DMD Gold is built so that shop owners and counter staff without a computer background can use it.' },
    ],
    cta: { label: 'Book a free demo', href: '/#contact', text: 'See how simple DMD Gold is on your own shop’s workflow.' },
  },
  {
    slug: 'dmd-gold-vs-tally-for-jewellers',
    title: 'DMD Gold vs Tally for Jewellers — An Honest Comparison',
    description: 'A fair comparison of DMD Gold and TallyPrime for jewellery businesses: what each is built for, jewellery features, ease of use, accounting, pricing, and when to use both.',
    keywords: ['dmd gold vs tally', 'tally for jewellers', 'tally vs jewellery software', 'best software for jewellery shop', 'jewellery software comparison'],
    category: 'Comparison',
    readMinutes: 6,
    published: '2026-10-09',
    updated: '2026-10-09',
    summary: 'TallyPrime is excellent general accounting software that many CAs prefer. DMD Gold is built only for jewellery — karigars, HUID, gold rate, custom orders and B2B wholesale ordering — with a simpler screen for counter staff. Many jewellers can use both: DMD Gold for the shop, Tally for the books.',
    sections: [
      {
        heading: 'They are built for different jobs',
        blocks: [
          { type: 'p', text: 'TallyPrime is one of India’s most widely used accounting and GST packages. It is reliable, your CA probably knows it well, and it is very strong at ledgers, GST returns and financial statements. It is general-purpose: as of October 2026, jewellery-specific workflows are typically added through customisations or add-ons from Tally partners.' },
          { type: 'p', text: 'DMD Gold is built only for the jewellery trade. Gold rate, purity, making charges, karigar challans, HUID, old-gold exchange, custom orders and a B2B wholesale marketplace are part of the product itself, and the screens are designed so that jewellers and counter staff without a computer background can use them.' },
        ],
      },
      {
        heading: 'Side-by-side',
        blocks: [
          { type: 'table', head: ['', 'DMD Gold', 'TallyPrime'], rows: [
            ['Built for', 'Jewellery retailers, wholesalers & manufacturers only', 'All kinds of businesses'],
            ['Ease of use for counter staff', 'Simple screens designed for jewellers with no computer background', 'Powerful, designed around accounting workflows'],
            ['Gold rate, purity, making charges', 'Built in', 'Through customisation or add-ons'],
            ['Karigar gold & ghat tracking', 'Built in (issue/receive challans, fine-gold balance)', 'Through customisation or add-ons'],
            ['HUID tracking & barcode tags', 'Built in', 'Through customisation or add-ons'],
            ['Custom orders, job cards & receipts', 'Built in', 'Through customisation or add-ons'],
            ['Online ordering for retailers (B2B marketplace)', 'Built in (Wholesaler Edition)', 'Not part of the standard product'],
            ['GST e-invoice (IRN & QR)', 'One click (Wholesaler Edition)', 'Supported'],
            ['Full accounting, ledgers & GST returns', 'Excel export for your CA', 'Core strength'],
            ['Pricing', '₹6,000/year (Retailer) · ₹12,000/year (Wholesaler), support included', 'Perpetual licence or subscription — see tallysolutions.com for current prices'],
          ] },
        ],
      },
      {
        heading: 'When Tally alone is enough',
        blocks: [
          { type: 'p', text: 'If your business is mainly bullion or simple trading, you have a trained accountant at the desk, and you do not work with karigars or custom orders, Tally — possibly with a jewellery add-on — can be all you need.' },
        ],
      },
      {
        heading: 'When DMD Gold is the better fit',
        blocks: [
          { type: 'ul', items: ['You want the owner, family and counter staff to bill without a dedicated operator', 'You give gold to karigars and need balances and ghat tracked', 'You take custom and wedding orders', 'You need HUID on every piece and scan-based billing and stock-take', 'You are a wholesaler who wants retailers to order online'] },
        ],
      },
      {
        heading: 'Using both together',
        blocks: [
          { type: 'p', text: 'You do not have to choose. Many jewellers run the shop — billing, stock, karigars, orders — in DMD Gold and keep their books in Tally with their CA. DMD Gold exports sales, purchases, stock and GST data to Excel so your accountant can work with it.' },
        ],
      },
    ],
    faqs: [
      { question: 'Can I use DMD Gold and Tally together?', answer: 'Yes. Run billing, stock, karigars and orders in DMD Gold and export sales, purchase and GST data to Excel for your CA to use in Tally.' },
      { question: 'Which is easier for jewellery counter staff?', answer: 'DMD Gold is designed only for jewellers, so its screens use jewellery terms and need no accounting knowledge. Tally is designed around accounting and is more powerful for accounting itself.' },
      { question: 'Does Tally support jewellery?', answer: 'TallyPrime is general-purpose accounting software. As of October 2026, jewellery features such as karigar tracking or HUID are typically added through customisations or add-ons from Tally partners — check with Tally or a Tally partner for the latest options.' },
    ],
    cta: { label: 'Compare plans', href: '/pricing', text: 'DMD Gold starts at ₹6,000/year with support included.' },
    disclaimer: 'Tally and TallyPrime are trademarks of Tally Solutions Pvt. Ltd. DMD Gold is not affiliated with, endorsed by or sponsored by Tally Solutions. This comparison is based on publicly available information as of October 2026 and on DMD Gold’s own product. Features and prices change — please check tallysolutions.com for current details. If anything here is inaccurate, email info@dmdgold.com and we will correct it promptly.',
  },
  {
    slug: 'online-marketplace-connecting-jewellery-wholesalers-and-retailers',
    title: 'How an Online Marketplace Connects Jewellery Wholesalers and Retailers',
    description: 'Why jewellery wholesalers and retailers are moving orders online, how a B2B jewellery marketplace works, and what both sides should look for — KYC, rate locking, catalogues and order tracking.',
    keywords: ['B2B jewellery marketplace', 'jewellery wholesale online india', 'online jewellery ordering for retailers', 'jewellery wholesaler retailer platform', 'buy jewellery wholesale online'],
    category: 'Guide',
    readMinutes: 6,
    published: '2026-10-09',
    updated: '2026-10-09',
    summary: 'A B2B jewellery marketplace lets wholesalers list their catalogue online and lets verified retailers browse, add to cart and order from their own shop — with rates locked on confirmation and every order tracked to delivery. Retailers save travel; wholesalers reach more retailers without more salesmen.',
    sections: [
      {
        heading: 'The old way: travel, cash and guesswork',
        blocks: [
          { type: 'p', text: 'For generations, a retailer in a smaller city sourced stock by travelling to wholesale hubs — often for days at a time — carrying cash, choosing designs on the spot and hoping they would sell. Meanwhile their own shop ran without them. Wholesalers, for their part, depended on salesmen visits, phone calls and WhatsApp photos to show designs, and orders arrived as messages that had to be re-typed and chased.' },
          { type: 'p', text: 'Both sides lose time, and both sides carry risk: cash on the move, rate disputes when gold moves between order and invoice, and orders that get lost between a chat and a register.' },
        ],
      },
      {
        heading: 'How an online jewellery marketplace works',
        blocks: [
          { type: 'ol', items: [
            'The wholesaler lists products with photos, videos, weight, purity and certificates — and approves what goes live.',
            'Retailers register and complete KYC, so only genuine jewellery businesses can see prices and order.',
            'Retailers search and filter the catalogue, save designs to a wishlist and add items to a cart — like a shopping app.',
            'The retailer checks out; the wholesaler confirms and locks the rate.',
            'The order is invoiced (with e-invoice where required), paid, dispatched and tracked to delivery.',
          ] },
        ],
      },
      {
        heading: 'What retailers gain',
        blocks: [
          { type: 'ul', items: ['Browse wholesalers’ designs from your own shop instead of travelling', 'Order what your customers are actually asking for, when they ask', 'Clear seller profiles and ratings before you buy', 'Rates locked on confirmation — no surprises at invoice time', 'Track every order and download GST invoices'] },
        ],
      },
      {
        heading: 'What wholesalers gain',
        blocks: [
          { type: 'ul', items: ['A digital showroom open to your retailers all day', 'Orders arrive complete and in one place — no re-typing from chats', 'Verified buyers only, thanks to KYC', 'Control over visibility: approve, re-price or hide any product instantly', 'See which designs sell fastest and which retailers order most'] },
        ],
      },
      {
        heading: 'What to look for in a marketplace',
        blocks: [
          { type: 'ul', items: ['KYC verification for every buyer', 'Rate locking so orders cannot be cancelled after the rate is fixed', 'Approval before products go live', 'Built-in GST invoicing and e-invoicing', 'A simple interface — your retailers should not need training to order'] },
          { type: 'callout', text: 'The best marketplace is the one your retailers actually use. If ordering feels harder than sending a WhatsApp message, they will go back to WhatsApp.' },
        ],
      },
      {
        heading: 'Where DMD Gold fits',
        blocks: [
          { type: 'p', text: `${SIMPLE_UI} The DMD Gold Wholesaler Edition includes a B2B marketplace where your retailers browse your catalogue, add to cart and order online, with KYC, supervisor approval, rate locking and order tracking built in. Wholesalers can enrol their retailers on the platform free, and retailers on DMD Gold can browse wholesalers’ inventory from the same software they use for billing.` },
        ],
      },
    ],
    faqs: [
      { question: 'Do retailers pay to order on the DMD Gold marketplace?', answer: 'Wholesalers on the Wholesaler Edition can enrol their retailers on the DMD platform free.' },
      { question: 'What stops fake buyers on a jewellery marketplace?', answer: 'KYC. On DMD Gold, every buyer is verified with documents such as PAN, GST and Aadhaar before they can see prices or place orders.' },
      { question: 'What happens if the gold rate changes after an order?', answer: 'On DMD Gold, once the rate is confirmed and locked the order cannot be cancelled, protecting both the wholesaler and the retailer.' },
    ],
    cta: { label: 'See the wholesale order app', href: '/features/b2b-wholesale-order-app', text: 'Let your retailers order from you online with DMD Gold.' },
  },
  {
    slug: 'why-jewellery-shops-need-a-crm',
    title: 'Why Every Jewellery Shop Needs a CRM (and What It Should Do)',
    description: 'Why customer relationships matter more in jewellery than almost any other trade, what a jewellery CRM should do, and simple ways to turn one-time buyers into lifelong customers.',
    keywords: ['CRM for jewellery shop', 'importance of CRM jewellery', 'jewellery customer retention', 'jewellery customer database', 'jewellery repeat customers'],
    category: 'Guide',
    readMinutes: 5,
    published: '2026-10-09',
    updated: '2026-10-09',
    summary: 'Jewellery customers come back for life events — weddings, festivals, birthdays, anniversaries. A CRM remembers every customer and what they bought, so you can reach them at the right moment with the right design instead of hoping they remember you.',
    sections: [
      {
        heading: 'Jewellery is a relationship business',
        blocks: [
          { type: 'p', text: 'A family that buys a wedding set from you today may come back for anniversaries, festivals, a child’s naming ceremony and the next wedding. Your best customers are not walk-ins — they are families who already trust you.' },
          { type: 'p', text: 'In the past, the owner simply remembered everyone. As a shop grows, staff change and the customer list runs into thousands, that memory needs help. That help is a CRM — Customer Relationship Management — which, for a jewellery shop, is simply a digital customer register that works for you.' },
        ],
      },
      {
        heading: 'What goes wrong without one',
        blocks: [
          { type: 'ul', items: ['Customer details live in registers, diaries and staff phones — and leave when staff leave', 'Nobody knows who your top 100 customers are', 'Birthdays and anniversaries pass without a word from you', 'New designs are shown only to whoever walks in that day'] },
        ],
      },
      {
        heading: 'What a jewellery CRM should do',
        blocks: [
          { type: 'ol', items: [
            'Keep every customer in one place, built automatically from your bills.',
            'Show each customer’s purchase history — what they bought and when.',
            'Help you identify loyal, repeat customers.',
            'Remind you — or automatically send — birthday wishes and offers.',
            'Let you share new designs and exclusive offers with the right customers.',
          ] },
          { type: 'callout', text: 'The simplest CRM habit: before every festive season, look at last year’s buyers and send them your new collection first.' },
        ],
      },
      {
        heading: 'For wholesalers: your retailers are your customers',
        blocks: [
          { type: 'p', text: 'The same idea applies to wholesale. Knowing which retailers order most, how each one pays and what is outstanding helps you decide who gets credit, who deserves a visit and whose orders to prioritise.' },
        ],
      },
      {
        heading: 'Where DMD Gold fits',
        blocks: [
          { type: 'p', text: `${SIMPLE_UI} Its customer management links every invoice to the customer’s profile, shows full purchase history, helps you spot loyal customers, sends personalised birthday offers automatically and lets you share designs and offers with existing customers. Wholesalers get client and order history — top retailers, payment history and outstanding balances.` },
        ],
      },
    ],
    faqs: [
      { question: 'What is a CRM for a jewellery shop?', answer: 'A digital customer register that records every customer and their purchases, and helps you stay in touch — for example with birthday offers and new-design announcements.' },
      { question: 'Is a CRM useful for a small jewellery shop?', answer: 'Yes. Small shops depend most on repeat customers and word of mouth, and a CRM makes sure no loyal customer is forgotten.' },
    ],
    cta: { label: 'See jewellery CRM', href: '/features/jewellery-crm', text: 'Customer records, purchase history and birthday offers — built into DMD Gold.' },
  },
  {
    slug: 'why-jewellers-should-keep-purchase-records',
    title: 'Why Jewellers Should Keep Proper Purchase Records',
    description: 'Why recording every purchase — what you bought, from whom and when — matters for jewellery retailers and wholesalers, and how to build a simple purchase-record habit.',
    keywords: ['jewellery purchase records', 'importance of purchase history', 'jewellery purchase register', 'supplier records jewellery', 'jewellery stock purchase tracking'],
    category: 'Guide',
    readMinutes: 4,
    published: '2026-10-09',
    updated: '2026-10-09',
    summary: 'Sales tell you what customers want; purchases tell you what your stock really cost and who you depend on. Recording every purchase — what, from whom, when — protects you in disputes, helps you choose suppliers and keeps your CA’s work simple.',
    sections: [
      {
        heading: 'Jewellers track sales closely — purchases, not so much',
        blocks: [
          { type: 'p', text: 'Most jewellery businesses keep careful sales bills because customers and GST demand them. Purchases are different: supplier bills go into a file, some deals are noted in a diary, and some exist only in a WhatsApp chat. A year later, answering “what did we buy from this supplier?” means an afternoon of searching.' },
        ],
      },
      {
        heading: 'Why purchase records matter',
        blocks: [
          { type: 'ul', items: [
            'Know your suppliers: see what you have bought from each one over time, and who you rely on most.',
            'Settle questions quickly: when a supplier or partner asks about a past deal, the record is right there.',
            'Understand your stock: knowing what came in and when helps you make sense of what is on your shelves.',
            'Make your CA’s job easier: organised purchase records save time at audit and tax-filing time.',
            'Protect the business: records that do not depend on one person’s memory or one diary keep the business safe when people change.',
          ] },
        ],
      },
      {
        heading: 'A simple purchase-record habit',
        blocks: [
          { type: 'ol', items: ['Record every purchase on the day it happens — not at month end', 'Always note what you bought, the supplier and the date', 'Keep the supplier’s bill, but do not rely on the paper alone', 'Review purchases by supplier every few months'] },
          { type: 'callout', text: 'The rule that matters most: same day, every time. A purchase record is only useful if it is complete.' },
        ],
      },
      {
        heading: 'Where DMD Gold fits',
        blocks: [
          { type: 'p', text: `${SIMPLE_UI} Its Purchase History feature, available to both retailers and wholesalers, lets you record every purchase — what you bought, from whom and when — so your complete purchase history is in one place instead of scattered bills and registers.` },
        ],
      },
    ],
    faqs: [
      { question: 'What should a purchase record include?', answer: 'At minimum: what you bought, the supplier you bought it from, and the date.' },
      { question: 'Is a supplier bill enough on its own?', answer: 'Keep the bill, but paper is hard to search and easy to lose. A digital purchase record lets you see your full history — and everything bought from a supplier — in one place.' },
    ],
    cta: { label: 'See purchase history', href: '/features/purchase-history', text: 'Record every purchase — what, from whom, when — in DMD Gold.' },
  },
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
