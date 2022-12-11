import React, { useCallback, ChangeEvent, useRef, useEffect } from 'react';

import styled from 'styled-components';
import pdfMake from 'pdfmake/build/pdfmake.js';
import pdfFonts from 'pdfmake/build/vfs_fonts.js';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

import Content from '../src/components/Content';
import RelatedLinks from '../src/components/RelatedLinks';
import Seo from '../src/components/Seo';
import Schema from '../src/components/Schema';
import Wrapper from '../src/components/Wrapper';

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
          <InputData id="data-pdf-json" ref={ref} onChange={onChangeJson} />
        </Container>

        <ContainerInfo>
          <SubtitleArticle>What is Adobe PDF?</SubtitleArticle>
          <Text>
            PDF (Portable Document Format) is a file formatdeveloped by Adobe
            Systems to represent documents in a mannerregardless of the
            application, hardware, and operating system used forcreate them.{' '}
            <br />A PDF file can describe documents that contain text,graphics
            and images in a device- and resolution-independent format.Its main
            characteristic is to represent a documentwith integrity and fidelity
            to its original format preserving thelayout, font, size and all
            other settings of thearchive. <br />
            Any file created in one of the MS Office applications, ieWord, Excel
            and Power Point files, can be converted to PDF.Another possibility
            to generate PDF is through the Office Suite ofBrOffice.org, free
            software, is very similar to MS Office and allapplications have an
            icon on the toolbar for converting fromfiles to PDF. <br />
            How PDF technology worksPDF is a type of file that represents on
            your computer screenelectronic document pages. It is possible to
            convert various types to PDFfrom files, from text-based ones to
            documents such as tables,graphics, images, etc. <br /> For this, the
            PDF generates files using the principlesessentials of PostScript
            technology, which is a kind of language usedto build pages for the
            most diverse purposes.In general, you can transform any printable
            filein PDF files.TRT Information Technology Secretariat of the 4th
            RegionAdvantages of PDF Small file size: files have a
            compressionacceptable (eg Word files with 1Mb after converting to
            PDFthey reach 100 Kb in size, 10% of the original); <br /> PDF files
            are compact and fully searchable and can beaccessed anytime with
            Adobe Reader. Do not have font and/or file formatting problems; PDF
            documents can have special access rights and can bedigitally signed,
            that is, they prevent any type of change in theoriginal file; <br />
            There are several free programs that generate PDF like: PDFMaker,
            PDFReDirect, PDFCreator among others.Note: the most popular software
            for generating and manipulating filesin PDF is Adobe Acrobat. <br />{' '}
            Be careful not to confuse withAdobe Reader, which is simply a free
            PDF reader.program allows only reading PDF files
          </Text>
        </ContainerInfo>
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

const Container = styled.div`
  background: #fff;
  display: flex;
  height: 60vh;
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
const ContainerInfo = styled.article`
  margin: 35px 0;
`;

const Text = styled.p`
  line-height: 25px;
`;

const SubtitleArticle = styled.h3`
  margin: 35px 0;
`;
