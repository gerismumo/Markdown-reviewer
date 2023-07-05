$(document).ready(() => {
  const editor = $('#editor');
  const preview = $('#preview');

  const updatePreview = () => {
    const markdown = editor.val();
    const html = marked(markdown, { breaks: true });
    preview.html(html);
  };

  editor.on('input', updatePreview);

  const defaultMarkdown = `# header1
## header2
[home](#)
hello \`alert('hello')\`

- hello
- hello

\`\`\`
console.log('Hello, world!');
\`\`\`

> geraldmumo

![Google logo](https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png)

This **Hello, world!**`;

  editor.val(defaultMarkdown);
  updatePreview();
});
