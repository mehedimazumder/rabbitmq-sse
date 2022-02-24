var amqp = require("amqplib/callback_api");
var { notifications } = require("../app");

amqp.connect("amqp://guest:guest@[::1]:5672", function (error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function (error1, channel) {
    if (error1) {
      throw error1;
    }

    /**
     * Default
     * Sending to queue
     */
    // var queue = "send_noti";

    // channel.assertQueue(queue, {
    //   durable: false,
    // });
    // channel.prefetch(1);
    // console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
    // channel.consume(
    //   queue,
    //   function (msg) {
    //     console.log(" [x] Received %s", msg.content.toString());
    //     setTimeout(function () {
    //       console.log(" [x] Done");
    //       channel.ack(msg);
    //     }, 10000);
    //   },
    //   {
    //     // manual acknowledgment mode,
    //     // see ../confirms.html for details
    //     noAck: false,
    //   }
    // );

    var exchange = "notices";

    channel.assertExchange(exchange, "fanout", {
      durable: false,
    });

    channel.assertQueue(
      "",
      {
        exclusive: true,
      },
      function (err2, q) {
        if (err2) {
          throw err2;
        }

        console.log(
          " [*] Waiting for messages in %s. To exit press CTRL+C",
          q.queue
        );
        channel.bindQueue(q.queue, exchange, "");

        channel.consume(
          q.queue,
          function (msg) {
            if (msg.content) {
              console.log(" [x] %s", msg.content.toString());
            }
          },
          {
            noAck: true,
          }
        );
      }
    );
  });
});
