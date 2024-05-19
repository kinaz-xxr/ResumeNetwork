import { useEffect, useState } from "react";
import './Comment.css'; // Import the CSS file

export default function UploadPage() {
    return (
        <div className="upload-page">
            <div className="pdf-viewer">
                {/* PDF display component */}
                <embed src="path/to/your/pdf.pdf" type="application/pdf" width="100%" height="100%"/>
            </div>
            <div className="comment-section">
                <h2>Comments</h2>
                {/* Add your comment section implementation here */}
                <div className="comments">
                    {/* Example comment */}
                    <p>This is a comment.</p>
                </div>
            </div>
        </div>
    );
}