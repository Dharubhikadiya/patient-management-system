import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation to access location state
import NavbarAP from './NavbarAP';

const AllUploadFiles = () => {
    const location = useLocation(); // Get the location object
    const { uploadedFiles } = location.state || { uploadedFiles: [] }; // Destructure uploadedFiles from state

    console.log("Received Uploaded Files:", uploadedFiles); // Debugging line

    return (
        <div className="flex h-screen ">
            <div className="flex-grow bg-gray-100 overflow-auto">
                <div className="sticky top-0 z-10">
                    <NavbarAP />
                </div>
                <div className="gap-3 mt-6 px-6 mb-6 overflow-auto">
                    {uploadedFiles.length > 0 ? (
                        uploadedFiles.map((fileObj, index) => (
                            <div key={index} className="file-item mb-4">
                                <img src={URL.createObjectURL(fileObj.file)} alt={`Uploaded ${index}`} className="w-80 h-24" />
                                <p>{fileObj.description}</p> {/* Display description */}
                            </div>
                        ))
                    ) : (
                        <p>No files uploaded.</p> // Message when no files are uploaded
                    )}
                </div>
            </div>
        </div>
    );
}

export default AllUploadFiles;