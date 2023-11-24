const ap = new APlayer({
    container: document.getElementById('aplayer'), // 容器元素
    mini: false, // mini模式 
    fixed: true, // 吸底模式
    autoplay: false, // 自动播放
    theme: '#FADFA3', // 主题色
    loop: 'all', // 音频循环播放, 可选值: 'all', 'one', 'none'
    volume: 0.7, // 默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    mutex: true, // 互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    listFolded: true, // 列表默认折叠
    listMaxHeight: 60, // 列表最大高度
    //lrcType: 3, // 歌词传递方式
    audio: [ // 音频信息,包含以下
        {
            name: 'One Last Kiss',
            artist: '宇多田ヒカル',
            url:  'https://cccimg.com/view.php/1edf91bfbc64b30508dde1bbbc116311.mp3',
            cover: 'cover1.jpg',
            theme: '#ebd0c2' ,//切换到此音频时的主题色，比上面的 theme 优先级高
        },
        {
            name: 'Lemon',
            artist: '米津玄师',
            url: 'https://cccimg.com/view.php/ac10dd5f17a986917a6f83112652350f.mp3',
            cover: 'cover2.jpg',
            theme: '#ebd0c2' ,//切换到此音频时的主题色，比上面的 theme 优先级高
        }
    ]
});