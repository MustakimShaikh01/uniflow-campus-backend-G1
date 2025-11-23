const messages = [
  { id: 1, from: "BE001", to: "mentor-1", text: "Hello sir, I have a doubt." },
];

export const getMessages = (req, res) => {
  res.json(messages);
};

export const sendMessage = (req, res) => {
  const { from, to, text } = req.body;
  const newMessage = {
    id: messages.length + 1,
    from,
    to,
    text,
  };
  messages.push(newMessage);
  res.status(201).json(newMessage);
};
