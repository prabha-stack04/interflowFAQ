<div align="center">

# InternFlow

### AI-Powered Internship Management Platform

InternFlow AI is an internship management platform designed to simplify communication, learning, and collaboration between interns and mentors. The platform provides role-based dashboards, announcements, FAQs, analytics, AI assistance, and support tools to enhance the internship experience.

---

### 🛠️ Built With

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Express.js](https://img.shields.io/badge/Express.js-Backend-green?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb)
![OpenAI](https://img.shields.io/badge/OpenAI-AI_Assistant-blue)

</div>

---

# 🎯 Project Objective

This contribution enhances the existing **InternFlow** platform by introducing features that improve intern engagement, reduce repetitive mentor support, and provide a more interactive and user-friendly experience.

The implementation is modular, allowing individual features to be reviewed and integrated into the main platform independently.

---

# ✨ Implemented Features

## 🤖 AI Assistant

**Location:** `/dashboard/intern/ai-assistant`

An AI-powered chatbot that provides instant assistance to interns.

### Features

- Answers internship-related questions
- Provides platform guidance
- Assists with general learning queries
- Improves self-service support for interns
- Includes a fallback response system when no OpenAI API key is configured

---

## 📢 Announcements

A centralized announcement system that allows important internship updates to be shared with all interns.

### Features

- Displays important notices
- Keeps interns informed about updates
- Reduces dependency on external communication

---

## ❓ FAQ & Question Management

A structured question-and-answer system for knowledge sharing.

### Features

- Submit questions
- Manage answers
- Browse existing FAQs
- Reduce repetitive mentor queries

---

## 📊 Dashboard & Analytics

Role-based dashboard designed to organize internship resources and provide an overview of platform activity.

### Features

- Clean dashboard interface
- Organized navigation
- Foundation for analytics and reporting

---

## 💬 Feedback Module

**Location:** Sidebar → Feedback

A dedicated feedback form that allows interns to share their experience using the platform.

### Features

- User-friendly feedback interface
- Rating-based feedback questions
- Collect usability feedback
- Suggestions for future improvements
- Helps administrators understand user experience

---

## 🆘 Help & Support

**Location:** Sidebar → Help

Provides a dedicated support section where interns can quickly access assistance regarding the platform.

### Features

- Easy access to support
- Platform guidance
- Help resources for common issues
- Improves accessibility for new users

---

# 🌟 Highlights of This Contribution

- 🤖 AI-powered Assistant with intelligent responses
- 🔄 Fallback AI support when API is unavailable
- 💬 Feedback module for collecting intern experience
- 🆘 Dedicated Help & Support section
- 📢 Announcement management
- ❓ Structured FAQ & Question Management
- 📊 Improved dashboard experience

These features are designed to improve usability, encourage intern engagement, and reduce repetitive support requests while remaining easy to integrate into the existing InternFlow platform.

---

# 🏗️ Project Structure

```text
internflow-ai/
│
├── src/                     # Existing Next.js Application
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env.example
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── styles.css
│
└── README.md
```

---

# ⚙️ Backend Setup

```bash
cd backend
npm install
cp .env.example .env
```

Update the `.env` file:

```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_api_key
```

Start the backend server:

```bash
npm run dev
```

---

# 💻 Frontend Setup

## Next.js Application

```bash
npm install
npm run dev
```

## React + Vite Frontend

```bash
cd frontend
npm install
npm run dev
```

---

# 🔌 Available API Endpoints

## Authentication

```http
POST /api/auth/register
POST /api/auth/login
```

## Questions

```http
GET    /api/questions
POST   /api/questions
PUT    /api/questions/:id
DELETE /api/questions/:id
```

## Answers

```http
GET    /api/answers
POST   /api/answers
PUT    /api/answers/:id
DELETE /api/answers/:id
```

---

# 🧪 Feature Testing

### AI Assistant

1. Navigate to:

```
/dashboard/intern/ai-assistant
```

2. Ask any internship-related question.

3. If an OpenAI API key is configured, AI-generated responses will be displayed.

4. If no API key is configured, the assistant will return a fallback response.

---

### Feedback Module

Navigate to:

```
Sidebar → Feedback
```

- Submit ratings and feedback.
- Verify successful form submission.

---

### Help & Support

Navigate to:

```
Sidebar → Help
```

- Access support information.
- Verify Help section opens correctly.

---

### FAQ Module

- Create questions
- View question details
- Add answers
- Verify CRUD operations

---

# 💡 Integration Value

The implemented features provide several improvements to the InternFlow platform:

- Enhances intern self-service through AI assistance.
- Provides a structured feedback mechanism for continuous platform improvement.
- Offers a dedicated Help section to reduce user confusion.
- Improves communication through announcements.
- Reduces repetitive mentor support using FAQs and AI assistance.
- Uses a modular architecture, allowing features to be integrated independently without impacting existing functionality.

---

# 📌 Summary

This contribution focuses on improving the overall internship experience by introducing AI-assisted support, structured feedback collection, an accessible help system, and enhanced communication features. Each module has been designed with maintainability and scalability in mind, making it suitable for integration into the existing InternFlow platform.
