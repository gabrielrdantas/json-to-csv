import React, {
  useCallback,
  useState,
  ChangeEvent,
  useRef,
  useEffect,
  MouseEvent,
} from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

import GlobalStyle from '../src/styles/global';

const Header = dynamic(import('../src/components/Header'));
const Footer = dynamic(import('../src/components/Footer'));
const MenuOptions = dynamic(import('../src/components/MenuOptions'));
const Wrapper = dynamic(import('../src/components/Wrapper'));
const Seo = dynamic(import('../src/components/Seo'));
const Schema = dynamic(import('../src/components/Schema'));
const RelatedLinks = dynamic(import('../src/components/RelatedLinks'));
const Content = dynamic(import('../src/components/Content'));

// import Header from '../src/components/Header';
// import Footer from '../src/components/Footer';
// import Content from '../src/components/Content';
// import MenuOptions from '../src/components/MenuOptions';
// import Seo from '../src/components/Seo';
// import RelatedLinks from '../src/components/RelatedLinks';
// import Schema from '../src/components/Schema';
// import Wrapper from '../src/components/Wrapper';

declare global {
  interface Navigator {
    msSaveBlob?: (blob: unknown, defaultName?: string) => boolean;
  }
}

let arrayFiltered: any[] = [];

const ConvertJsonToCsv: React.FC = () => {
  const [jsonValue, setJsonValue] = useState('');
  const [csvValue, setCsvValue] = useState('');
  const [filterDisabled, setFilterDisabled] = useState(true);

  const ref = useRef<HTMLTextAreaElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
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

  const convertToCSV = (items: any) => {
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
      setCsvValue(convertToCSV(JSON.parse(e.target.value)));
      setJsonValue(JSON.parse(e.target.value));
      return;
    }
    setJsonValue('');
    setCsvValue('');
  }, []);

  const filterField = useCallback((json: any, term: any): any => {
    const termArray = term.trim().split(/\s*,\s*/);
    const obj = {} as any;
    Object.keys(json).map(key => {
      const jsonKey = json[key];
      if (Array.isArray(jsonKey)) {
        Object.keys(jsonKey).map(childrenKey =>
          filterField(jsonKey[childrenKey as any], term),
        );
      } else if (termArray.includes(key)) {
        obj[key] = jsonKey;
      }
      return null;
    });
    arrayFiltered.push(obj);
  }, []);

  const onClickFilter = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      arrayFiltered = [];
      let value = '';
      if (inputRef && inputRef.current) {
        value = inputRef.current.value;
      }
      if (value) {
        filterField(jsonValue, value);
        setCsvValue(convertToCSV(arrayFiltered));
      } else {
        setCsvValue(convertToCSV(jsonValue));
      }
    },
    [jsonValue, filterField],
  );

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.focus();
    }
  }, []);

  useEffect(() => {
    if (jsonValue) {
      setFilterDisabled(false);
      return;
    }
    if (inputRef && inputRef.current) {
      inputRef.current.value = '';
      setFilterDisabled(true);
    }
  }, [jsonValue]);

  const goFullScreen = () => {
    const elem = document.getElementById('content-data') as HTMLElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
  };
  return (
    <Wrapper>
      <GlobalStyle />
      <Seo
        title="Convert JSON to CSV online"
        description="Convert JSON to CSV online, this page is simple, fast and practical!"
        ogDescription="Convert JSON to CSV online, this page is simple, fast and practical! Come meet us!"
        ogTitle="Convering JSON to CSV simply!"
        canonical="https://convertjsononline.com/json-to-csv"
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
      <ContainerSection id="content-data">
        <Content>
          <Subtitle>Input JSON</Subtitle>
          <Container>
            <InputData id="input-data-csv" ref={ref} onChange={onChangeJson} />
          </Container>

          <ContainerFilter>
            <Subtitle>Output CSV</Subtitle>
            <FormFilter>
              <Label disabledInput={filterDisabled} htmlFor="input-csv-json">
                Filter field:
              </Label>
              <Input
                ref={inputRef}
                disabledInput={filterDisabled}
                id="input-csv-json"
                type="text"
                placeholder="Insert fields separating with a comma"
              />
              <ButtonFilter
                disabledInput={filterDisabled}
                onClick={onClickFilter}
                id="button-filter-csv"
              >
                Filter
              </ButtonFilter>
            </FormFilter>
          </ContainerFilter>
          <MenuOptions
            onClickFullScreen={() => {
              goFullScreen();
            }}
            onClickDownload={() => {
              if (csvValue) {
                exportCSVFile(csvValue, 'jsonToCsv');
              }
            }}
            onClickCopy={() => {
              navigator.clipboard.writeText(csvValue);
            }}
          />
          <Container>
            <ResultFormatted
              id="result-filter-csv"
              contentEditable="true"
              suppressContentEditableWarning
            >
              {csvValue}
            </ResultFormatted>
          </Container>

          <RelatedLinks
            bottom="-30px"
            data={[
              {
                name: 'Google csv',
                link: 'https://support.google.com/google-ads/answer/9004364?hl=en',
              },
            ]}
          />
        </Content>
      </ContainerSection>
    </Wrapper>
  );
};

export default ConvertJsonToCsv;

const ContainerSection = styled.div`
  width: 100%;
  background: #0f598a;
  padding: 10px 0 30px;
`;

const Container = styled.div`
  background: #fff;
  display: flex;
  height: 30vh;
  border-radius: 20px;
`;

const InputData = styled.textarea`
  border: none;
  border-radius: 20px;
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
  border-radius: 20px;
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

const SubtitleArticle = styled.h2`
  margin: 35px 0;
`;

const Input = styled.input<{ disabledInput: boolean }>`
  border: none;
  padding: 10px;
  font-size: 12px;
  width: 350px;
  border-radius: 10px;
  ${({ disabledInput }) => disabledInput && `opacity: 0.5;`}
  ${({ disabledInput }) => disabledInput && `pointer-events: none;`}
`;

const ContainerFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: self-end;
  margin: 20px 0 0;
`;

const Label = styled.label<{ disabledInput: boolean }>`
  color: #fff;
  margin: 0 15px 0 0;
  ${({ disabledInput }) => disabledInput && `opacity: 0.5;`}
  ${({ disabledInput }) => disabledInput && `pointer-events: none;`}
`;
const FormFilter = styled.form`
  margin: 0 1px 10px 0;
`;

const ButtonFilter = styled.button<{ disabledInput: boolean }>`
  background: #fff;
  border: none;
  padding: 10px;
  font-size: 12px;
  width: 100px;
  border-radius: 10px;
  margin: 0 0 0 15px;
  color: #000;
  ${({ disabledInput }) => disabledInput && `opacity: 0.5;`}
  ${({ disabledInput }) => disabledInput && `pointer-events: none;`}
`;
