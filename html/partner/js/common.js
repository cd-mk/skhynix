$(function() {

  var group = $(".personal-info");

  group.each(function() {
    var _group = new GroupBox(this);
  });

  // 사용자 정의 생성자 함수 정의
  function GroupBox(groupElement) {

    var box = $(groupElement).find(".box");
    var title = $(groupElement).find(".box .title a");

    box.each(function(idx) {
      var newBox = new RootBox(this);
      if (idx > 0) {
        newBox.siblingsClose();
      }
    });
  }

  // 사용자 정의 생성자 함수 정의
  function RootBox(boxElement) {
    var _this = this;
    var boxEl = $(boxElement);
    var target = $(boxEl).find(".title a");
    var cont = $(boxEl).find(".cont");

    // _groupParent = $(boxEl).parent();

    target.on("click", anchorClickEvent);

    function anchorClickEvent() {

      if (cont.is(':hidden')) {
        _this.open();
      } else {
        _this.close();
      }
    }

    _this.siblingsClose = function() {
      cont.css('display', 'none');
    };

    _this.open = function() {
      cont.slideDown();
    };
    _this.close = function() {
      cont.slideUp();
    }
  }

  function searchClear() {
    $('.search-clear').prev().each(function() {
      $(this).keyup(function() {
        $(this).next().toggle(Boolean($(this).val()));
      });
      $(this).next().toggle(Boolean($(this).val()));
      $(this).next().click(function() {
        $(this).prev().val('').focus();
        $(this).hide();
      });
    });
  }
  searchClear();

  function listShow() {
    $('.list-change').on('change', function() {
      var opt = $(this).val();

      $(this).find('option').eq(0).prop('selected', true);
      $('.info-2 .info-list').hide();
      $('.info-2 .info-list' + '.' + opt).show();

    });
  }
  listShow();

  function setInfoList() {
    $('.btn-plus').on('click', function() {
      var addList = $(this).closest('.inner').find('.info-list').eq(0).clone().addClass('cloned').attr('style', 'display: block');

      $(this).closest('.add-list').before(addList);
    });

    $('.btn-minus').on('click', function() {
      if ($(this).closest('.inner').find('.info-list').length > 1) {
        $(this).closest('.add-list').prev('.cloned').remove();
      }
    });
  }
  setInfoList();
});