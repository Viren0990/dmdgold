export async function submitLead(leadData: {
  name: string;
  email?: string;
  phone: string;
  company?: string;
  type?: string;
}) {
  let mappedType = 'N/A';
  if (leadData.type) {
    const t = leadData.type.toLowerCase();
    if (t.includes('retail')) {
      mappedType = 'B2C';
    } else if (t.includes('wholesale')) {
      mappedType = 'B2B';
    } else {
      // For 'Other' or any other string, you could either use the string itself
      // or default to 'N/A'. As per instructions, default to 'N/A' 
      // if not explicitly B2C or B2B, but we can also just send the raw string if it's 'Other'.
      // Wait, "if retailer B2C and B2B if wholesaler, for type if not availaible or not filled send N/A".
      mappedType = leadData.type.trim() || 'N/A';
    }
  }

  try {
    const response = await fetch('https://crm-6y4s-six.vercel.app/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: leadData.name,
        email: leadData.email || '',
        phone: leadData.phone,
        company: leadData.company || '',
        status: 'NEW', // Default status for new leads
        type: mappedType, // B2B or B2C or Not Known
        source: 'Website', // Add this if you track sources
      }),
      keepalive: true,
    });

    if (response.ok) {
      console.log('Lead submitted successfully!');
    } else {
      console.error('Failed to submit lead');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
