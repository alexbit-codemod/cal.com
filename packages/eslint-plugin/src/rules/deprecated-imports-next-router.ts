import { ESLintUtils } from "@typescript-eslint/utils";

const createRule = ESLintUtils.RuleCreator((name) => `https://developer.cal.com/eslint/rule/${name}`);

const rule = createRule({
  name: "deprecated-imports-next-router",
  meta: {
    fixable: "code",
    docs: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      recommended: "error",
    },
    messages: {
      "deprecated-next-router":
        "Importing router from 'next/router' is deprecated, use 'next/navigation' instead",
    },
    type: "problem",
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    return {
      ImportDeclaration(node) {
        if (node.source.value === "next/router") {
          context.report({
            node,
            messageId: "deprecated-next-router",
            fix: function (fixer) {
              return fixer.replaceText(node.source, "'next/navigation'");
            },
          });
        }
      },
    };
  },
});

export default rule;
