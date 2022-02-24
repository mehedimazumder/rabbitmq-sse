module.exports = () => {
  const amqp = require("amqplib/callback_api");
  const CONN_URL = "amqp://guest:guest@[::1]:5672";

  let ch = null;

  amqp.connect(CONN_URL, function (err, conn) {
    conn.createChannel(function (err, channel) {
      ch = channel;
    });
  });

  process.on("exit", (code) => {
    ch.close();
    console.log(`Closing rabbitmq channel`);
  });

  /**
   * Default exchange
   * Sent to queue
   */
  // return async (queueName, data) => {
  //   await ch.assertQueue(queueName, { durable: false });
  //   console.log("sending");
  //   ch.sendToQueue(queueName, Buffer.from(data), { persistent: true });
  // };

  /**
   * Fanout
   */
  const exchange = "notices";
  return async (queueName, data) => {
    ch.assertExchange(exchange, "fanout", {
      durable: false,
    });
    await ch.assertQueue(queueName, { durable: false });
    console.log("sending");
    ch.publish(exchange, "", Buffer.from(data));
  };
};
