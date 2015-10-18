/**
 * Divide the loot evenly amongst gang members, depending on how many hours
 * they worked.
 *
 * @example
 * // Returns {larry: 90, curly: 90, moe: 180}
 * splitLoot(360.0, {larry: 3, curly: 3, moe: 6});
 *
 * @param amount {number} The amount of loot
 * @param hours {object} An object mapping members to hours worked
 *
 */

var splitLoot = function(amount, hours) {
    // Divide an invoice evenly amongst staff depending on how many hours they
    // worked on a project.
    var totalHours = 0;
    for (var member in hours) {
        totalHours += hours[member];
    }

    var perHour = amount / totalHours;

    var split = {};
    for (var member in hours) {
        var pay = hours[member] * perHour;
        split[member] = pay;
    }

    return split;
};

module.exports = splitLoot;
