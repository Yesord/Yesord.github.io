

const ap = new APlayer({
    container: document.getElementById('aplayer'), // 容器元素
    mini: false, // mini模式 
    fixed: true, // 吸底模式
    autoplay: false, // 自动播放
    theme: '#FF0000', // 主题色
    loop: 'all', // 音频循环播放, 可选值: 'all', 'one', 'none'
    order: 'random', // 音频循环顺序, 可选值: 'list', 'random'
    preload: 'auto',
    volume: 0.7, // 默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    mutex: true, // 互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    listFolded: true, // 列表默认折叠
    listMaxHeight: 60, // 列表最大高度
    lrcType: 3, // 歌词传递方式
    audio: [ // 音频信息,包含以下
        {
            name: 'One Last Kiss',
            artist: '宇多田ヒカル',
            url:  '/dist/Music/OneLastKiss.mp3',
            cover: '/dist/Cover/宇多田ヒカル - One Last Kiss.jpg',
            theme: '#FF6E7F' ,//切换到此音频时的主题色，比上面的 theme 优先级高
            lrc: '/dist/lrc/translation/宇多田ヒカル - One Last Kiss.lrc',
        },
        {
            name: 'Lemon',
            artist: '米津玄師',
            url: '/dist/Music/Lemon.mp3',
            cover: '/dist/Cover/米津玄師 - Lemon.jpg',
            theme: '#FF6E7F' ,//切换到此音频时的主题色，比上面的 theme 优先级高
            lrc: '/dist/lrc/translation/米津玄師 - Lemon.lrc',
        },
        {
            name: '悪魔の子',
            artist: 'ヒグチアイ',
            url: '/dist/Music/悪魔の子.mp3',
            cover: '/dist/Cover/ヒグチアイ - 悪魔の子.jpg',
            theme: '#FF6E7F' ,//切换到此音频时的主题色，比上面的 theme 优先级高
            lrc: '/dist/lrc/translation/ヒグチアイ - 悪魔の子 .lrc',
        },
        {
            name: '残酷な天使のテーゼ',
            artist: '高橋洋子',
            url: '/dist/Music/残酷天使的行动纲领.mp3',
            cover: '/dist/Cover/高橋洋子 - 残酷な天使のテーゼ.jpg',
            theme: '#FF6E7F' ,//切换到此音频时的主题色，比上面的 theme 优先级高
            lrc: '/dist/lrc/translation/高橋洋子 - 残酷な天使のテーゼ.lrc',
        },
        {
            name: '消えてしまいそうです ',
            artist: 'ずっと真夜中でいいのに。',
            url: '/dist/Music/消えてしまいそうです.mp3',
            cover: '/dist/Cover/ずっと真夜中でいいのに。 - 消えてしまいそうです.jpg',
            theme: '#FF6E7F' ,//切换到此音频时的主题色，比上面的 theme 优先级高
            lrc: '/dist/lrc/translation/ずっと真夜中でいいのに。 - 消えてしまいそうです .lrc',
        },
        {
            name: 'すずめ feat.十明',
            artist: 'RADWIMPS,十明',
            url: '/dist/Music/すずめ feat.十明.mp3',
            cover: '/dist/Cover/RADWIMPS,十明 - すずめ feat.十明.jpg',
            theme: '#FF6E7F' ,//切换到此音频时的主题色，比上面的 theme 优先级高
            lrc: '/dist/lrc/translation/RADWIMPS,十明 - すずめ feat.十明.lrc',
        },
        {
            name: '丑八怪',
            artist: '薛之谦',
            url: '/dist/Music/丑八怪.mp3',
            cover: '/dist/Cover/薛之谦 - 丑八怪.jpg',
            theme: '#FF6E7F' ,//切换到此音频时的主题色，比上面的 theme 优先级高
            lrc: '/dist/lrc/origin/薛之谦 - 丑八怪.lrc',
        },
        {
            name: '天外来物',
            artist: '薛之谦',
            url: '/dist/Music/天外来物.mp3',
            cover: '/dist/Cover/薛之谦 - 天外来物.jpg',
            theme: '#FF6E7F' ,//切换到此音频时的主题色，比上面的 theme 优先级高
            lrc: '/dist/lrc/origin/薛之谦 - 天外来物.lrc',
        },
        {
            name: '我好像在哪见过你',
            artist: '薛之谦',
            url: '/dist/Music/我好像在哪见过你.mp3',
            cover: '/dist/Cover/薛之谦 - 我好像在哪见过你.jpg',
            theme: '#FF6E7F' ,//切换到此音频时的主题色，比上面的 theme 优先级高
            lrc: '/dist/lrc/origin/薛之谦 - 我好像在哪见过你.lrc',
        },
        {
            name: 'One Last Message',
            artist: 'Evan Call',
            url: '/dist/Music/Evan Call - One Last Message.mp3',
            cover: '/dist/Cover/PianoPrinceOfAnime - One Last Message (From _Violet Evergarden_).jpg',
            theme: '#FF6E7F' ,//切换到此音频时的主题色，比上面的 theme 优先级高
            lrc: '',
        },
        {
            name: 'The Voice in My Heart',
            artist: 'Evan Call',
            url: '/dist/Music/Evan Call - The Voice in My Heart.mp3',
            cover: '/dist/Cover/PianoPrinceOfAnime - One Last Message (From _Violet Evergarden_).jpg',
            theme: '#FF6E7F' ,//切换到此音频时的主题色，比上面的 theme 优先级高
            lrc: '',
        },
        {
            name: '城南花已开',
            artist: 'Unknown',
            url: '/dist/Music/城南花已开.mp3',
            cover: '/dist/Cover/PianoPrinceOfAnime - One Last Message (From _Violet Evergarden_).jpg',
            theme: '#FF6E7F' ,//切换到此音频时的主题色，比上面的 theme 优先级高
            lrc: '',
        },
        /*{
            name: '打上花火',
            artist: '米津玄師,DAOKO',
            url: 'DAOKO (ダヲコ) _ 米津玄師 (よねづ けんし) - 打上花火.flac',
            cover: '/dist/Cover/RADWIMPS,十明 - すずめ feat.十明.jpg',
            theme: '#FF6E7F' ,//切换到此音频时的主题色，比上面的 theme 优先级高
            lrc: '',
        },*/ 
        
    ]
});



