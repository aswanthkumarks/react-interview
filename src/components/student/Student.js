import React, { useState, useEffect } from 'react';
import { getCalculatedMark } from '../../api/api';

export const Student = ({ student, onSelect, preview }) => {
    const [updatedMark, setUpdatedMark] = useState(null);

    if (!student?.id) {
        return null;
    }

    const previewClassNames = preview ? 'preview': '';

    return (
        <div className={`student-wrapper ${previewClassNames}`}>
            {
                // Display the details of the profile
                
                preview && (<p>Total Mark: {
                    updatedMark || student.totalMark
                }</p>)
            }
        </div>
    );
}