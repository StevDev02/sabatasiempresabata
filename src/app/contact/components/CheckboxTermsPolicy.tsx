import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

interface CheckboxWithTextProps {
  textUrl: string;
  url: string;
  TextInformation: string;
}

export function CheckboxWithTextContact({textUrl, url, TextInformation}: CheckboxWithTextProps) {
  return (
    <div className="items-top flex space-x-2">
      <Checkbox id="terms1" />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          <Link href={`${url}`}>{textUrl}</Link>
        </label>
        <p className="text-sm text-muted-foreground">{TextInformation}</p>
      </div>
    </div>
  );
}
