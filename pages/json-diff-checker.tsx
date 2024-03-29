import React, {
  useCallback,
  useState,
  ChangeEvent,
  useEffect,
  useRef,
} from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

import GlobalStyle from '../src/styles/global';

const Header = dynamic(import('../src/components/Header'));
const StatusDiff = dynamic(import('../src/components/StatusDiff'));
const Wrapper = dynamic(import('../src/components/Wrapper'));
const Seo = dynamic(import('../src/components/Seo'));
const Schema = dynamic(import('../src/components/Schema'));
const RelatedLinks = dynamic(import('../src/components/RelatedLinks'));
const Content = dynamic(import('../src/components/Content'));
interface statusDiff {
  isDiff: boolean;
  size: number;
}

const DiffChecker: React.FC = () => {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.focus();
    }
  }, []);

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
      <GlobalStyle />
      <Seo
        title="JSON compare online - Differences between files"
        description="Compare JSON files and JSON Diff. Here you see differences between JSON files"
        canonical="https://www.convertjsononline.com/json-diff-checker"
      />
      <Schema
        data={{
          '@context': 'http://schema.org/',
          '@type': 'Schema',
          '@graph': [
            {
              '@id': `https://convertjsononline.com#webpage`,
              '@type': 'WebPage',
              name: 'JSON compare online - Differences between files',
              image: `https://convertjsononline.com#primaryimage`,
              url: 'https://convertjsononline.com/json-diff-checker',
              description:
                'Compare JSON files and JSON Diff. Here you see differences between JSON files',
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
      <Header title="JSON Diff Online - JSON compare" itemSelected={3} />
      <div>
        <ContainerSection id="content-data">
          <Content>
            <Container>
              <AreaDiv>
                <SubtitleContainer>
                  <Label htmlFor="original-json-diff">Original JSON</Label>
                  <Label htmlFor="other-json-diff">Other JSON</Label>
                </SubtitleContainer>
                <ContainerText>
                  <ContainerInput>
                    <InputDataTextarea
                      id="original-json-diff"
                      ref={ref}
                      contentEditable="true"
                      onChange={onChangeValue1}
                    />
                  </ContainerInput>

                  <ContainerInput>
                    <InputDataTextarea
                      id="other-json-diff"
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
                      <Label htmlFor="result-original-json-diff">
                        Result Original JSON
                      </Label>
                      <Label htmlFor="result-other-json-diff">
                        Result Other JSON
                      </Label>
                    </SubtitleContainer>
                    <ContainerText>
                      <ContainerInput>
                        <InputData id="result-original-json-diff">
                          {resultOriginalText}
                        </InputData>
                      </ContainerInput>

                      <ContainerInput>
                        <InputData id="result-other-json-diff">
                          {resultChangedText}
                        </InputData>
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
          </Content>
        </ContainerSection>
        <Content>
          <Paragraph>
            If youre referring to the differences between the content of
            different JSON files, it depends on the specific content and
            structure of those files. JSON (JavaScript Object Notation) is a
            lightweight data interchange format, and differences between JSON
            files can arise from changes in the data, structure, or both. Here
            are some common ways JSON files might differ: Data Values: Different
            values for the same keys: The actual data within the JSON files may
            be different. Missing or additional data: One file might contain
            data that the other does not, or vice versa. Structure: Variations
            in the arrangement of objects and arrays: The nesting and ordering
            of objects and arrays may differ. Changes in key names or structure:
            Keys or structures may be added, removed, or modified. Formatting:
            Differences in whitespace and indentation: JSON files may have
            different formatting styles, but this doesnt affect the data itself.
            Data Types: Differences in data types: For instance, a value might
            be an integer in one file and a string in another.
          </Paragraph>
          <RelatedLinks
            bottom="-100px"
            data={[
              {
                name: 'Json lint',
                link: 'https://www.jsonlint.com/',
              },
              {
                name: 'Json Diff',
                link: 'https://www.jsondiff.com/',
              },
              {
                name: 'Json Compare',
                link: 'https://jsoncompare.org/',
              },
              {
                name: 'Diff check json',
                link: 'https://jsoncompare.org/',
              },
            ]}
          />
        </Content>
      </div>
    </Wrapper>
  );
};

export default DiffChecker;

const ContainerSection = styled.div`
  width: 100%;
  background: #0f598a;
  padding: 10px 0px 30px;
  margin: 0;
`;

const Container = styled.div`
  display: flex;
  margin: 0;
  border-radius: 20px;
`;

const ContainerResult = styled.div`
  display: flex;
  margin: 20px 0;
  align-items: end;
  border-radius: 20px;
`;

const ContainerInput = styled.div`
  background: #f1f1f1;
  min-height: 600px;
  width: 50%;
`;

const InputData = styled.pre`
  background: #f1f1f1;
  border: none;
  border-radius: 20px;
  border-right: 1px solid #ccc;
  font-family: 'Roboto Slab', serif;
  color: #666;
  font-size: 16px;
  line-height: 20px;
  width: 100%;
  flex: 1;
  padding: 20px;
  min-height: 600px;
  overflow: auto;
`;

const InputDataTextarea = styled.textarea`
  background: #f1f1f1;
  border: none;
  border-radius: 20px;
  border-right: 1px solid #ccc;
  font-family: 'Roboto Slab', serif;
  color: #666;
  font-size: 16px;
  line-height: 20px;
  width: 100%;
  flex: 1;
  padding: 20px;
  min-height: 600px;
`;
const Label = styled.label`
  font-size: 26px;
  color: #fff;
  margin: 20px 0;
  width: 50%;
  display: block;
`;

const OriginalDiv = styled.div`
  background: #c8f0da;
  white-space: break-spaces;
`;

const ChangedDiv = styled.div`
  background: #ffcbbd;
  white-space: break-spaces;
`;

const ContainerText = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  background: #fff;
  height: 605px;
  border-radius: 20px;
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

const Paragraph = styled.p`
  margin-top: 30px;
`;
