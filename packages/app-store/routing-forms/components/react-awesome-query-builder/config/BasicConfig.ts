// This is taken from "react-awesome-query-builder/lib/config/basic";
import type {
  Conjunction as RAQBConjunction,
  Widget as RAQBWidget,
  Type as RAQBType,
  Settings as RAQBSettings,
  Operator as RAQBOperator,
} from "react-awesome-query-builder";

export type Conjunction = RAQBConjunction;
export type Conjunctions = Record<string, Conjunction>;
export type Operator = RAQBOperator & {
  _jsonLogicIsExclamationOp?: boolean;
};
export type Operators = Record<string, Operator>;
export type WidgetWithoutFactory = Omit<RAQBWidget, "factory"> & {
  type: string;
  jsType: string;
  toJS: (val: any) => any;
};
export type WidgetsWithoutFactory = Record<string, WidgetWithoutFactory>;
export type Type = RAQBType;
export type Types = Record<string, Type>;
export type Settings = RAQBSettings;
const conjunctions: Conjunctions = {
  AND: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    jsonLogicConj: "and",
    reversedConj: "OR",
    formatConj: () => "",
    sqlFormatConj: () => "",
    spelFormatConj: () => "",
    mongoConj: "",
  },
  OR: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    jsonLogicConj: "or",
    reversedConj: "AND",
    formatConj: () => "",
    sqlFormatConj: () => "",
    spelFormatConj: () => "",
    mongoConj: "",
  },
};

const operators: Operators = {
  equal: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    labelForFormat: "==",
    reversedOp: "not_equal",
    jsonLogic: "==",
  },
  not_equal: {
    isNotOp: true,
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    labelForFormat: "!=",
    reversedOp: "equal",
    jsonLogic: "!=",
  },
  less: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    labelForFormat: "<",
    reversedOp: "greater_or_equal",
    jsonLogic: "<",
  },
  less_or_equal: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    labelForFormat: "<=",
    reversedOp: "greater",
    jsonLogic: "<=",
  },
  greater: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    labelForFormat: ">",
    reversedOp: "less_or_equal",
    jsonLogic: ">",
  },
  greater_or_equal: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    labelForFormat: ">=",
    reversedOp: "less",
    jsonLogic: ">=",
  },
  like: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    labelForFormat: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    reversedOp: "not_like",
    jsonLogic: "in",
    _jsonLogicIsRevArgs: true,
    valueSources: ["value"],
  },
  not_like: {
    isNotOp: true,
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    reversedOp: "like",
    labelForFormat: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    valueSources: ["value"],
  },
  /**
   * Not supported with JSONLogic. Implement them and add these back -> https://github.com/jwadhams/json-logic-js/issues/81
   */
  //   starts_with: {
  //     label: "Starts with",
  //     labelForFormat: "Starts with",
  //     jsonLogic: undefined, // not supported
  //     valueSources: ["value"],
  //   },
  //   ends_with: {
  //     label: "Ends with",
  //     labelForFormat: "Ends with",
  //     jsonLogic: undefined, // not supported
  //     valueSources: ["value"],
  //   },
  between: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    labelForFormat: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    cardinality: 2,
    valueLabels: ["Value from", "Value to"],
    reversedOp: "not_between",
    jsonLogic: (field: any, op: any, vals: [any, any]) => {
      const min = parseInt(vals[0], 10);
      const max = parseInt(vals[1], 10);
      return {
        and: [{ ">=": [field, min] }, { "<=": [field, max] }],
      };
    },
  },
  not_between: {
    isNotOp: true,
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    labelForFormat: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    cardinality: 2,
    valueLabels: ["Value from", "Value to"],
    reversedOp: "between",
    jsonLogic: (field: any, op: any, vals: [any, any]) => {
      const min = parseInt(vals[0], 10);
      const max = parseInt(vals[1], 10);
      return {
        or: [{ "<": [field, min] }, { ">": [field, max] }],
      };
    },
  },
  is_empty: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    labelForFormat: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    cardinality: 0,
    reversedOp: "is_not_empty",
    jsonLogic: "!",
  },
  is_not_empty: {
    isNotOp: true,
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    labelForFormat: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    cardinality: 0,
    reversedOp: "is_empty",
    jsonLogic: "!!",
  },
  /**
   * We don't need these operators
   */
  //   is_null: {
  //     label: "Is null",
  //     labelForFormat: "IS NULL",
  //     cardinality: 0,
  //     reversedOp: "is_not_null",
  //     jsonLogic: "==",
  //   },
  //   is_not_null: {
  //     label: "Is not null",
  //     labelForFormat: "IS NOT NULL",
  //     cardinality: 0,
  //     reversedOp: "is_null",
  //     jsonLogic: "!=",
  //   },
  select_equals: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    labelForFormat: "==",
    reversedOp: "select_not_equals",
    jsonLogic: "==",
  },
  select_not_equals: {
    isNotOp: true,
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    labelForFormat: "!=",
    reversedOp: "select_equals",
    jsonLogic: "!=",
  },
  select_any_in: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    labelForFormat: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    reversedOp: "select_not_any_in",
    jsonLogic: "in",
  },
  select_not_any_in: {
    isNotOp: true,
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    labelForFormat: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    reversedOp: "select_any_in",
  },
  // We define this operator but use it conditionally for multiselect for Attributes only
  multiselect_some_in: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    jsonLogic: (field: any, operator: any, vals: any) => {
      return {
        // Tested in jsonLogic.test.ts
        some: [field, { in: [{ var: "" }, vals] }],
      };
    },
  },
  multiselect_not_some_in: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    reversedOp: "multiselect_some_in",
  },
  multiselect_equals: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    reversedOp: "multiselect_not_equals",
    // jsonLogic2: "all-in",
    jsonLogic: (field: any, op: any, vals: any, ...rest) => {
      return {
        // This is wrongly implemented as "includes". This isn't "equals". Because if field is ["a" ] and vals is ["a", "b"], it still matches. Expectation would probably be that it should be a strict match(["a", "b"] or ["b", "a"])
        all: [field, { in: [{ var: "" }, vals] }],
      };
    },
  },
  multiselect_not_equals: {
    isNotOp: true,
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    reversedOp: "multiselect_equals",
  },
  some: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    labelForFormat: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    cardinality: 0,
    jsonLogic: "some",
  },
  all: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    labelForFormat: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    cardinality: 0,
  },
  none: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    labelForFormat: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    cardinality: 0,
    jsonLogic: "none",
  },
};

const widgets: WidgetsWithoutFactory = {
  text: {
    type: "text",
    jsType: "string",
    valueSrc: "value" as const,
    valueLabel: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    valuePlaceholder: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    toJS: (val: any) => val,
  },
  textarea: {
    type: "text",
    jsType: "string",
    valueSrc: "value" as const,
    valueLabel: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    valuePlaceholder: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    toJS: (val: any) => val,
  },
  number: {
    type: "number",
    jsType: "number",
    valueSrc: "value" as const,
    valueLabel: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    valuePlaceholder: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    toJS: (val: any) => val,
  },
  select: {
    type: "select",
    jsType: "string",
    valueSrc: "value" as const,
    valueLabel: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    valuePlaceholder: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    toJS: (val: any) => val,
  },
  multiselect: {
    type: "multiselect",
    jsType: "array",
    valueSrc: "value" as const,
    valueLabel: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    valuePlaceholder: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    toJS: (val: any) => val,
  },
};

const types: Types = {
  text: {
    defaultOperator: "equal",
    mainWidget: "text",
    widgets: {
      text: {
        // Note: any operator mentioned here but isn't defined in operators will be automatically excluded
        operators: [
          "equal",
          "not_equal",
          "like",
          "not_like",
          "starts_with",
          "ends_with",
          "proximity",
          "is_empty",
          "is_not_empty",
          "is_null",
          "is_not_null",
        ],
        widgetProps: {},
        opProps: {},
      },
      textarea: {
        operators: [
          "equal",
          "not_equal",
          "like",
          "not_like",
          "starts_with",
          "ends_with",
          "is_empty",
          "is_not_empty",
          "is_null",
          "is_not_null",
        ],
        widgetProps: {},
        opProps: {},
      },
    },
  },
  number: {
    defaultOperator: "equal",
    mainWidget: "number",
    widgets: {
      number: {
        operators: [
          "equal",
          "not_equal",
          "less",
          "less_or_equal",
          "greater",
          "greater_or_equal",
          "between",
          "not_between",
          // "is_empty",
          // "is_not_empty",
          "is_null",
          "is_not_null",
        ],
      },
      //   slider: {
      //     operators: [
      //       "equal",
      //       "not_equal",
      //       "less",
      //       "less_or_equal",
      //       "greater",
      //       "greater_or_equal",
      //       // "is_empty",
      //       // "is_not_empty",
      //       "is_null",
      //       "is_not_null",
      //     ],
      //   },
    },
  },
  select: {
    mainWidget: "select",
    defaultOperator: "select_equals",
    widgets: {
      select: {
        operators: ["select_equals", "select_not_equals"],
        widgetProps: {
          customProps: {
            showSearch: true,
          },
        },
      },
      multiselect: {
        operators: ["select_any_in", "select_not_any_in"],
      },
    },
  },
  multiselect: {
    defaultOperator: "multiselect_equals",
    widgets: {
      multiselect: {
        operators: ["multiselect_equals", "multiselect_not_equals", "is_null", "is_not_null"],
      },
    },
  },
  //   "!group": {
  //     defaultOperator: "some",
  //     mainWidget: "number",
  //     widgets: {
  //       number: {
  //         widgetProps: {
  //           min: 0,
  //         },
  //         operators: [
  //           // w/o operand
  //           "some",
  //           "all",
  //           "none",

  //           // w/ operand - count
  //           "equal",
  //           "not_equal",
  //           "less",
  //           "less_or_equal",
  //           "greater",
  //           "greater_or_equal",
  //           "between",
  //           "not_between",
  //         ],
  //         opProps: {
  //           equal: {
  //             label: "Count ==",
  //           },
  //           not_equal: {
  //             label: "Count !=",
  //           },
  //           less: {
  //             label: "Count <",
  //           },
  //           less_or_equal: {
  //             label: "Count <=",
  //           },
  //           greater: {
  //             label: "Count >",
  //           },
  //           greater_or_equal: {
  //             label: "Count >=",
  //           },
  //           between: {
  //             label: "Count between",
  //           },
  //           not_between: {
  //             label: "Count not between",
  //           },
  //         },
  //       },
  //     },
  //   },
  //   case_value: {
  //     mainWidget: "case_value",
  //     widgets: {
  //       case_value: {},
  //     },
  //   },
};

const settings: Settings = {
  setOpOnChangeField: ["keep" as const, "default" as const], // 'default' (default if present), 'keep' (keep prev from last field), 'first', 'none'
};

const basicConfig = {
  conjunctions,
  operators,
  widgets,
  types,
  settings,
};

export default basicConfig;
