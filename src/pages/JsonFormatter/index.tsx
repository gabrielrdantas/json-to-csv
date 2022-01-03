import React, { useCallback, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MenuOptions from '../../components/MenuOptions';
import ContainerInfo from '../../components/Info';

import Content from '../../components/Content';
import Seo from '../../components/Seo';

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
        schema={{
          '@context': 'http://schema.org/',
          '@type': 'WebSite',
          name: 'Formatter online JSON',
          image: '',
          url: '',
          description:
            'Formatter json online, this page is simple, fast and practical!',
          isPartOf: {
            '@type': 'Website',
            name: '',
            url: '',
          },
        }}
      />
      <Header title="Formatter and converting json online" itemSelected={0} />
      <Content>
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

        <ContainerInfo />
      </Content>
      <Footer />
    </Wrapper>
  );
};

export default JsonFormatter;

const Wrapper = styled.div``;

const MenuOptionsContainer = styled.div`
  margin: 0 20px;
`;

const Container = styled.div`
  background: #fff;
  display: flex;
  height: 50vh;
  margin: 0 20px;
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
