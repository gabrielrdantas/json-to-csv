import React, { useCallback, useState, ChangeEvent, useEffect } from 'react';

import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContainerInfo from '../../components/Info';

import Content from '../../components/Content';
import StatusDiff from '../../components/StatusDiff';
import Seo from '../../components/Seo';

import RelatedLinks from '../../components/RelatedLinks';

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

        <ContainerInfo
          data={[
            {
              title: 'Diff checker',
              text: 'In computing, the utility diff is a data comparison tool that computes and displays the differences between the contents of files. Unlike edit distance notions used for other purposes, diff is line-oriented rather than character-oriented, but it is like Levenshtein distance in that it tries to determine the smallest set of deletions and insertions to create one file from the other. The utility displays the changes in one of several standard formats, such that both humans or computers can parse the changes, and use them for patching.Typically, diff is used to show the changes between two versions of the same file. Modern implementations also support binary files.[1] The output is called a "diff", or a patch, since the output can be applied with the Unix program patch. The output of similar file comparison utilities is also called a "diff"; like the use of the word "grep" for describing the act of searching, the word diff became a generic term for calculating data difference and the results thereof.[2] The POSIX standard specifies the behavior of the "diff" and "patch" utilities and their file formats.[3]',
            },
            {
              title: 'Diff checker History Wikipedia',
              text: 'diff was developed in the early 1970s on the Unix operating system, which was emerging from Bell Labs in Murray Hill, New Jersey. The first released version shipped with the 5th Edition of Unix in 1974[citation needed], and was written by Douglas McIlroy, and James Hunt. This research was published in a 1976 paper co-written with James W. Hunt, who developed an initial prototype of diff.[4] The algorithm this paper described became known as the Hunt–Szymanski algorithm.McIlroy work was preceded and influenced by Steve Johnson comparison program on GECOS and Mike Lesk proof program. Proof also originated on Unix and, like diff, produced line-by-line changes and even used angle-brackets (">" and "<") for presenting line insertions and deletions in the program output. The heuristics used in these early applications were, however, deemed unreliable. The potential usefulness of a diff tool provoked McIlroy into researching and designing a more robust tool that could be used in a variety of tasks, but perform well in the processing and size limitations of the PDP-11 hardware. His approach to the problem resulted from collaboration with individuals at Bell Labs including Alfred Aho, Elliot Pinson, Jeffrey Ullman, and Harold S. Stone.In the context of Unix, the use of the ed line editor provided diff with the natural ability to create machine-usable "edit scripts". These edit scripts, when saved to a file, can, along with the original file, be reconstituted by ed into the modified file in its entirety. This greatly reduced the secondary storage necessary to maintain multiple versions of a file. McIlroy considered writing a post-processor for diff where a variety of output formats could be designed and implemented, but he found it more frugal and simpler to have diff be responsible for generating the syntax and reverse-order input accepted by the ed command.Late in 1984 Larry Wall created a separate utility, patch, releasing its source code on the mod.sources and net.sources newsgroups.[5][6][7] This program generalized and extended the ability to modify files with output from diff.Modes in Emacs also allow for converting the format of patches and even editing patches interactively.In diff early years, common uses included comparing changes in the source of software code and markup for technical documents, verifying program debugging output, comparing filesystem listings and analyzing computer assembly code. The output targeted for ed was motivated to provide compression for a sequence of modifications made to a file. The Source Code Control System (SCCS) and its ability to archive revisions emerged in the late 1970s as a consequence of storing edit scripts from diff.',
            },
          ]}
        />
        <RelatedLinks
          data={[
            {
              name: 'diffchecker',
              link: 'https://www.diffchecker.com',
            },
            {
              name: 'diff',
              link: 'https://git-scm.com/docs/git-diff',
            },
          ]}
        />
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
