// app.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://mongo:27017/docker_demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Simple schema and model
const Message = mongoose.model('Message', new mongoose.Schema({
  text: String
}));

// Routes
app.get('/', (req, res) => {
  res.send('Hello from Dockerized Node.js API!');
});

app.post('/messages', async (req, res) => {
  const message = new Message({ text: req.body.text });
  await message.save();
  res.json({ message: 'Saved!', data: message });
});

app.get('/messages', async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
