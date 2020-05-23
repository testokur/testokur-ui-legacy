class SelectItem {
  constructor(value: string, text: string) {
    this.Value = value;
    this.Text = text;
  }

  readonly Value: string;

  readonly Text: string;
}

export default SelectItem;
