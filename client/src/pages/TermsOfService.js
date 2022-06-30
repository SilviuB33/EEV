import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn.js";
import { SectionHeading } from "components/misc/Headings";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;

export default ({ headingText = "Terms And Condition" }) => {
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>
            <p>Last updated: April 10, 2022</p>

            <p>Please read these terms and conditions carefully before using Our Service.</p>

            <h1>Interpretation and Definitions</h1>
            <h2>Interpretation</h2>
            <p>
              The words of which the initial letter is capitalized have meanings defined under the following conditions.
            </p>
            <p>
              The following definitions shall have the same meaning regardless of whether they appear in singular or in
              plural.
            </p>

            <h2>Definitions</h2>
            <p>For the purposes of these Terms and Conditions:</p>
            <ul>
              <li>
                <strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement)
                refers to Extron Energy Vision S.R.L.
              </li>
              <li>
                <strong>Country</strong> refers to: Romania
              </li>
              <li>
                <strong>Terms and Conditions</strong> (also referred as "Terms") mean these Terms and Conditions that
                form the entire agreement between You and the Company regarding the use of the Service.
              </li>
              <li>
                <strong>Third-party Social Media Service</strong> means any services or content (including data,
                information, products or services) provided by a third-party that may be displayed, included or made
                available by the Service.
              </li>
              <li>
                <strong>Website</strong> refers to ExtronEnergyVision, accessible from hhtp://ExtronEnergyVision.com
              </li>
              <li>
                <strong>You</strong> means the individual accessing or using the Service, or the company, or other legal
                entity on behalf of which such individual is accessing or using the Service, as applicable.
              </li>
            </ul>

            <h1>Acknowledgement</h1>
            <p>
              These are the Terms and Conditions governing the use of this Service and the agreement that operates
              between You and the Company. These Terms and Conditions set out the rights and obligations of all users
              regarding the use of the Service.
            </p>
            <p>
              Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms
              and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the
              Service.
            </p>
            <p>
              By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree
              with any part of these Terms and Conditions then You may not access the Service.
            </p>
            <p>
              You represent that you are over the age of 18. The Company does not permit those under 18 to use the
              Service.
            </p>
            <p>
              Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the
              Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection,
              use and disclosure of Your personal information when You use the Application or the Website and tells You
              about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before
              using Our Service.
            </p>

            <h1>Links to Other Websites</h1>
            <p>
              Our Service may contain links to third-party web sites or services that are not owned or controlled by the
              Company.
            </p>
            <p>
              The Company has no control over, and assumes no responsibility for, the content, privacy policies, or
              practices of any third party web sites or services. You further acknowledge and agree that the Company
              shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be
              caused by or in connection with the use of or reliance on any such content, goods or services available on
              or through any such web sites or services.
            </p>
            <p>
              We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites
              or services that You visit.
            </p>

            <h1>Termination</h1>
            <p>
              We may terminate or suspend Your access immediately, without prior notice or liability, for any reason
              whatsoever, including without limitation if You breach these Terms and Conditions.
            </p>
            <p>Upon termination, Your right to use the Service will cease immediately.</p>

            <h1>Limitation of Liability</h1>
            <p>
              To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be
              liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not
              limited to, damages for loss of profits, loss of data or other information, for business interruption, for
              personal injury, loss of privacy arising out of or in any way related to the use of or inability to use
              the Service, third-party software and/or third-party hardware used with the Service, or otherwise in
              connection with any provision of this Terms), even if the Company or any supplier has been advised of the
              possibility of such damages and even if the remedy fails of its essential purpose.
            </p>
            <p>
              Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or
              consequential damages, which means that some of the above limitations may not apply. In these states, each
              party's liability will be limited to the greatest extent permitted by law.
            </p>

            <h1>Governing Law</h1>
            <p>
              The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the
              Service. Your use of the Application may also be subject to other local, state, national, or international
              laws.
            </p>

            <h1>Disputes Resolution</h1>
            <p>
              If You have any concern or dispute about the Service, You agree to first try to resolve the dispute
              informally by contacting the Company.
            </p>

            <h1>For European Union (EU) Users</h1>
            <p>
              If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the
              country in which you are resident in.
            </p>

            <h1>United States Legal Compliance</h1>
            <p>
              You represent and warrant that (i) You are not located in a country that is subject to the United States
              government embargo, or that has been designated by the United States government as a “terrorist
              supporting” country, and (ii) You are not listed on any United States government list of prohibited or
              restricted parties.
            </p>

            <h1>Translation Interpretation</h1>
            <p>
              These Terms and Conditions may have been translated if We have made them available to You on our Service.
            </p>
            <p>You agree that the original English text shall prevail in the case of a dispute.</p>

            <h1>Changes to These Terms and Conditions</h1>
            <p>
              We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision
              is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms
              taking effect. What constitutes a material change will be determined at Our sole discretion.
            </p>
            <p>
              By continuing to access or use Our Service after those revisions become effective, You agree to be bound
              by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the
              website and the Service.
            </p>

            
            <h1>Severability and Waiver</h1>
            <h2>Severability</h2>
            <p>
              If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and
              interpreted to accomplish the objectives of such provision to the greatest extent possible under
              applicable law and the remaining provisions will continue in full force and effect.
            </p>

            <h2>Waiver</h2>
            <p>
              Except as provided herein, the failure to exercise a right or to require performance of an obligation
              under this Terms shall not effect a party's ability to exercise such right or require such performance at
              any time thereafter nor shall be the waiver of a breach constitute a waiver of any subsequent breach.
            </p>
            <h1>Professional Disclaimer</h1>
            <p>
              The site cannot and does not contain legal advice. The legal information is provided for general informational and educational purposes only and is not a substitute for
              professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropiate professionals. We do not provide any kind of legal advice. THE USE OR RELIANCE OF 
              ANY INFORMATION CONTAINED ON THE SITE IS SOLELY AT YOUR OWN RISK.
            </p>

            <h2>Testimonials Disclaimer</h2>
            <p>
            The Site may contain Testimonials by users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users. However,
            the experiences are personal to those particular users, and may not necessarily be representative of all users of our products and/or services. We do not claim, and you shold not assume, that all users will have the same experiences.
            YOUR INDIVIDUAL RESULTS MAY VARY.
            </p>

            <h1>Translation Interpretation</h1>
            <p>
              These Terms and Conditions may have been translated if We have made them available to You on our Service.
            </p>
            <p>You agree that the original English text shall prevail in the case of a dispute.</p>

            <h1>Changes to These Terms and Conditions</h1>
            <p>
              We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision
              is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms
              taking effect. What constitutes a material change will be determined at Our sole discretion.
            </p>
            <p>
              By continuing to access or use Our Service after those revisions become effective, You agree to be bound
              by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the
              website and the Service.
            </p>
            <p>
              These Terms and Conditions may have been translated if We have made them available to You on our Service.
            </p>
            <p>You agree that the original English text shall prevail in the case of a dispute.</p>

            <h1>Contact Us</h1>
            <p>If you have any questions about these Terms and Conditions, You can contact us:</p>

            <ul>
              <li>By email: extronenergyvision@gmail</li>
            </ul>
          </Text>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
