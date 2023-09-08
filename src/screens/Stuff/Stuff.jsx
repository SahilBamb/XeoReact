import React from "react";
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'

import "./style.css";

export const Stuff = () => {

  // const md_content = "Vessel     | Captain\n-----------|-------------\nNCC-1701   | James T Kirk\nNCC-1701 A | James T Kirk\nNCC-1701 D | Picard";
  // const md_content2 = "##Hello There!"

  // const [markdownContent, setMarkdownContent] = useState('');
  
  // useEffect(() => {
  //   // Fetch the Markdown content from a URL
  //   fetch('https://raw.githubusercontent.com/SahilBamb/XeoReact/main/README.md')
  //     .then((response) => response.text())
  //     .then((data) => {
  //       setMarkdownContent(data);
  //     });
  // }, []); // The empty array causes this effect to only run once

  return (
      <> </>// <ReactMarkdown># Hello, *world*!</ReactMarkdown>
  );
};
