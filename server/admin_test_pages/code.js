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
        },
        server_url: "http://localhost:7777"
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
        getUserById:function(callback,id){
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
                profile_pic:"",
                location:"",
                session:"",
                logged_in:false,
                last_loggin_time:Date.now,
                isActive:false,
                user_info:{
                    dnumber:this.dnumber,
                    role:this.role,
                    firstname: this.firstname,
                    lastname: this.lastname,
                    contacts:{
                        phone:this.phone,
                        email:this.email,
                        address:this.address
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
        deleteUser:function(id){
            console.log("delete button clicked with id :"+ id)
            fetch(this.server_url + '/users/'+id, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
                //options for fetch
                }).then(function(){
                    clearForm();
            });
        },
        editUser:function(id){
            user_data={
                email: this.email,
                hashed_password: this.hashed_password,
                profile_pic:this.profile_pic,
                location:this.location,
                isActive:this.isActive,
                user_info:{            
                    role:this.role,
                    firstname: this.firstname,
                    lastname: this.lastname,
                    contacts:{
                        address:this.address,
                        phone:this.phone,
                        email:this.email
                    }
                }
            },
            fetch(this.server_url + '/users/'+id, {
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
        showUserInfo:function(){
            this.showDetail =!this.showDetail
            return this.showDetail
        }
    }
});
