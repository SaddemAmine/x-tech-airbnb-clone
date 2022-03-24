import { NavLink } from 'react-router-dom'

const links = [
    { name: 'For You', to: 'fyp'},
    { name: 'Homes', to: 'homes'},
    { name: 'Experiences', to: 'xps'},
    { name: 'Places', to: 'places'}
]

const Navbar = props => (
    <nav>
        <div className='w-100 p-4 flex items-center'>
            <NavLink to="/"><img src="airbnb.svg" alt="App logo" className={"block h-8 w-8"} /></NavLink>
            <div className={"px-4 w-full h-11 flex justify-between items-center"}>
                <div className="h-11 shadow-sm rounded-sm">
                    <input 
                        className="h-11 px-2 border-solid border-gray-200 border-t-2 border-l-2 border-b-2 rounded-l-sm focus:ring-gray-500" 
                        type="text"
                        value="Anywhere" 
                    />
                    <input 
                        className="h-11 px-2 border-solid border-gray-200 border-2 focus:ring-gray-500" 
                        type="text" 
                        value="Anytime"
                    />
                    <input 
                        className="h-11 px-2 border-solid border-gray-200 border-t-2 border-r-2 border-b-2 rounded-r-sm focus:ring-gray-500" 
                        type="text" 
                        value="1 guest"
                    />
                </div>
            
                <div className={'w-1/4 flex justify-around'}>
                    <NavLink to="/host">Become a host</NavLink>
                    <NavLink to="/help">Help</NavLink>
                    <NavLink to="/signup">Sign Up</NavLink>
                    <NavLink to="/login">Log In</NavLink>
                </div>
            </div>
        </div>

        <div className='w-full px-4 h-12 border-solid border-b-2 border-gray-200 shadow-sm'>
            {links.map((link, index) => (
                <NavLink 
                    className={navData => `mr-4 inline-flex h-full items-center uppercase border-red-700 ${navData.isActive && 'border-b-2 text-red-700'}`} 
                    to={link.to}
                    key={index}
                >
                    {link.name}
                </NavLink>
                )
            )}
        </div>
    </nav>
)

export default Navbar;