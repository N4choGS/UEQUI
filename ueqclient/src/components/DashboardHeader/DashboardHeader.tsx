import './DashboardHeader.scss'
import logo from '../../assets/logo.jpg'


export default function DashboardHeader() {
    return (
        <div className='dashboardHeader' >
          <img className="logoImage" src={logo}/>
          <div className='logoTitle'>Aurora Experience</div>
        </div>
    );
};
