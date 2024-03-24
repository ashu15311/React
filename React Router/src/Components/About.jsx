import React from 'react'
import { Link,Outlet} from "react-router-dom";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus beatae rem vitae laudantium sint at similique eos, asperiores necessitatibus. Nostrum harum hic rem iste ipsum optio quam eius beatae dicta similique! Minima, dolore repellat? Itaque quod numquam illo provident reiciendis beatae, ratione dolore officiis autem consequuntur incidunt unde iste ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam doloremque fugiat ullam eum provident nihil perspiciatis necessitatibus, est molestiae ipsam dolorum itaque. Alias veniam, omnis sit tempore optio expedita quasi soluta minima. Alias vitae deleniti corporis laudantium exercitationem eum eveniet nulla delectus sit quas, id, impedit, similique ratione magni tenetur. </p>
            <nav>
                <Link to="ankit">Ankit</Link>
                <Link to="mahendra">Mahendra</Link>
            </nav>
            <Outlet />

        </div>
    )
}

export default About;