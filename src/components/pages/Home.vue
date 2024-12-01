<template>
    <div class="main">
        <div class="row">
            <div class="col-md-8 col-lg-8 p-4">
                <!-- Post Card -->
                <div>
                    <div class="card post-card mb-4 p-3 w-50 card-item">
                        <div class="card-body">
                            <div class="d-flex align-items-center mb-3 post-header">
                                <img src="https://via.placeholder.com/40" alt="user" class="me-2">
                                <strong>ahihi</strong> <span class="ms-auto text-muted">3 ngày trước</span>
                            </div>
                            <img src="https://via.placeholder.com/600x400" class="post-image mb-3" alt="post">
                            <div class="post-footer">
                                <p><strong>qqwq.xi</strong> và những người khác đã thích</p>
                                <p><strong>nqbichh.chu_</strong> 🐾💙</p>
                                <p class="text-white-50">Xem 1 bình luận</p>
                                <input type="text" class="form-control input-comment " placeholder="Thêm bình luận...">
                            </div>
                        </div>
                    </div>
                    <div class="card post-card mb-4 p-3 w-50 card-item">
                        <div class="card-body">
                            <div class="d-flex align-items-center mb-3 post-header">
                                <img src="https://via.placeholder.com/40" alt="user" class="me-2">
                                <strong>ahihi</strong> <span class="ms-auto text-muted">3 ngày trước</span>
                            </div>
                            <img src="https://via.placeholder.com/600x400" class="post-image mb-3" alt="post">
                            <div class="post-footer">
                                <p><strong>qqwq.xi</strong> và những người khác đã thích</p>
                                <p><strong>nqbichh.chu_</strong> 🐾💙</p>
                                <p class="text-white-50">Xem 1 bình luận</p>
                                <input type="text" class="form-control input-comment " placeholder="Thêm bình luận...">
                            </div>
                        </div>
                    </div>
                    <div class="card post-card mb-4 p-3 w-50 card-item">
                        <div class="card-body">
                            <div class="d-flex align-items-center mb-3 post-header">
                                <img src="https://via.placeholder.com/40" alt="user" class="me-2">
                                <strong>ahihi</strong> <span class="ms-auto text-muted">3 ngày trước</span>
                            </div>
                            <img src="https://via.placeholder.com/600x400" class="post-image mb-3" alt="post">
                            <div class="post-footer">
                                <p><strong>qqwq.xi</strong> và những người khác đã thích</p>
                                <p><strong>nqbichh.chu_</strong> 🐾💙</p>
                                <p class="text-white-50">Xem 1 bình luận</p>
                                <input type="text" class="form-control input-comment " placeholder="Thêm bình luận...">
                            </div>
                        </div>
                    </div>
                    <div class="card post-card mb-4 p-3 w-50 card-item">
                        <div class="card-body">
                            <div class="d-flex align-items-center mb-3 post-header">
                                <img src="https://via.placeholder.com/40" alt="user" class="me-2">
                                <strong>ahihi</strong> <span class="ms-auto text-muted">3 ngày trước</span>
                            </div>
                            <img src="https://via.placeholder.com/600x400" class="post-image mb-3" alt="post">
                            <div class="post-footer">
                                <p><strong>qqwq.xi</strong> và những người khác đã thích</p>
                                <p><strong>nqbichh.chu_</strong> 🐾💙</p>
                                <p class="text-white-50">Xem 1 bình luận</p>
                                <input type="text" class="form-control input-comment " placeholder="Thêm bình luận...">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-2 col-lg-2 p-4 suggest">
                <h5 class="mb-4">Gợi ý cho bạn</h5>
                <div class="suggestions">
                    <!-- Suggestion Item -->
                    <div class="d-flex align-items-center mb-4 suggestion-item">
                        <img src="https://via.placeholder.com/40" class="rounded-circle me-3" alt="user">
                        <div>
                            <strong>aaaa</strong><br>
                            <span class="text-white-50">Có hihi theo dõi</span>
                        </div>
                        <a href="#" class="ms-auto text-primary">Theo dõi</a>
                    </div>
                    <div class="d-flex align-items-center mb-4 suggestion-item">
                        <img src="https://via.placeholder.com/40" class="rounded-circle me-3" alt="user">
                        <div>
                            <strong>aaaa</strong><br>
                            <span class="text-white-50">Có hihi theo dõi</span>
                        </div>
                        <a href="#" class="ms-auto text-primary">Theo dõi</a>
                    </div>
                    <div class="d-flex align-items-center mb-4 suggestion-item">
                        <img src="https://via.placeholder.com/40" class="rounded-circle me-3" alt="user">
                        <div>
                            <strong>aaaa</strong><br>
                            <span class="text-white-50">Có hihi theo dõi</span>
                        </div>
                        <a href="#" class="ms-auto text-primary">Theo dõi</a>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style scoped>
.main {
    background-color: #000;
}

.card-item {
    margin-left: 40rem;
}

.suggestions {
    max-height: 70vh;
    overflow-y: auto;
}

.post-image {
    width: 100%;
    border-radius: 12px;
}

.post-card {
    background-color: #0e0b0b !important;
    border: none;
    border-radius: 15px;
}


.post-footer p strong,
.suggestion-item strong,
.post-header strong {
    color: #ffffff;
    font-weight: bold;
    font-size: 1.1rem;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
}

.post-footer p {
    color: #ffffff;
    font-size: 1rem;
    font-weight: 500;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
}

.post-header img {
    border-radius: 50%;
    border: 2px solid #3a3a3a;
}

.input-comment {
    background-color: #2c2c2c;
    border: 1px solid #444;
    color: #ffffff;
    font-size: 1rem;
    border-radius: 12px;
    padding: 10px 15px;
    transition: all 0.3s ease;
}

.input-comment:focus {
    border-color: #ffffff;
    outline: none;
    background-color: #3c3c3c;
    color: #ffffff;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.input-comment::placeholder {
    color: #cccccc;
    font-style: italic;
}
.suggest{
    margin-left: 5rem;
}
.suggestion-item {
    transition: transform 0.2s ease;
}

.suggestion-item:hover {
    transform: translateY(-5px);
}
</style>