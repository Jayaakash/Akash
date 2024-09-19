var a=['first','second','third','four','five'];
console.log("my first array",a);

let postion=a.indexOf('second');
console.log("a",a);
console.log("postion",postion);
 
var a=['c','d','a','e','f','g'];
var b=[9,7,6,5,3,2];
a.sort();
b.sort();
 
//lexicograpical order

var a=['c','d','a','e','f','g'];
var b=[1,9,4,5,3];
a.sort(function(x,y)
    {
        return x<y;
    } );

    b.sort(function(x,y)
        {
            return x<y;
        } );
        console.log("a:",a);
        console.log("b:",b);

       var a=['first','second','third','four','five'];
        let position1=1;
        let elementToRemove=2;
        a.splice(position1,elementToRemove);
        console.log("modified Array",a);

       var a1=['first','second','third','four','five'];
        console.log("a:",a1);
        let b1=a.slice();
        console.log("b:",b1);

        //append to the and of an array
        a.push('third');
        console.log("a:",a);

        //remove from end of the array
        var a3=['first','second','third','four','five'];
        console.log("a:",a3);
        //remove the last element from the array

        let removed=a3.pop();
        console.log("modified array",a3);
        console.log("remove array",removed);

        var a5=['z','b','c','a','u'];
        a5.sort((x,y) =>x<y);
        console.log("a:",a5);

        var a6=['first','second','third','four','five'];
        console.log("joined elements:",a6.join());
        console.log("joined elements:",a6.join('-'));

        let cars={
            "color":"black",
            "type":"sedan",
            "model":"BMW",
            "year":"2024",
            "Engine":"2000 cc"
        }
        console.log("the properties of car",cars);