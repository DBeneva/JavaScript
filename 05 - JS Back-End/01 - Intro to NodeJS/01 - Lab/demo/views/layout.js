module.exports = (html, title) => `
<html>
    <head>
        <title>${title}</title>
    </head>
    <body>
        <nav>
            <a href="/"></a>
        </nav>
        ${html}
    </body>
</html>`;