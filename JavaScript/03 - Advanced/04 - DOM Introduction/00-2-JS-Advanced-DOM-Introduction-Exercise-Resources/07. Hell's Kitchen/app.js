function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
       const input = JSON.parse(document.querySelector('textarea').value);
       const restaurants = {};

       input.forEach(line => {
           let [restaurantName, workers] = line.split(' - ');

           if (!restaurants[restaurantName]) {
               restaurants[restaurantName] = { workers: [] };
           }

           workers
               .split(', ')
               .forEach(worker => {
                   let [workerName, salary] = worker.split(' ');
                   restaurants[restaurantName].workers.push({ name: workerName, salary: Number(salary) });
               });

           restaurants[restaurantName].workers.sort((a, b) => b.salary - a.salary);
           restaurants[restaurantName].average = restaurants[restaurantName].workers.reduce((acc, curr, i, a) => acc + curr.salary / a.length, 0);
           restaurants[restaurantName].best = restaurants[restaurantName].workers[0].salary;
       });

       let restaurantsSorted = Object.entries(restaurants)
           .sort(([nameA, infoA], [nameB, infoB]) => infoB.average - infoA.average);

       let bestRestArr = restaurantsSorted[0];
       let bestRestName = bestRestArr[0];
       let bestAvg = restaurants[bestRestName].average.toFixed(2);
       let bestSal = restaurants[bestRestName].best.toFixed(2);
       let bestRest = `Name: ${bestRestName} Average Salary: ${bestAvg} Best Salary: ${bestSal}`;

       document.querySelector('#bestRestaurant p').textContent = bestRest;

       let bestWorkers = restaurants[bestRestName].workers
           .map(({ name, salary }) => `Name: ${name} With Salary: ${salary}`)
           .join(' ');

       document.querySelector('#workers p').textContent = bestWorkers;
   }
}

solve();