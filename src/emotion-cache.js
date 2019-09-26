import createCache from '@emotion/cache'

const myCache = createCache({
  key: 'test-prefix',
  stylisPlugins: [
    /* your plugins here */
  ],
  // prefix based on the css property
  prefix: key => {
    switch (key) {
      case 'flex':
        return false
      case 'transform':
      default:
        return true
    }
  }
})

export default myCache
