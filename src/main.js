import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faHouse} from '@fortawesome/free-solid-svg-icons'
import { faCalendar} from '@fortawesome/free-regular-svg-icons'
import { faGear} from '@fortawesome/free-solid-svg-icons'
import { faFaceLaughWink} from '@fortawesome/free-regular-svg-icons/faFaceLaughWink'

/* add icons to the library */
library.add(faUserSecret, faHouse, faCalendar, faGear, faFaceLaughWink)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(store).use(router)
    .mount('#app')
