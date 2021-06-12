var app = new Vue({
    el: "#app",
    data: {
        message: '초기 메세지!',
        list: ['사과', '바나나', '딸기'],
        show: true
    },
    methods: {
        handleClick: function(event){
            alert(event.target)
        }
    }
})