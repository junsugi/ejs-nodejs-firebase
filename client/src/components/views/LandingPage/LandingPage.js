import React, {useEffect} from 'react';
import axios from 'axios';

function LandingPage() {
    // 페이지 들어오자 마자 실행
    useEffect(() => {
        axios.get('/api/hello').then(response => console.log(response.data));
    }, []);

    return (
        <div>
            LandingPage
        </div>
    )
}

export default LandingPage
