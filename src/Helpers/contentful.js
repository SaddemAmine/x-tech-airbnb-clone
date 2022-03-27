const contentful = require('contentful')

const client = contentful.createClient({
    space: 'kov6s1nto0kt',
    accessToken: 'kfBx7GA2w1O6cZU9nXu8eD9Xlu5exUBTzCYJra1438g'
})

const getEntries = () => client.getEntries().then(res => res.items).catch(err => console.error(err))

const getEntry = id => client.getEntry(id).then(res => res).catch(err => console.error(err))

const getAsset = id => client.getAsset(id).then(res => res).catch(err => console.error(err))

export {getAsset, getEntry, getEntries}