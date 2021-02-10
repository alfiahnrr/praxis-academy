function calculateSupply(age, batangPerHari) {
    var maxAge = 80;
    var totalNeeded = (batangPerHari * 365) * (maxAge - age);
    var message = 'Kamu akan membutuhkan ' + totalNeeded + ' batang rokok untuk bertahan sampai usia ' + maxAge + " tahun";
    console.log(message);
  }
  
  calculateSupply(19, 6);
  calculateSupply(21, 3);
  calculateSupply(24, 2);