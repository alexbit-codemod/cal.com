import type { Rule } from "eslint";

const rule: Rule.RuleModule = {
  meta: {
    docs: {
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    },
  },
  create: (context) => {
    return {
      VariableDeclarator: (node) => {
        if (node.id.type === "Identifier" && node.id.name !== "bla") {
          context.report({
            node,
            message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
            $$$
            ,
          });
        }
      },
    };
  },
};

export default rule;
