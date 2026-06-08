# Alexandria Library Management System

A full-stack learning project developed with Next.js, Tailwind CSS, and MongoDB. This project features a public-facing library website and a secure, separated admin panel to manage user inquiries.

## 🚀 Technologies Used
* **Frontend:** Next.js (App Router), React, Tailwind CSS, Lucide Icons
* **Backend:** Next.js API Routes (Serverless)
* **Database:** MongoDB Atlas & Mongoose
* **Authentication:** Secure HTTP-only cookies

## 📋 Features

### Public Website
* Responsive, modern UI featuring 5 curated pages (Home, About, Books, Services, Contact).
* Dynamic Contact Form with validation.
* Connected to MongoDB via Next.js API routes for data submission.

### Admin Panel
* Fully separated layout architecture using Next.js Route Groups.
* Secure login authentication.
* Admin Dashboard displaying total inquiries.
* Data Table to view all submitted contact forms.
* Ability to view full message details in a modal.
* Ability to permanently delete messages from the database.

## 🛠️ Installation & Setup

1. Clone the repository
   ```bash
   git clone <your-github-repo-link>
   cd library-management-system

2.  Install dependencies
    
    npm install

3. Set up Environment Variables
  
   Create a .env.local file in the root directory and add your MongoDB connection string:
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/libraryDB?retryWrites=true&w=majority

4. Run the development server

   npm run dev


Open http://localhost:3000 to view the website.
Open http://localhost:3000/admin to view the Admin Portal.
(admin@alexandria.edu , admin123)
