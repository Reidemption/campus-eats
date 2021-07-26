var server_url = "http://localhost:7777"
var app = new Vue({
    el: '#app',
    data: {
        pages:["admin","info","create","update"],
        page:"admin",
        selected_user:{},
        users:[],
        search_string:"",
        showDetail:false,

        email:"",
        hashed_password:"",
        profile_pic:"",
        location:"",
        session:"",
        logged_in:false,
        last_loggin_time:Date.now,
        isActive:false,
        user_info:{            
            role:"",
            dnumber:"",
            firstname: "",
            lastname: "",
            contacts:{
                address:"",
                phone:"",
                email:""
            },
            order_history:[],
            delivery_history:[],
        }
    },
    created(){
        this.getUsers(this.setUserData)
    },
    methods:{
        setUserData:function(data){
            this.users = data
        },
        setUserInfo:function(data){
            this.selected_user = data
        },
        setCurrentUser: function(data){
            this.selected_user = data
        },
        getUserById:function(callback, id=""){
            fetch(this.server_url + '/users/' + id).then(function(response) {
                response.json().then(function(data){
                    callback(data)
                });
            });
        },
        getUsers:function(callback){
            fetch(this.server_url + '/users/').then(function(response) {
                response.json().then(function(data){
                    callback(data)
                });
            });
        },
        createUser:function(){
            user_data={
                email: this.email,
                hashed_password: this.hashed_password,
                user_info:{
                    dnumber:this.dnumber,
                    firstname: this.firstname,
                    lastname: this.lastname,
                    contacts:{
                        phone:this.phone
                    }
                }
            }
            fetch(this.server_url + '/users', {
                method: "POST",
                body: JSON.stringify(user_data),
                headers: {
                    "Content-Type": "application/json"
                }
                    //options for fetch
            }).then(function(){
                    app.getUsers(app.setUserData);
                    this.email="",
                    this.hashed_password="",
                    this.profile_pic="",
                    this.location=""
            });
        },
        deleteUser:function(url){
            fetch(this.server_url + url, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
                //options for fetch
                }).then(function(){
                    clearForm();
            });
        },
        editUser:function(url){
            user_data={
                email: this.email,
                hashed_password: this.hashed_password,
                user_info:{            
                    role:"",
                    dnumber:"",
                    firstname: "",
                    lastname: "",
                    contacts:{
                        address:"",
                        phone:"",
                        email:""
                    }
                }
            },
            fetch(this.server_url + url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user_data),
                //options for fetch
                }).then(function(){
                    clearForm();
            });
        },
        clearForm: function(){
            app.getUsers(app.setUserData);
            this.email="",
            this.hashed_password="",
            this.profile_pic="",
            this.location=""
        }
    },
    //computed
    computed:{
        showUserDetailInfo:function(){
            this.showDetail =!this.showDetail
            return this.showDetail
        }
    }
});
