<template>
    <div class="row">
        <div class="col-md-2 col-lg-2 p-4 sidebar d-flex flex-column align-items-start">
            <a class="mb-4" id="logo">Lahoho</a>
            <router-link to="/home" class="mb-3 d-flex align-items-center">
                <span class="material-symbols-outlined me-4">
                    home
                </span> Trang chủ
            </router-link>
            <a href="#" class="mb-3 d-flex align-items-center"><span class="material-symbols-outlined me-4">
                    search
                </span> Tìm kiếm</a>
            <a href="#" class="mb-3 d-flex align-items-center"><span class="material-symbols-outlined me-4">
                    logout
                </span> Khám phá</a>
            <a href="#" class="mb-3 d-flex align-items-center"><span class="material-symbols-outlined me-4">
                    explore
                </span> Reels</a>
            <a href="#" class="mb-3 d-flex align-items-center"><span class="material-symbols-outlined me-4">
                    chat
                </span> Tin nhắn</a>
            <a href="#" class="mb-3 d-flex align-items-center"><span class="material-symbols-outlined me-4">
                    favorite
                </span> Thông báo</a>
            <span type="" class="mb-3 d-flex align-items-center btnClick" data-bs-toggle="modal"
                data-bs-target="#exampleModal"><span class="material-symbols-outlined me-4">
                    add
                </span> Tạo</span>

            <!-- Modal -->

            <router-link to="/profile" class="mb-3 d-flex align-items-center">
                <span class="material-symbols-outlined me-4">person</span> Trang cá nhân</router-link>
            <span @click="logout" class="mb-3 d-flex align-items-center btnClick"><span class="material-symbols-outlined me-4">
                    logout
                </span> Đăng xuất</span>
        </div>
    </div>
    <!-- Modal -->
    <div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Tạo</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3 d-none">
                            <label for="user" class="form-label">User</label>
                            <input type="text" class="form-control" id="user" placeholder="Enter first input"
                                v-model="postInfo.user">
                        </div>
                        <div class="mb-3 d-none">
                            <label for="date" class="form-label">Date</label>
                            <input type="text" class="form-control" id="date" placeholder="Enter first input"
                                v-model="postInfo.date">
                        </div>
                        <div class="mb-3">
                            <label for="input1" class="form-label">Image Url</label>
                            <input type="text" class="form-control" id="input1" placeholder="Enter first input"
                                v-model="postInfo.image">
                        </div>
                        <div class="mb-3">
                            <label for="input2" class="form-label">Content</label>
                            <input type="text" class="form-control" id="input2" placeholder="Enter second input"
                                v-model="postInfo.content">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="savePost">Post</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { showToastSuccess } from '@/utils/toastHandle';
import Swal from 'sweetalert2';
import { reactive } from 'vue';

const postInfo = reactive({
    id: Math.floor(Math.random() * 100000000) + 1,
    user: JSON.parse(localStorage.getItem('currentUser')).userName,
    date: new Date().toLocaleDateString(),
    image: '',
    content: ''
})

const savePost = () => {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(postInfo);
    localStorage.setItem('posts', JSON.stringify(posts));

    postInfo.image = '';
    postInfo.content = '';
}

// const logout = () => {
//     localStorage.removeItem('isAuthenticated');
//     window.location.href = '/';
//     // alert('Đăng xuat thanh cong');
//     showToastSuccess('Đăng xuat thanh cong');
// }
const logout = () => {
  Swal.fire({
    title: "Bạn có muốn đăng xuất không ?",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Đăng xuất",
    cancelButtonText: "Hủy",
  }).then((result) => {
    if (result.isConfirmed) {
    //   localStorage.removeItem("fullName");
      localStorage.setItem("isAuthenticated", "false");
      window.location.href = '/';
    }
  });
};
</script>
<style scoped>
#logo {
    font-size: 30px;
}

.sidebar {
    height: 100vh;
    border-right: 1px solid #2c2c2c;
    position: fixed;
    background: #000;
}

.sidebar a {
    color: #f5f5f5;
    text-decoration: none;
    padding: 10px;
    border-radius: calc(.875rem - 2px);
    width: 270px;
    transition: background-color 0.3s ease;
}

.sidebar a:hover {
    background-color: #1a1a1a;
    width: 270px;
}
.btnClick{
    color: #f5f5f5;
    text-decoration: none;
    padding: 10px;
    border-radius: calc(.875rem - 2px);
    width: 270px;
    transition: background-color 0.3s ease;
}
.btnClick:hover{
    background-color: #1a1a1a;
    width: 270px;
    cursor: pointer;
}

</style>