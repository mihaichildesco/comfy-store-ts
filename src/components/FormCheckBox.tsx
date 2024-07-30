import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

type FormCheckBoxProps = {
  label?: string;
  name: string;
  defaultValue?: string;
};

function FormCheckBox({ label, name, defaultValue }: FormCheckBoxProps) {
  const defaultChecked = defaultValue === "on" ? true : false;

  return (
    <div className="mb-2 flex justify-between self-end">
      <Label htmlFor={name}>{label || name}</Label>
      <Checkbox id={name} name={name} defaultChecked={defaultChecked} />
    </div>
  );
}
export default FormCheckBox;
