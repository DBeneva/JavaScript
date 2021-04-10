function pascalCaseSplitter(string) {
    console.log(string.split(/(?=[A-Z])/g).join(', '));
}

pascalCaseSplitter('OThisIsSoAnnoyingToDoI');