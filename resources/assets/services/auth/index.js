import axios from 'axios'
import ROUTER from '../../router'
export default {
    url: 'http://localhost:8000/',
    currentPath: false,
    productName: '',
    productPrice: null,
    imageSelected: null,
    token: null,
    user: {
        userId: null,
        username: null,
        userType: null
    },
    authenticate(username, password, id=null, name=null, userType=null){
        let credentials = {
          name: username,
          password: password
        }
        axios.post(this.url+'login', credentials).then(response => {
            this.token = response.data.token
            localStorage.setItem('userToken', response.data.token)
            this.setUser(id, name, userType)
            axios.get(this.url+'user', {}).then(res => {
                ROUTER.push('/userDashboard')
            })
        })
    },
    setUser(userId, username, userType) {
        this.user.userId = userId * 1
        this.user.username = username
        this.user.userType = userType
        localStorage.setItem('userId', this.user.userId)
    },
    logout() {}
}