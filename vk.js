(function () {
    'use strict';

    function startPlugin() {
        if (window.vk_plugin_loaded) return;
        window.vk_plugin_loaded = true;

        Lampa.Plugin.add({
            type: 'video',
            name: 'VK Video Search',
            version: '1.0.1',
            description: 'Поиск через ВКонтакте',
            author: 'Dmitry'
        });

        Lampa.Listener.follow('full', function (e) {
            if (e.type == 'complite') {
                var btn = $('<div class="full-start__button selector view--torrent" style="background-color: #2787F5;"><span>ВК Видео</span></div>');
                
                btn.on('hover:enter', function () {
                    Lampa.Noty.show('ВК работает, ищем: ' + e.data.title);
                });
                
                e.object.activity.render().find('.info__buttons').append(btn);
            }
        });
    }

    if (window.appready) {
        startPlugin();
    } else {
        Lampa.Listener.follow('app', function (e) {
            if (e.type == 'ready') startPlugin();
        });
    }
})();
