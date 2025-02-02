document.addEventListener('DOMContentLoaded', function() {
    var headerHeight = document.querySelector('header').offsetHeight;

    function adjustScrollPosition() {
        if (window.location.hash) {
            var targetId = window.location.hash.substring(1);
            var targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        }
    }

    // ページ読み込み時にスクロール位置を調整
    adjustScrollPosition();

    // ハッシュが変更されたときにスクロール位置を調整
    window.addEventListener('hashchange', adjustScrollPosition);
});

// ページが完全に読み込まれた後にスクロール位置を調整
window.addEventListener('load', function() {
    var headerHeight = document.querySelector('header').offsetHeight;

    function adjustScrollPosition() {
        if (window.location.hash) {
            var targetId = window.location.hash.substring(1);
            var targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'instant'
                });
            }
        }
    }

    // ページ読み込み時にスクロール位置を調整
    setTimeout(adjustScrollPosition, 100);
});