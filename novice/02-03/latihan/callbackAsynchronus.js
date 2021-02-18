function calculate(param1,param2,callback){
    //jabarkan operasinya
    result = param1 + param2
    
    //me-callback fungsi
    if (typeof callback == 'function'){
     result= callback(param1,param2)
    }
    
    return result
  }
  
//ekekusi programnya
  a=calculate(2000,4000, function(x,y){return "$ " + (x + y) }) 
  b=calculate(7000,2000, function(x,y){return "Rp " + (x * y) }) 
  console.log(a) 
  console.log(b) 