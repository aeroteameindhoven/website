import React from "react";
import "../components/styles/stats.scss";

interface StatsSectionProps {
  title: string;
  stats: { label: string; value: string }[];
}

const StatsSection: React.FC<StatsSectionProps> = ({ title, stats }) => {
  return (
    <div className="stats-section" data-aos="fade-up" data-aos-duration="2000">
      <h2>{title}</h2>
      {stats.map((stat, index) => (
        <div key={index} className="stat">
          {stat.label}: {stat.value}
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
