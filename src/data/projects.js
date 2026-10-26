import olympicImage from "../assets/olympic-dashboard.png";
export const projects = [
  {
    title: "Olympic Games Exploratory Data Analysis Dashboard",
    description: "Interactive Data Analytics & Visualization Platform",
    stack: ["Python", "pandas", "NumPy", "Plotly", "Streamlit"],
    github: "https://github.com/eyad-amir/olympic-history-dashboard",
    image: olympicImage,
    imageAlt:
      "Illustrative Olympic dashboard preview with metric cards and a participation chart",
    featured: true,
    count: 270000,
    story: [
      {
        label: "Situation",
        text: "Approximately 270,000 historical Olympic records needed cleaning and transformation before meaningful exploration.",
      },
      {
        label: "Task",
        text: "Create an interactive dashboard to explore Olympic participation and performance across athletes, countries and events.",
      },
      {
        label: "Action",
        text: "Cleaned and preprocessed the data, imputed missing values using grouped medians by sex, sport and event, handled duplicates and team-event deduplication, then transformed the data and performed EDA.",
      },
      {
        label: "Result",
        text: "Built an interactive analytics platform processing 270,000+ historical records, with cached data preprocessing, automated missing-data imputation, and cross-country historical analysis.",
      },
    ],
  },
  {
    title: "Learning Management System",
    description:
      "Java Swing learning platform with student/instructor roles, course and lesson management, enrollment, progress tracking, and JSON persistence using Gson.",
    stack: ["Java", "Swing", "Gson", "JSON"],
    github: null,
    image: null,
    featured: false,
    icon: "book",
  },
  {
    title: "Sudoku Desktop Application",
    description:
      "Java Swing Sudoku app with separate model, view and controller components, board validation, difficulty-based puzzle generation, and file persistence.",
    stack: ["Java", "Swing", "MVC"],
    github: null,
    image: null,
    featured: false,
    icon: "grid",
  },
  // { title: 'Your next project', description: 'What it solves and your contribution.', stack: ['Python'], github: 'https://github.com/you/repo', image: null, featured: false, icon: 'grid' },
];
