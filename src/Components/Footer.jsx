import { NavLink } from 'react-router-dom'

const Footer = props => (
    <footer className="text-center lg:text-left border-2">
    <div className="container p-6">
        <div className="lg:grid-cols-12 md:grid-cols-2 flex justify-evenly">
        <div className="mb-6">
            <h5 className="mb-2.5 text-gray-800">Airbnb</h5>

            <ul className="list-none mb-0">
            <li>
                <NavLink to="" className="text-gray-800">About us</NavLink>
            </li>
            <li>
                <NavLink to="" className="text-gray-800">Careers</NavLink>
            </li>
            <li>
                <NavLink to="" className="text-gray-800">Press</NavLink>
            </li>
            <li>
                <NavLink to="" className="text-gray-800">Policies</NavLink>
            </li>
            <li>
                <NavLink to="" className="text-gray-800">Help</NavLink>
            </li>
            <li>
                <NavLink to="" className="text-gray-800">Diversity & Belonging</NavLink>
            </li>
            </ul>
        </div>

        <div className="mb-6">
            <h5 className="mb-2.5 text-gray-800">Discover</h5>

            <ul className="list-none mb-0">
            <li>
                <NavLink to="" className="text-gray-800">Trust & Safety</NavLink>
            </li>
            <li>
                <NavLink to="" className="text-gray-800">Travel Credit</NavLink>
            </li>
            <li>
                <NavLink to="" className="text-gray-800">Gift Cards</NavLink>
            </li>
            <li>
                <NavLink to="" className="text-gray-800">Airbnb Citizen</NavLink>
            </li>
            <li>
                <NavLink to="" className="text-gray-800">Airbnb Citizen</NavLink>
            </li>
            <li>
                <NavLink to="" className="text-gray-800">Guidebooks</NavLink>
            </li>
            <li>
                <NavLink to="" className="text-gray-800">Airbnbmag</NavLink>
            </li>
            </ul>
        </div>

        <div className="mb-6">
            <h5 className="mb-2.5 text-gray-800">Hosting</h5>

            <ul className="list-none mb-0">
            <li>
                <NavLink to="" className="text-gray-800">Why Host</NavLink>
            </li>
            <li>
                <NavLink to="" className="text-gray-800">Hospitality</NavLink>
            </li>
            <li>
                <NavLink to="" className="text-gray-800">Responsible Hosting</NavLink>
            </li>
            <li>
                <NavLink to="" className="text-gray-800">Community Center</NavLink>
            </li>
            </ul>
        </div>

        </div>
    </div>

    <div className='w-full px-60'>
        <div className="text-gray-700 p-4 border-t-2 flex justify-between">
            <div className="flex items-center">
                <img src="airbnb.svg" alt="App logo" className={"block h-4 w-4"} />
                <p className="ml-4">Airbnb, Inc.</p>
            </div>

            <div className='flex justify-evenly w-1/4'>
                <NavLink to="">Terms</NavLink>
                <NavLink to="">Privacy</NavLink>
                <NavLink to="">Site Map</NavLink>
            </div>
        </div>
    </div>
    </footer>
)

export default Footer