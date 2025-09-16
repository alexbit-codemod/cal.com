import { Table } from "./Table";
import { TableActions } from "./TableActions";
import {
  Table as TableNew,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableFooter,
  TableCaption,
} from "./TableNew";

export const TableNewExampleComponent = () => (
  <TableNew>
    <TableHeader>
      <TableRow>
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      </TableRow>
      <TableRow>
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      </TableRow>
    </TableBody>
    <TableFooter>
      <TableRow>
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      </TableRow>
    </TableFooter>
    // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
  </TableNew>
);

export const TableExampleComponent = () => (
  <Table>
    <Table.Header>
      <Table.Row>
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      </Table.Row>
      <Table.Row>
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      </Table.Row>
      <Table.Row>
        <TableActions
          actions={[
            {
              id: "action1",
              label: "Action 1",
              href: "#1",
            },
            {
              id: "action2",
              label: "Action 2",
              actions: [
                {
                  id: "action3",
                  label: "Action 3",
                  href: "#nested-action",
                },
              ],
            },
          ]}
        />
      </Table.Row>
    </Table.Body>
  </Table>
);
