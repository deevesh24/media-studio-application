var i = 0;
var timer;
var imgArray = new Array();


imgArray[0] = {
    url: 'images/1.jpg',
    type: 'image'
};
imgArray[1] = {
    url: 'images/2.jpg',
    type: 'image'
}

imgArray[2] = {
    url: 'images/vid1.mp4',
    type: 'video'
};

function swapImage() {
    var x = document.getElementById('main_img_div');
    var y = document.getElementById('main_vid_div');
    var vd = document.getElementById('video_player');


    if (imgArray[i].type == 'image') {
        document.img_disp.src = imgArray[i].url;
        y.style.display = 'none';
        x.style.display = 'block';

    } else if (imgArray[i].type == 'video') {
        vd.src = imgArray[i].url;
        vd.play();
        x.style.display = 'none';
        y.style.display = 'block';
    }
    setThumb();
}

function next() {
    if (i < imgArray.length - 1) {
        i++;
    } else {
        i = 0;
    }
    swapImage();

}

function previous() {
    if (i > 0) {
        i--;
    } else {
        i = imgArray.length - 1
    }
    swapImage();

}

function play() {
    if (i < imgArray.length - 1) i++;
    else i = 0;
    swapImage();
    let duration = 2000;
    timer = setTimeout("play()", duration);
}

function pause() {
    clearTimeout(timer);
}



var loadFile = function(event) {
    var url = URL.createObjectURL(event.target.files[0]);
    let imgType = ''
    if (event.target.files[0].type.includes('image')) {
        imgType = 'image'
    } else if (event.target.files[0].type.includes('video')) {
        imgType = 'video';
    }
    let imgObj = {
        url: url,
        type: imgType
    };
    imgArray.push(imgObj);
    swapImage();
};

function setThumb() {
    document.getElementById('thumb_box').innerHTML = "";
    for (let j = 0; j < imgArray.length; j++) {
        if (imgArray[j].type == 'image') {
            if (i == j) {
                document.getElementById('thumb_box').innerHTML += '<img style="border:3px solid #A972EF" src="' + imgArray[j].url + ' "></img>'
            } else {
                document.getElementById('thumb_box').innerHTML += '<img  src="' + imgArray[j].url + '"></img>'
            }
        } else if (imgArray[j].type == 'video') {
            if (i == j) {
                document.getElementById('thumb_box').innerHTML += '<video style="border:3px solid #A972EF" src="' + imgArray[j].url + '#t=0.1 "></img>'
            } else {
                document.getElementById('thumb_box').innerHTML += '<video  src="' + imgArray[j].url + '#t=0.1"></img>'
            }
        }

    }
}

window.onload = swapImage;