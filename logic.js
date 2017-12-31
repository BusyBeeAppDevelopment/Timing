
/**
 * @function parkingStatus - is used to return a string value for a parking spot object
 * @param val - is a number between 0-5 that defines the parking state
 * @returns {String} - the output used in the object
 */
function parkingStatus(val){
    var status;
    switch (val){
        case 0:
            // Parking is available
            status = 'available';
            break;
        case 1:
            // Parking is about to be occupied
            status = 'entering';
            break;
        case 2:
            // Parking is occupied, but not validate
            status = 'entering';
            break;
        case 3:
            // Parking is occupied but not authorized
            status = 'violation';
            break;
        case 4:
            // Parking is occupied and validated
            status = 'validated';
            break;
        default:
            //Statements executed when none of
            status = null;
            break;
    }
    return status;
}