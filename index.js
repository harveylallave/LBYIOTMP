
function displayLog(val) {
	$('#logs').val(function(index, old) { return val + old; });
}

$(document).ready(function(){
	// Create a client instance
	client = new Paho.MQTT.Client("m10.cloudmqtt.com", 38598, "web_" + parseInt(Math.random() * 100, 10));
	//Example client = new Paho.MQTT.Client("m11.cloudmqtt.com", 32903, "web_" + parseInt(Math.random() * 100, 10));

	// set callback handlers
	client.onConnectionLost = onConnectionLost;
	client.onMessageArrived = onMessageArrived;
	var options = {
		useSSL: true,
		userName: "xiepnucw",
		password: "dILNKqDXKbGZ",
		onSuccess:onConnect,
		onFailure:doFail
	}

	// connect the client
	client.connect(options);

	// called when the client connects
	function onConnect() {
	// Once a connection has been made, make a subscription and send a message.
		console.log("onConnect");
		client.subscribe("/cloudmqtt");
		message = new Paho.MQTT.Message("Hello CloudMQTT");
		message.destinationName = "/cloudmqtt";
		client.send(message);
	}

	function doFail(e){
		console.log(e);
	}

	// called when the client loses its connection
	function onConnectionLost(responseObject) {
		if (responseObject.errorCode !== 0) {
		  console.log("onConnectionLost:"+responseObject.errorMessage);
		}
	}

	// called when a message arrives
	function onMessageArrived(message) {
		console.log("onMessageArrived:"+message.payloadString);
		displayLog("\n o " + new Date().toLocaleString() + " - Fall Detected \n");
	}
	
/*    $('#logs').on('click', function(e){
        displayLog("\n o " + new Date().toLocaleString() + " - Fall Detected \n");
    });*/

});

