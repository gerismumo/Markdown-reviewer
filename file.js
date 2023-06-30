document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('editor');
    const preview = document.getElementById('preview');
  
    editor.addEventListener('input', () => {
      const markdown = editor.value;
      
      preview.innerHTML = markdown;
    });
    const code = `
    <h1>header1</h1>
    <h2>header2</h2>
    <a href="#">home</a>
    <p>hello <code> alert(hello)</code></p>
    <ul>
    <li>hello</li>
     <li>hello/li>
   </ul>
    <pre>

     console.log('Hello, world!');
    </pre>
    <blockquote>
       geraldmumo
    </blockquote>
    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google logo">
    <p>This <b>Hello, world!</b></p>

    
    `;


const currentValue = editor.value = code;
preview.innerHTML =currentValue;

 
  });


