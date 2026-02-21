import { useState } from "react";

export default function EnquirySection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [result, setResult] = useState("");
  async function sendButton(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "aefcf507-8b87-4580-8aa3-64ab6de11223");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Message was Sent Successfully");
      event.currentTarget.reset();
    } else {
      setResult("Error");
    }
  }

  return (
    <section className="w-full pb-12">
      <div className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2 md:items-start">
          {/* Left */}
          <div>
            <h2 className="text-xl font-extrabold text-slate-900">
              Have a question or enquiry?
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Send a message about membership, volunteering, sponsorships, or
              upcoming events. Choose who you want to send it to.
            </p>

            <div className="mt-4 rounded-2xl bg-green-50 border border-green-100 p-4">
              <p className="text-sm text-slate-700">
                Note: Please sent your enquiry only if it important and need
                urgent help.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <form
            className="space-y-3"
            onSubmit={sendButton}
          >
            <div>
              <label className="text-sm font-bold text-slate-700">Name</label>
              <input
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-200"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-slate-700">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-200"
                placeholder="you@example.com"
              />
            </div>
            
            <div>
              <label className="text-sm font-bold text-slate-700">
                Message
              </label>
              <textarea
                rows={5}
                value={message}
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-200"
                placeholder="How can we help?"
              />
            </div>

            <button
              type="submit"
              className="rounded-full bg-green-700 px-5 py-2 text-sm font-extrabold text-white hover:bg-green-800"
            >
              Send enquiry
            </button>
            <span className="text-sm text-slate-600">{result}</span>
          </form>
        </div>
      </div>
    </section>
  );
}
