import { useState } from 'react'
import { useEffect } from 'react'
import Product from '../Components/Product'
import { getEntries } from '../Helpers/contentful'

const ForYou = props => {
    const [countries, setCountries] = useState([])
    const [homes, setHomes] = useState([])
    const [experiences, setExperiences] = useState([])
    const [places, setPlaces] = useState([])

    useEffect(() => {
      (async () => {
        let items = await getEntries()
        let newHomes = []
        let newCountries = []
        let newExperiences = []
        let newPlaces = []
        
        items.forEach(item => {
          if(item.sys.contentType.sys.id === 'home')
            newHomes.push(item)
          else
            if(item.sys.contentType.sys.id === 'country')
              newCountries.push(item)
            else
              if(item.sys.contentType.sys.id === 'experience')
                newExperiences.push(item)
              else
                newPlaces.push(item)
        })

        setCountries(newCountries)
        setHomes(newHomes)
        setExperiences(newExperiences)
        setPlaces(newPlaces)
      })()
    }, [])

    return (
        <div className="w-full px-56 py-20">
            <div>
                <h1 className="text-2xl my-4">Just Booked</h1>
                <div className="w-full flex justify-between">
                    {homes.map((item, index) => <Product key={index} product={item.fields} isHome />)}
                </div>
            </div>

            <div className='mt-20'>
                <h1 className="text-2xl my-4">Featured Destination</h1>
                <div className="w-full flex justify-between">
                    {countries.map((item, index) => <Product key={index} product={item.fields} isCountry />)}
                </div>
            </div>

            <div className='mt-20'>
                <h1 className="text-2xl my-4">Experience</h1>
                <div className="w-full flex justify-between">
                    {experiences.map((item, index) => <Product key={index} product={item.fields} isExperience />)}
                </div>
            </div>

            <div className='mt-20'>
                <h1 className="text-2xl my-4">Places in London</h1>
                <div className="w-full flex justify-between">
                    {places.map((item, index) => <Product key={index} product={item.fields} isPlace />)}
                </div>
            </div>
        </div>
    )
}

export default ForYou   