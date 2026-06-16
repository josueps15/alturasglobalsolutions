const fs = require('fs');
let content = fs.readFileSync('src/app/globals.css', 'utf8');

const replacement = `.gallery-showcase-section {
  position: relative;
  background-color: #ffffff;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.95)),
    url('/light-pattern.png');
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}`;

content = content.replace(/\.gallery-showcase-section\s*\{[\s\S]*?\}/, replacement);
fs.writeFileSync('src/app/globals.css', content);
