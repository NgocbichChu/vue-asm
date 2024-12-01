<template>
    <div class="container mt-3" v-if="user">
        <!-- Profile Section -->
        <div class="row mb-4">
            <!-- Profile Image -->
            <div class="col-md-3 text-center mb-3 mb-md-0">
                <img src="https://i.pravatar.cc/150" alt="Profile" class="rounded-circle img-fluid"
                    style="width: 150px; height: 150px; object-fit: cover;">
            </div>
            <!-- Profile Info -->
            <div class="col-md-9">
                <div class="d-flex flex-column flex-md-row align-items-start align-items-md-center mb-3">
                    <h2 class="me-3 mb-2 mb-md-0">{{ user.userName }}</h2>
                    <button class="btn btn-outline-light me-2 mb-2 mb-md-0">Chỉnh sửa trang cá nhân</button>
                    <button class="btn btn-outline-light mb-2 mb-md-0">Xem kho lưu trữ</button>
                </div>

                <!-- Stats -->
                <div class="d-flex mb-3">
                    <span class="me-4"><strong>0</strong> bài viết</span>
                    <span class="me-4"><strong>96</strong> người theo dõi</span>
                    <span><strong>48</strong> người dùng</span>
                </div>

                <!-- Bio -->
                <div>
                    <p class="fw-bold mb-0">{{ user.fullName }}</p>
                    <!-- <p class="text-secondary">{{ user.full }}</p> -->
                </div>
            </div>
        </div>

        <!-- Story Highlights -->
        <div class="row mb-4 flex-nowrap overflow-auto">
            <div class="col-3 col-md-2 col-lg-1 text-center" v-for="i in 2" :key="i">
                <div class="rounded-circle border border-2 border-secondary mb-1 mx-auto"
                    style="width: 66px; height: 66px;">
                    <img :src="`https://i.pravatar.cc/66?img=${i}`" alt="Story highlight"
                        class="rounded-circle w-100 h-100" style="object-fit: cover;">
                </div>
                <span class="small">Story {{ i }}</span>
            </div>
            <div class="col-3 col-md-2 col-lg-1 text-center">
                <div class="rounded-circle border border-2 border-secondary mb-1 mx-auto d-flex align-items-center justify-content-center"
                    style="width: 66px; height: 66px;">
                    <span class="material-symbols-outlined text-secondary">add</span>
                </div>
                <span class="small">Mới</span>
            </div>
        </div>

        <!-- Tabs -->
        <ul class="nav nav-tabs justify-content-center border-0 mb-4">
            <li class="nav-item">
                <a class="nav-link active bg-transparent text-white border-0 border-top border-white" href="#">
                    <span class="material-symbols-outlined">grid_on</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link bg-transparent text-secondary border-0" href="#">
                    <span class="material-symbols-outlined">bookmark</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link bg-transparent text-secondary border-0" href="#">
                    <span class="material-symbols-outlined">person</span>
                </a>
            </li>
        </ul>
        <!-- Share Photo Section -->
        <div class="text-center py-5">
            <div class="rounded-circle border border-2 border-secondary d-flex align-items-center justify-content-center mx-auto mb-4"
                style="width: 80px; height: 80px;">
                <span class="material-symbols-outlined" style="font-size: 40px;">photo_camera</span>
            </div>
            <h3 class="fw-bold mb-2">Chia sẻ ảnh</h3>
            <p class="text-secondary">Khi bạn chia sẻ ảnh, ảnh sẽ xuất hiện trên trang cá nhân</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const user = ref(null);

onMounted(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    user.value = currentUser;
});
</script>
<style scoped>
.container {
    background-color: #000;
    margin-left: 30rem;
}

span,
p,
h2 {
    color: #f5f5f5;
}
</style>
