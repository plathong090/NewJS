function digitalClock(time) {
    let result = "hh: :mm: :ss"
    let minute = time / 60;
    let second = (minute % 1) * 60;
    let hour = parseInt(minute) / 60;
    let minute_cal = (hour % 1) * 60;

    result = result.replace('hh' , (parseInt(hour) % 24).toString().padStart(2, '0'));
    result = result.replace('mm' , Math.round(minute_cal).toString().padStart(2 , '0'));
    result = result.replace('ss' , Math.round(second).toString().padStart(2, '0'));

    return result ;
    
}  
  console.log(digitalClock(5025));
  console.log(digitalClock(61201));
  console.log(digitalClock(87000));