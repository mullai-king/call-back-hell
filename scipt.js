
//writing fun() reverse number with call back hell
const printNumbersReverse = (start, callback) => {
  const countDown = current => {
      if (current >=1) {
          // console.log(current);
          const count = document.getElementById("text-container");
          count.textContent = current;
          // seconds difference callback countdown fun()
          setTimeout(() => countDown(current - 1), 1000);
      } else {
          /* console.log("Happy Independence Day!") */
          callback();
      }
  };
//calling fun() reverse count down
  countDown(start);
};

// calling fun() and reverse value and passing final output callback fun()
printNumbersReverse(10,()=>{
  const count = document.getElementById("text-container");
  count.textContent = "Happy Independence Day";
});