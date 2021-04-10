function solve() {
  let text = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;

  let type = {
    'Camel Case'() {
      return text
        .split(' ')
        .map((word, index) => word = index == 0 ? word.toLocaleLowerCase() : capitalize(word))
        .join('');
    },
    'Pascal Case'() {
      return text
        .split(' ')
        .map((word) => capitalize(word))
        .join('');
    }
  };

  function capitalize(string) {
    return string[0].toLocaleUpperCase() + string.slice(1).toLocaleLowerCase();
  }

  let result = type[namingConvention] ?
    type[namingConvention]() : 'Error!';
  
  document.getElementById('result').textContent = result;
}