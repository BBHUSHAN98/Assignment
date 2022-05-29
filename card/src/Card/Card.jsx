
import Date from './Components/Date';
import Heading from './Components/Heading';
import Sub from './Components/Sub';
import Device from './Components/Device';

const Card = ({date,title1,title2,title3,title4}) =>{
    return (
        <div>
            <div className="logo-box">
                <Date date={date}/>
                <div className="logo">
                <i className="fab fa-amazon"></i>
                </div>
            </div>
            <Heading title={title1}/>
            <Sub title={title2}/>
            <Sub title={title3}/>
            <div className="logo-box">
                <Device title={title4}/>
                <div className="logo1"><i class="fas fa-arrow-right"></i></div>
            </div>
        </div>
    )
} 

export default Card;