(function () {
    'use strict';

    function startPlugin() {
        if (window.vk_plugin_loaded) return;
        window.vk_plugin_loaded = true;

        Lampa.Plugin.add({
            type: 'video',
            name: 'VK Video',
            version: '1.0.4',
            description: 'Поиск через ВК',
            author: 'Dmitry'
        });

        Lampa.Listener.follow('full', function (e) {
            if (e.type == 'complite') {
                setTimeout(function() {
                    // Кнопка, которая встанет отдельно под описанием
                    var btn = $('<div class="full-start__button selector" style="background-color: #2787F5; padding: 10px; margin-top: 15px; border-radius: 5px; text-align: center; color: white;"><span>ВК Видео (Поиск)</span></div>');
                    
                    btn.on('hover:enter', function () {
                        Lampa.Noty.show('ВК работает, ищем: ' + (e.data.title || 'фильм'));
                    });
                    
                    var render = e.object.activity.render();
                    var title = render.find('.info__title');
                    
                    if (title.length > 0) {
                        title.after(btn);
                    } else {
                        render.find('.info').append(btn);
                    }
                }, 500);
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
