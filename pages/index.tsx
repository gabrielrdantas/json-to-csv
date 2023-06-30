import React, {
  useCallback,
  useState,
  ChangeEvent,
  useRef,
  useEffect,
} from 'react';
import styled from 'styled-components';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import MenuOptions from '../src/components/MenuOptions';
import Wrapper from '../src/components/Wrapper';
import Seo from '../src/components/Seo';
import Schema from '../src/components/Schema';

import RelatedLinks from '../src/components/RelatedLinks';
import Content from '../src/components/Content';

const JsonFormatter: React.FC = () => {
  const [jsonValue, setJsonValue] = useState('');
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.focus();
    }
  }, []);

  const exportJSONFile = (json: string, fileTitle: string) => {
    const exportedFilenmae = `${fileTitle}.json` || 'file.json';
    const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(JSON.parse(JSON.stringify(json))),
    )}`;
    const link = document.createElement('a');
    if (link.download !== undefined) {
      link.setAttribute('href', dataStr);
      link.setAttribute('download', exportedFilenmae);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const isJson = (value: any) => {
    let response = false;
    try {
      JSON.parse(value);
      response = true;
    } catch (err) {
      response = false;
    }
    return response;
  };

  const objToJSON = (value: any) => {
    return value.replace(/(\w+:)|(\w+ :)/g, (s: any) => {
      return `"${s.substring(0, s.length - 1)}":`;
    });
  };

  const onChangeJson = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    try {
      if (value) {
        if (isJson(value)) {
          setJsonValue(JSON.stringify(JSON.parse(value), null, '\t'));
        } else {
          setJsonValue(
            JSON.stringify(JSON.parse(objToJSON(value)), null, '\t'),
          );
        }
        return;
      }
      setJsonValue('');
    } catch (err) {
      console.log(err);
    }
  }, []);

  const goFullScreen = () => {
    const elem = document.getElementById('content-data') as HTMLElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
  };

  return (
    <Wrapper>
      <Seo
        title="Convert and formatter json to csv, pdf and diff checker"
        description="Convert to json, formatter json, convert json to csv, pdf and checker your files"
        ogDescription="Convert to json, formatter json, convert json to csv, pdf and checker your files"
        ogTitle="Convert and formatter json to csv, pdf and diff checker"
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
              name: 'Formatter and convert json online',
              image: `https://convertjsononline.com#primaryimage`,
              url: 'https://convertjsononline.com',
              description:
                'Formatter json online, this page is simple, fast and practical!',
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
      <Header title="Convert and formatter json" itemSelected={0} />

      <ContainerSection>
        <Content>
          <MenuOptionsContainer>
            <MenuOptions
              onClickFullScreen={() => {
                goFullScreen();
              }}
              onClickDownload={() => {
                if (jsonValue) {
                  exportJSONFile(jsonValue, 'jsonToCsv');
                }
              }}
              onClickCopy={() => {
                navigator.clipboard.writeText(
                  JSON.stringify(JSON.parse(jsonValue)),
                );
              }}
            />
          </MenuOptionsContainer>
          <Container id="content-data">
            <InputData
              id="data-json-formatter"
              ref={ref}
              onChange={onChangeJson}
            />
            <ResultFormatted
              id="result-json-formatter"
              contentEditable="true"
              suppressContentEditableWarning
            >
              {jsonValue}
            </ResultFormatted>
          </Container>
        </Content>
      </ContainerSection>
      <Content>
        <ContainerInfo>
          <SubtitleArticle>JSON Introduction</SubtitleArticle>
          <Text>
            The JSON (JavaScript Object Notation) format is an open format used
            as an alternative to XML for downloading structured data between a
            web server and a web application. The format has gained popularity
            on web services such as email clients and shopping sites as it is
            able to transmit a large amount of information between the client
            and server using a smaller amount of characters.Value and attribute
            pairs are separated by: and their values, when text, are enclosed in
            quotation marks (numbers, for example, do not fit as quotation
            marks).This pair-set logic can be repeated over and over, creating
            multiple levels for the desired data structure.In practice, .json is
            a format that contains a series of data structured in text and is
            used to transfer information between systems.The data contained in a
            JSON format file must be structured through a collection of name and
            value pairs or be an ordered list of values.• value: represents the
            corresponding content and can contain the following data types:
            string, array, object, number, boolean or null.Data transfer between
            applications is done through API - Application Programming Interface
            - which, among other formats, uses a JSON notation to structure the
            transferred information.JSON format is also used to perform AJAX
            requests on websites, in which different interactions are made with
            the database, such as MySql, to perform operations such as query,
            inclusion and exclusion of records.Node.js, for example, uses a file
            called package.json in its projects to store the dependencies used
            in the application.Files in .json format make the specific features
            that make this specification more attractive to use in applications
            that consume data from other systems.The simplicity with which the
            data is structured in JSON format allows it to be used in any kind
            of programming language.File Formatting In addition to the .json
            ending in all files that use this format, the stored data must
            follow a specific notation, that is, it needs to be organized with
            the following basic elements: • curly braces {} to delimit objects
            and mandatory to start and terminate the content;It is also suitable
            for use in mobile applications, where you need to request data from
            a server and quickly use it in the application.JSON format is easy
            to use, as its notification even allows a visual understanding of
            the data organization.Faster execution and data transport Storing
            data in text format, by the way, allows the .json file to take up
            little memory space.This feature offers great performance, as it is
            small, occupies few bytes, which offers more agility for downloading
            and loading during processing.
          </Text>
        </ContainerInfo>
        <RelatedLinks
          data={[
            {
              name: 'ConvertTo-Json',
              link: 'https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/convertto-json?view=powershell-7.2',
            },
          ]}
        />
      </Content>
      <Footer />
    </Wrapper>
  );
};

export default JsonFormatter;

const MenuOptionsContainer = styled.div`
  margin: 0;
`;

const ContainerSection = styled.div`
  width: 100%;
  background: #2980b9;
  padding: 20px 0 40px;
`;

const Container = styled.div`
  display: flex;
  height: 60vh;
  margin: 0;
  border-radius: 20px;
  gap: 20px;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const InputData = styled.textarea`
  background: #fff;
  border: none;
  border-radius: 20px;
  border-right: 1px solid #ccc;
  font-family: 'Roboto Slab', serif;
  color: #666;
  font-size: 16px;
  line-height: 20px;
  width: 50%;
  flex: 1;
  padding: 20px;
  @media (max-width: 1024px) {
    width: 90%;
    margin-top: 20px;
  }
`;

const ResultFormatted = styled.pre`
  background: #fff;
  border-radius: 20px;
  width: 50%;
  word-break: break-all;
  overflow: auto;
  font-family: 'Roboto Slab', serif;
  color: #666;
  font-size: 16px;
  line-height: 20px;
  padding: 20px;
  width: 50%;
  word-break: break-all;
  overflow: auto;
  @media (max-width: 1024px) {
    width: 90%;
    flex: 1;
  }
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
