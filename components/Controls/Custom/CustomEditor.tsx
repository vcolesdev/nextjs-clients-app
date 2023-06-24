import React, { useState } from "react";

// Components
import draftToHtml from "draftjs-to-html";
import {
  ContentState,
  EditorState,
  convertFromHTML,
  convertToRaw
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToMarkdown from "draftjs-to-markdown";
import "@/node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

/**
 * CustomEditor
 * @param props
 * @constructor
 * @link https://codesandbox.io/s/recursing-zeh-sosjd?file=/src/WYSIWYG.js:0-815
 */
export const CustomEditor = (props: any) => {
  const textContent = props.value || "Enter your comments here...";
  const blocksFromHTML = convertFromHTML(textContent);

  const initialState = EditorState.createWithContent(
    ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    )
  );

  const [editorState, setEditorState] = useState(initialState);

  // @ts-ignore
  // @todo - find type for editorState
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    return props.onChange(
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
      //draftToMarkdown(convertToRaw(editorState.getCurrentContent()))
    );
  };

  return (
    <Editor
      editorState={editorState}
      wrapperClassName={props.wrapperClassName ? props.wrapperClassName : ""}
      editorClassName={props.editorClassName ? props.editorClassName : ""}
      onEditorStateChange={onEditorStateChange}
      {...props.editorOptions}
    />
  );
};
