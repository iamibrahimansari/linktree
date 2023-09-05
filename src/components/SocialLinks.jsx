import {Link} from 'react-router-dom';

import social from '../data/social';

const SocialLinks = () =>{
    return <div className="social-links">
        <h2>My Social Links</h2>
        <div className="links">
            {
                social.map(({id, socialLink, text, logoLink}) => {
                    return <Link key={id} to={socialLink}>
                        <img src={logoLink} alt={text} />
                        <span>{text}</span>
                    </Link>
                })
            }
        </div>
    </div>
}

export default SocialLinks;