import React, { useCallback, ChangeEvent } from 'react';

import styled from 'styled-components';
import pdfMake from 'pdfmake/build/pdfmake.js';
import pdfFonts from 'pdfmake/build/vfs_fonts.js';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Content from '../../components/Content';
import ContainerInfo from '../../components/Info';
import RelatedLinks from '../../components/RelatedLinks';
import Seo from '../../components/Seo';
import Schema from '../../components/Schema';

const ConvertJsonToPdf: React.FC = () => {
  const convertToPdf = (json: JSON) => {
    let array = typeof json !== 'object' ? JSON.parse(json) : json;
    if (!Array.isArray(array)) array = [array];
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const title = Object.keys(array[0])[0];
    const document: any = {
      content: [{ text: title, fontSize: 26, bold: true }],
    };
    array[0][title].forEach((item: any) => {
      const line: any[] = [{ text: '', margin: [0, 20, 0, 0] }];
      Object.keys(item).map(key => {
        const textPdf = item[key];
        if (Array.isArray(textPdf)) {
          line.push(`${key} : invalid value`);
          return null;
        }
        line.push(`${key} : ${textPdf}`);
        return null;
      });

      document.content.push({
        columns: [line],
        lineHeight: 2,
      });
    });
    pdfMake.createPdf(document).download();
  };

  const onChangeJson = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value) {
      convertToPdf(JSON.parse(e.target.value));
    }
  }, []);

  return (
    <Wrapper>
      <Seo
        title="Convert JSON to PDF online"
        description="Convert JSON to PDF online, this page is simple, fast and practical!"
        ogDescription="Convert JSON to PDF online, this page is simple, fast and practical! Come meet us!"
        ogTitle="Convering JSON to PDF simply!"
        canonical="https://convertjsononline.com/json-to-pdf"
      />
      <Schema
        data={{
          '@context': 'http://schema.org/',
          '@type': 'Schema',
          '@graph': [
            {
              '@id': `https://convertjsononline.com#webpage`,
              '@type': 'WebPage',
              name: 'Convert JSON to PDF online',
              image: `https://convertjsononline.com#primaryimage`,
              url: 'https://convertjsononline.com/json-to-pdf',
              description:
                'Convert JSON to PDF online, this page is simple, fast and practical!',
              isPartOf: {
                '@id': 'Website',
              },
              mainEntityOfPage: {
                '@id': '#website',
              },
            },
          ],
        }}
      />
      <Header title="Convert JSON to PDF online" itemSelected={2} />
      <Content>
        <Subtitle>Convert JSON to PDF online</Subtitle>
        <Container>
          <InputData onChange={onChangeJson} />
        </Container>
        <ContainerInfo
          data={[
            {
              title: 'PDF Introduction',
              text: 'Portable Document Format (PDF), standardized as ISO 32000, is a file format developed by Adobe in 1992 to present documents, including text formatting and images, in a manner independent of application software, hardware, and operating systems.[2][3] Based on the PostScript language, each PDF file encapsulates a complete description of a fixed-layout flat document, including the text, fonts, vector graphics, raster images and other information needed to display it. PDF has its roots in "The Camelot Project" initiated by Adobe co-founder John Warnock in 1991.[4]PDF was standardized as ISO 32000 in 2008.[5] The last edition as ISO 32000-2:2020 was published in December 2020.PDF files may contain a variety of content besides flat text and graphics including logical structuring elements, interactive elements such as annotations and form-fields, layers, rich media (including video content), three-dimensional objects using U3D or PRC, and various other data formats. The PDF specification also provides for encryption and digital signatures, file attachments, and metadata to enable workflows requiring these features.',
            },
            {
              title: 'PDF History Wikipedia',
              text: 'Adobe Systems made the PDF specification available free of charge in 1993. In the early years PDF was popular mainly in desktop publishing workflows, and competed with a variety of formats such as DjVu, Envoy, Common Ground Digital Paper, Farallon Replica and even Adobe own PostScript format.PDF was a proprietary format controlled by Adobe until it was released as an open standard on July 1, 2008, and published by the International Organization for Standardization as ISO 32000-1:2008,[6][7] at which time control of the specification passed to an ISO Committee of volunteer industry experts. In 2008, Adobe published a Public Patent License to ISO 32000-1 granting royalty-free rights for all patents owned by Adobe that are necessary to make, use, sell, and distribute PDF-compliant implementations.[8]PDF 1.7, the sixth edition of the PDF specification that became ISO 32000-1, includes some proprietary technologies defined only by Adobe, such as Adobe XML Forms Architecture (XFA) and JavaScript extension for Acrobat, which are referenced by ISO 32000-1 as normative and indispensable for the full implementation of the ISO 32000-1 specification.[9] These proprietary technologies are not standardized and their specification is published only on Adobe website.[10][11][12][13] Many of them are also not supported by popular third-party implementations of PDF.In December 2020, the second edition of PDF 2.0, ISO 32000-2:2020, was published, including clarifications, corrections and critical updates to normative references.[14] ISO 32000-2 does not include any proprietary technologies as normative references.[15]',
            },
          ]}
        />
        <RelatedLinks
          data={[
            {
              name: 'adobe.com',
              link: 'https://www.adobe.com/en/acrobat/complete-pdf-solution.html?mv=search&ef_id=Cj0KCQiA2sqOBhCGARIsAPuPK0hNLSwV_ZzDdZ-rXOu-BBQmWAqzTA7zCuh2kVOdOn3I59D_9dxM3aIaAsOHEALw_wcB:G:s&s_kwcid=AL!3085!3!479444604857!e!!g!!adobe%20pdf&gclid=Cj0KCQiA2sqOBhCGARIsAPuPK0hNLSwV_ZzDdZ-rXOu-BBQmWAqzTA7zCuh2kVOdOn3I59D_9dxM3aIaAsOHEALw_wcB',
            },
            {
              name: 'download adobe acrobat reader dc',
              link: 'https://auth.services.adobe.com/en_US/index.html?callback=https%3A%2F%2Fims-na1.adobelogin.com%2Fims%2Fadobeid%2FCCHomeWeb1%2FAdobeID%2Ftoken%3Fredirect_uri%3Dhttps%253A%252F%252Fcreativecloud.adobe.com%252Fapps%252Facrobat-pdf%253Fpromoid%253DH822XQF9%2526mv%253Dother%2523from_ims%253Dtrue%2526old_hash%253D%2526api%253Dauthorize%26code_challenge_method%3Dplain%26use_ms_for_expiry%3Dtrue&client_id=CCHomeWeb1&scope=AdobeID%2Copenid%2Cgnav%2Ccreative_cloud%2Cread_organizations%2Ccreative_sdk%2Cadditional_info.optionalAgreements%2Cadditional_info.screen_name%2Cadditional_info.roles%2Csao.ccprivate%2Ctk_platform%2Cpiip_read&denied_callback=https%3A%2F%2Fims-na1.adobelogin.com%2Fims%2Fdenied%2FCCHomeWeb1%3Fredirect_uri%3Dhttps%253A%252F%252Fcreativecloud.adobe.com%252Fapps%252Facrobat-pdf%253Fpromoid%253DH822XQF9%2526mv%253Dother%2523from_ims%253Dtrue%2526old_hash%253D%2526api%253Dauthorize%26response_type%3Dtoken&relay=ef9f92e5-de45-4e9a-9be5-2a224722f74c&locale=en_US&flow_type=token&idp_flow_type=login#/',
            },
            {
              name: 'download google play adobe reader',
              link: 'https://play.google.com/store/apps/details?id=com.adobe.reader&hl=pt_BR&gl=US',
            },
          ]}
        />
      </Content>
      <Footer />
    </Wrapper>
  );
};

export default ConvertJsonToPdf;

const Wrapper = styled.div``;

const Container = styled.div`
  background: #fff;
  display: flex;
  height: 20vh;
`;

const InputData = styled.textarea`
  border: none;
  border-right: 1px solid #ccc;
  font-family: 'Roboto Slab', serif;
  color: #666;
  font-size: 20px;
  line-height: 20px;
  width: 50%;
  flex: 1;
  padding: 20px;
`;
const Subtitle = styled.h2`
  font-size: 26px;
  color: #fff;
  margin: 20px 0;
`;
