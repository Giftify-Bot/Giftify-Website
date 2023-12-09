const TermsOfService = () => {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-6">Effective date: July 15, 2023</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Introduction</h2>
        <p className="mb-4">
          Thank you for using Giftify! These Terms of Service
          (&lsquo;Terms&rsquo;) govern your use of our bot and any related
          services (collectively, the &lsquo;Service&rsquo;). By using the
          Service, you agree to comply with these Terms. Please read them
          carefully before using the Service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Description of Service</h2>
        <p className="mb-4">
          Giftify is a bot designed to streamline the process of hosting
          giveaways on platforms such as Discord. It provides features such as
          creating and managing giveaways, timers, and donation tracking.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">User Conduct</h2>
        <p className="mb-4">
          You agree to use the Service in compliance with applicable laws and
          regulations. You are solely responsible for your conduct while using
          the Service. Prohibited activities include but are not limited to:
          violating any laws or regulations, impersonating any person or entity,
          interfering with or disrupting the Service or servers, engaging in any
          form of harassment or abusive behavior, and uploading or transmitting
          viruses or any other malicious code.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Intellectual Property</h2>
        <p className="mb-4">
          Giftify and its associated logos and designs are the property of
          Giftify Inc. You may not use our intellectual property without prior
          written consent.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Disclaimer of Warranties</h2>
        <p className="mb-4">
          The Service is provided &lsquo;as is&rsquo; and without warranties of
          any kind, whether express or implied. We do not guarantee the
          accuracy, reliability, or availability of the Service. You use the
          Service at your own risk.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Limitation of Liability</h2>
        <p className="mb-4">
          Giftify Inc. shall not be liable for any direct, indirect, incidental,
          consequential, or exemplary damages resulting from your use of the
          Service. You agree to indemnify and hold Giftify Inc. harmless from
          any claims arising out of your use of the Service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          Modifications to Terms of Service
        </h2>
        <p className="mb-4">
          Giftify Inc. reserves the right to modify or update these Terms of
          Service at any time without prior notice. Continued use of the Service
          after any modifications constitute your acceptance of the revised
          Terms.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about these Terms of Service,
          please contact us at{" "}
          <a href="mailto:akai.is.amazing@gmail.com" className="text-blue-600">
            akai.is.amazing@gmail.com
          </a>
          .
        </p>
      </section>
    </main>
  );
};

export default TermsOfService;
