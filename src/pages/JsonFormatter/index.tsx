import React, { useCallback, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MenuOptions from '../../components/MenuOptions';
import Wrapper from '../../components/Wrapper';
import Seo from '../../components/Seo';
import Schema from '../../components/Schema';

import RelatedLinks from '../../components/RelatedLinks';
import Content from '../../components/Content';

const JsonFormatter: React.FC = () => {
  const [jsonValue, setJsonValue] = useState('');

  const exportJSONFile = (json: string, fileTitle: string) => {
    const exportedFilenmae = `${fileTitle}.json` || 'file.json';
    const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(JSON.parse(json)),
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

  const onChangeJson = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value) {
      setJsonValue(JSON.stringify(JSON.parse(e.target.value), null, '\t'));
      return;
    }
    setJsonValue('');
  }, []);

  return (
    <Wrapper>
      <Seo
        title="Formatter online JSON"
        description="Formatter json online, this page is simple, fast and practical!"
        ogDescription="Break line and formatter json online, this page is simple, fast and practical! Come meet us!"
        ogTitle="formatter json online simply!"
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
              name: 'Formatter online JSON',
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
      <Header title="Formatter and converting json online" itemSelected={0} />
      <Content>
        <Subtitle>Formatter and converting json online</Subtitle>
        <MenuOptionsContainer>
          <MenuOptions
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
        <Container>
          <InputData onChange={onChangeJson} />
          <ResultFormatted contentEditable="true">{jsonValue}</ResultFormatted>
        </Container>

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

const Container = styled.div`
  background: #fff;
  display: flex;
  height: 30vh;
  margin: 0;
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
  width: 50%;
  word-break: break-all;
  overflow: auto;
  font-family: 'Roboto Slab', serif;
  color: #666;
  font-size: 20px;
  line-height: 20px;
  padding: 20px;
  width: 50%;
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
