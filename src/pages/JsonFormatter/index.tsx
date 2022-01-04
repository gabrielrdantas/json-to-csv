import React, { useCallback, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MenuOptions from '../../components/MenuOptions';
import ContainerInfo from '../../components/Info';

import Content from '../../components/Content';
import Seo from '../../components/Seo';

import RelatedLinks from '../../components/RelatedLinks';

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

        <ContainerInfo
          data={[
            {
              title: 'JSON Introduction',
              text: 'JSON grew out of a need for stateless, real-time server-to-browser communication protocol without using browser plugins such as Flash or        Java applets, the dominant methods used in the early 2000s.[10] A        precursor to the JSON libraries was used in a childrens digital asset        trading game project named Cartoon Orbit at Communities.com (at which        State Software`s co-founders had all worked previously) for Cartoon        Network, which used a browser side plug-in with a proprietary messaging        format to manipulate Dynamic HTML elements (this system is also owned by        3DO). Upon discovery of early Ajax capabilities, digiGroups, Noosh, and        others used frames to pass information into the user browsers`` visual        field without refreshing a Web application`s visual context, realizing        real-time rich Web applications using only the standard HTTP, HTML and        JavaScript capabilities of Netscape 4.0.5+ and IE 5+.[citation needed]        Crockford first specified and popularized the JSON format.[11] The State        Software co-founders agreed to build a system that used standard browser        capabilities and provided an abstraction layer for Web developers to        create stateful Web applications that had a persistent duplex connection        to a Web server by holding two Hypertext Transfer Protocol (HTTP)        connections open and recycling them before standard browser time-outs if        no further data were exchanged. The co-founders had a round-table        discussion and voted whether to call the data format JSML (JavaScript        Markup Language) or JSON (JavaScript Object Notation), as well as under        what license type to make it available. Chip Morningstar developed the        idea for the State Application Framework at State Software.[12][13] The        system was sold to Sun Microsystems, Amazon.com and EDS. The        JSON.org[14] website was launched in 2002. In December 2005, Yahoo!        began offering some of its Web services in JSON.[15] JSON was based on a        subset of the JavaScript scripting language (specifically, Standard        ECMA-262 3rd Edition—December 1999[16]) and is commonly used with        JavaScript, but it is a language-independent data format. Code for        parsing and generating JSON data is readily available in many        programming languages. JSON`s website lists JSON libraries by language.        In October 2013, Ecma International published the first edition of its        JSON standard ECMA-404.[7] That same year, RFC 7158 used ECMA-404 as a        reference. In 2014, RFC 7159 became the main reference for JSON`s        Internet uses, superseding RFC 4627 and RFC 7158 (but preserving        ECMA-262 and ECMA-404 as main references). In November 2017, ISO/IEC JTC        1/SC 22 published ISO/IEC 21778:2017[2] as an international standard. On        13 December 2017, the Internet Engineering Task Force obsoleted RFC 7159        when it published RFC 8259, which is the current version of the Internet        Standard STD 90.[17][18] Crockford added a clause to the JSON license        stating that The Software shall be used for Good, not Evil, in order to        open-source the JSON libraries while mocking corporate lawyers and those        who are overly pedantic. On the other hand, this clause led to license        compatibility problems of the JSON license with other open-source licenses, as open-source software and free software usually imply no restrictions on the purpose of use.[19]',
            },
            {
              title: 'JSON History Wikipedia',
              text: 'JSON grew out of a need for stateless, real-time server-to-browser communication protocol without using browser plugins such as Flash or        Java applets, the dominant methods used in the early 2000s.[10] A        precursor to the JSON libraries was used in a childrens digital asset        trading game project named Cartoon Orbit at Communities.com (at which        State Software`s co-founders had all worked previously) for Cartoon        Network, which used a browser side plug-in with a proprietary messaging        format to manipulate Dynamic HTML elements (this system is also owned by        3DO). Upon discovery of early Ajax capabilities, digiGroups, Noosh, and        others used frames to pass information into the user browsers`` visual        field without refreshing a Web application`s visual context, realizing        real-time rich Web applications using only the standard HTTP, HTML and        JavaScript capabilities of Netscape 4.0.5+ and IE 5+.[citation needed]        Crockford first specified and popularized the JSON format.[11] The State        Software co-founders agreed to build a system that used standard browser        capabilities and provided an abstraction layer for Web developers to        create stateful Web applications that had a persistent duplex connection        to a Web server by holding two Hypertext Transfer Protocol (HTTP)        connections open and recycling them before standard browser time-outs if        no further data were exchanged. The co-founders had a round-table        discussion and voted whether to call the data format JSML (JavaScript        Markup Language) or JSON (JavaScript Object Notation), as well as under        what license type to make it available. Chip Morningstar developed the        idea for the State Application Framework at State Software.[12][13] The        system was sold to Sun Microsystems, Amazon.com and EDS. The        JSON.org[14] website was launched in 2002. In December 2005, Yahoo!        began offering some of its Web services in JSON.[15] JSON was based on a        subset of the JavaScript scripting language (specifically, Standard        ECMA-262 3rd Edition—December 1999[16]) and is commonly used with        JavaScript, but it is a language-independent data format. Code for        parsing and generating JSON data is readily available in many        programming languages. JSON`s website lists JSON libraries by language.        In October 2013, Ecma International published the first edition of its        JSON standard ECMA-404.[7] That same year, RFC 7158 used ECMA-404 as a        reference. In 2014, RFC 7159 became the main reference for JSON`s        Internet uses, superseding RFC 4627 and RFC 7158 (but preserving        ECMA-262 and ECMA-404 as main references). In November 2017, ISO/IEC JTC        1/SC 22 published ISO/IEC 21778:2017[2] as an international standard. On        13 December 2017, the Internet Engineering Task Force obsoleted RFC 7159        when it published RFC 8259, which is the current version of the Internet        Standard STD 90.[17][18] Crockford added a clause to the JSON license        stating that The Software shall be used for Good, not Evil, in order to        open-source the JSON libraries while mocking corporate lawyers and those        who are overly pedantic. On the other hand, this clause led to license        compatibility problems of the JSON license with other open-source licenses, as open-source software and free software usually imply no restrictions on the purpose of use.[19]',
            },
          ]}
        />
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
