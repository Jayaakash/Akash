function InsertElement()
{
    var data=[20,30,40];
    
    var newpos=36;
    var position=2;

    //console.log("The original data",data);

    for(var i=data.length-1;i>postion;i--)
    {
        data[i]=data[i-1];
    
    }
            data[postion]=newpos;

    console.log(data);
}

InsertElement();