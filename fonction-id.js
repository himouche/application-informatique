!  fonction ( _0x61ffx1 ) {
    ' function '  ==  typeof define && define [ ' amd ' ] ?  define ([ ' jquery ' ], _0x61ffx1) :  _0x61ffx1 (jQuery)
} ( fonction ( _0x61ffx1 ) {
    fonction  _0x61ffx2 () {
        if ( ! _0x61ffx1 [ ' contient ' ] ( document [ ' documentElement ' ], this )) {
            return  _0x61ffx1 ( this ) [ ' timeago ' ] ( ' dispose ' ), this
        };
        var _0x61ffx2 =  _0x61ffx4 ( this )
            , _0x61ffx3 = _0x61ffx7 [ ' settings ' ];
        return  isNaN (_0x61ffx2 [ ' datetime ' ])) || ( 0  == _0x61ffx3 [ ' coupure ' ] ||  Math [ ' abs ' ] ( _0x61ffx6 (_0x61ffx2 [ ' datetime ' ])) < _0x61ffx3 [ ' coupure ' ]) &&  _0x61ffx1 ( ce ) [ ' texte ' ] ( _0x61ffx5 ( _0x61ffx2 [ ' datetime ' ])),ceci ;
    }

    fonction  _0x61ffx4 ( _0x61ffx2 ) {
        si (_0x61ffx2 =  _0x61ffx1 (_0x61ffx2), ! _0x61ffx2 [ ' données ' ] ( ' timeago ' )) {
            _0x61ffx2 [ ' data ' ] ( ' timeago ' , {
                date - heure : _0x61ffx7 [ ' date- heure ' ] (_ 0x61ffx2)
            });
            var _0x61ffx4 = _0x61ffx1 [ ' trim ' ] (_ 0x61ffx2 [ ' text ' ] ());
            _0x61ffx7 [ ' settings ' ] [ ' localeTitle ' ] ? _0x61ffx2 [ ' attr ' ] ( ' titre ' , _0x61ffx2 [ ' données ' ] ( ' timeago ' ) [ ' datetime ' ] [ ' toLocaleString ' ] ()) :  ! (_0x61ffx4 [ ' longueur ' ] >  0 ) || _0x61ffx7 [ ' isTime '] (_ 0x61ffx2) && _0x61ffx2 [ ' attr ' ] ( ' titre ' ) || _0x61ffx2 [ ' attr ' ] ( ' titre ' , _0x61ffx4);
        };
        return _0x61ffx2 [ ' data ' ] ( ' timeago ' );
    }

    fonction  _0x61ffx5 ( _0x61ffx1 ) {
        retourne _0x61ffx7 [ ' inWords ' ] ( _0x61ffx6 (_0x61ffx1))
    }

    fonction  _0x61ffx6 ( _0x61ffx1 ) {
        return ( new  Date ) [ ' getTime ' ] () - _0x61ffx1 [ ' getTime ' ] ()
    }
    _0x61ffx1 [ ' timeago ' ] =  fonction ( _0x61ffx2 ) {
        retour  _0x61ffx5 (_0x61ffx2 instanceof  date  ? _0x61ffx2 :  ' string '  ==  typeof _0x61ffx2 ? _0x61ffx1 [ ' timeago ' ] [ ' parse ' ] (_ 0x61ffx2) :  ' nombre '  ==  typeof _0x61ffx2 ?  nouvelle  date (_0x61ffx2) : _0x61ffx1 [ ' timeago ' ] [ ' datetime ' ] (_ 0x61ffx2))
    };
    var _0x61ffx7 = _0x61ffx1 [ ' timeago ' ];
    _0x61ffx1 [ ' extend ' ] (_ 0x61ffx1 [ ' timeago ' ], {
        paramètres : {
            rafraîchissement :  6e4
            , AllowPast :  ! 0
            , AllowFuture :  ! 1
            , LocaleTitle :  ! 1
            , coupure :  0
            , cordes : {
                prefixAgo :  null
                , prefixFromNow :  null
                , suffixAgo :  ' il y a '
                , suffixFromNow :  'à partir de maintenant '
                , inPast :  ' n'importe quel moment maintenant '
                , secondes :  " moins d'une minute "
                , minute :  ' une minute '
                , minutes :  ' % d minutes '
                , heure :  ' une heure '
                , heures :  ' % d heures '
                , jour :  ' un jour '
                , jours :  ' % d jours '
                , mois :  ' un mois '
                , mois :  ' % d mois '
                , année :  ' un an '
                , années :  ' % d années '
                , wordSeparator :  '  '
                , nombres : []
            }
        }
        , inWords :  function ( _0x61ffx2 ) {
            fonction  _0x61ffx4 ( _0x61ffx4 , _0x61ffx6 ) {
                var _0x61ffx7 = _0x61ffx1 [ ' isFunction ' ] (_ 0x61ffx4) ?  _0x61ffx4 (_0x61ffx6, _0x61ffx2) : _0x61ffx4
                    , _0x61ffx3 = _0x61ffx5 [ ' nombres ' ] && _0x61ffx5 [ ' nombres ' ] [_ 0x61ffx6] || _0x61ffx6;
                return _0x61ffx7 [ ' replace ' ] ( / % d / i , _0x61ffx3);
            }
            if ( ! this [ ' settings ' ] [ ' allowPast ' ] &&  ! this [ ' settings ' ] [ ' allowFuture ' ])) {
                 Les paramètres throw ' timeago allowPast et allowFuture ne peuvent pas être tous deux définis sur false. '
            };
            var _0x61ffx5 =  this [ ' settings ' ] [ ' strings ' ]
                , _0x61ffx6 = _0x61ffx5 [ ' prefixAgo ' ]
                , _0x61ffx7 = _0x61ffx5 [ ' suffixAgo ' ];
            si ( ce [ ' paramètres ' ] [ ' allowFuture ' ] &&  0  > _0x61ffx2 && (_0x61ffx6 = _0x61ffx5 [ ' prefixFromNow ' ], _0x61ffx7 = _0x61ffx5 [ ' suffixFromNow ' ]), ! ce [ ' paramètres ' ] [ ' allowPast ' ] && _0x61ffx2 > =  0 ) {
                retourne  ceci [ ' settings ' ] [ ' strings ' ] [ ' inPast ' ]
            };
            var _0x61ffx3 =  Maths [ ' abs ' ] (_ 0x61ffx2) /  1e3
                , _0x61ffx8 = _0x61ffx3 /  60
                , _0x61ffx9 = _0x61ffx8 /  60
                , _0x61ffxa = _0x61ffx9 /  24
                , _0x61ffxb = _0x61ffxa /  365
                , _0x61ffxc =  45  > _0x61ffx3 &&  _0x61ffx4 (_0x61ffx5 [ ' secondes ' ], Math [ ' round ' ] (_ 0x61ffx3)) ||  90  > _0x61ffx3 &&  _0x61ffx4 (_0x61ffx5 [ ' minute ' ], 1 ) ||  45  > _0x61ffx8 &&  _0x61ffx4 (_0x61ffx5 [ ' minutes ' ], Math [ ' round '||  90  > _0x61ffx8 &&  _0x61ffx4 (_0x61ffx5 [ ' heure ' ], 1 ) ||  24  > _0x61ffx9 &&  _0x61ffx4 (_0x61ffx5 [ ' heures ' ], Math [ ' rond ' ] (_ 0x61ffx9)) ||  42  > _0x61ffx9 &&  _0x61ffx4 (_0x61ffx5 [ ' jour ' ], 1 ) ||  30  > _0x61ffxa &&  _0x61ffx4(_0x61ffx5 [ ' days ' ], Math [ ' round ' ] (_ 0x61ffxa)) ||  45  > _0x61ffxa &&  _0x61ffx4 (_0x61ffx5 [ ' mois ' ], 1 ) ||  365  > _0x61ffxa &&  _0x61ffx4 (_0x61ffx5 [ ' mois ' ], Math [ ' rond ' ] (_ 0x61ffxa /  30 )) ||  1.5  > _0x61ffxb && (_0x61ffx5 [ ' année ' ], 1 ) ||  _0x61ffx4 (_0x61ffx5 [ ' years ' ], Math [ ' round ' ] (_ 0x61ffxb))
                , _0x61ffxd = _0x61ffx5 [ ' wordSeparator ' ] ||  ' ' ;
            return  void ( 0 ) === _0x61ffx5 [ ' wordSeparator ' ] && (_0x61ffxd =  '  ' ), _0x61ffx1 [ ' trim ' ] ([_ 0x61ffx6, _0x61ffxc, _0x61ffx7] [ ' join ' ] (_ 0x61ffxd);
        }
        , parse :  function ( _0x61ffx2 ) {
            var _0x61ffx4 = _0x61ffx1 [ ' trim ' ] (_ 0x61ffx2);
            retour _0x61ffx4 = _0x61ffx4 [ ' remplacer ' ] ( / \. \ d + / , ' ' , _0x61ffx4) = _0x61ffx4 [ ' remplacer ' ] ( / - / , ' / ' ) [ ' remplacer ' ] ( / - / , ' / ' ), _0x61ffx4 = _0x61ffx4 [ ' replace ' ] ( / T / , ' ' ) [ ' Remplacer ' (] / Z / , ' UTC ' ), _0x61ffx4 = _0x61ffx4 [ ' remplacer " (] / ( [ \ + \ - ] \ d \ d ) \: ? ( \ D \ d ) / , ' $ 1 $ 2 ' ), _0x61ffx4 = _0x61ffx4 [ ' replace ' ] ( / ( [ \ + \ - ] \ d \ d ) $ / ,' $ 100 ' ), nouvelle  date (_0x61ffx4);
        }
        , date /  heure : fonction ( _0x61ffx2 ) {
            var _0x61ffx4 =  _0x61ffx1 (_0x61ffx2) [ ' attr ' ] (_ 0x61ffx7 [ ' isTime ' ] (_ 0x61ffx2) ?  ' datetime '  :  ' title ' );
            return _0x61ffx7 [ ' parse ' ] (_ 0x61ffx4);
        }
        , isTime :  function ( _0x61ffx2 ) {
            retourne  ' time '  ===  _0x61ffx1 (_0x61ffx2) [ ' get ' ] ( 0 ) [ ' tagName ' ] [ ' toLowerCase ' ] ()
        }
    });
    var _0x61ffx3 = {
        init :  function () {
            var _0x61ffx4 = _0x61ffx1 [ ' proxy ' ] (_ 0x61ffx2, this );
            _0x61ffx4 ();
            var _0x61ffx5 = _0x61ffx7 [ ' settings ' ];
            _0x61ffx5 [ ' refreshMillis ' ] >  0  && ( this [ ' _0 ' ] =  setInterval (_0x61ffx4, _0x61ffx5 [ ' refreshMillis ' ]));
        }
        , mise à jour :  fonction ( _0x61ffx4 ) {
            var _0x61ffx5 = _0x61ffx7 [ ' parse ' ] (_ 0x61ffx4);
            _0x61ffx1 ( this ) [ ' data ' ] ( ' timeago ' , {
                date / heure : _0x61ffx5
            }), _0x61ffx7 [ ' settings ' ] [ ' localeTitle ' ] &&  _0x61ffx1 ( this ) [ ' attr ' ] ( ' titre ' , _0x61ffx5 [ ' toLocaleString ' ]), _0x61ffx2 [ ' apply ' ] ( this );
        }
        , updateFromDOM :  function () {
            _0x61ffx1 ( this ) [ ' data ' ] ( ' timeago ' , {
                datetime : _0x61ffx7 [ ' parse ' ] ( _0x61ffx1 ( this ) [ ' attr ' ] (_ 0x61ffx7 [ ' isTime ' ] ( this ) ?  ' datetime '  :  ' title ' ))
            }), _0x61ffx2 [ ' apply ' ] ( this )
        }
        , dispose :  function () {
            this [ ' _0 ' ] && ( window [ ' clearInterval ' ] ( this . _0 ), this [ ' _0 ' ] =  null )
        }
    };
    _0x61ffx1 [ ' fn ' ] [ ' timeago ' ] =  fonction ( _0x61ffx1 , _0x61ffx2 ) {
        var _0x61ffx4 = _0x61ffx1 ? _0x61ffx3 [_0x61ffx1] : _0x61ffx3 [ ' init ' ];
        si ( ! _0x61ffx4) {
            renvoie une  nouvelle  erreur ( ' Nom de fonction inconnu \' '  + _0x61ffx1 +  ' \ ' pour timeago ' )
        };
        retourne  ce [ ' chaque ' ] ( function () {
            _0x61ffx4 [ ' call ' ] ( this , _0x61ffx2)
        }), ceci ;
    }, document [ ' createElement ' ] ( ' abbr ' ), document [ ' createElement ' ] ( ' time ' );
});
        
