function constructionCrew(worker) {
    
    feelsDizzy(worker);    
    return worker;
    
    function feelsDizzy(object) {
        if (object.dizziness) {
            object.levelOfHydrated += object.weight * object.experience * 0.1;
            object.dizziness = false;
        }
    }
}

console.log(constructionCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  ));