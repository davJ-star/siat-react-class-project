import React, { useEffect, useState } from 'react';

const ForcastList = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // TODO: Replace with your actual API endpoint
        fetch('/api/forecast')
            .then((res) => res.json())
            .then((result) => {
                setData(result);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h2>Forecast List</h2>
            <ul>
                {data.map((item, idx) => (
                    <li key={idx}>{JSON.stringify(item)}</li>
                ))}
            </ul>
        </div>
    );
};

export default ForcastList;