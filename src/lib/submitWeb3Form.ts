export async function submitWeb3Form(formData: {
  name: string;
  email: string;
  message?: string;
  phone?: string;
  company?: string;
  type?: string;
}) {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: 'c53a4a76-97cc-4e7b-a161-b90587220a8a',
        name: formData.name,
        email: formData.email || 'no-email@example.com',
        message: formData.message || `Lead details:
Phone: ${formData.phone || 'N/A'}
Company: ${formData.company || 'N/A'}
Type: ${formData.type || 'N/A'}`,
      }),
      keepalive: true,
    });

    if (!response.ok) {
      console.error('Failed to submit to Web3Forms');
    }
  } catch (error) {
    console.error('Error submitting to Web3Forms:', error);
  }
}
