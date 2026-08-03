# 🌙 Luna

> **An AI companion that remembers.**

Luna is an AI-powered companion designed around a single, consistent personality. Instead of letting users create countless characters, Luna focuses on building one meaningful connection through natural conversations, long-term memory, and a minimal, beautiful chat experience.

---

## ✨ Features

- 💬 Natural AI conversations
- 🧠 Long-term memory (RAG)
- ⚡ Streaming responses
- 📝 Persistent chat history
- 🎭 Consistent personality
- 📱 Clean and minimal interface
- 🔍 Semantic memory retrieval
- 🔐 User authentication

---

## 🛠 Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- React Router
- TanStack Query
- Zustand

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### AI
- Google Gemini API
- Embedding Model
- MongoDB Atlas Vector Search / Pinecone

---

# 📂 Project Structure

```text
Luna/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── src/
│   │
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── repositories/
│   ├── routes/
│   ├── services/
│   │   ├── ai/
│   │   ├── memory/
│   │   ├── prompt/
│   │   └── chat/
│   │
│   ├── utils/
│   ├── validators/
│   └── app.js
│
└── README.md
```

---

# 🧠 How Memory Works

```text
User Message
      │
      ▼
Save Message
      │
      ▼
Retrieve Relevant Memories
      │
      ▼
Build Prompt
      │
      ▼
Gemini
      │
      ▼
AI Response
      │
      ▼
Memory Extractor
      │
      ▼
Store Important Memories
```

Luna remembers meaningful information instead of every message.

Example:

```text
User:
I love One Piece.

↓

Stored Memory

Preference:
User loves One Piece.
```

Later...

```text
User:
Guess what I watched today.

↓

Luna:
Another One Piece episode? 😄
```

---

# 📚 Memory Categories

- Identity
- Preferences
- Goals
- Projects
- Relationships
- Events
- Habits
- Favorites

Only important memories are stored.

---

# 🗂 Database Design

## User

```js
{
  _id,
  name,
  email,
  avatar,
  createdAt
}
```

---

## Conversation

```js
{
  _id,
  userId,
  title,
  updatedAt
}
```

---

## Message

```js
{
  _id,
  conversationId,
  role,
  content,
  createdAt
}
```

---

## Memory

```js
{
  _id,
  userId,
  content,
  category,
  importance,
  embedding,
  createdAt
}
```

---

# ⚙ API Endpoints

## Authentication

```
POST /api/auth/register
POST /api/auth/login
```

---

## Chat

```
GET  /api/chat
POST /api/chat/message
```

---

## Memory

```
GET /api/memory
```

---

## Profile

```
GET /api/profile
```

---

# 🚀 Roadmap

## Phase 1
- Authentication
- Chat UI
- Gemini Integration
- Streaming Responses
- Save Conversations

## Phase 2
- Long-term Memory (RAG)
- Semantic Search
- Better Prompting
- Conversation Titles

## Phase 3
- Voice Conversations
- Image Understanding
- Daily Check-ins
- Shared Journal
- Memory Timeline

---

# 🎯 Goal

Create an AI companion that feels like talking to the **same person every day** through:

- Consistent personality
- Long-term memory
- Natural conversations
- Minimal, distraction-free experience

---

## ❤️ Philosophy

> **"People don't return because an AI knows everything. They return because it remembers them."**

---

## 📄 License

MIT
