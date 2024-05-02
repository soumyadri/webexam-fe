import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BASE_URL } from '../utils';

export const Examination = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const subject = queryParams.get('subject');
    const [questionData, setQuestionData] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchSubjectData() {
        try {
            const response = await axios.get(`${BASE_URL}/question/all/${subject}`);
            const data = response.data;
            setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          // Handle error gracefully
        }
      }

    useEffect(() => {
        if(subject) {
            fetchSubjectData();
        };
    }, [subject]);

    return (
        <div>
            Examination {subject}
        </div>
    )
};