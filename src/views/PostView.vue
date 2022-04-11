<template>
  <div class="box-shift border border-2 border-dark text-center font-monospace bg-white py-5 mb-4">
    <h2 class="fs-5">張貼動態</h2>
  </div>
  <div class="card shadow-card-2 border border-2 border-dark">
    <div class="card-body p-8">
      <form>
        <div class="mb-4">
          <label for="content" class="form-label">貼文內容</label>
          <textarea
            class="form-control rounded-0 border-2 border-dark px-4 py-3"
            id="content"
            rows="7"
          >
今天竟然下雪哩！</textarea
          >
        </div>
        <button type="button" class="btn btn-dark rounded-1 py-1 mb-4">上傳圖片</button>
        <img src="@/assets/img/image@2x.png" alt="upload image" class="card-img mb-8" />
        <div class="invalid-feedback text-center d-block mb-4">
          圖片檔案過大，僅限 1mb 以下檔案<br />
          圖片格式錯誤，僅限 JPG、PNG 圖片
        </div>
        <div class="text-center">
          <button
            type="submit"
            class="btn btn-warning shadow-btn border border-2 border-dark"
            style="width: 60%"
          >
            送出貼文
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
