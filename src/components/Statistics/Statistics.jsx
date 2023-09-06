import React from 'react';

export const Statistics = ({ title = 'Default value', stats = [] }) => {
  return (
    <div>
      <section className="statistics">
        <div className="stats-container">
          {title && <h2 className="title">Upload stats</h2>}
          <ul className="stat-list">
            {stats.map(stat => (
              <li className="item" key={stat.id}>
                <span className="label-stats">{stat.label}</span>
                <span className="percentage">{stat.percentage}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};
