const formatPhoneNumber = (value: string) => {
  if (!value) return value;

  // Remove all non-digit characters
  const number = value.replace(/\D/g, "");

  if (number.length <= 3) {
    return `(${number})`;
  }
  if (number.length <= 6) {
    return `(${number.slice(0, 3)})${number.slice(3)}`;
  }
  if (number.length <= 10) {
    return `(${number.slice(0, 3)})${number.slice(3, 6)}-${number.slice(6)}`;
  }
  return value;
};
export default formatPhoneNumber;
