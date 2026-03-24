import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Shady Grove Labs",
  description: "Privacy Policy for Spend Spy by Shady Grove Labs",
};

export default function PrivacyPolicy() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          padding: "1.5rem 2rem",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <Link
          href="/"
          style={{
            color: "var(--color-accent)",
            textDecoration: "none",
            fontSize: "0.875rem",
            fontWeight: 500,
          }}
        >
          &larr; Back to Home
        </Link>
      </header>

      <main
        style={{
          flex: 1,
          maxWidth: "720px",
          margin: "0 auto",
          padding: "3rem 2rem",
          lineHeight: 1.7,
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: 600,
            marginBottom: "0.5rem",
          }}
        >
          Privacy Policy
        </h1>
        <p style={{ color: "var(--color-text-muted)", marginBottom: "0.25rem", fontSize: "0.9rem" }}>
          <strong>Effective Date:</strong> March 7, 2026
        </p>
        <p style={{ color: "var(--color-text-muted)", marginBottom: "2.5rem", fontSize: "0.9rem" }}>
          <strong>Last Updated:</strong> March 7, 2026
        </p>

        <p style={{ marginBottom: "1.5rem" }}>
          Shady Grove Labs, LLC (&ldquo;Shady Grove Labs,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) provides Spend Spy (the &ldquo;App&rdquo;), a service that helps users analyze and better understand their Amazon spending and purchase history.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          This Privacy Policy explains what information we collect, how we use it, how we share it, and the choices available to you.
        </p>

        <Section number="1" title="Scope">
          <p>
            This Privacy Policy applies to information collected through Spend Spy, our website, and any related services that link to this Privacy Policy.
          </p>
        </Section>

        <Section number="2" title="Information We Collect">
          <p style={{ marginBottom: "1rem" }}>We may collect the following types of information:</p>

          <SubSection title="A. Information You Provide to Us">
            <p style={{ marginBottom: "0.75rem" }}>
              When you use Spend Spy, create an account, or contact us, we may collect information such as:
            </p>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
              <li>your name</li>
              <li>your email address</li>
              <li>your account credentials or login-related information</li>
              <li>any information you provide in communications or support requests</li>
            </ul>
          </SubSection>

          <SubSection title="B. Information We Receive from Amazon With Your Permission">
            <p style={{ marginBottom: "0.75rem" }}>
              If you choose to connect your Amazon account and authorize access, we may receive certain information from Amazon through the Amazon Data Portability API. Depending on the permissions you grant, this may include:
            </p>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "0.75rem" }}>
              <li>order history</li>
              <li>purchase amounts</li>
              <li>transaction dates</li>
              <li>product and order details</li>
              <li>merchant-related details</li>
              <li>other Amazon account data you explicitly authorize for transfer</li>
            </ul>
            <p>We only receive Amazon data after you authorize that access.</p>
          </SubSection>

          <SubSection title="C. Information Collected Automatically">
            <p style={{ marginBottom: "0.75rem" }}>
              When you use Spend Spy or our website, we may automatically collect certain technical and usage information, such as:
            </p>
            <ul style={{ paddingLeft: "1.5rem" }}>
              <li>IP address</li>
              <li>browser type</li>
              <li>device type</li>
              <li>operating system</li>
              <li>pages viewed</li>
              <li>usage activity within the App</li>
              <li>log and diagnostic data</li>
              <li>cookies or similar technologies, where applicable</li>
            </ul>
          </SubSection>
        </Section>

        <Section number="3" title="How We Use Information">
          <p style={{ marginBottom: "0.75rem" }}>We use the information we collect to:</p>
          <ul style={{ paddingLeft: "1.5rem", marginBottom: "1rem" }}>
            <li>provide, operate, maintain, and improve Spend Spy</li>
            <li>generate analytics, summaries, reports, and insights about your Amazon spending</li>
            <li>personalize your experience</li>
            <li>authenticate users and secure accounts</li>
            <li>communicate with you about your account, updates, and support requests</li>
            <li>detect, investigate, and prevent fraud, abuse, security incidents, and technical issues</li>
            <li>comply with legal obligations</li>
            <li>enforce our terms and protect our rights</li>
          </ul>
          <p><strong>We do not sell your personal information.</strong></p>
        </Section>

        <Section number="4" title="Your Amazon Data">
          <p style={{ marginBottom: "1rem" }}>
            The Amazon data imported into Spend Spy is your data.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            We use that data only to provide Spend Spy&rsquo;s features to you, including spend tracking, analytics, summaries, and related insights. We do not sell your Amazon data to data brokers, advertisers, or other third parties.
          </p>
          <p>
            We do not use Amazon data in a way that is inconsistent with this Privacy Policy or your authorization.
          </p>
        </Section>

        <Section number="5" title="How We Share Information">
          <p style={{ marginBottom: "1rem" }}>We may share information only in the following limited situations:</p>

          <SubSection title="A. Service Providers">
            <p style={{ marginBottom: "0.75rem" }}>
              We may share information with vendors and service providers who help us operate Spend Spy and our website, such as providers for hosting, cloud storage, analytics, authentication, customer support, email delivery, database infrastructure, and security monitoring.
            </p>
            <p>
              These service providers may access information only as needed to perform services on our behalf and are required to protect it.
            </p>
          </SubSection>

          <SubSection title="B. Legal Requirements and Protection">
            <p style={{ marginBottom: "0.75rem" }}>We may disclose information if we believe it is necessary to:</p>
            <ul style={{ paddingLeft: "1.5rem" }}>
              <li>comply with applicable law, regulation, legal process, or government request</li>
              <li>enforce our agreements</li>
              <li>protect the rights, property, or safety of Shady Grove Labs, our users, or others</li>
            </ul>
          </SubSection>

          <SubSection title="C. Business Transfers">
            <p>
              If we are involved in a merger, acquisition, financing, asset sale, reorganization, or bankruptcy, your information may be transferred as part of that transaction, subject to applicable law.
            </p>
          </SubSection>

          <SubSection title="D. With Your Direction or Consent">
            <p>
              We may share information when you direct us to do so or otherwise consent.
            </p>
          </SubSection>
        </Section>

        <Section number="6" title="Data Retention">
          <p style={{ marginBottom: "1rem" }}>
            We retain personal information for as long as reasonably necessary to provide Spend Spy and fulfill the purposes described in this Privacy Policy, including for legal, security, accounting, and compliance purposes.
          </p>
          <p>
            If you delete your account or disconnect your Amazon account, we will delete or de-identify your personal information and imported Amazon data within a reasonable period, unless we are required or permitted by law to retain it.
          </p>
        </Section>

        <Section number="7" title="Data Security">
          <p style={{ marginBottom: "1rem" }}>
            We use reasonable administrative, technical, and physical safeguards designed to protect personal information from unauthorized access, disclosure, alteration, or destruction.
          </p>
          <p>
            However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
          </p>
        </Section>

        <Section number="8" title="Your Choices and Rights">
          <p style={{ marginBottom: "0.75rem" }}>
            Depending on where you live, you may have rights regarding your personal information, including the right to:
          </p>
          <ul style={{ paddingLeft: "1.5rem", marginBottom: "1rem" }}>
            <li>request access to the personal information we hold about you</li>
            <li>request correction of inaccurate information</li>
            <li>request deletion of your information</li>
            <li>withdraw consent where processing is based on consent</li>
            <li>object to or request restriction of certain processing</li>
            <li>request a copy of your information, where applicable</li>
          </ul>
          <p style={{ marginBottom: "1rem" }}>
            You may also disconnect Spend Spy&rsquo;s access to your Amazon data through the applicable authorization or permissions controls made available by Amazon or through our App, where available.
          </p>
          <p>
            To make a privacy request, contact us at:{" "}
            <a href="mailto:steveahirley@gmail.com" style={{ color: "var(--color-accent)" }}>
              steveahirley@gmail.com
            </a>
          </p>
        </Section>

        <Section number="9" title="Cookies and Similar Technologies">
          <p style={{ marginBottom: "1rem" }}>
            We may use cookies, local storage, and similar technologies to operate the website and App, remember your preferences, analyze usage, and improve performance.
          </p>
          <p>
            You can usually control cookies through your browser settings. If you disable certain cookies, some features may not work properly.
          </p>
        </Section>

        <Section number="10" title="Children&rsquo;s Privacy">
          <p style={{ marginBottom: "1rem" }}>
            Spend Spy is not directed to children under 13, and we do not knowingly collect personal information from children under 13.
          </p>
          <p>
            If we learn that we have collected personal information from a child under 13 without appropriate permission, we will delete that information.
          </p>
        </Section>

        <Section number="11" title="International Users">
          <p style={{ marginBottom: "1rem" }}>
            If you access Spend Spy from outside the United States, your information may be transferred to, stored in, and processed in the United States or other countries where we or our service providers operate.
          </p>
          <p>
            Those countries may have data protection laws that differ from the laws in your jurisdiction.
          </p>
        </Section>

        <Section number="12" title="Third-Party Services">
          <p>
            Spend Spy may integrate with or link to third-party services, including Amazon. We are not responsible for the privacy practices of third-party services, and your use of those services is governed by their own terms and privacy policies.
          </p>
        </Section>

        <Section number="13" title="Changes to This Privacy Policy">
          <p>
            We may update this Privacy Policy from time to time. If we make material changes, we will update the &ldquo;Last Updated&rdquo; date and provide additional notice if required by law.
          </p>
        </Section>

        <Section number="14" title="Contact Us">
          <p style={{ marginBottom: "1rem" }}>
            If you have questions about this Privacy Policy or our privacy practices, contact us at:
          </p>
          <address style={{ fontStyle: "normal", lineHeight: 1.8 }}>
            <strong>Shady Grove Labs, LLC</strong>
            <br />
            1225 Peachtree Battle Avenue NW
            <br />
            <a href="https://www.shadygrovelabs.com" style={{ color: "var(--color-accent)" }}>
              https://www.shadygrovelabs.com
            </a>
          </address>
        </Section>
      </main>

      <footer
        style={{
          padding: "2rem",
          textAlign: "center",
          fontSize: "0.8125rem",
          color: "var(--color-text-muted)",
          borderTop: "1px solid #e5e7eb",
        }}
      >
        <span>&copy; 2026 Shady Grove Labs, LLC</span>
      </footer>
    </div>
  );
}

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginBottom: "2.5rem" }}>
      <h2
        style={{
          fontSize: "1.375rem",
          fontWeight: 600,
          marginBottom: "1rem",
        }}
      >
        {number}. {title}
      </h2>
      {children}
    </section>
  );
}

function SubSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <h3
        style={{
          fontSize: "1.05rem",
          fontWeight: 600,
          marginBottom: "0.5rem",
        }}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}
