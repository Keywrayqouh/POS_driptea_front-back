<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Add Product</div>
                    <div class="card-body">
                        <div v-if="success !== null" class="alert alert-success" role="alert">
                          {{success}}
                        </div>
                        <form @submit="formSubmit" enctype="multipart/form-data" @retrieveData="edit">
                            <center>
                                <div class="form-group">
                                    <label for="pname" style="font-size: 15px; font-weight: bold">Product name:</label>
                                    <input type="text" class="form-control productName" v-model="productName" required>
                                </div>
                                <div class="form-group">
                                    <label for="pname" style="font-size: 15px; font-weight: bold">Product description:</label>
                                    <input type="text" class="form-control" v-model="productDescription" required>
                                </div>
                                <div class="form-group">
                                    <label for="pname" style="font-size: 15px; font-weight: bold">Base price: (Php)</label>
                                    <input type="number" min="0" class="form-control price" v-model="price" required>
                                </div>
                                <!-- <label>Product image:</label> -->
                                <img :src="imageURL"><br>
                                <input type="file" class="fileStyle" v-on:change="onImageChange" required><br>
                                <button class="btn btn-success">Add Product</button>
                            </center>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
img{
    width: 250px; 
    height: 250px;
    margin-top: 2%;
}
.fileStyle{
    width: 97px;
    margin-top: 3%;
    margin-bottom: 3%;
}
.card-header{
    font-weight: bold;
    font-size: 25px;
    text-align: center;
}
.card{
    margin-top: 5%;
    margin-bottom: 5%;
}
.form-control{
    display: inline;
    margin-top: 2%;
    width: 300px;
}
.productName{
    margin-left: 6%;
}
.price{
    margin-left: 4%;
}
form{
    margin-top: 3%;
}
</style>

 
<script>
import AUTH from '../../../services/auth'
import ROUTER from '../../../router'
export default {
    data() {
        return {
            data: [],
            productName: '',
            image: '',
            imageURL: null,
            price: null,
            productDescription: '',
            output: null,
            success: null
        }
    },
    mounted(){

    },
    methods: {
        edit(param){
            this.imageURL = param.image
            this.productName = param.productName
            this.price = param.price
            this.productDescription = param.productDescription
        },
        onImageChange(e){
            this.image = e.target.files[0]
            // this.image = URL.createObjectURL(e.target.files[0])
            this.imageURL = URL.createObjectURL(e.target.files[0])
        },
        formSubmit(e) {
            e.preventDefault();
            let currentObj = this;

            const config = {
                headers: { 'content-type': 'multipart/form-data' }
            }

            let formData = new FormData();
            formData.append('image', this.image)
            // formData.append('imageURL', this.imageURL)
            formData.append('productName', this.productName)
            formData.append('price', this.price)
            formData.append('productDescription', this.productDescription)

            axios.post('/formSubmit', formData, config)
            .then(function (response) {
                currentObj.success = response.data.success
                setTimeout(() => ROUTER.push('/userDashboard').catch(()=>{}), 1000);
                // this.retrieve()
            })
            .catch(function (error) {
                currentObj.output = error;
            });
        }
    }
}
</script>
