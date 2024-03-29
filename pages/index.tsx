import React, {
  useCallback,
  useState,
  ChangeEvent,
  useRef,
  useEffect,
} from 'react';
import dynamic from 'next/dynamic';

import styled from 'styled-components';
import GlobalStyle from '../src/styles/global';

const Header = dynamic(import('../src/components/Header'));
const MenuOptions = dynamic(import('../src/components/MenuOptions'));
const Wrapper = dynamic(import('../src/components/Wrapper'));
const Seo = dynamic(import('../src/components/Seo'));
const Schema = dynamic(import('../src/components/Schema'));
const RelatedLinks = dynamic(import('../src/components/RelatedLinks'));
const Content = dynamic(import('../src/components/Content'));

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
      <GlobalStyle />
      <Seo
        title="Format Javascript to JSON file"
        description="Validate and format JSON files online."
        canonical="https://www.convertjsononline.com/"
      />
      <Schema
        data={{
          '@context': 'http://schema.org/',
          '@type': 'Schema',
          '@graph': [
            {
              '@id': `https://convertjsononline.com#webpage`,
              '@type': 'WebPage',
              name: 'Format JSON online',
              image: `https://convertjsononline.com#primaryimage`,
              url: 'https://convertjsononline.com',
              description: 'Validate and format JSON files online.',
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
      <Header title="Format JSON Online" itemSelected={0} />
      <div>
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
              <Label htmlFor="data-json-formatter">Insert here</Label>
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
          <Paragraph>
            JSON (JavaScript Object Notation) is a widely used and popular
            format for structuring and exchanging data. It offers a lightweight,
            human-readable, and easy-to-parse way of representing information.
            JSON is commonly used in a variety of applications, such as web
            services, configuration files, and data storage. The basic structure
            of JSON is a collection of key-value pairs. Each key is a string,
            and its corresponding value can be a string, number, boolean, null,
            another JSON object, or an array of values. Here`s an example of a
            simple JSON object: In this example, we have three key-value pairs:
            name, age, and city. The keys are enclosed in double quotes, and the
            values can be of different data types. JSON arrays are used to store
            an ordered list of values. Here`s an example of a JSON array: In
            this case, fruits is the key, and its value is an array containing
            three strings. JSON is a flexible and versatile format that is
            commonly used in web development for data exchange between the
            server and client, as well as for configuring various applications
            and services. It is easy to understand, which makes it a popular
            choice for both developers and machines to work with structured
            data.
          </Paragraph>

          <RelatedLinks
            bottom="-100px"
            data={[
              {
                name: 'Javascript Object to JSON',
                link: 'https://www.convertsimple.com/convert-javascript-to-json/',
              },
              {
                name: 'JavaScript Object to JSON',
                link: 'https://reqbin.com/code/javascript/x1ezvres/javascript-object-to-json-example#:~:text=To%20convert%20a%20JavaScript%20object,into%20a%20JSON%20data%20string.',
              },
              {
                name: 'JS Object to JSON',
                link: 'https://www.tutorialrepublic.com/faq/how-to-convert-js-object-to-json-string.php',
              },
              {
                name: 'Source code',
                link: 'https://github.com/gabrielrdantas/json-to-csv',
              },
            ]}
          />
        </Content>
      </div>
    </Wrapper>
  );
};

export default JsonFormatter;

const MenuOptionsContainer = styled.div`
  margin: 0;
`;

const ContainerSection = styled.div`
  width: 100%;
  background: #0f598a;
  padding: 10px 0px 30px;
  margin: 0;
  top: 80px;
`;

const Container = styled.div`
  display: flex;
  height: 60vh;
  margin: 0;
  border-radius: 20px;
  gap: 20px;
  position: relative;
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
  text-align: left;
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
  text-align: left;
  @media (max-width: 1024px) {
    width: 90%;
    flex: 1;
  }
`;

const Label = styled.label`
  color: #fff;
  position: absolute;
  top: -25px;
`;

const Paragraph = styled.p`
  margin-top: 30px;
`;
