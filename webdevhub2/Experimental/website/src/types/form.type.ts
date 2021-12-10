type Field = {
  el: HTMLInputElement | HTMLTextAreaElement;
  valid: boolean;
  value?: string;
  checked?: boolean;
  selected?: string[];
};

export type Form = {
  [fieldName: string]: Field;
};
