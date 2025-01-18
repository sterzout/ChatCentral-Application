import express from "express";

const messages = express()

messages.get('/conversations', (req, res) => {
  res.send('Conversations loaded')
});
export default messages;