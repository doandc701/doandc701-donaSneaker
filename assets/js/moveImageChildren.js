$(()=>{
    $('.thumbnail').click(function(){
        // lấy đường dẫn của ảnh click
        let imgPath= $(this).attr('src')
        // gọi đến ảnh chính và thay đổi ảnh khi click
        $('#imgproduceParent').attr('src', imgPath)
    })
})
