const PrivacyPolicy = () => {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-6">
        Welcome to our Privacy Policy page. This Privacy Policy governs the
        privacy of your personal information that we collect when you use our
        bot and related services (collectively, the &lsquo;Service&rsquo;). By
        using the Service, you consent to the collection and use of your
        personal information as described in this Privacy Policy.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
        <p className="mb-4">
          Our bot collects and stores the following information from Discord
          solely for its functioning: role IDs, user IDs, message IDs, channel
          IDs, and guild IDs. This information is used to provide the features
          and functionality of the bot, such as managing giveaways and tracking
          donations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Data Security</h2>
        <p className="mb-4">
          We take reasonable measures to protect the security of the collected
          information. However, please be aware that no method of transmission
          over the internet or electronic storage is completely secure, and we
          cannot guarantee absolute security.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Sharing of Information</h2>
        <p className="mb-4">
          We do not sell, trade, or otherwise transfer your personal information
          to third parties. The collected information is only used for the
          purpose of providing the bot&apos;s functionality and is not shared
          with any external entities.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Children&apos;s Privacy</h2>
        <p className="mb-4">
          Our Service is not intended for use by individuals under the age of
          13. We do not knowingly collect personal information from individuals
          under 13. If we become aware that we have collected personal
          information from an individual under 13, we will take steps to delete
          the information as soon as possible.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">
          Changes to this Privacy Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page. It
          is your responsibility to review this Privacy Policy periodically for
          any changes.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about this Privacy Policy,
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

export default PrivacyPolicy;
