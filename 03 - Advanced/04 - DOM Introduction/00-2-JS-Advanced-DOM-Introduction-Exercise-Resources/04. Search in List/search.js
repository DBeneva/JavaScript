function search() {
   let towns = document.getElementById('towns').children;
   let townsArray = Array.from(towns).map(x => x.textContent);
   let searchText = document.getElementById('searchText').value;
   let divResult = document.getElementById('result');
   let matches = 0;

   townsArray.forEach((town, index) => {
      if (town.includes(searchText)) {
         towns[index].style.textDecoration = 'underline';
         towns[index].style.fontWeight = 'bold';
         matches++;
      }
   });

   divResult.textContent = `${matches} matches found`;
}