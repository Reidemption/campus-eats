
var app = new Vue({
    el: '#app',
    data: {
        page:"user",
        name:"",
        new_author:"",
        new_description:"",
        new_category:"all",
        filter_category:"all",
        current_post_thread:{},
        current_reply_thread:{},
        new_post_name:"",
        new_post_body:"",
        threads: [],
        server_url: "http://localhost:7777",
        search_string: "",
        posts: []
    },
    created:function(){
        this.getThreads(this.setThreads);
    },
    methods:{
        setThreads:function(data){
            this.threads = data
        },
        setCurrentReply:function(data){
            this.current_reply_thread = data
        },
        setCurrentPost: function(data){
            this.current_post_thread = data
        },
        getThreads:function(callback, id=""){
            fetch(this.server_url + '/thread/' + id).then(function(response) {
                response.json().then(function(data){
                    callback(data)
                });
            });
        },
        createThread:function(){
            my_data={
                name: this.new_name,
                author: this.new_author,
                description: this.new_description,
                category: this.new_category,
                posts:[]
            }
            fetch(this.server_url + '/thread', {
                method: "POST",
                body: JSON.stringify(my_data),
                headers: {
                    "Content-Type": "application/json"
                }
                //options for fetch
                }).then(function(){
                    app.getThreads(app.setThreads);
                });
                this.new_name="";
                this.new_author="";
                this.new_description="";    
                this.category="all";
        },
        myDelete:function(url){
            fetch(this.server_url + url, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
                //options for fetch
                }).then(function(){
                    app.getThreads(app.setThreads);
                    app.getThreads(app.setCurrentPost, app.current_post_thread._id);
            });
        },
        changeToPosts:function(thread){
            if (this.current_post_thread._id == thread._id){
                this.current_post_thread = []
            }
            else{
                this.getThreads(this.setCurrentPost, thread._id)
            }
        },
        reply:function(thread){
            if (this.current_reply_thread._id == thread._id){
                this.current_reply_thread = []
            }
            else{
                this.getThreads(this.setCurrentReply, thread._id)
            }
        },
        createPost:function(){
            let my_data = {
                thread_id: this.current_reply_thread._id,
                author: this.new_post_name,
                body: this.new_post_body
            }
            fetch(this.server_url + '/post', {
                method: "POST",
                body: JSON.stringify(my_data),
                headers: {
                    "Content-Type": "application/json"
                }
                //options for fetch
                }).then(function(){
                    app.getThreads(app.setThreads);
                    app.getThreads(app.setCurrentPost, app.current_post_thread._id)
            });
            this.current_reply_thread = {}
            this.new_post_name = ""
            this.new_post_body = ""
        },
    },
    //computed
    computed:{
        sorted_threads:function(){
            if(this.filter_category == "all"){
                return this.threads
            }
            else{
                let filter_category = this.filter_category
                return this.threads.filter(function(thread){
                    return thread.category == filter_category
                })
            }
        },

        filtered: function(){
            var search_string = this.search_string;

            fetch(this.server_url + '/posts', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "hashtag": this.search_string
                }
                //options for fetch
                }).then(function(response){
                    response.json().then(data=>{
                        app.posts=data
                    })
                });

            search_string = search_string.trim().toLowerCase();

            app.posts = app.posts.filter(function(item){
                if( item.body.toLowerCase().includes(search_string)){
                    return item.body.toLowerCase()
                }
            
            })
            return app.posts
        }
        
    }
});
