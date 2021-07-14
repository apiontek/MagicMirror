/* Magic Mirror Test config compliments with anytime type
 *
 * By Rodrigo Ramírez Norambuena https://rodrigoramirez.com
 * MIT Licensed.
 */
let config = require(process.cwd() + "/tests/configs/default.js").configFactory({
	timeFormat: 12,

	modules: [
		{
			module: "compliments",
			position: "middle_center",
			config: {
				compliments: {
					morning: [],
					afternoon: [],
					evening: [],
					anytime: ["Anytime here"]
				}
			}
		}
	]
});

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}
