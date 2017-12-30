/**
 * @param secondHand - this will receive a second value from MomentJS
 * @returns {number} - an integer value of random but Unique RFID tag
 */

function spotPicker(secondHand){
    const magicEightBall = Math.floor((Math.random() * secondHand) + 1);
    var fractionOfEight = magicEightBall/10;

    console.log(magicEightBall);
    console.log(fractionOfEight);
    return magicEightBall;
}

/**
 * @returns {number}
 */
function randomStatus(){
    var status = Math.floor(Math.random() * 5);
    return status;
}

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

spotPicker(54);
console.log(randomStatus());
console.log(parkingStatus(0));