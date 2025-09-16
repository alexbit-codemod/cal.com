import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { ListItemNode, ListNode } from "@lexical/list";
import { TRANSFORMERS } from "@lexical/markdown";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";

import classNames from "@calcom/ui/classNames";

import ExampleTheme from "./ExampleTheme";
import { VariableNode } from "./nodes/VariableNode";
import AddVariablesPlugin from "./plugins/AddVariablesPlugin";
import AutoLinkPlugin from "./plugins/AutoLinkPlugin";
import EditablePlugin from "./plugins/EditablePlugin";
import PlainTextPlugin from "./plugins/PlainTextPlugin";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import CustomEnterKeyPlugin from "./plugins/customEnterKeyPlugin";
import "./stylesEditor.css";
import type { TextEditorProps } from "./types";

/*
 Default toolbar items:
  - blockType
  - bold
  - italic
  - link
*/

const editorConfig = {
  theme: ExampleTheme,
  onError(error: Error) {
    throw error;
  },
  namespace: "",
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode,
    VariableNode,
  ],
};

export const Editor = (props: TextEditorProps) => {
  const editable = props.editable ?? true;
  const plainText = props.plainText ?? false;
  return (
    <div className="editor rounded-md">
      <LexicalComposer initialConfig={{ ...editorConfig }}>
        <div className="editor-container hover:border-emphasis focus-within:ring-brand-default !rounded-lg p-0 transition focus-within:ring-2">
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          <div
            className={classNames("editor-inner scroll-bar overflow-x-hidden", !editable && "!bg-subtle")}
            style={{ height: props.height, maxHeight: props.maxHeight }}>
            // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
            $$$
            <ListPlugin />
            <LinkPlugin />
            <AutoLinkPlugin />
            <CustomEnterKeyPlugin />
            {props?.variables ? <AddVariablesPlugin variables={props.variables} /> : null}
            <HistoryPlugin />
            <MarkdownShortcutPlugin
              transformers={
                props.disableLists
                  ? TRANSFORMERS.filter((value, index) => {
                      if (index !== 3 && index !== 4) return value;
                    })
                  : TRANSFORMERS
              }
            />
          </div>
        </div>
        <EditablePlugin editable={editable} />
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      </LexicalComposer>
    </div>
  );
};
