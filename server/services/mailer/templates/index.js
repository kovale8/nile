const fs = require('fs');
const path = require('path');

const templates = fs.readdirSync(__dirname)
    .filter(file => file.endsWith('.hbs'));

const tMap = {};
for (const temp of templates)
    tMap[temp.slice(0, -4)] = fs.readFileSync(path.join(__dirname, temp), 'utf8');

function get(templateName) {
    const template = tMap[templateName];
    if (!template) throw Error(`no template by name ${templateName}`);
    return template;
}

module.exports = { get };