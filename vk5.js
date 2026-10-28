(function () {
    'use strict';

    function startPlugin() {
        if (window.vk_plugin_loaded) return;
        window.vk_plugin_loaded = true;

        Lampa.Plugin.add({
            type: 'video',
            name: 'VK Video',
            version: '1.0.5',
            description: 'Поиск через ВК',
            author: 'Dmitry'
        });

        Lampa.Listener.follow('full', function (e) {
            if (e.type == 'complite') {
                // Рисуем огромную кнопку абсолютным позиционированием поверх всего в правом верхнем углу
                var btn = $('<div class="selector" style="position: absolute; top: 50px; right: 50px; z-index: 99999; background-color: #2787F5; padding: 20px; border-radius: 10px; font-size: 24px; color: white; border: 3px solid white; box-shadow: 0 0 20px rgba(0,0,0,0.8);"><span>ВК ВИДЕО (ТЕСТ)</span></div>');
                
                btn.on('hover:enter', function () {
                    Lampa.Noty.show('Нажали на ВК!');
                });
                
                // Прикрепляем прямо к корневому элементу карточки фильма
                e.object.activity.render().append(btn);
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
