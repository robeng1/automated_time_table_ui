import React from "react";

const Lecturers = React.lazy(() => import("./views/Base/Lecturers/Lecturers"));
const Colleges = React.lazy(() => import("./views/Base/Colleges/Colleges"));
const Examinations = React.lazy(() =>
  import("./views/Base/Examinations/Examinations")
);

const Lectures = React.lazy(() => import("./views/Base/Lectures/Lectures"));
const Rooms = React.lazy(() => import("./views/Base/Rooms/Rooms"));
const Dashboard = React.lazy(() => import("./views/Dashboard"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/base", exact: true, name: "Base", component: Lecturers },
  { path: "/base/lecturers", name: "Lecturers", component: Lecturers },
  { path: "/base/Lectures", name: "Lectures", component: Lectures },
  { path: "/base/Rooms", name: "Rooms", component: Rooms },
  { path: "/base/Colleges", name: "Carousel", component: Colleges },
  { path: "/base/examinations", name: "Examinations", component: Examinations }
];

export default routes;
