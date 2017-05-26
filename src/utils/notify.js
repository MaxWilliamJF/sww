module.exports = {
	init(title, message) {
		const options = {
			body: message
		}
		return new Notification(title,options);
	},

	show(title, message) {
		if (!("Notification" in window)) {
		  alert( title );
		} else if (Notification.permission === "granted") {
			this.init( title, message )
		} else if (Notification.permission !== "denied") {
			Notification.requestPermission(function (permission) {
				if (permission === "granted") {
					this.init( title, message )
				}
			});
		}
	}
}