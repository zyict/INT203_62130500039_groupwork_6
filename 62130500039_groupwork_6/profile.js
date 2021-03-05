const constraints = {
    username: {
        presence: true,
    },
    email: {
        presence: true,
        email: true
    },
    firstname: {
        presence: true,
    },
    lastname: {
        presence: true,
    },
    gender: {
        presence: true,
    },
    age: {
        presence: true,
        numericality: {
            lessThan: 150
        }
    },
    department:{
        presence: true
    }
}

const app = Vue.createApp( {
    data() {
        return {
            name: 'Thanyaluck Ngamchaipisit',
            id: '@thanyaN',
            posts: '1039 posts',
            followers: '42.9k followers',
            following: '930 following',
            formdata: {
                username: null,
                firstname: null,
                lastname: null,
                email: null,
                gender: null,
                age: null,
                department: null
            },
            departmentList: [{department_id: 1, department_name: 'IT'},
                        {department_id: 2, department_name: 'CS'},
                        {department_id: 3, department_name: 'DSI'}
            ],
            errors: null,
            submit: false
        }
    },
    methods: {
        checkForm() {
            this.errors = validate(this.formdata, constraints)
            if (!this.errors) {
                this.name = this.formdata.firstname + ' ' + this.formdata.lastname
                this.id = '@' + this.formdata.username
                this.submit = true
                alert("Your profile is updated successfully.")
            }
        }
    }
})

app.component('display-error',{
    props:{
        errors:{
            type: Object,
            required: true
        },
        field:{
            type:Object,
            required: true
        }
    },
    template:
    /*html*/
    `
    <div v-if="errors && errorList">
        <p v-for="error in errorList" class="text-red-500"> {{ error }}</p>
    </div>
    `,
    computed:{
        errorList(){
            return this.errors[this.field]
        }
    }
})

app.mount('#app')