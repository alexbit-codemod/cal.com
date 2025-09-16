interface ThemeLabelProps {
  variant: "light" | "dark" | "system";
  value: "light" | "dark" | "system";
  label: string;
  defaultChecked?: boolean;
  register: any;
  fieldName?: string;
}

export default function ThemeLabel(props: ThemeLabelProps) {
  const { variant, label, value, defaultChecked, register, fieldName = "theme" } = props;

  return (
    <label
      className="relative mb-4 flex-1 cursor-pointer text-center last:mb-0 last:mr-0 sm:mb-0 sm:mr-4"
      htmlFor={`${fieldName}-${variant}`}
      data-testid={`${fieldName}-${variant}`}>
      <input
        className="peer absolute left-8 top-8"
        type="radio"
        value={value}
        id={`${fieldName}-${variant}`}
        defaultChecked={defaultChecked}
        {...register(fieldName)}
      />
      <div className="ring-inverted relative z-10 rounded-lg ring-offset-2 transition-all peer-checked:ring-2">
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      </div>
      <p className="peer-checked:text-emphasis text-default mt-2 text-sm font-medium">{label}</p>
    </label>
  );
}
