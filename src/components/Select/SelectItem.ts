class SelectItem {
  constructor(value: string | number, text: string) {
    this.Value = value;
    this.Text = text;
  }

  readonly Value: string | number;

  readonly Text: string;
}

export default SelectItem;
