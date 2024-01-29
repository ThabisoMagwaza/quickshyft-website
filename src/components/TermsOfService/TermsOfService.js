'use client';
import styled from 'styled-components';
import { COLORS } from '@/lib/constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Heading1 from '../Heading1';

function TermsOfService() {
  return (
    <Wrapper>
      <Heading1>Terms of Service</Heading1>

      <Text>
        Terms of Service
        <br />
        <br />
        Effective Date: 25/01/2024
        <br />
        <br />
        Welcome to QuickShyft! These Terms of Service (&quot;Terms&quot;) govern
        your use of the QuickShyft mobile application (the &quot;App&quot;),
        which is owned and operated by KG Technology Group (&quot;we,&quot;
        &quot;us,&quot; or &quot;our&quot;). By accessing or using the App, you
        agree to be bound by these Terms. If you do not agree with any part of
        these Terms, please refrain from using the App.
        <br />
        <br />
        Acceptance of Terms <br />
        By using the App, you acknowledge that you have read, understood, and
        agree to be bound by these Terms, including any updates or modifications
        made to them. If you do not agree to these Terms, please discontinue
        your use of the App.
        <br />
        <br />
        App Description and Use <br />
        The App, QuickShyft, is a mobile application that provides users with
        tools and resource that will assist the user in their journey to quit
        vaping. You may use the App solely for personal, non-commercial
        purposes. You are responsible for ensuring that your use of the App
        complies with applicable laws and regulations.
        <br />
        <br />
        User Accounts <br />
        To access certain features of the App, you may be required to create a
        user account. When creating an account, you agree to provide accurate
        and complete information. You are solely responsible for maintaining the
        confidentiality of your account credentials and for any activity that
        occurs under your account. You agree to notify us immediately of any
        unauthorized use of your account.
        <br />
        <br />
        User Content <br />
        By using the App, you may have the opportunity to submit, post, or share
        content, including but not limited to text, images, videos, and audio
        (&quot;User Content&quot;). You retain ownership of your User Content.
        However, by submitting User Content on the App, you grant us a
        non-exclusive, worldwide, royalty-free, perpetual, irrevocable, and
        fully sublicensable right to use, reproduce, modify, adapt, publish,
        translate, create derivative works from, distribute, and display such
        User Content in any media.
        <br />
        <br />
        You are solely responsible for your User Content and the consequences of
        posting or sharing it on the App. You agree not to submit User Content
        that violates any law, infringes upon any intellectual property rights,
        or is defamatory, abusive, offensive, or otherwise objectionable.
        <br />
        <br />
        Intellectual Property Rights <br />
        The App, including its content, features, and functionality, is owned by
        us or our licensors and is protected by intellectual property laws. You
        may not modify, reproduce, distribute, create derivative works of,
        publicly display or perform, or in any way exploit any of the content on
        the App without our prior written consent.
        <br />
        <br />
        Disclaimer of Warranties <br />
        The App is provided on an &quot;as is&quot; and &quot;as available&quot;
        basis, without any warranties or representations, express or implied. We
        make no guarantees regarding the reliability, accuracy, timeliness,
        availability, or security of the App. Your use of the App is at your own
        risk.
        <br />
        <br />
        Limitation of Liability <br />
        To the maximum extent permitted by law, we shall not be liable for any
        direct, indirect, incidental, consequential, special, or exemplary
        damages arising out of or in connection with your use of the App. This
        includes, but is not limited to, any loss of profits, data, or goodwill.
        <br />
        <br />
        Modification of Terms <br />
        We reserve the right to modify these Terms at any time without prior
        notice. The updated Terms will be posted on the App, and it is your
        responsibility to review them periodically. By continuing to use the App
        after the Terms have been updated, you accept the revised Terms.
        <br />
        <br />
        Termination <br />
        We may terminate or suspend your access to the App at any time, without
        prior notice or liability, for any reason whatsoever, including, without
        limitation, if you breach these Terms.
        <br />
        <br />
        Entire Agreement <br />
        These Terms constitute the entire agreement between you and us
        concerning the subject matter herein and supersedes all prior or
        contemporaneous communications and proposals, whether electronic, oral,
        or written.
        <br />
        <br />
        If you have any questions or concerns about these Terms, please contact
        us at info@quickshyft.com.
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

  max-width: 700px;
  text-align: center;
`;

const Text = styled.p`
  color: ${COLORS.Primary5};
  text-align: start;
`;

export default TermsOfService;
