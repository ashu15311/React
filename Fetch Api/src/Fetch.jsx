import React, { useEffect, useState } from 'react'

function Fetch() {
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001")
            .then((resonse) => {
                resonse.json()
                    .then((result) => {
                        setPost(result);
                    })
            })
    })
    return (
        <div>
            {
                post.map(pst => {
                    return (
                        <><ul>
                            <li>id:{pst.id}</li>
                            <li>firstName:{pst.firstName}</li>
                            <li>lastName:{pst.lastName}</li>
                            <li>age:{pst.age}</li>
                        </ul>

                        </>
                    )
                })
            }


        </div>
    )
}

export default Fetch