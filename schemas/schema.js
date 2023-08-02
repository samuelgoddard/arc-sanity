import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Singletons
import singletonHome from './singletonHome'
import singletonStudio from './singletonStudio'
import singletonProcess from './singletonProcess'
import singletonContact from './singletonContact'
import singletonPrivacy from './singletonPrivacy'

// Documents
// import work from './work'

// Common
import seo from './common/seo'
import defaultImage from './common/defaultImage'

export default createSchema({
  name: 'default',
  
  types: schemaTypes.concat([
    singletonHome,
    singletonProcess,
    singletonStudio,
    singletonContact,
    singletonPrivacy,
    // work,
    defaultImage,
    seo
  ]),
})
