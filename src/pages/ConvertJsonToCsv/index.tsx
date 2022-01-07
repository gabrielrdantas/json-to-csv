import React, {
  useCallback,
  useState,
  ChangeEvent,
  useRef,
  useEffect,
} from 'react';

import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Content from '../../components/Content';
import MenuOptions from '../../components/MenuOptions';
import Seo from '../../components/Seo';
import RelatedLinks from '../../components/RelatedLinks';
import Schema from '../../components/Schema';
import Wrapper from '../../components/Wrapper';

declare global {
  interface Navigator {
    msSaveBlob?: (blob: unknown, defaultName?: string) => boolean;
  }
}

const ConvertJsonToCsv: React.FC = () => {
  const [jsonValue, setJsonValue] = useState('');

  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.focus();
    }
  }, []);

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
        canonical="https://convertjsononline.com"
      />
      <Schema
        data={{
          '@context': 'http://schema.org/',
          '@type': 'Schema',
          '@graph': [
            {
              '@id': `https://convertjsononline.com#webpage`,
              '@type': 'WebPage',
              name: 'Convert JSON to CSV online',
              image: `https://convertjsononline.com#primaryimage`,
              url: 'https://convertjsononline.com/json-to-csv',
              description:
                'Convert JSON to CSV online, this page is simple, fast and practical!',
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
      <Header title="Convert JSON to CSV online" itemSelected={1} />
      <Content>
        <Subtitle>Input JSON</Subtitle>
        <Container>
          <InputData ref={ref} onChange={onChangeJson} />
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
        <ContainerInfo>
          <SubtitleArticle>Comma-separated values</SubtitleArticle>
          <Text>
            CSV format is a fundamental text file type for transferring
            information between different applications such as a CRM platform
            and Microsoft Excel.If you work with any data management, be it the
            most complex or the most basic (like using spreadsheets in your
            everyday life), you probably heard of the CSV format.Generally
            speaking, CSV is a format used to store data that can be imported
            and exported in programs such as Microsoft Excel, Google Sheets,
            Apple Numbers, OpenOffice Calc and other applications.Also, we often
            dont know if it is the ideal format for what we need, and what the
            differences are for other file types.Before getting into the
            step-by-step steps of importing and exporting CSV files, it is
            important to understand what this acronym consists of.If you work
            with any data management, be it the most complex or the most basic
            (like using spreadsheets in your everyday life), you&apos;ve
            probably heard of the CSV format.Also, we often don&apos;t know if
            it is the ideal format for what we need, and what the differences
            are for other file types.• How to create a CSV file in Excel • How
            to create a CSV file in Google Sheets • How to open a CSV file in a
            text editor • How to open a CSV file in a spreadsheet • How to edit
            a CSV file in a text editor textTHEBefore getting into the
            step-by-step steps of importing and exporting CSV files, it is
            important to understand what this acronym consists of. This data
            could be read in a CSV file separated by commas and line spacing, as
            in the following example: João,2018,Belo Horizonte Maria,2019,Rio de
            Janeiro Now that you understand the basic concept of CSV, you You
            may be wondering: when, after all, do you choose to use this
            format?That said, the most common CSV usage situation is when you
            want to export information from one tool and transfer it to another
            (example: from your CRM software to an Excel spreadsheet, or vice
            versa).
          </Text>
        </ContainerInfo>
        <RelatedLinks
          data={[
            {
              name: 'Google csv',
              link: 'https://support.google.com/google-ads/answer/9004364?hl=en',
            },
          ]}
        />
      </Content>
      <Footer />
    </Wrapper>
  );
};

export default ConvertJsonToCsv;

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

const ContainerInfo = styled.article`
  margin: 35px 0;
`;

const Text = styled.p`
  line-height: 25px;
`;

const SubtitleArticle = styled.h3`
  margin: 35px 0;
`;
