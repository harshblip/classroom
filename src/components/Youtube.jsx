import React from "react";
import PropTypes from "prop-types";

const Youtube = ({ embedId }) => (
    <div className="video-responsive absolute">
        <iframe
            width="160"
            height="115"
            src="https://www.youtube.com/embed/8OgcHAv6Jvk?si=gFPMmyq3fbvzXcmj"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
        </iframe>
    </div>
);

Youtube.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default Youtube;