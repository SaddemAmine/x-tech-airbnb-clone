import Product from '../Components/Product'
import axios from 'axios'

const product = {
    "name": "Marsa's Rooftop",
    "address": "Site archéologique de Carthage, Tunis, Tunisia",
    "description": "Nice apartment with a large private terrace overlooking the magnificent Essada park. In the heart of La Marsa and close to all amenities (a laundry just opposite), the accommodation is 7 minutes walk from the La Marsa train station, the Zéphyr shopping center and the beach, 15 minutes from the village of Sidi Bou said and a 20 minute taxi ride from the airport.\nIt is an independent accommodation, S + 1 well equipped: \n- kitchen with hob \n- microwave  \n- coffee maker\n- WIFI connection\n- Television\n",
    "images": [
      {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "5LMFN9geBIM2S038P9pV33"
        }
      },
      {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "7KXUDBYwliiof3kCgkT716"
        }
      },
      {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "3bVlD28Z8trrZVFAMzlhhJ"
        }
      },
      {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "3DNCsxTZUwBRrOMFj1KqO3"
        }
      },
      {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "2fhcPhe0qTCws9nA9aeo7l"
        }
      },
      {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "cKZyKYfmp1lhf0i3Xxo4L"
        }
      }
    ],
    "wifi": true,
    "kitchen": true,
    "washer": true,
    "tv": true,
    "ac": true,
    "parking": true,
    "rating": 4
}

const ForYou = props => {
    const data = axios
        .get('https://cdn.contentful.com/spaces/kov6s1nto0kt/environments/master/entries/3zijqEoehi4uHjp5L9MBaG?access_token=kfBx7GA2w1O6cZU9nXu8eD9Xlu5exUBTzCYJra1438g')
        .then(res => console.log(res.data))
        .catch(err => console.error(err))

    return (
        <div className="w-full px-56 py-20">
            <div>
                <h1 className="text-2xl my-4">Just Booked</h1>
                <div className="w-full flex justify-between">
                    <Product product={product} />
                    <Product product={product} />
                    <Product product={product} />
                    <Product product={product} />
                    <Product product={product} />
                </div>
            </div>
            <div>
                <h1 className="text-2xl my-4">Just Booked</h1>
                <div className="w-full flex justify-between">
                    <Product product={product} />
                    <Product product={product} />
                    <Product product={product} />
                    <Product product={product} />
                    <Product product={product} />
                </div>
            </div>
            <div>
                <h1 className="text-2xl my-4">Just Booked</h1>
                <div className="w-full flex justify-between">
                    <Product product={product} />
                    <Product product={product} />
                    <Product product={product} />
                    <Product product={product} />
                    <Product product={product} />
                </div>
            </div>
        </div>
    )
}

export default ForYou   