import { socialIcons } from '../constants';

export const Card = ({ img, title, user, content }) => (
   <div className="card">
      <div className="card-img">
         <img src={img} alt="image description" />
      </div>
      <div className="card-info">
         <div className="user">
            <div className="user-img">
               <img src={user} alt={title} />
            </div>
            <div className="user-info">
               <h2>{title}</h2>
               <ul>
                  {socialIcons.map((curVal, index) => (
                     <li key={index}>
                        <a href={curVal.link}>
                           <img src={curVal.icon} />
                        </a>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </div>
   </div>
);
