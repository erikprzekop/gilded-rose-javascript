"use strict";
const { update_quality } = require('./gilded_rose.js');
const { Item } = require('./gilded_rose.js');

/****
 * Some example items / test cases:
*    items.push(new Item('+5 Dexterity Vest', 10, 20));
*    items.push(new Item('Aged Brie', 2, 0));
*    items.push(new Item('Elixir of the Mongoose', 5, 7));
*    items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
*    items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
*/

/**
 * Example conjured item:
 *   items.push(new Item('Conjured Mana Cake', 3, 6));
 */


describe("Gilded Rose - update quality", function () {
    it("should not throw an error with an empty array", function () {
        var items = [];
        // items.push(new Item('+5 Dexterity Vest', 10, 20));

        update_quality(items);
    });
});
