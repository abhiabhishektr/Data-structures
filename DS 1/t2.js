var garbageCollection = function (garbage, travel) {
    let metal = 0,
        glass = 0,
        paper = 0,
        totalMinutes = 0;
        let Gflag = false, Pflag = false, Mflag = false;
    for (let i = garbage.length-1; i >= 0; i--) {

            let temp = garbage[i].split('');

        for (let j = 0; j < temp.length; j++) {
            if (temp[j] === "G") {
                if (!Gflag) {
                    Gflag = true;
                    console.log(calculateSum(travel),temp[j]);
                    
                    glass += calculateSum(travel) ;
                }
                glass += 1;
            }

            if (temp[j] === "P") {
                if (!Pflag) {
                    Pflag = true;
                    console.log(calculateSum(travel),temp[j]);
                    paper += calculateSum(travel);
                }
                paper += 1;
            }

            if (temp[j] === "M") {
                if (!Mflag) {
                    Mflag = true;
                    console.log(calculateSum(travel),temp[j]);
                    metal += calculateSum(travel) ;
                }
                metal += 1;
            }
        }
        travel.pop()
    }
    console.log('metal',metal);
    console.log('paper',paper);
    console.log('glass',glass);
    totalMinutes=metal+paper+glass
    console.log('totalMinutes',totalMinutes);
    console.log(Pflag,Gflag,Mflag);

    return     totalMinutes=metal+paper+glass
};


function calculateSum(array) {
    return array.reduce((sum, current) => sum + current, 0);
}


let garbage = ["G", "P", "GP", "GG"],
    travel = [2, 4, 3];

// console.log(garbageCollection(garbage,travel));
garbageCollection(garbage, travel);
