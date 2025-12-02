function checkdaytype(dayName) {
    switch (dayName.trim().toLowerCase()) {
        case 'monday':
        case 'tuesday':
        case 'wednesday':
        case 'thursday':
        case 'friday':
            return 'weekday';
        case 'saturday':
        case 'sunday':
            return 'weekend';
        default:
            return 'unknow'
    }
}

console.log(checkdaytype('saturday'))