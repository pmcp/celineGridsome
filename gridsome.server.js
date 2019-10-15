const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async actions => {
    const { data } = await axios.post(process.env.COCKPIT_API_URL +
      'collections/get/projects',
      JSON.stringify({
        token: process.env.COCKPIT_API_TOKEN,
        // filter: { published: true, slug: params.slug },
        sort: { _created: -1 },

      }),
      {
        headers: { 'Content-Type': 'application/json' }
      })
    
    const collection = actions.addCollection({
      typeName: 'Projects'
    })
    for (const item of data.entries) {
      console.log(item) 
      collection.addNode(item)
    }
  })

  api.loadSource(async actions => {
    const { data } = await axios.post('http://celinedscms.friendlyinter.net/api/collections/get/Categories', 
      {
        token: process.env.COCKPIT_API_TOKEN,
        populate:1,
        // filter: { published: true },
        sort: { _created: -1 },
      },
      {
        headers: { 'Content-Type': 'application/json' }
      })

    const collection = actions.addCollection({
      typeName: 'Categories'
    })
    
    for (const item of data.entries) {
      collection.addNode(item)
    }
  })

  
}