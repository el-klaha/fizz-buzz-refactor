$(document).ready(function(){

    /*** FIZZBUZZ LOGIC ***/

    do
    {
        var num = + prompt("Insert a number from 1 to 100");
    }while(num % 1 != 0);
    
    fizzCount(num);

});

var fizzCount = function ( number )
{
    for(var i = 1; i <= number; i++)
    {
        if (i % 3 === 0 && i % 5 === 0)
        {
            $('body').append("<div>FizzBuzz</div>");
        }
        else if (i % 3 === 0)
        {
            $('body').append("<div>Fizz</div>");
        }
        else if (i % 5 === 0)
        {
            $('body').append("<div>Buzz</div>");
        }
        else
        {
            $('body').append("<div>"+i+"</div>");
        }
    }
}
