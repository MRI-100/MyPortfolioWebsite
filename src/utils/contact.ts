export type ContactPayload = {
  name: string;
  email: string;
  budget: string;
  message: string;
};

export async function submitContactForm(payload: ContactPayload) {
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

  if (!endpoint) {
    await new Promise((resolve) => window.setTimeout(resolve, 600));
    return {
      ok: true,
      message:
        'Thanks. The form is validated locally. Add VITE_FORMSPREE_ENDPOINT to send messages directly from production.',
      mailto: `mailto:mrityunjoy@example.com?subject=${encodeURIComponent(
        `Portfolio inquiry from ${payload.name}`,
      )}&body=${encodeURIComponent(`${payload.message}\n\nBudget: ${payload.budget}\nEmail: ${payload.email}`)}`,
    };
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Message could not be sent. Please try again or email directly.');
  }

  return { ok: true, message: 'Message sent successfully. I will reply as soon as possible.' };
}
