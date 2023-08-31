// import "./brendcard.scss"

// const BrendCard = ({ img }) => {
//     return (
//         <>
//         {/* bu yrda brandlarni kartochkalarini bitta obshiy strukturasi va stili yozilgan va brands da export qilingan*/}
//             <div className="brend-card">
//                 <img src={img} alt="brend" />
//             </div>
//         </>
//     );
// };
// export default BrendCard;

import Rceact from 'react'
import "./brendcard.css"

function BrendCard() {
  return (
    <>
        {/* bu yrda brandlarni kartochkalarini bitta obshiy strukturasi va stili yozilgan va brands da export qilingan*/}
             <div className="brend-card">
                 <img src={img} alt="brend" />
             </div>
         </>
  )
}

export default BrendCard