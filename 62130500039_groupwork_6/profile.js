const constraints = {
    username:{
        presence: true,
    },
    email:{
        presence: true,
        email: true
    },
    firstname:{
        presence: true,
    },
    lastname:{
        presence: true,
    },
    age:{
        presence: true,
        numericality: {
            lessThan: 150
        }
    }
}

const app = {
    data() {
        return {
            name: 'Thanyaluck Ngamchaipisit',
            id: '@thanyaN',
            posts: '1039 posts',
            followers: '42.9k followers',
            following: '930 following',
            formdata:{
                username: null,
                firstname: null,
                lastname: null,
                email: null,
                age: null,
            },
            errors: null
        }
    },
    methods:{
        checkForm(){
            this.errors = validate(this.formdata,constraints)
            if(!this.errors){
                alert("Submit successfully")
            }
        }
    }
}

var mountedApp = Vue.createApp(app).mount('#app')