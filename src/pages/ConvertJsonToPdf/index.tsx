import React, { useCallback, ChangeEvent } from 'react';

import styled from 'styled-components';
import pdfMake from 'pdfmake/build/pdfmake.js';
import pdfFonts from 'pdfmake/build/vfs_fonts.js';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Content from '../../components/Content';
import ContainerInfo from '../../components/Info';
import Seo from '../../components/Seo';

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
        schema={{
          '@context': 'http://schema.org/',
          '@type': 'WebSite',
          name: 'Convert JSON to PDF online',
          image: '',
          url: '',
          description:
            'Convert JSON to PDF online, this page is simple, fast and practical!',
          isPartOf: {
            '@type': 'Website',
            name: '',
            url: '',
          },
        }}
      />
      <Header title="Convert JSON to PDF online" itemSelected={2} />
      <Content>
        <Subtitle>Convert JSON to PDF online</Subtitle>
        <Container>
          <InputData onChange={onChangeJson} />
        </Container>
        <ContainerInfo />
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
