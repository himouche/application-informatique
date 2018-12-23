! function(_0x61ffx1) {
    'function' == typeof define && define['amd'] ? define(['jquery'], _0x61ffx1) : _0x61ffx1(jQuery)
}(function(_0x61ffx1) {
    function _0x61ffx2() {
        if (!_0x61ffx1['contains'](document['documentElement'], this)) {
            return _0x61ffx1(this)['timeago']('dispose'), this
        };
        var _0x61ffx2 = _0x61ffx4(this)
            , _0x61ffx3 = _0x61ffx7['settings'];
        return isNaN(_0x61ffx2['datetime']) || (0 == _0x61ffx3['cutoff'] || Math['abs'](_0x61ffx6(_0x61ffx2['datetime'])) < _0x61ffx3['cutoff']) && _0x61ffx1(this)['text'](_0x61ffx5(_0x61ffx2['datetime'])), this;
    }

    function _0x61ffx4(_0x61ffx2) {
        if (_0x61ffx2 = _0x61ffx1(_0x61ffx2), !_0x61ffx2['data']('timeago')) {
            _0x61ffx2['data']('timeago', {
                datetime: _0x61ffx7['datetime'](_0x61ffx2)
            });
            var _0x61ffx4 = _0x61ffx1['trim'](_0x61ffx2['text']());
            _0x61ffx7['settings']['localeTitle'] ? _0x61ffx2['attr']('title', _0x61ffx2['data']('timeago')['datetime']['toLocaleString']()) : !(_0x61ffx4['length'] > 0) || _0x61ffx7['isTime'](_0x61ffx2) && _0x61ffx2['attr']('title') || _0x61ffx2['attr']('title', _0x61ffx4);
        };
        return _0x61ffx2['data']('timeago');
    }

    function _0x61ffx5(_0x61ffx1) {
        return _0x61ffx7['inWords'](_0x61ffx6(_0x61ffx1))
    }

    function _0x61ffx6(_0x61ffx1) {
        return (new Date)['getTime']() - _0x61ffx1['getTime']()
    }
    _0x61ffx1['timeago'] = function(_0x61ffx2) {
        return _0x61ffx5(_0x61ffx2 instanceof Date ? _0x61ffx2 : 'string' == typeof _0x61ffx2 ? _0x61ffx1['timeago']['parse'](_0x61ffx2) : 'number' == typeof _0x61ffx2 ? new Date(_0x61ffx2) : _0x61ffx1['timeago']['datetime'](_0x61ffx2))
    };
    var _0x61ffx7 = _0x61ffx1['timeago'];
    _0x61ffx1['extend'](_0x61ffx1['timeago'], {
        settings: {
            refreshMillis: 6e4
            , allowPast: !0
            , allowFuture: !1
            , localeTitle: !1
            , cutoff: 0
            , strings: {
                prefixAgo: null
                , prefixFromNow: null
                , suffixAgo: 'ago'
                , suffixFromNow: 'from now'
                , inPast: 'any moment now'
                , seconds: 'less than a minute'
                , minute: 'a minute'
                , minutes: '%d minutes'
                , hour: 'an hour'
                , hours: '%d hours'
                , day: 'a day'
                , days: '%d days'
                , month: 'a month'
                , months: '%d months'
                , year: 'a year'
                , years: '%d years'
                , wordSeparator: ' '
                , numbers: []
            }
        }
        , inWords: function(_0x61ffx2) {
            function _0x61ffx4(_0x61ffx4, _0x61ffx6) {
                var _0x61ffx7 = _0x61ffx1['isFunction'](_0x61ffx4) ? _0x61ffx4(_0x61ffx6, _0x61ffx2) : _0x61ffx4
                    , _0x61ffx3 = _0x61ffx5['numbers'] && _0x61ffx5['numbers'][_0x61ffx6] || _0x61ffx6;
                return _0x61ffx7['replace'](/%d/i, _0x61ffx3);
            }
            if (!this['settings']['allowPast'] && !this['settings']['allowFuture']) {
                throw 'timeago allowPast and allowFuture settings can not both be set to false.'
            };
            var _0x61ffx5 = this['settings']['strings']
                , _0x61ffx6 = _0x61ffx5['prefixAgo']
                , _0x61ffx7 = _0x61ffx5['suffixAgo'];
            if (this['settings']['allowFuture'] && 0 > _0x61ffx2 && (_0x61ffx6 = _0x61ffx5['prefixFromNow'], _0x61ffx7 = _0x61ffx5['suffixFromNow']), !this['settings']['allowPast'] && _0x61ffx2 >= 0) {
                return this['settings']['strings']['inPast']
            };
            var _0x61ffx3 = Math['abs'](_0x61ffx2) / 1e3
                , _0x61ffx8 = _0x61ffx3 / 60
                , _0x61ffx9 = _0x61ffx8 / 60
                , _0x61ffxa = _0x61ffx9 / 24
                , _0x61ffxb = _0x61ffxa / 365
                , _0x61ffxc = 45 > _0x61ffx3 && _0x61ffx4(_0x61ffx5['seconds'], Math['round'](_0x61ffx3)) || 90 > _0x61ffx3 && _0x61ffx4(_0x61ffx5['minute'], 1) || 45 > _0x61ffx8 && _0x61ffx4(_0x61ffx5['minutes'], Math['round'](_0x61ffx8)) || 90 > _0x61ffx8 && _0x61ffx4(_0x61ffx5['hour'], 1) || 24 > _0x61ffx9 && _0x61ffx4(_0x61ffx5['hours'], Math['round'](_0x61ffx9)) || 42 > _0x61ffx9 && _0x61ffx4(_0x61ffx5['day'], 1) || 30 > _0x61ffxa && _0x61ffx4(_0x61ffx5['days'], Math['round'](_0x61ffxa)) || 45 > _0x61ffxa && _0x61ffx4(_0x61ffx5['month'], 1) || 365 > _0x61ffxa && _0x61ffx4(_0x61ffx5['months'], Math['round'](_0x61ffxa / 30)) || 1.5 > _0x61ffxb && _0x61ffx4(_0x61ffx5['year'], 1) || _0x61ffx4(_0x61ffx5['years'], Math['round'](_0x61ffxb))
                , _0x61ffxd = _0x61ffx5['wordSeparator'] || '';
            return void(0) === _0x61ffx5['wordSeparator'] && (_0x61ffxd = ' '), _0x61ffx1['trim']([_0x61ffx6, _0x61ffxc, _0x61ffx7]['join'](_0x61ffxd));
        }
        , parse: function(_0x61ffx2) {
            var _0x61ffx4 = _0x61ffx1['trim'](_0x61ffx2);
            return _0x61ffx4 = _0x61ffx4['replace'](/\.\d+/, ''), _0x61ffx4 = _0x61ffx4['replace'](/-/, '/')['replace'](/-/, '/'), _0x61ffx4 = _0x61ffx4['replace'](/T/, ' ')['replace'](/Z/, ' UTC'), _0x61ffx4 = _0x61ffx4['replace'](/([\+\-]\d\d)\:?(\d\d)/, ' $1$2'), _0x61ffx4 = _0x61ffx4['replace'](/([\+\-]\d\d)$/, ' $100'), new Date(_0x61ffx4);
        }
        , datetime: function(_0x61ffx2) {
            var _0x61ffx4 = _0x61ffx1(_0x61ffx2)['attr'](_0x61ffx7['isTime'](_0x61ffx2) ? 'datetime' : 'title');
            return _0x61ffx7['parse'](_0x61ffx4);
        }
        , isTime: function(_0x61ffx2) {
            return 'time' === _0x61ffx1(_0x61ffx2)['get'](0)['tagName']['toLowerCase']()
        }
    });
    var _0x61ffx3 = {
        init: function() {
            var _0x61ffx4 = _0x61ffx1['proxy'](_0x61ffx2, this);
            _0x61ffx4();
            var _0x61ffx5 = _0x61ffx7['settings'];
            _0x61ffx5['refreshMillis'] > 0 && (this['_0'] = setInterval(_0x61ffx4, _0x61ffx5['refreshMillis']));
        }
        , update: function(_0x61ffx4) {
            var _0x61ffx5 = _0x61ffx7['parse'](_0x61ffx4);
            _0x61ffx1(this)['data']('timeago', {
                datetime: _0x61ffx5
            }), _0x61ffx7['settings']['localeTitle'] && _0x61ffx1(this)['attr']('title', _0x61ffx5['toLocaleString']()), _0x61ffx2['apply'](this);
        }
        , updateFromDOM: function() {
            _0x61ffx1(this)['data']('timeago', {
                datetime: _0x61ffx7['parse'](_0x61ffx1(this)['attr'](_0x61ffx7['isTime'](this) ? 'datetime' : 'title'))
            }), _0x61ffx2['apply'](this)
        }
        , dispose: function() {
            this['_0'] && (window['clearInterval'](this._0), this['_0'] = null)
        }
    };
    _0x61ffx1['fn']['timeago'] = function(_0x61ffx1, _0x61ffx2) {
        var _0x61ffx4 = _0x61ffx1 ? _0x61ffx3[_0x61ffx1] : _0x61ffx3['init'];
        if (!_0x61ffx4) {
            throw new Error('Unknown function name \'' + _0x61ffx1 + '\' for timeago')
        };
        return this['each'](function() {
            _0x61ffx4['call'](this, _0x61ffx2)
        }), this;
    }, document['createElement']('abbr'), document['createElement']('time');
});
$(document)['ready'](function() {
    $('#ftright')['html']('تعريب <a href="https://applicationinformatique.blogspot.com">تحميل برامج الحاسوب مجانا</a>');
    setInterval(function() {
        if (!$('#ftright:visible')['length']) {
            window['location']['href'] = 'https://applicationinformatique.blogspot.com'
        }
    }, 3000);
});
