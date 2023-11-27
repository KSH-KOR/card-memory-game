import React from 'react';

const TeamSidebar = ({ teams, currTeamIdx }) => {

    return (
        <aside className="team-sidebar">
            <h2 className="team-sidebar-header">Teams</h2>
            <ul className="team-sidebar-list">
                {teams.map(team => (
                    <li
                        key={team.id}
                        className={`team-sidebar-item ${team.id === currTeamIdx ? 'active' : ''}`}
                    >
                        <span className="team-name">{team.name}</span>
                        <span className="team-score">Score: {team.score}</span>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default TeamSidebar;
