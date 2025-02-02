const truncateByWords = (text: string, maxWords: number, maxLength: number) => {
  // Split the text into an array of words
  const words = text.split(" ");

  // Truncate by words
  let truncatedText = words.slice(0, maxWords).join(" ");

  // If the truncated text is still too long, truncate by characters
  if (truncatedText.length > maxLength) {
    truncatedText = truncatedText.slice(0, maxLength).trim() + "...";
  } else if (words.length > maxWords) {
    truncatedText += "...";
  }

  return truncatedText;
};

export default truncateByWords;
