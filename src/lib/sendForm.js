const ENDPOINT = 'https://api.web3forms.com/submit'
const TARGET_EMAIL = 'hamayonm99@gmail.com'

export async function sendForm({ name, email, subject, message, ...extra }) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY

  if (accessKey) {
    const payload = {
      access_key: accessKey,
      from_name: name,
      reply_to: email,
      subject: subject || `New inquiry from ${name}`,
      name,
      email,
      message,
      ...extra,
    }

    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const data = await res.json().catch(() => ({}))
    if (!res.ok || data.success === false) {
      throw new Error(data.message || 'Submission failed')
    }
    return { delivered: true }
  }

  const mailSubject = encodeURIComponent(subject || `Inquiry from ${name}`)
  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    ...Object.entries(extra).map(([k, v]) => `${k}: ${v}`),
    '',
    message || '',
  ]
  const body = encodeURIComponent(lines.join('\n'))
  window.location.href = `mailto:${TARGET_EMAIL}?subject=${mailSubject}&body=${body}`
  return { delivered: false }
}
