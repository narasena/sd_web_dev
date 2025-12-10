 const newHeading = "Sudah berubah, coy!"
    function headerChange () {
        document.getElementById("header1").innerHTML = newHeading
        document.getElementById("test").innerHTML = `<div id="target">Berhasil di click</div>`
    }

    const data = [
        {
            imgUrl: "https://cdn.britannica.com/41/156441-050-A4424AEC/Grizzly-bear-Jasper-National-Park-Canada-Alberta.jpg",
            date: "2025-05-17",
            viewCount: 10000
        },
        {
            imgUrl: "https://windows10spotlight.com/wp-content/uploads/2022/09/576707aed548be7493e4c2b10119b63b.jpg",
            date: "2025-04-08",
            viewCount: 7850
        },
        {
            imgUrl: "https://th.bing.com/th/id/OIP.X0ocWhsrvKPxtPIlH6Ib0gHaEK?w=334&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
            date: "2025-03-21",
            viewCount: 16142
        },
    ]
    const gallery = document.getElementById('gallery')
    if(gallery){
        gallery.innerHTML = data.map((item,index) => {
            return `<div class="gallery-item">
                <img src="${item.imgUrl}" alt="item"/>
                <div class="gallery-item-separator"></div>
                <div class="gallery-item-desc">
                    <span>${item.date}</span>
                    <span>${item.viewCount} views</span>
                </div>
            </div>`
        }).join("")
    }