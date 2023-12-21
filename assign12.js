//check whether the number is prime or not

var n=7,count=0;
for( var i=1;i<=n/2;i++)
{
    if(n%i==0)
    {
        count++;
    }
}
if(count==1)
{
    console.log(`${n} is a prime number`);
}
else{
    console.log(`${n} is not a prime number`);
}
