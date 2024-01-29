'use client';
import styled from 'styled-components';
import { COLORS } from '@/lib/constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Heading1 from '../Heading1';

function PrivacyPolicy() {
  return (
    <Wrapper>
      <Heading1>Privacy Policy</Heading1>

      <Text>
        Privacy Policy
        <br />
        <br />
        Effective Date: 25/01/2024
        <br />
        <br />
        Your privacy is important to us. This Privacy Policy
        (&quot;Policy&quot;) explains how KG Technology Group (&quot;we,&quot;
        &quot;us,&quot; or &quot;our&quot;) collects, uses, and protects the
        personal information you provide when using the QuickShyft mobile
        application (the &quot;App&quot;). By using the App, you consent to the
        practices outlined in this Policy. Information We Collect <br />
        1.1 Personal Information: When you create an account or use certain
        features of the App, we may collect personal information that can be
        used to identify you, such as your name, email address, username, and
        any other information you provide voluntarily. <br />
        1.2 Usage Information: We may collect information about your
        interactions with the App, such as your device information, IP address,
        browser type, and operating system. We may also collect information
        about how you use the App, such as the features you access, the time and
        duration of your activities, and your interaction with other users.
        <br />
        <br />
        Use of Collected Information <br />
        2.1 Personal Information: We may use the personal information we collect
        to provide and improve the App, communicate with you, and respond to
        your inquiries or requests. We may also use your personal information to
        send you promotional or marketing materials, subject to your consent
        where required by applicable law. 2.2 Usage Information: We may use the
        usage information we collect to analyze trends, administer the App,
        track users&apos; movements, and gather demographic information. This
        information helps us understand how users interact with the App,
        allowing us to improve its functionality and user experience.
        <br />
        <br />
        Sharing of Information <br />
        3.1 Third-Party Service Providers: We may share your personal
        information with trusted third-party service providers who assist us in
        operating the App and providing services to you. These service providers
        are obligated to keep your information confidential and are prohibited
        from using it for any other purpose. <br />
        3.2 Legal Requirements: We may disclose your personal information if
        required to do so by law or in response to a valid request from a
        governmental or law enforcement authority. <br />
        3.3 Business Transfers: In the event of a merger, acquisition, or sale
        of all or a portion of our assets, your personal information may be
        transferred as part of the transaction. We will notify you via email or
        prominent notice on the App of any change in ownership or the use of
        your personal information. Security <br />
        We take reasonable measures to protect the personal information you
        provide through the App against unauthorized access, disclosure,
        alteration, or destruction. However, no method of transmission over the
        internet or electronic storage is completely secure, and we cannot
        guarantee the absolute security of your information. Children&apos;s
        Privacy <br />
        The App is not intended for use by individuals under the age of [minimum
        age required by law]. We do not knowingly collect personal information
        from children under the age specified by applicable law. If we become
        aware that we have collected personal information from a child without
        parental consent, we will take steps to remove that information from our
        systems.
        <br />
        <br />
        Third-Party Links <br />
        The App may contain links to third-party websites or services that are
        not operated or controlled by us. This Policy does not apply to such
        third-party websites or services. We encourage you to review the privacy
        policies of those third parties before providing any personal
        information.
        <br />
        <br />
        Changes to the Policy <br />
        We may update this Policy from time to time to reflect changes in our
        practices or legal obligations. We will notify you of any material
        changes by posting the updated Policy on the App. Your continued use of
        the App after the effective date of the revised Policy constitutes your
        acceptance of the changes.
        <br />
        <br />
        Contact Us <br />
        If you have any questions, concerns, or requests regarding this Policy
        or our privacy practices, please contact us at info@quickshyft.com.
        <br />
        <br />
        Thank you for using QuickShyft!
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled(MaxWidthWrapper)`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding-top: 24px;
  padding-bottom: 24px;
`;

const Text = styled.p`
  color: ${COLORS.Primary5};
`;

export default PrivacyPolicy;
