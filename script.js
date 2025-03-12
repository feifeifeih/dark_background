document.addEventListener('DOMContentLoaded', () => {
  const colorPicker = document.getElementById('textColorPicker');
  const textarea = document.getElementById('customTextarea');
  const wordCounter = document.getElementById('wordCounter');

  // Set initial color (white) as default
  colorPicker.value = '#ffffff';

  // Add event listener to update textarea text color when user selects a new color
  colorPicker.addEventListener('input', (event) => {
      textarea.style.color = event.target.value;
  });

  // Add event listener to update word count when text changes
  textarea.addEventListener('input', () => {
      const text = textarea.value.trim();
      const wordCount = text.length > 0 ? text.split(/\s+/).length : 0;
      wordCounter.textContent = `Word Count: ${wordCount}`;
  });
});
