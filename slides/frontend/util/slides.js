export const SLIDE_DELIMITER = /\r?\n---\r?\n/g;
export const NOTE_DELIMITER = "\nNote:";

export const parseSlides = (text) => {
  return text.split(SLIDE_DELIMITER).map(slideText => {
    const parts = slideText.split(NOTE_DELIMITER);
    return {
      markdown: parts[0],
      notes: parts.slice(1).join(NOTE_DELIMITER)
    };
  });
};
