export const pricingData = {
  plans: [
    {
      id: 'retailer-edition',
      name: 'Retailer Edition',
      badge: 'B2C SHOPS',
      tagline: 'Complete software for jewellery retailers',
      price: '₹6,000',
      pricePaise: 600000,
      priceLabel: 'per year',
      amc: 'Full Support Included',
      features: [
        "POS billing with gold-rate integration",
        "Stock register — gross / net weight, purity",
        "Barcode tag printing & scan billing",
        "Instant stock-take — scan entire showroom",
        "Hallmarking (HUID) tag tracking",
        "Old-gold exchange & GST invoicing",
        "Customer and Karigar management",
        "Quotation desk and management",
        "Works with DMD barcode printers & scanners",
        "Phone & remote support"
      ],
      highlight: true
    },
    {
      id: 'wholesaler-edition',
      name: 'Wholesaler Edition',
      badge: 'B2B BUSINESSES',
      tagline: 'For wholesalers & manufacturers',
      price: '₹12,000',
      pricePaise: 1200000,
      priceLabel: 'per year',
      amc: 'Full Support Included',
      features: [
        "Order booking & GST invoicing",
        "Stock register — gross / net weight, purity",
        "Integrated E-invoice module (IRN & QR code)",
        "E-invoice packs at volume rates",
        "Bulk invoicing & GST reports",
        "Job-work & making-charge management",
        "Customer and Karigar management",
        "B2B marketplace — receive orders online",
        "Enrol your retailers free on the DMD platform",
        "Excel Support & Priority support"
      ],
      highlight: true
    }
  ],
  test: [
    {
      id: 'test-payment',
      name: 'DMD Live Test Plan',
      badge: 'TEST',
      tagline: 'For production testing only',
      price: '₹5',
      pricePaise: 500,
      priceLabel: 'per year',
      amc: 'N/A',
      features: [
        "End-to-end payment verification",
        "Test database records",
        "Auto-activation testing"
      ],
      highlight: false
    }
  ]
};

export const ACCESSORIES = [
  // Hardware
  { id: 'barcode_printer', name: 'Barcode label printer', pricePaise: 2400000, unit: 'each', type: 'hardware' },
  { id: 'barcode_scanner', name: 'Barcode scanner', pricePaise: 300000, unit: 'each', type: 'hardware' },
  { id: 'carbon_ribbon', name: 'Carbon ribbon roll — 300 m', pricePaise: 200000, unit: 'each', type: 'hardware' },
  { id: 'cricket_bat_labels', name: 'Cricket-bat white barcode labels (2,000/roll)', pricePaise: 170000, unit: 'per roll', type: 'hardware' },
  // E-Invoices
  { id: 'einvoice_1000', name: '1,000 e-invoices pack (₹3.00/inv)', pricePaise: 300000, unit: 'pack', type: 'einvoice' },
  { id: 'einvoice_2500', name: '2,500 e-invoices pack (₹2.50/inv)', pricePaise: 625000, unit: 'pack', type: 'einvoice' },
  { id: 'einvoice_5000', name: '5,000 e-invoices pack (₹2.25/inv)', pricePaise: 1125000, unit: 'pack', type: 'einvoice' },
  { id: 'einvoice_10000', name: '10,000 e-invoices pack (₹1.95/inv)', pricePaise: 1950000, unit: 'pack', type: 'einvoice' },
];
