/* global describe, it */

(function() {
	'use strict';
	

	describe('Test Opps', function() {
		it('GetName should return valid value', function() {
			expect(myMammal).toBeDefined();
			expect(myMammal.getName).toBeDefined();
			expect(myMammal.getName()).toEqual("Herb the Mammal");
		});
		it('say should return empty', function() {
			expect(myMammal.says).toBeDefined();
			expect(myMammal.says()).toEqual("");
		});

	});
})();
