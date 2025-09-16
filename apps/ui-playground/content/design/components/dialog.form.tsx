"use client";

import { RenderComponentWithSnippet } from "@/app/components/render";
import { useState } from "react";

import { Button } from "@calcom/ui/components/button";
import { Dialog, DialogClose, DialogContent, DialogFooter } from "@calcom/ui/components/dialog";
import { TextAreaField } from "@calcom/ui/components/form";

export const FormExample: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [formInput, setFormInput] = useState("");

  return (
    <RenderComponentWithSnippet>
      <div className="space-y-2">
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent title="Feedback Form" description="Please provide your feedback below">
            <div>
              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$// To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                  $$$// To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                    $$$
                  </>
                }
                value={formInput}
                onChange={(e) => setFormInput(e.target.value)}
              />
            </div>
            <DialogFooter>
              <DialogClose />
              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <div className="mt-6">
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          <pre className="text-default bg-subtle mt-2 rounded-md p-4 text-sm">
            {formInput || "No input yet"}
          </pre>
        </div>
      </div>
    </RenderComponentWithSnippet>
  );
};
