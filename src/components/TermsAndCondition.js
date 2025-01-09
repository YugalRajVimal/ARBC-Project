import React from "react";

const TermsAndCondition = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Terms & Conditions
      </h1>
      <p className="text-gray-500 text-sm mb-6">
        Last updated on 09-01-2025 15:58:59
      </p>

      <p className="text-gray-700 mb-4">
        These Terms and Conditions, along with privacy policy or other terms
        (“Terms”) constitute a binding agreement by and between{" "}
        <strong>ARBC GROUP</strong>, (“Website Owner” or “we” or “us” or “our”)
        and you (“you” or “your”) and relate to your use of our website, goods
        (as applicable) or services (as applicable) (collectively, “Services”).
      </p>

      <p className="text-gray-700 mb-4">
        By using our website and availing the Services, you agree that you have
        read and accepted these Terms (including the Privacy Policy). We reserve
        the right to modify these Terms at any time and without assigning any
        reason. It is your responsibility to periodically review these Terms to
        stay informed of updates.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
        Terms of Use
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>
          You agree to provide true, accurate, and complete information during
          registration.
        </li>
        <li>
          We do not provide any warranty regarding accuracy, completeness, or
          suitability of the website’s content.
        </li>
        <li>Your use of the website and services is at your own risk.</li>
        <li>
          All website content is proprietary to us, and you may not claim
          ownership.
        </li>
        <li>Unauthorized use may lead to legal action.</li>
        <li>You agree to pay any associated charges for the services.</li>
        <li>You shall not use the website for illegal purposes.</li>
        <li>
          Third-party links on our website are governed by their respective
          terms.
        </li>
        <li>
          Transactions on the website constitute a legally binding contract.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
        Refund Policy
      </h2>
      <p className="text-gray-700 mb-4">
        You are entitled to claim a refund if we are unable to provide the
        service. Refunds must be requested within the stipulated time, failing
        which you will not be eligible.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
        Force Majeure
      </h2>
      <p className="text-gray-700 mb-4">
        We shall not be liable for any failure to perform obligations under
        these Terms due to events beyond our control.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
        Governing Law
      </h2>
      <p className="text-gray-700 mb-4">
        These Terms are governed by the laws of India, and all disputes shall be
        subject to the exclusive jurisdiction of the courts in Delhi.
      </p>
    </div>
  );
};

export default TermsAndCondition;
