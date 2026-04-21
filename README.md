# 3D Personal Portfolio

A modern, responsive, and interactive 3D personal portfolio built using React, Three.js, and Tailwind CSS. This project showcases professional skills, learning milestones, projects, and certificates with a futuristic and clean UI.

## Features

- **Interactive 3D Elements**: Incorporates 3D models (Computers, Planets, Stars) using Three.js and React Three Fiber.
- **Dynamic Content**: Sections for "About," "Learning Milestones," "Projects," and "Certificates" are driven by a centralized data configuration.
- **Modern UI/UX**: Built with Tailwind CSS for styling and Framer Motion for smooth animations.
- **Certificates Section**: A dedicated space to showcase professional certifications with direct links and company logos.
- **Responsive Design**: Fully optimized for both desktop and mobile devices.
- **Contact Form**: Integrated contact section with email functionality.

## Tech Stack

- **Frontend**: React.js, Vite
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons & Assets**: Custom SVG/PNG assets

## Project Structure

- `src/assets`: Contains all images, icons, and 3D textures.
- `src/components`: Reusable React components (Navbar, Hero, About, Experience, Tech, Works, Certificates, Contact, etc.).
- `src/components/canvas`: Three.js canvas components for 3D models.
- `src/constants`: Centralized data (navigation links, services, technologies, experiences, projects, and certificates).
- `src/hoc`: Higher-Order Components for layout and animation wrappers.
- `src/styles.js`: Global Tailwind CSS style constants.

## 🏁 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

To start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

To create a production-ready build:
```bash
npm run build
```

## 📄 License

This project is licensed under the MIT License.
