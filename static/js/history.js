// 轮播图
// filmArr 图片数组
// imgWidth 图片宽度
// aniTime 动画切换时间
// intervalTime 停留的时间
// scale 图片缩放
// autoplay 是否自动播放
// gap 图片之间间隔

class mainboard {
    constructor(obj) {
        this.filmArr = obj.filmArr || [];
        this.scale = obj.scale || 0.8;
        this.gap = obj.gap;

        this.containerWidth = 98;
        this.imgHight = obj.imgHight;
        this.imgWidth = obj.imgWidth;
        this.aniTime = obj.aniTime || 500;
        this.intervalTime = this.aniTime + obj.intervalTime || 2000;
        this.nowIndex = 3;
        this.imgDoms = document.getElementsByClassName(
            "mainboard-slide" + obj.clsSuffix
        );
        this.mainDom = document.getElementsByClassName(
            "mainboard-main" + obj.clsSuffix
        )[0];
        this.listDoms = document.getElementsByClassName(
            "mainboard-list" + obj.clsSuffix
        )[0];
        this.activeDom = this.imgDoms[0];
        this.autoplay = obj.autoplay;

        this.listDoms.style.width = `${this.containerWidth}vw`;
        this.timer;
        this.prev = Date.now();

        this.diffLen = (this.containerWidth - this.imgWidth - this.gap * 2) / 2;
        this.clsSuffix = obj.clsSuffix;
    }

    init() {
        this.eventBind();

        let resfilmArr;
        if (this.filmArr.length > 2) {
            resfilmArr = [
                this.filmArr[this.filmArr.length - 2],
                this.filmArr[this.filmArr.length - 1],
                ...this.filmArr,
                this.filmArr[0],
                this.filmArr[1],
            ];
            this.mainDom.style.left = `${-(
                2 * this.imgWidth +
                this.gap -
                this.diffLen
            )}vw`;
            this.mainDom.style.width = `${(this.filmArr.length + 2) * (this.imgWidth + this.gap / 2)}vw`;
        } else {
            this.nowIndex = 0;
            resfilmArr = [...this.filmArr];
        }
        let str = "";
        resfilmArr.forEach((item, index) => {
            str += `<a href="${resfilmArr[index].url}"><img style="top: 120px; width:320px; height:320px; border-radius:50%;overflow:hidden;" class="mainboard-slide${this.clsSuffix}" style="width: ${this.imgWidth}vw;" src="${resfilmArr[index].imgPath}" /></a>`;
        });
        this.mainDom.innerHTML = str;
        this.setScale();
        if (this.autoplay) {
            this.timer = setInterval(
                this.nextSlider.bind(this, this.aniTime),
                this.intervalTime
            );
        }
    }

    setScale() {
        for (let i = 0; i < this.imgDoms.length; i++) {
            if (this.filmArr.length === 2) {
                this.imgDoms[0].style.left = `${this.containerWidth / 4 - this.imgWidth / 2}vw`;
                this.imgDoms[1].style.left = `${(this.containerWidth / 4) * 3 - this.imgWidth / 2}vw`;
            } else if (this.filmArr.length === 1) {
                this.imgDoms[i].style.left = `${this.containerWidth / 2 - this.imgWidth / 2}vw`;
            } else {
                this.imgDoms[i].style.left = `${(i - 1) * (this.imgWidth + this.gap)}vw`;
            }
            if (i === this.nowIndex) {
                this.imgDoms[i].style.transform = "scale(1)";
            } else {
                this.imgDoms[i].style.transform = `scale(${this.scale})`;
            }
        }
    }

    prevSlider(aniTime) {
        if (this.filmArr.length === 2) {
            this.nowIndex = this.nowIndex ? 0 : 1;
            this.setScale();
        } else if (this.filmArr.length === 1) {
            return;
        } else {
            this.nowIndex--;
            this.mainDom.style.transition = `left ${aniTime / 1000}s`;
            this.mainDom.style.left = `${parseInt(this.mainDom.style.left) + (this.gap + this.imgWidth)}vw`;
            if (this.nowIndex === 1) {
                this.setScale();
                setTimeout(
                    function () {
                        this.nowIndex = this.filmArr.length + 1;
                        this.setScale();
                        this.mainDom.style.transitionProperty = "none";
                        this.mainDom.style.left = `${-(
                            parseInt(this.imgDoms[this.nowIndex].style.left) -
                            this.diffLen -
                            this.gap
                        )}vw`;
                    }.bind(this),
                    aniTime
                );
            } else {
                this.setScale();
            }
        }
    }

    nextSlider(aniTime) {
        if (this.filmArr.length === 2) {
            this.nowIndex = this.nowIndex ? 0 : 1;
            this.setScale();
        } else if (this.filmArr.length === 1) {
            return;
        } else {
            if (this.nowIndex >= 2) {
                this.mainDom.style.transition = `left ${aniTime / 1000}s`;
                this.mainDom.style.left = `${parseInt(this.mainDom.style.left) - (this.gap + this.imgWidth)}vw`;
            }
            if (this.nowIndex === this.filmArr.length + 1) {
                this.nowIndex = this.filmArr.length + 2;
                this.setScale();
                setTimeout(
                    function () {
                        this.nowIndex = 2;
                        this.setScale();
                        this.mainDom.style.transitionProperty = "none";
                        this.mainDom.style.left = `${-(this.imgWidth - this.diffLen)}vw`;
                    }.bind(this),
                    aniTime
                );
            } else {
                this.nowIndex++;
                this.setScale();
            }
        }
    }

    eventBind() {
        let that = this;

        document.getElementById("next" + this.clsSuffix).onmouseover = function () {
            clearInterval(that.timer);
        };
        document.getElementById("next" + this.clsSuffix).onmouseout = function () {
            that.timer = setInterval(
                that.nextSlider.bind(that, that.aniTime),
                that.intervalTime
            );
        };
        document.getElementById("next" + this.clsSuffix).onclick = function () {
            that.throttle(that.nextSlider, 300, 300);
        };

        document.getElementById("prev" + this.clsSuffix).onmouseover = function () {
            clearInterval(that.timer);
        };
        document.getElementById("prev" + this.clsSuffix).onmouseout = function () {
            that.timer = setInterval(
                that.nextSlider.bind(that, that.aniTime),
                that.intervalTime
            );
        };
        document.getElementById("prev" + this.clsSuffix).onclick = function () {
            that.throttle(that.prevSlider, 300, 300);
        };

        this.mainDom.addEventListener("touchstart", function (e) {
            clearInterval(that.timer);
            that.startX = e.changedTouches[0].clientX;
            that.startY = e.changedTouches[0].clientY;
        });
        this.mainDom.addEventListener("touchmove", function (e) {
            clearInterval(that.timer);
            that.endX = e.changedTouches[0].clientX;
            that.endY = e.changedTouches[0].clientY;
        });
        this.mainDom.addEventListener("touchend", function (e) {
            if (!that.mainDom.style.transition) {
                that.mainDom.style.transition = `left ${that.aniTime / 1000}s`;
            }
            let angle = that.angle({X: that.startX, Y: that.startY}, {X: that.endX, Y: that.endY});
            if (Math.abs(angle) > 30)
                return;
            if (that.endX > that.startX) {
                that.prevSlider(that.aniTime);
            } else {
                that.nextSlider(that.aniTime);
            }
            that.timer = setInterval(
                that.nextSlider.bind(that, that.aniTime),
                that.intervalTime
            );
        });
    }

    // 节流：时间戳版
    throttle(handle, delay, val) {
        var now = Date.now();
        if (now - this.prev >= delay) {
            handle.call(this, val);
            this.prev = Date.now();
        }
    }
}


let filmArr = [{
    url: "javascript:Video1Play()",
    imgPath: "static/image/LHWImage/1956.jpg",
},
    {
        imgPath: "./static/image/LHWImage/1958.jpg",
        url: "javascript:Video2Play()",
    },
    {
        url: "javascript:Video3Play()",
        imgPath: "static/image/LHWImage/1960.jpg",
    },
    {
        url: "javascript:Video4Play()",
        imgPath: "static/image/LHWImage/1970.jpg",
    },
    {
        url: "javascript:Video5Play()",
        imgPath: "static/image/LHWImage/1975.jpg",
    },
    {
        url: "javascript:Video6Play()",
        imgPath: "static/image/LHWImage/1981.jfif",
    },
    {
        url: "javascript:Video7Play()",
        imgPath: "static/image/LHWImage/1984.jpg",
    },
];

new mainboard({
    filmArr: filmArr,
    imgWidth: 22, //@52
    imgHight: 10,
    aniTime: 1000,
    intervalTime: 3500,
    scale: 0.8,
    autoplay: true,
    gap: 1,
    clsSuffix: "-card",
}).init();

//视频点击播放
function Video1Play() {
    $(".Video_1").show();
    Video1.play();
}

function Video2Play() {
    $(".Video_2").show();
    Video2.play();
}

function Video3Play() {
    $(".Video_3").show();
    Video3.play();
}

function Video4Play() {
    $(".Video_4").show();
    Video4.play();
}

function Video5Play() {
    $(".Video_5").show();
    Video5.play();
}

function Video6Play() {
    $(".Video_6").show();
    Video6.play();
}

function Video7Play() {
    $(".Video_7").show();
    Video7.play();
}

//隐藏视频
$(document).ready(function () {
    $(".filmClose").click(function () {
        $(".Video_1").hide();
        Video1.pause();
        $(".Video_2").hide();
        Video2.pause();
        $(".Video_3").hide();
        Video3.pause();
        $(".Video_4").hide();
        Video4.pause();
        $(".Video_5").hide();
        Video5.pause();
        $(".Video_6").hide();
        Video6.pause();
        $(".Video_7").hide();
        Video7.pause();
    });
});