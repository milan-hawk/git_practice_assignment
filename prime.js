function identifyPrime(num) {
        let count=0;
        for(let n=1;n<=num;n++)
        {
            if(num%n===0)
            {
                count++;
            }
        }
        if(count==2)
        {
            console.log("Yes");
        }
        else
        {
            console.log("No");
        }
        
           
}