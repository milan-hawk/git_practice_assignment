function checkPalindrome(N, str) {
    let bag1="";
    let bag2="";
    for(let i=0;i<str.length;i++)
    {
        bag1=bag1+str[i];
    }
    for(let j=str.length-1;j>=0;j--)
    {
        bag2=bag2+str[j];
    }
    
    if(bag1==bag2)
    {
        console.log("Yes");
    }
    else
    {
        console.log("No");
    }
  
}
