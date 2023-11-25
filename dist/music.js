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
            cover: 'https://s2.loli.net/2023/11/25/Sd9Aqs6O8uhYCj2.jpg',
            theme: '#ebd0c2' ,//切换到此音频时的主题色，比上面的 theme 优先级高
        },
        {
            name: 'Lemon',
            artist: '米津玄师',
            url: 'https://cccimg.com/view.php/ac10dd5f17a986917a6f83112652350f.mp3',
            cover: 'https://s2.loli.net/2023/11/25/v9dUAaYXLRTh2S5.jpg',
            theme: '#FF0000' ,//切换到此音频时的主题色，比上面的 theme 优先级高
        },
        {
            name: '丑八怪',
            artist: '薛之谦',
            url: 'https://cccimg.com/view.php/9c2115b1eab784f4cf91f5b31cf60a3e.mp3',
            cover: 'https://s2.loli.net/2023/11/25/aTqCXzuVSwF3efG.png',
            theme: '#FF0000' ,//切换到此音频时的主题色，比上面的 theme 优先级高
        },
        {
            name: '天外来物',
            artist: '薛之谦',
            url: 'https://cccimg.com/view.php/3f8fe113124e8a2bf463451aadb5883e.mp3',
            cover: 'https://s2.loli.net/2023/11/25/Z8aFpnd37fTUmoj.jpg',
            theme: '#FF0000' ,//切换到此音频时的主题色，比上面的 theme 优先级高
        },
        {
            name: '我好像在哪见过你',
            artist: '薛之谦',
            url: 'https://cccimg.com/view.php/ac32419bf476bc269ecf635c61931aae.mp3',
            cover: 'https://s2.loli.net/2023/11/25/Uv8YPuwaZzcpl71.jpg',
            theme: '#FF0000' ,//切换到此音频时的主题色，比上面的 theme 优先级高
        },
    ]
});