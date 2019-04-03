<template>
     <!-- canvas 实现图片涂鸦 保存 -->
    <div id='imgScope'>
        <canvas id="test-stock" width="600" height="400" ref='cvs'>
            <p>Current Price: 25.51</p>
        </canvas>
        


    </div>
</template>
<script>
 
export default {
    data(){
        return{

        }
    },
    created(){
        this.canvasScope();

    },
    methods:{
        // canvas 是否支持当前浏览器
        canvasScope(){
            console.log(2322)
            console.log(this.$refs.cvs)
            let cvs = document.getElementById('test-stock')
            console.log(cvs)
            // if (cvs.getContext) {
            //     console.log('你的浏览器支持Canvas!');
            // } else {
            //     console.log('你的浏览器不支持Canvas!');
            // }


        }
    }
    
}
</script>
<style lang="scss" scope>
#imgScope{
    #test-stock{
        background-color: #ccc;
        margin: 0 auto;
    }
    
    

}


</style>


