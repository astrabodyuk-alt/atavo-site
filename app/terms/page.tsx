import type { Metadata } from "next";
import Nav from "@/components/nav";
import DynamicFooter from "@/components/dynamic-footer";

export const metadata: Metadata = {
  title: "Terms of Service — Atavo Agency",
  description: "Terms and conditions for web design, SaaS development, and automation services by Atavo Agency.",
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="bg-white pt-16">
        <div className="max-w-3xl mx-auto px-6 py-24">
          <h1 className="font-heading font-bold text-4xl text-[#0d0d0d] mb-4">
            Terms of Service
          </h1>
          <p className="text-[#6b6b6b] text-sm mb-12">Last updated: April 2026</p>

          <div className="space-y-12 text-[#0d0d0d]">

            <section>
              <h2 className="font-heading font-bold text-xl mb-4">About us</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                These terms govern your use of services provided by{" "}
                <strong className="text-[#0d0d0d]">Achievesphere Limited trading as Atavo Agency</strong>, a company registered in England and Wales. By engaging our services, you agree to these terms.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl mb-4">Services</h2>
              <p className="text-[#6b6b6b] leading-relaxed mb-4">
                Atavo Agency provides the following services to UK businesses:
              </p>
              <ul className="space-y-2 text-[#6b6b6b]">
                <li className="flex gap-2"><span className="text-[#00c47a] font-bold shrink-0">—</span><span><strong className="text-[#0d0d0d]">Web design</strong> — custom websites built to your brand and brief</span></li>
                <li className="flex gap-2"><span className="text-[#00c47a] font-bold shrink-0">—</span><span><strong className="text-[#0d0d0d]">SaaS development</strong> — lead tracking, booking systems, client portals, custom dashboards</span></li>
                <li className="flex gap-2"><span className="text-[#00c47a] font-bold shrink-0">—</span><span><strong className="text-[#0d0d0d]">Business automation</strong> — email sequences, CRM setup, AI-powered workflows via Make.com and n8n</span></li>
              </ul>
              <p className="text-[#6b6b6b] leading-relaxed mt-4">
                All services are bespoke and custom-built. We do not use templates. The exact scope of each project is agreed in writing before work begins.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl mb-4">Free business audit</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                A free business audit (valued at £299) is included with every commissioned project. This covers a competitor analysis, SEO review, and strategic recommendations tailored to your business. The audit is conducted before build work begins and is included at no extra cost as part of your project engagement.
              </p>
              <p className="text-[#6b6b6b] leading-relaxed mt-4">
                The audit is also available as a standalone service for <strong className="text-[#0d0d0d]">£299 (one-time)</strong> for businesses that want strategic insight without committing to a full build.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl mb-4">Payment</h2>
              <p className="text-[#6b6b6b] leading-relaxed mb-4">
                All payments are processed securely via <strong className="text-[#0d0d0d]">Stripe</strong>. Klarna buy-now-pay-later (3 equal monthly instalments) is available on eligible services. By proceeding with payment, you agree to Stripe&apos;s and, where applicable, Klarna&apos;s terms of service.
              </p>
              <ul className="space-y-2 text-[#6b6b6b]">
                <li className="flex gap-2"><span className="text-[#00c47a] font-bold shrink-0">—</span>A 50% deposit is required to begin work</li>
                <li className="flex gap-2"><span className="text-[#00c47a] font-bold shrink-0">—</span>The remaining balance is due upon project completion, before delivery of final files</li>
                <li className="flex gap-2"><span className="text-[#00c47a] font-bold shrink-0">—</span>All prices are in GBP and inclusive of any applicable costs unless stated otherwise</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl mb-4">Project timelines</h2>
              <p className="text-[#6b6b6b] leading-relaxed mb-4">
                Estimated delivery times are as follows:
              </p>
              <ul className="space-y-2 text-[#6b6b6b]">
                <li className="flex gap-2"><span className="text-[#00c47a] font-bold shrink-0">—</span><span><strong className="text-[#0d0d0d]">Websites:</strong> approximately 10 business days from brief sign-off</span></li>
                <li className="flex gap-2"><span className="text-[#00c47a] font-bold shrink-0">—</span><span><strong className="text-[#0d0d0d]">SaaS tools:</strong> 2 to 3 weeks depending on complexity</span></li>
                <li className="flex gap-2"><span className="text-[#00c47a] font-bold shrink-0">—</span><span><strong className="text-[#0d0d0d]">Automation:</strong> approximately 1 week for initial setup</span></li>
              </ul>
              <p className="text-[#6b6b6b] leading-relaxed mt-4">
                Timelines are estimates, not guarantees. Delays caused by late client feedback, changes in scope, or circumstances outside our control may extend delivery. We will communicate any delays proactively.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl mb-4">Revisions and scope</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                Reasonable revisions are included as part of every project. A revision is defined as a change that falls within the agreed brief. Major scope changes — including new features, structural redesigns, or content additions not part of the original brief — may incur additional costs. Any additional charges will be agreed in writing before work proceeds.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl mb-4">Ownership</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                Upon receipt of full and final payment, the client receives full ownership of all deliverables, including website code, design assets, and any custom-built tools. You are free to host, modify, or transfer the work as you see fit. Atavo Agency retains no ongoing claim to the delivered products.
              </p>
              <p className="text-[#6b6b6b] leading-relaxed mt-4">
                Any third-party assets used (fonts, stock imagery, plugins) are subject to their respective licences. We will make you aware of any such assets and their terms at handover.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl mb-4">Cancellation</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                You may cancel a project at any time by notifying us in writing at{" "}
                <a href="mailto:hello@atavo.co.uk" className="text-[#00c47a] hover:underline">
                  hello@atavo.co.uk
                </a>. The 50% deposit is non-refundable, as it covers time and resources committed at project start. If cancellation occurs after significant work has been completed, additional charges may apply on a pro-rata basis, up to the total project value.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl mb-4">Limitation of liability</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                Atavo Agency will deliver work to a professional standard and will rectify any defects that arise from our own work. However, we are not liable for any loss of revenue, loss of data, loss of business, or any indirect or consequential loss arising from the use of, or inability to use, any delivered product or service. Our total liability in any matter shall not exceed the total fees paid for the relevant project.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl mb-4">Client responsibilities</h2>
              <p className="text-[#6b6b6b] leading-relaxed mb-4">
                To deliver your project on time, we require:
              </p>
              <ul className="space-y-2 text-[#6b6b6b]">
                <li className="flex gap-2"><span className="text-[#00c47a] font-bold shrink-0">—</span>Timely feedback at each review stage (typically within 3 business days)</li>
                <li className="flex gap-2"><span className="text-[#00c47a] font-bold shrink-0">—</span>Provision of all required content, assets, and access credentials as requested</li>
                <li className="flex gap-2"><span className="text-[#00c47a] font-bold shrink-0">—</span>Confirmation that all content provided is owned by you or that you have the right to use it</li>
              </ul>
              <p className="text-[#6b6b6b] leading-relaxed mt-4">
                Delays caused by late client response are not the responsibility of Atavo Agency and may affect the estimated delivery date.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl mb-4">Governing law</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                These terms are governed by the laws of <strong className="text-[#0d0d0d]">England and Wales</strong>. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl mb-4">Changes to these terms</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                We may update these terms from time to time. The current version will always be published on this page. For ongoing projects, the terms in place at the time of your deposit payment apply.
              </p>
            </section>

            <section className="border-t border-[#e8e8e8] pt-8">
              <p className="text-[#6b6b6b] text-sm">
                Questions about these terms? Email{" "}
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
