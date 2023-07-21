import React, { useCallback, ChangeEvent, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

import pdfMake from 'pdfmake/build/pdfmake.js';
import pdfFonts from 'pdfmake/build/vfs_fonts.js';

import GlobalStyle from '../src/styles/global';

const Header = dynamic(import('../src/components/Header'));
const Wrapper = dynamic(import('../src/components/Wrapper'));
const Seo = dynamic(import('../src/components/Seo'));
const Schema = dynamic(import('../src/components/Schema'));
const RelatedLinks = dynamic(import('../src/components/RelatedLinks'));
const Content = dynamic(import('../src/components/Content'));

// import Header from '../src/components/Header';
// import Footer from '../src/components/Footer';
// import Content from '../src/components/Content';
// import RelatedLinks from '../src/components/RelatedLinks';
// import Seo from '../src/components/Seo';
// import Schema from '../src/components/Schema';
// import Wrapper from '../src/components/Wrapper';

const ConvertJsonToPdf: React.FC = () => {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.focus();
    }
  }, []);
  const convertToPdf = (json: JSON) => {
    let array = typeof json !== 'object' ? JSON.parse(json) : json;

    if (!Array.isArray(array)) {
      array = [array];
    }

    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const title = Object.keys(array[0])[0];
    const document: any = {
      content: [{ text: title, fontSize: 26, bold: true }],
    };

    array.forEach((item: any) => {
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
      <GlobalStyle />
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
      <div>
        <ContainerSection id="content-data">
          <Content>
            <Subtitle>Insert JSON</Subtitle>
            <Container>
              <InputData id="data-pdf-json" ref={ref} onChange={onChangeJson} />
            </Container>
          </Content>
          <RelatedLinks
            bottom="-100px"
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
        </ContainerSection>
      </div>
    </Wrapper>
  );
};

export default ConvertJsonToPdf;

const ContainerSection = styled.div`
  width: 100%;
  background: #0f598a;
  padding: 10px 0 30px;
  position: absolute;
  top: 80px;
`;

const Container = styled.div`
  background: #fff;
  display: flex;
  height: 60vh;
  border-radius: 20px;
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
  border-radius: 20px;
`;
const Subtitle = styled.h2`
  font-size: 26px;
  color: #fff;
  margin: 20px 0;
`;
