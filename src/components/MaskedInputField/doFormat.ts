const doFormat = (value: string, format: string, mask: string): [string, number] => {
  const strippedValue = value.replace(/[^0-9]/g, '');
  const chars = strippedValue.split('');
  let count = 0;
  let caretPosition = 0;
  let formatted = '';

  for (let i = 0; i < format.length; i += 1) {
    const c = format[i];
    if (chars[count]) {
      if (/\*/.test(c)) {
        formatted += chars[count];
        count += 1;
      } else {
        formatted += c;
      }
      caretPosition += 1;
    } else if (mask) {
      if (mask.split('')[i]) {
        formatted += mask.split('')[i];
      }
    }
  }

  return [formatted, caretPosition];
};

export default doFormat;
