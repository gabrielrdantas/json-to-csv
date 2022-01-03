import React, { useCallback, useState, ChangeEvent, useEffect } from 'react';

import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContainerInfo from '../../components/Info';

import Content from '../../components/Content';
import StatusDiff from '../../components/StatusDiff';
import Seo from '../../components/Seo';

interface statusDiff {
  isDiff: boolean;
  size: number;
}

const DiffChecker: React.FC = () => {
  const [canShowResult, setCanShowResult] = useState(false);
  const [originalText, setOriginalText] = useState('');
  const [changedText, setChangedText] = useState('');
  const [itemsDiffOriginal, setItemsDiffOriginal] = useState<statusDiff[]>([]);
  const [itemsDiffChanged, setItemsDiffChanged] = useState<statusDiff[]>([]);

  const [resultOriginalText, setResultOriginalText] = useState<JSX.Element[]>(
    [],
  );
  const [resultChangedText, setResultChangedText] = useState<JSX.Element[]>([]);

  const onChangeValue1 = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value) {
      setOriginalText(e.target.value);
      return;
    }
    setOriginalText('');
  }, []);

  const onChangeValue2 = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value) {
      setChangedText(e.target.value);
      return;
    }
    setChangedText('');
  }, []);

  const hasResultOriginalAndChanged = (
    originalData: JSX.Element[],
    changedData: JSX.Element[],
  ) => {
    return originalData.length > 0 && changedData.length > 0;
  };

  useEffect(() => {
    if (originalText === changedText) {
      setResultOriginalText([]);
      setResultChangedText([]);
      return;
    }
    if (originalText !== changedText) {
      if (originalText) {
        setResultOriginalText(defineOriginalText(originalText, changedText));
      } else {
        setResultOriginalText([]);
      }
      if (changedText) {
        setResultChangedText(defineChangedText(originalText, changedText));
      } else {
        setResultChangedText([]);
      }
    }
  }, [originalText, changedText]);

  useEffect(() => {
    setCanShowResult(
      hasResultOriginalAndChanged(resultOriginalText, resultChangedText),
    );
  }, [resultOriginalText, resultChangedText]);

  const defineOriginalText = (original: string, changed: string) => {
    const originalTextArray = original.replaceAll(/\n/g, '\n ').split('\n');
    const changedTextArray = changed.replaceAll(/\n/g, '\n ').split('\n');
    const countItemsDiff: statusDiff[] = [];
    const response = originalTextArray.map((text, index) => {
      if (text !== changedTextArray[index]) {
        if (
          index === 0 ||
          countItemsDiff[countItemsDiff.length - 1].isDiff === false
        ) {
          countItemsDiff.push({
            isDiff: true,
            size: 1,
          });
        } else {
          countItemsDiff[countItemsDiff.length - 1].size += 1;
        }

        return text === ' ' ? (
          <OriginalDiv>
            <span style={{ visibility: 'hidden' }}>vazio</span>
          </OriginalDiv>
        ) : (
          <OriginalDiv>{text}</OriginalDiv>
        );
      }

      if (
        index === 0 ||
        countItemsDiff[countItemsDiff.length - 1].isDiff === true
      ) {
        countItemsDiff.push({
          isDiff: false,
          size: 1,
        });
      } else {
        countItemsDiff[countItemsDiff.length - 1].size += 1;
      }

      return text !== ' ' ? (
        <div>{text}</div>
      ) : (
        <div>
          <span style={{ visibility: 'hidden' }}>vazio</span>
        </div>
      );
    });

    setItemsDiffOriginal(countItemsDiff);
    return response;
  };

  const defineChangedText = (original: string, changed: string) => {
    const originalTextArray = original.replaceAll(/\n/g, '\n ').split('\n');
    const changedTextArray = changed.replaceAll(/\n/g, '\n ').split('\n');
    const countItemsDiff: statusDiff[] = [];
    const response = changedTextArray.map((text, index) => {
      if (text !== originalTextArray[index]) {
        if (
          index === 0 ||
          countItemsDiff[countItemsDiff.length - 1].isDiff === false
        ) {
          countItemsDiff.push({
            isDiff: true,
            size: 1,
          });
        } else {
          countItemsDiff[countItemsDiff.length - 1].size += 1;
        }
        return text === ' ' ? (
          <ChangedDiv>
            <span style={{ visibility: 'hidden' }}>vazio</span>
          </ChangedDiv>
        ) : (
          <ChangedDiv>{text}</ChangedDiv>
        );
      }
      if (
        index === 0 ||
        countItemsDiff[countItemsDiff.length - 1].isDiff === true
      ) {
        countItemsDiff.push({
          isDiff: false,
          size: 1,
        });
      } else {
        countItemsDiff[countItemsDiff.length - 1].size += 1;
      }
      return text !== ' ' ? (
        <div>{text}</div>
      ) : (
        <div>
          <span style={{ visibility: 'hidden' }}>vazio</span>
        </div>
      );
    });

    setItemsDiffChanged(countItemsDiff);
    return response;
  };

  return (
    <Wrapper>
      <Seo
        title="Diff json online"
        description="Checker diff json online, this page is simple, fast and practical!"
        ogDescription="Checker diff online, this page is simple, fast and practical! Come meet us!"
        ogTitle="Checker diff simply!"
        schema={{
          '@context': 'http://schema.org/',
          '@type': 'WebSite',
          name: 'Checker diff online',
          image: '',
          url: '',
          description:
            'Checker diff online, this page is simple, fast and practical!',
          isPartOf: {
            '@type': 'Website',
            name: '',
            url: '',
          },
        }}
      />
      <Header title="Diff checker json online" itemSelected={3} />
      <Content>
        <Container>
          <AreaDiv>
            <SubtitleContainer>
              <Subtitle>Original JSON</Subtitle>
              <Subtitle>Other JSON</Subtitle>
            </SubtitleContainer>
            <ContainerText>
              <ContainerInput>
                <InputDataTextarea
                  contentEditable="true"
                  onChange={onChangeValue1}
                />
              </ContainerInput>

              <ContainerInput>
                <InputDataTextarea
                  contentEditable="true"
                  onChange={onChangeValue2}
                />
              </ContainerInput>
            </ContainerText>
          </AreaDiv>
        </Container>

        {canShowResult && (
          <>
            <ContainerResult>
              <AreaDiv>
                <SubtitleContainer>
                  <Subtitle>Result Original JSON</Subtitle>
                  <Subtitle>Result Other JSON</Subtitle>
                </SubtitleContainer>
                <ContainerText>
                  <ContainerInput>
                    <InputData>{resultOriginalText}</InputData>
                  </ContainerInput>

                  <ContainerInput>
                    <InputData>{resultChangedText}</InputData>
                  </ContainerInput>
                </ContainerText>
              </AreaDiv>
              <ContainerStatusDiff>
                <StatusDiff color="#c8f0da" items={itemsDiffOriginal} />
                <StatusDiff color="#ffcbbd" items={itemsDiffChanged} />
              </ContainerStatusDiff>
            </ContainerResult>
          </>
        )}

        <ContainerInfo />
      </Content>
      <Footer />
    </Wrapper>
  );
};

export default DiffChecker;

const Wrapper = styled.div``;

const Container = styled.div`
  display: flex;
  margin: 0 20px;
`;

const ContainerResult = styled.div`
  display: flex;
  margin: 20px;
  align-items: end;
`;

const ContainerInput = styled.div`
  background: #fff;
  min-height: 300px;
  width: 50%;
`;

const InputData = styled.pre`
  border: none;
  border-right: 1px solid #ccc;
  font-family: 'Roboto Slab', serif;
  color: #666;
  font-size: 20px;
  line-height: 20px;
  width: 100%;
  flex: 1;
  padding: 20px;
  min-height: 300px;
  overflow: auto;
`;

const InputDataTextarea = styled.textarea`
  border: none;
  border-right: 1px solid #ccc;
  font-family: 'Roboto Slab', serif;
  color: #666;
  font-size: 20px;
  line-height: 20px;
  width: 100%;
  flex: 1;
  padding: 20px;
  min-height: 300px;
`;
const Subtitle = styled.h2`
  font-size: 26px;
  color: #fff;
  margin: 20px 0;
  width: 50%;
`;

const OriginalDiv = styled.div`
  background: #c8f0da;
`;

const ChangedDiv = styled.div`
  background: #ffcbbd;
`;

const ContainerText = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  background: #fff;
  height: 300px;
`;

const AreaDiv = styled.div`
  width: 100%;
`;

const SubtitleContainer = styled.div`
  display: flex;
`;

const ContainerStatusDiff = styled.div`
  display: flex;
  margin-left: 5px;
`;
