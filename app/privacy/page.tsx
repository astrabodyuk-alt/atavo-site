import type { Metadata } from "next";
import Nav from "@/components/nav";
import DynamicFooter from "@/components/dynamic-footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Atavo Agency",
  description: "How Atavo Agency collects, uses, and protects your personal data. UK GDPR compliant.",
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="bg-white pt-16">
        <div className="max-w-3xl mx-auto px-6 py-24">
          <h1 className="font-heading font-bold text-4xl text-[#0d0d0d] mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#6b6b6b] text-sm mb-12">Last updated: April 2026</p>

          <div className="space-y-12 text-[#0d0d0d]">

            <section>
              <h2 className="font-heading font-bold text-xl mb-4">Who we are</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                This website is operated by <strong className="text-[#0d0d0d]">Achievesphere Limited trading as Atavo Agency</strong>.
                We provide web design, SaaS development, and business automation services to UK businesses.
              </p>
              <ul className="mt-4 space-y-1 text-[#6b6b6b]">
                <li><span className="font-medium text-[#0d0d0d]">Website:</span> atavo.co.uk</li>
                <li><span className="font-medium text-[#0d0d0d]">Email:</span> hello@atavo.co.uk</li>
                <li><span className="font-medium text-[#0d0d0d]">Jurisdiction:</span> United Kingdom</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl mb-4">What data we collect</h2>
              <p className="text-[#6b6b6b] leading-relaxed mb-4">
                When you submit an enquiry through our audit form, we collect the following information:
              </p>
              <ul className="space-y-2 text-[#6b6b6b]">
                <li className="flex gap-2"><span className="text-[#00c47a] font-bold shrink-0">—</span>Your name and email address</li>
                <li className="flex gap-2"><span className="text-[#00c47a] font-bold shrink-0">—</span>Business name and type</li>
                <li className="flex gap-2"><span className="text-[#00c47a] font-bold shrink-0">—</span>Estimated budget and project details</li>
                <li className="flex gap-2"><span className="text-[#00c47a] font-bold shrink-0">—</span>Any additional information you choose to provide</li>
              </ul>
              <p className="text-[#6b6b6b] leading-relaxed mt-4">
                We do not collect any data passively without your knowledge. No tracking pixels, no hidden form fields.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl mb-4">Why we collect it</h2>
              <p className="text-[#6b6b6b] leading-relaxed mb-4">
                We use your data solely for the following purposes:
              </p>
              <ul className="space-y-2 text-[#6b6b6b]">
                <li className="flex gap-2"><span className="text-[#00c47a] font-bold shrink-0">—</span>To respond to your enquiry and provide a project proposal</li>
                <li className="flex gap-2"><span className="text-[#00c47a] font-bold shrink-0">—</span>To deliver the services you have commissioned</li>
                <li className="flex gap-2"><span className="text-[#00c47a] font-bold shrink-0">—</span>To send project updates and communicate about your order</li>
              </ul>
              <p className="text-[#6b6b6b] leading-relaxed mt-4">
                We do not send unsolicited marketing emails. We will not contact you for purposes unrelated to your enquiry.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl mb-4">How your data is processed</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                Form submissions are processed via <strong className="text-[#0d0d0d]">Make.com</strong> (a third-party automation platform acting as a data processor on our behalf). Data is transmitted securely over HTTPS and stored in a restricted workspace accessible only to Atavo Agency. Make.com processes data under a Data Processing Agreement in compliance with UK GDPR.
              </p>
              <p className="text-[#6b6b6b] leading-relaxed mt-4">
                We do not sell, rent, or share your personal data with any third parties for marketing or commercial purposes.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl mb-4">Cookies</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                This website uses only essential cookies required for basic functionality. We do not currently use tracking cookies, advertising cookies, or third-party analytics. If analytics is added in the future, this policy will be updated and a cookie consent banner will be displayed.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl mb-4">Your rights under UK GDPR</h2>
              <p className="text-[#6b6b6b] leading-relaxed mb-4">
                You have the following rights regarding your personal data:
              </p>
              <ul className="space-y-2 text-[#6b6b6b]">
                <li className="flex gap-2"><span className="text-[#00c47a] font-bold shrink-0">—</span><span><strong className="text-[#0d0d0d]">Right of access</strong> — request a copy of the data we hold about you</span></li>
                <li className="flex gap-2"><span className="text-[#00c47a] font-bold shrink-0">—</span><span><strong className="text-[#0d0d0d]">Right to rectification</strong> — request correction of inaccurate data</span></li>
                <li className="flex gap-2"><span className="text-[#00c47a] font-bold shrink-0">—</span><span><strong className="text-[#0d0d0d]">Right to erasure</strong> — request deletion of your data</span></li>
                <li className="flex gap-2"><span className="text-[#00c47a] font-bold shrink-0">—</span><span><strong className="text-[#0d0d0d]">Right to restrict processing</strong> — ask us to limit how we use your data</span></li>
                <li className="flex gap-2"><span className="text-[#00c47a] font-bold shrink-0">—</span><span><strong className="text-[#0d0d0d]">Right to object</strong> — object to processing based on legitimate interests</span></li>
              </ul>
              <p className="text-[#6b6b6b] leading-relaxed mt-4">
                To exercise any of these rights, email us at{" "}
                <a href="mailto:hello@atavo.co.uk" className="text-[#00c47a] hover:underline">
                  hello@atavo.co.uk
                </a>. We will respond within 30 days.
              </p>
              <p className="text-[#6b6b6b] leading-relaxed mt-4">
                If you are unhappy with how we handle your data, you have the right to lodge a complaint with the{" "}
                <strong className="text-[#0d0d0d]">Information Commissioner&apos;s Office (ICO)</strong> at ico.org.uk.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl mb-4">Data retention</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                We retain enquiry data for up to 24 months. Client project data is retained for up to 5 years for accounting and legal compliance. You may request deletion at any time and we will action it unless retention is required by law.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl mb-4">Changes to this policy</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                We may update this Privacy Policy from time to time. Changes will be published on this page with an updated date. Continued use of the site after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="border-t border-[#e8e8e8] pt-8">
              <p className="text-[#6b6b6b] text-sm">
                Questions about this policy? Email{" "}
                <a href="mailto:hello@atavo.co.uk" className="text-[#00c47a] hover:underline">
                  hello@atavo.co.uk
                </a>
              </p>
            </section>

          </div>
        </div>
      </main>
      <DynamicFooter />
    </>
  );
}
