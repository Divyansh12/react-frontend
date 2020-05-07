import React from 'react';
import './Loading.css';

function Loading(){
    return (
        <div className="Loading_body">
            <img width="20%" src={require("../../assets/ld.gif")} alt="loading"/>
        </div>
    );
}

export default Loading;