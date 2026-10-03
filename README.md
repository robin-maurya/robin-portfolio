# Robin Maurya — Full Stack Portfolio

A modern full-stack developer portfolio built with **Next.js, React, TypeScript, Java, Spring Boot, and MySQL**.

The project showcases my professional experience, technical skills, projects, certifications, and provides a working contact form backed by a Spring Boot REST API.

## 🚀 Tech Stack

### Frontend

* Next.js
* React.js
* TypeScript
* Tailwind CSS
* React Icons

### Backend

* Java
* Spring Boot
* Spring Data JPA
* REST APIs

### Database

* MySQL

### Tools

* Git
* GitHub
* Postman
* IntelliJ IDEA
* VS Code

## 🏗️ Project Structure

```text
robin-portfolio/
│
├── portfolio-frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── portfolio-backend/
│   ├── src/
│   ├── pom.xml
│   └── ...
│
├── .gitignore
└── README.md
```

## ✨ Features

* Responsive portfolio design
* Animated hero section
* Dynamic role/typewriter animation
* Technical skills showcase
* Professional experience section
* Projects section
* Certifications section
* Contact form
* REST API integration
* MySQL database integration
* Responsive mobile navigation
* Downloadable resume

## 🔄 Application Flow

```text
User
  │
  ▼
Next.js Frontend
  │
  │ HTTP POST
  ▼
Spring Boot REST API
  │
  ▼
Spring Data JPA
  │
  ▼
MySQL Database
```

## ⚙️ Frontend Setup

Navigate to the frontend directory:

```bash
cd portfolio-frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will run on:

```text
http://localhost:3000
```

## ⚙️ Backend Setup

Navigate to the backend directory:

```bash
cd portfolio-backend
```

Configure the MySQL database in:

```text
src/main/resources/application.properties
```

The application expects a MySQL database named:

```text
portfolio_db
```

Set the database password using the `DB_PASSWORD` environment variable.

For Git Bash:

```bash
export DB_PASSWORD='your_mysql_password'
```

Run the Spring Boot application:

```bash
./mvnw spring-boot:run
```

On Windows PowerShell:

```powershell
.\mvnw.cmd spring-boot:run
```

The backend will run on:

```text
http://localhost:8080
```

## 📡 API

### Contact

**POST**

```text
/api/contact
```

Example request:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello Robin!"
}
```

The contact information is stored in the MySQL database.

## 🗄️ Database

Database:

```text
portfolio_db
```

Main table:

```text
contacts
```

The `contacts` table is automatically created/updated by Hibernate using JPA configuration.

## 🧪 Testing

The backend API can be tested using:

* Postman
* Browser developer tools
* Frontend contact form

The frontend uses the Spring Boot API to submit contact messages.

## 📱 Responsive Design

The portfolio is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile

## 🌐 Live Demo

Coming soon.

## 📸 Screenshots

Screenshots will be added after the portfolio is deployed.

## 👨‍💻 About Me

I'm **Robin Maurya**, a Full Stack Developer with professional experience in frontend development using React.js, Next.js, TypeScript, and JavaScript.

I'm currently expanding my backend expertise with **Java, Spring Boot, REST APIs, and MySQL** to build end-to-end full-stack applications.

## 📫 Connect With Me

* LinkedIn: https://www.linkedin.com/in/robin-maurya/
* GitHub: https://github.com/robin-maurya/

## 📄 License

This project is created for personal portfolio and learning purposes.
