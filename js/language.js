(function() {
    var enElements = document.querySelectorAll('.en');
    var ruElements = document.querySelectorAll('.ru');
    var btn = document.getElementById('languageBtn');

    function swithLangToEng() {
        for (var i = 0; i < ruElements.length; i++) {
            ruElements[i].classList.add('hide');
            enElements[i].classList.remove('hide');
        }
    }

    function swithLangToRus() {
        for (var i = 0; i < ruElements.length; i++) {
            ruElements[i].classList.remove('hide');
            enElements[i].classList.add('hide');
        }
    }

    $.getJSON("http://ip-api.com/json/?callback=?", function(data) {
        var country = data.country.toLowerCase(), // страна пользователя
          ip      = data.query; //ip пользователя
        console.log(country);  // Выводим в консоль результат

        if (country !== 'russia' && country !== 'belarus' && country !== 'ukraine') {
            swithLangToEng();

            btn.innerHTML = 'RU';
        }
    });

    btn.addEventListener('click', function() {
        if (btn.innerHTML === 'EN') {
            swithLangToEng();
            btn.innerHTML = 'RU';
        } else {
            swithLangToRus()
            btn.innerHTML = 'EN';
        };
    });
}());
