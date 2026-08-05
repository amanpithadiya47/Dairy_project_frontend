import React from 'react'

export default function ApiCall() {


    React.useEffect(() => {
        const res = fetch('/api/teacher', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        res.then((res) => res.json()).then((data) => {

            // Here You Received Your Data in a Data variable Now YOu need to Print that Data in the Table Format 
            // {
            //     "_id": "69501b7c342b202b1985a50d",
            //     "staffId": "SF00124",
            //     "role": "teacher",
            //     "name": "Farhan",
            //     "fatherName": "",
            //     "email": "farhanhoti@gmail.com",
            //     "gender": "male",
            //     "dateOfBirth": "01-12-2025",
            //     "dateOfJoining": "01-12-2025",
            //     "phone": "9632587410",
            //     "address": "",
            //     "qualification": "",
            //     "workExperience": "",
            //     "note": "",
            //     "panNumber": "",
            //     "createdAt": "2025-12-27T17:46:36.082Z",
            //     "updatedAt": "2025-12-27T17:46:36.082Z",
            //     "__v": 0
            // }   
            console.log(data);
        });
    }, [])


    return (
        <div>ApiCall</div>
    )
}
