import React, { useCallback, useState, ChangeEvent } from 'react';
import { Helmet } from 'react-helmet';

import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Content from '../../components/Content';
import ContainerInfo from '../../components/Info';
import MenuOptions from '../../components/MenuOptions';
import Seo from '../../components/Seo';

declare global {
  interface Navigator {
    msSaveBlob?: (blob: unknown, defaultName?: string) => boolean;
  }
}

const ConvertJsonToCsv: React.FC = () => {
  const [jsonValue, setJsonValue] = useState('');

  const exportCSVFile = (csv: string, fileTitle: string) => {
    const exportedFilenmae = `${fileTitle}.csv` || 'export.csv';
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) {
      navigator.msSaveBlob(blob, exportedFilenmae); // IE 10+
    } else {
      const link = document.createElement('a');
      if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', exportedFilenmae);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  };

  const convertToCSV = (items: string) => {
    let array = typeof items !== 'object' ? JSON.parse(items) : items;
    if (!Array.isArray(array)) array = [array];

    const replacer = (key: unknown, value: unknown) =>
      value === null ? '' : value;
    const header = Object.keys(array[0]);
    const csv = [
      header.join(','), // header row first
      ...array.map((row: Record<string, unknown>) =>
        header
          .map(fieldName => JSON.stringify(row[fieldName], replacer))
          .join(','),
      ),
    ].join('\r\n');

    return csv;
  };

  const onChangeJson = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value) {
      setJsonValue(convertToCSV(JSON.parse(e.target.value)));
      return;
    }
    setJsonValue('');
  }, []);

  return (
    <Wrapper>
      <Seo
        title="Convert JSON to CSV online"
        description="Convert JSON to CSV online, this page is simple, fast and practical!"
        ogDescription="Convert JSON to CSV online, this page is simple, fast and practical! Come meet us!"
        ogTitle="Convering JSON to CSV simply!"
        schema={{
          '@context': 'http://schema.org/',
          '@type': 'WebSite',
          name: 'Convert JSON to CSV online',
          image: '',
          url: '',
          description:
            'Convert JSON to CSV online, this page is simple, fast and practical!',
          isPartOf: {
            '@type': 'Website',
            name: '',
            url: '',
          },
        }}
      />
      <Header itemSelected={1} />
      <Content>
        <Subtitle>Input JSON</Subtitle>
        <Container>
          <InputData onChange={onChangeJson} />
        </Container>

        <Subtitle>Output CSV</Subtitle>
        <MenuOptions
          onClickDownload={() => {
            if (jsonValue) {
              exportCSVFile(jsonValue, 'jsonToCsv');
            }
          }}
          onClickCopy={() => {
            navigator.clipboard.writeText(jsonValue);
          }}
        />
        <Container>
          <ResultFormatted contentEditable="true">{jsonValue}</ResultFormatted>
        </Container>
        <ContainerInfo />
      </Content>
      <Footer />
    </Wrapper>
  );
};

export default ConvertJsonToCsv;

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

const ResultFormatted = styled.pre`
  word-break: break-all;
  overflow: auto;
  font-family: 'Roboto Slab', serif;
  color: #666;
  font-size: 20px;
  line-height: 20px;
  padding: 20px;
  word-break: break-all;
  overflow: auto;
`;

const Subtitle = styled.h2`
  font-size: 26px;
  color: #fff;
  margin: 20px 0;
`;
