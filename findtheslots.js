//The problem in Gist
//There might be T number of employees in a department and K is the number of the purticualr employee. For D number of days if work allotment happens how many days does the K employee gets the work
//The work allotment happens as defined below
//if we have T employee and K is the number of the purticular employee for D days the allotment happens 
//0->T followed by T->0 followed by 0->T and follows the same pattern until D number of Days
//in the below example of 6Employee with 3rd employee works for 15 days the 3rd employee works on 3rd,10th,15th days of the month respectively.

function fnTest(T,K,D){
    var tempT = 0;
    var arr = [];
    var direction = 1;
    for(var i=0;i<D;i++){
        if(direction == 1){
            tempT++;
            if (tempT > T) {
                direction = 0;
            }
        }
        if(direction == 0){
            tempT--;
            if (tempT < 1) {
                direction = 1;
            }
        }
        if(tempT == 0) { tempT = 1};
        console.log(tempT, K,direction);
        if(tempT == K){
            arr.push(i+1);
        }
    }
    console.log(arr);
}

fnTest(6,3,15);//[3,10,15]
