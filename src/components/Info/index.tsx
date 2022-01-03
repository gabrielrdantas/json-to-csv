import React from 'react';
import styled from 'styled-components';

const Content: React.FC = () => {
  return (
    <ContainerInfo>
      <Subtitle>JSON Introduction </Subtitle>
      <Text>
        JSON (JavaScript Object Notation) is a lightweight data-interchange
        format. It is easy for humans to read and write. It is easy for machines
        to parse and generate. It is based on a subset of the JavaScript
        Programming Language Standard ECMA-262 3rd Edition - December 1999. JSON
        is a text format that is completely language independent but uses
        conventions that are familiar to programmers of the C-family of
        languages, including C, C++, C#, Java, JavaScript, Perl, Python, and
        many others. These properties make JSON an ideal data-interchange
        language. JSON is built on two structures: A collection of name/value
        pairs. In various languages, this is realized as an object, record,
        struct, dictionary, hash table, keyed list, or associative array. An
        ordered list of values. In most languages, this is realized as an array,
        vector, list, or sequence. These are universal data structures.
        Virtually all modern programming languages support them in one form or
        another. It makes sense that a data format that is interchangeable with
        programming languages also be based on these structures.
      </Text>

      <Subtitle>JSON History Wikipedia</Subtitle>
      <Text>
        JSON grew out of a need for stateless, real-time server-to-browser
        communication protocol without using browser plugins such as Flash or
        Java applets, the dominant methods used in the early 2000s.[10] A
        precursor to the JSON libraries was used in a childrens digital asset
        trading game project named Cartoon Orbit at Communities.com (at which
        State Software`s co-founders had all worked previously) for Cartoon
        Network, which used a browser side plug-in with a proprietary messaging
        format to manipulate Dynamic HTML elements (this system is also owned by
        3DO). Upon discovery of early Ajax capabilities, digiGroups, Noosh, and
        others used frames to pass information into the user browsers`` visual
        field without refreshing a Web application`s visual context, realizing
        real-time rich Web applications using only the standard HTTP, HTML and
        JavaScript capabilities of Netscape 4.0.5+ and IE 5+.[citation needed]
        Crockford first specified and popularized the JSON format.[11] The State
        Software co-founders agreed to build a system that used standard browser
        capabilities and provided an abstraction layer for Web developers to
        create stateful Web applications that had a persistent duplex connection
        to a Web server by holding two Hypertext Transfer Protocol (HTTP)
        connections open and recycling them before standard browser time-outs if
        no further data were exchanged. The co-founders had a round-table
        discussion and voted whether to call the data format JSML (JavaScript
        Markup Language) or JSON (JavaScript Object Notation), as well as under
        what license type to make it available. Chip Morningstar developed the
        idea for the State Application Framework at State Software.[12][13] The
        system was sold to Sun Microsystems, Amazon.com and EDS. The
        JSON.org[14] website was launched in 2002. In December 2005, Yahoo!
        began offering some of its Web services in JSON.[15] JSON was based on a
        subset of the JavaScript scripting language (specifically, Standard
        ECMA-262 3rd Edition—December 1999[16]) and is commonly used with
        JavaScript, but it is a language-independent data format. Code for
        parsing and generating JSON data is readily available in many
        programming languages. JSON`s website lists JSON libraries by language.
        In October 2013, Ecma International published the first edition of its
        JSON standard ECMA-404.[7] That same year, RFC 7158 used ECMA-404 as a
        reference. In 2014, RFC 7159 became the main reference for JSON`s
        Internet uses, superseding RFC 4627 and RFC 7158 (but preserving
        ECMA-262 and ECMA-404 as main references). In November 2017, ISO/IEC JTC
        1/SC 22 published ISO/IEC 21778:2017[2] as an international standard. On
        13 December 2017, the Internet Engineering Task Force obsoleted RFC 7159
        when it published RFC 8259, which is the current version of the Internet
        Standard STD 90.[17][18] Crockford added a clause to the JSON license
        stating that The Software shall be used for Good, not Evil, in order to
        open-source the JSON libraries while mocking corporate lawyers and those
        who are overly pedantic. On the other hand, this clause led to license
        compatibility problems of the JSON license with other open-source
        licenses, as open-source software and free software usually imply no
        restrictions on the purpose of use.[19]
      </Text>
    </ContainerInfo>
  );
};

const ContainerInfo = styled.article`
  margin: 35px 20px;
`;

const Text = styled.p``;

const Subtitle = styled.h2`
  margin: 35px 0;
`;
export default Content;
