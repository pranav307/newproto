


import {
  Code,
  Cpu,
  Wrench,
  Database,
  Monitor,
  Server,
  LayoutDashboard,
} from "lucide-react";

function Skills() {
  const skills = [
    { name: "Frontend (React, HTML, CSS, JS)", icon: <Monitor /> },
    { name: "Backend (Node.js, Express,django)", icon: <Server /> },
    { name: "Database (MongoDB, SQL)", icon: <Database /> },
    { name: "Version Control (Git, GitHub)", icon: <Code /> },
    { name: "Problem Solving", icon: <Cpu /> },
    { name: "Debugging & Tools", icon: <Wrench /> },
    { name: "UI Design (Figma, Tailwind)", icon: <LayoutDashboard /> },
  ];

  return (
    <div className="py-12 px-6 sm:px-20  text-white min-h-screen">
      <h2 className="text-4xl font-bold mb-10 text-center">My Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white/20 backdrop-blur-md p-4 rounded-xl border border-white hover:shadow-xl transition"
          >
            <div className="text-green-400">{skill.icon}</div>
            <div className="text-lg font-medium">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
