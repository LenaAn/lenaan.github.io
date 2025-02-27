import { useState } from 'react';

function Score({ score }) {
    return (
        <div id="score" className="scoreBox">
            {score}
        </div>
    )
}

export default Score