function extractFile(path) {
    let file = path.match(/(?<=\\)[^\\\.]+(\.[^\\\.]+)*(?=\.[^\\\.]+$)/);
    let extension = path.match(/(?<=\.)[^\\\.]+$/);
    let outputFile = file ? `File name: ${file[0]}` : 'File name:';
    let outputExtension = extension ? `File extension: ${extension[0]}` : 'Extension name:';
    console.log(outputFile);
    console.log(outputExtension);
}

extractFile('C:\\Internal\\training-internal\\template.bak.pptx');