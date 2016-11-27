import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
    console.log('repos', props);
    return (
        <div className="data-list">

            {props.repos.map(repo => {

                return (
                    <div key={repo.id} className="data-list-item">
                        <div className="details">
                            {repo.name} - {repo.description}
                        </div>
                    </div>
                );

            })}

        </div>
    );
}