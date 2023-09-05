import {Link} from 'react-router-dom';

import affiliate from '../data/affiliate';

const AffiliateLinks = () =>{
    return <div className="affiliated-links">
        <h2>Get 10% off on each course</h2>
        <div className="courses">
            {
                affiliate.map(({id, link, title, coupon}) => {
                    return <Link key={id} to={link}>
                        <span>{title}</span>
                        <span>Coupon code {coupon} - 10% off</span>
                    </Link>
                })
            }
        </div>
    </div>
}

export default AffiliateLinks;