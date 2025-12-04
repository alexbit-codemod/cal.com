import type { Rule } from "eslint";

const rule: Rule.RuleModule = {
  meta: {
    docs: {
      description: "This rule is run on typescript!",
    },
  },
  create: (context) => {
    const contextSourceCode = context.sourceCode ?? context.getSourceCode();
    return {
      VariableDeclarator: (node) => {
        if (node.id.type === "Identifier" && node.id.name !== "bla") {
          contextSourceCode.report({
            node,
            message: 'All variabled should be named "bla"!',
          });
        }
      },
    };
  },
};

export default rule;
