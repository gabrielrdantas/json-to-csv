import React, { useCallback, useState, ChangeEvent } from 'react';

import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Content from '../../components/Content';
import ContainerInfo from '../../components/Info';
import MenuOptions from '../../components/MenuOptions';
import Seo from '../../components/Seo';
import RelatedLinks from '../../components/RelatedLinks';

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
      <Header title="Convert JSON to CSV online" itemSelected={1} />
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
        <ContainerInfo
          data={[
            {
              title: 'Comma-separated values',
              text: 'A comma-separated values (CSV) file is a delimited text file that uses a comma to separate values. Each line of the file is a data record. Each record consists of one or more fields, separated by commas. The use of the comma as a field separator is the source of the name for this file format. A CSV file typically stores tabular data (numbers and text) in plain text, in which case each line will have the same number of fields. The CSV file format is not fully standardized. Separating fields with commas is the foundation, but commas in the data or embedded line breaks have to be handled specially. Some implementations disallow such content while others surround the field with quotation marks, which yet again creates the need for escaping these if they are present in the data. The term CSV also denotes several closely related delimiter-separated formats that use other field delimiters such as semicolons. These include tab-separated values and space-separated values. A delimiter guaranteed not to be part of the data greatly simplifies parsing. Alternative delimiter-separated files are often[citation needed] given a .csv extension despite the use of a non-comma field separator. This loose terminology can cause problems in data exchange. Many applications that accept CSV files have options to select the delimiter character and the quotation character. Semicolons are often used instead of commas in many European locales in order to use the comma as the decimal separator and, possibly, the period as a decimal grouping character. Because of that, the term character-separated values is suggested as a wider definition of this file format.',
            },
            {
              title: 'History',
              text: "Comma-separated values is a data format that pre-dates personal computers by more than a decade: the IBM Fortran (level H extended) compiler under OS/360 supported CSV in 1972.[6] List-directed (free form) input/output was defined in FORTRAN 77, approved in 1978. List-directed input used commas or spaces for delimiters, so unquoted character strings could not contain commas or spaces.[7]The term comma-separated value and CSV abbreviation were in use by 1983.[8] The manual for the Osborne Executive computer, which bundled the SuperCalc spreadsheet, documents the CSV quoting convention that allows strings to contain embedded commas, but the manual does not specify a convention for embedding quotation marks within quoted strings.[9]Comma-separated value lists are easier to type (for example into punched cards) than fixed-column-aligned data, and were less prone to producing incorrect results if a value was punched one column off from its intended location.Comma separated files are used for the interchange of database information between machines of two different architectures. The plain-text character of CSV files largely avoids incompatibilities such as byte-order and word size. The files are largely human-readable, so it is easier to deal with them in the absence of perfect documentation or communication.[10]The main standardization initiative—transforming de facto fuzzy definition into a more precise and de jure one—was in 2005, with RFC 4180, defining CSV as a MIME Content Type.[11] Later, in 2013, some of RFC 4180's deficiencies were tackled by a W3C recommendation.[12]In 2014 IETF published RFC 7111 describing application of URI fragments to CSV documents. RFC 7111 specifies how row, column, and cell ranges can be selected from a CSV document using position indexes.[13]In 2015 W3C, in an attempt to enhance CSV with formal semantics, publicized the first drafts of recommendations for CSV-metadata standards, that began as recommendations in December of the same year.[14]",
            },
          ]}
        />
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
