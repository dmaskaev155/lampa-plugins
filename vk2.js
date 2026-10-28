(function () {
    'use strict';

    function startPlugin() {
        if (window.vk_plugin_loaded) return;
        window.vk_plugin_loaded = true;

        setTimeout(function() {
            Lampa.Noty.show('Плагин ВК успешно загружен!');
        }, 1000);

        Lampa.Plugin.add({
            type: 'video',
            name: 'VK Video Search',
            version: '1.0.2',
            description: 'Поиск через ВКонтакте',
            author: 'Dmitry'
        });

        Lampa.Listener.follow('full', function (e) {
            if (e.type == 'complite') {
                var btn = $('<div class="full-start__button selector view--torrent" style="background-color: #2787F5;"><span>ВК Видео</span></div>');
                
                btn.on('hover:enter', function () {
                    Lampa.Noty.show('ВК работает, ищем: ' + (e.data.title || 'фильм'));
                });
                
                var container = e.object.activity.render().find('.full-start__buttons');
                if (container.length === 0) {
                    container = e.object.activity.render().find('.info__buttons');
                }
                
                container.append(btn);
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
