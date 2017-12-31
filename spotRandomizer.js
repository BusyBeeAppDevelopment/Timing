/*
 * This file will not be used in the production app
 * FOR DEMO ONLY
 *
 * What does this do?
 * Spot randomizer will automatically alter parking spot data to
 * show what real functionality of Limitless Parking will look like
 */


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

// Debug and testing
spotPicker(54);
console.log(randomStatus());