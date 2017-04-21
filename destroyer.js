// Destroy file logic
// run expirationDate on file upload
// while server is running, if `isTodayTheDay`
// is equal to `expirationDate` then destroy it.
// This way we don't need to cache the time 
// and rebooting server wont affect the outcome.

var now = new Date();
var expirationDate = {
  month: now+1,
  date: 1
}

function isTodayTheDay() {
  var now = new Date();
  return (now.getMonth() == expirationDate.month && now.getDate() == expirationDate.date);
}

if(isTodayTheDay() === ExpirationDate){
  // destroy logic here
} else {
  // you may live another day file..
  // we don't want this running non stop, just once a day to check  
  return;
}