function extractFile(path) {
    let file = path.substring(path.lastIndexOf('\\') + 1, path.lastIndexOf('.'));
    let extension = path.substring(path.lastIndexOf('.') + 1);
    console.log(`File name: ${file}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');