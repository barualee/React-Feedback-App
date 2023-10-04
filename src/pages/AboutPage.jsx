import Card from "../Components/shared/Card"
import {Link} from 'react-router-dom'

function Aboutpage() {
  return <Card>
    <div className="about">
        <h1>About the Project</h1>
        <p>This project to leave feedback.</p>
        <p>Version: 1.0.0</p>
        <p>
            <Link to='/'>Back to Home</Link>
        </p>
    </div>
  </Card>
}

export default Aboutpage
