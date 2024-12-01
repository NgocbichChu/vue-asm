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
            <a href="#" class="mb-3 d-flex align-items-center"><span class="material-symbols-outlined me-4">
                    add
                </span> Tạo</a>
            <router-link to="/profile" class="mb-3 d-flex align-items-center"><span
                    class="material-symbols-outlined me-4">
                    person
                </span> Trang cá nhân</router-link>
            <router-link to="/" class="mb-3 d-flex align-items-center"><span
                    class="material-symbols-outlined me-4">
                    logout
                </span> Đăng xuất</router-link>
        </div>
    </div>
</template>
<script set up>

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
</style>