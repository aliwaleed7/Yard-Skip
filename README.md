# Skip Hire Page Redesign – Task Submission

This project is a **redesigned version** of a skip hire selection page as part of a frontend task for a full-stack developer position.

The goal of the task was to completely redesign the provided page while maintaining its functionality, improving UI/UX, and ensuring responsiveness across both desktop and mobile devices.

---

## ✨ Features

- ⚛️ Built with **React** and **Vite**
- 🎨 Styled using **Tailwind CSS** and **shadcn/ui**
- 📱 Fully **responsive design** across devices
- 🧩 Reusable and clean components
- 🖼️ Interactive skip cards with image, size, and pricing
- 📦 Visual indicator for skips **not allowed on the road**
- ✅ “Select” → “Selected” toggle with bottom detail bar on selection

---

## 📁 Folder Structure



---

## 🛠️ Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- TypeScript

---

## 🧪 How to Run Locally

1. **Clone the repository**

```bash
git clone https://github.com/your-username/skip-hire-redesign.git
cd skip-hire-redesign


 src/
├── components/
│ ├── SkipCard.tsx # Reusable skip card component
│ ├── SelectedBar.tsx # Bottom bar that appears on selection
│ └── ui/ # shadcn/ui components
├── data/
│ └── skips.ts # Sample skip data (can be replaced with API)
├── App.tsx # Main page rendering layout
└── index.tsx