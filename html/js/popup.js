
// 1
$(function () {
  var progressTimer,
    progressbar = $("#progressbar"),
    progressLabel = $(".progress-label"),
    dialogButtons = [{
      text: "인증취소",
      click: closeDownload
    }],
    dialog = $("#dialog").dialog({
      autoOpen: false,
      closeOnEscape: false,
      resizable: false,
      buttons: dialogButtons,
      open: function () {
        progressTimer = setTimeout(progress, 1000);
      },
      beforeClose: function () {
        downloadButton.button("option", {
          disabled: true,
          label: "인증불가"
        });
        $("#state-impossible").removeClass("wait");
        $("#state-impossible").addClass("impossible");
        $("#state-impossible").text("인증불가");

        $("#btn-impossible").removeClass("request");
        $("#btn-impossible").addClass("impossible");
      }
    }),
    downloadButton = $("#btn-impossible")
      .button()
      .on("click", function () {
        $(this).button("option", {
          disabled: true,
          label: "인증진행중..."
        });
        dialog.dialog("open");
      });

  progressbar.progressbar({
    value: false,
    change: function () {
      progressLabel.text("진행률: " + progressbar.progressbar("value") + "%");
    },
    complete: function () {
      progressLabel.text("인증 대상 아님!");
      dialog.dialog("option", "buttons", [{
        text: "Close",
        click: closeDownload
      }]);
      $(".ui-dialog button").last().trigger("focus");
    }
  });

  function progress() {
    var val = progressbar.progressbar("value") || 0;

    progressbar.progressbar("value", val + Math.floor(Math.random() * 3));

    if (val <= 99) {
      progressTimer = setTimeout(progress, 50);
    }
  }

  function closeDownload() {
    clearTimeout(progressTimer);
    dialog
      .dialog("option", "buttons", dialogButtons)
      .dialog("close");
    progressbar.progressbar("value", false);
    progressLabel
      .text("인증시작...");
    downloadButton.trigger("focus");
  }
});

// 2
$(function () {
  var progressTimer,
    progressbar = $("#progressbar2"),
    progressLabel = $(".progress-label"),
    dialogButtons = [{
      text: "인증취소",
      click: closeDownload
    }],
    dialog = $("#dialog2").dialog({
      autoOpen: false,
      closeOnEscape: false,
      resizable: false,
      buttons: dialogButtons,
      open: function () {
        progressTimer = setTimeout(progress, 1000);
      },
      beforeClose: function () {
        downloadButton.button("option", {
          disabled: false,
          label: "인증요청"
        });
        $("#state-fail").removeClass("wait");
        $("#state-fail").addClass("fail");
        $("#state-fail").text("인증실패");

      }
    }),
    downloadButton = $("#btn-fail")
      .button()
      .on("click", function () {
        $(this).button("option", {
          disabled: true,
          label: "인증진행중..."
        });
        dialog.dialog("open");
      });

  progressbar.progressbar({
    value: false,
    change: function () {
      progressLabel.text("진행률: " + progressbar.progressbar("value") + "%");
    },
    complete: function () {
      progressLabel.text("인증 실패!");
      dialog.dialog("option", "buttons", [{
        text: "Close",
        click: closeDownload
      }]);
      $(".ui-dialog button").last().trigger("focus");
    }
  });

  function progress() {
    var val = progressbar.progressbar("value") || 0;

    progressbar.progressbar("value", val + Math.floor(Math.random() * 3));

    if (val <= 99) {
      progressTimer = setTimeout(progress, 50);
    }
  }

  function closeDownload() {
    clearTimeout(progressTimer);
    dialog
      .dialog("option", "buttons", dialogButtons)
      .dialog("close");
    progressbar.progressbar("value", false);
    progressLabel
      .text("인증시작...");
    downloadButton.trigger("focus");
  }
});

// 3
$(function () {
  var progressTimer,
    progressbar = $("#progressbar3"),
    progressLabel = $(".progress-label"),
    dialogButtons = [{
      text: "인증취소",
      click: closeDownload
    }],
    dialog = $("#dialog3").dialog({
      autoOpen: false,
      closeOnEscape: false,
      resizable: false,
      buttons: dialogButtons,
      open: function () {
        progressTimer = setTimeout(progress, 1000);
      },
      beforeClose: function () {
        downloadButton.button("option", {
          disabled: false,
          label: "재인증"
        });
        $("#state-success").removeClass("wait");
        $("#state-success").addClass("success");
        $("#state-success").text("인증성공");

        $("#btn-success").removeClass('request');
        $("#btn-success").addClass('retry');
      }
    }),
    downloadButton = $("#btn-success")
      .button()
      .on("click", function () {
        $(this).button("option", {
          disabled: true,
          label: "인증진행중..."
        });
        dialog.dialog("open");
      });

  progressbar.progressbar({
    value: false,
    change: function () {
      progressLabel.text("진행률: " + progressbar.progressbar("value") + "%");
    },
    complete: function () {
      progressLabel.text("인증 성공");
      dialog.dialog("option", "buttons", [{
        text: "Close",
        click: closeDownload
      }]);
      $(".ui-dialog button").last().trigger("focus");
    }
  });

  function progress() {
    var val = progressbar.progressbar("value") || 0;

    progressbar.progressbar("value", val + Math.floor(Math.random() * 3));

    if (val <= 99) {
      progressTimer = setTimeout(progress, 50);
    }
  }

  function closeDownload() {
    clearTimeout(progressTimer);
    dialog
      .dialog("option", "buttons", dialogButtons)
      .dialog("close");
    progressbar.progressbar("value", false);
    progressLabel
      .text("인증시작...");
    downloadButton.trigger("focus");
  }
});

// 4
$(function () {
  var progressTimer,
    progressbar = $("#progressbar4"),
    progressLabel = $(".progress-label"),
    dialogButtons = [{
      text: "인증취소",
      click: closeDownload
    }],
    dialog = $("#dialog4").dialog({
      autoOpen: false,
      closeOnEscape: false,
      resizable: false,
      buttons: dialogButtons,
      open: function () {
        progressTimer = setTimeout(progress, 1000);
      },
      beforeClose: function () {
        downloadButton.button("option", {
          disabled: false,
          label: "인증진행"
        });
        $("#state-ing").removeClass("wait");
        $("#state-ing").addClass("ing");
        $("#state-ing").text("인증진행");

        $("#btn-ing").removeClass('request');
        $("#btn-ing").addClass('ing');
      }
    }),
    downloadButton = $("#btn-ing")
      .button()
      .on("click", function () {
        $(this).button("option", {
          disabled: true,
          label: "인증진행중..."
        });
        dialog.dialog("open");
      });

  progressbar.progressbar({
    value: false,
    change: function () {
      progressLabel.text("진행률: " + progressbar.progressbar("value") + "%");
    },
    complete: function () {
      progressLabel.text("인증 성공");
      dialog.dialog("option", "buttons", [{
        text: "Close",
        click: closeDownload
      }]);
      $(".ui-dialog button").last().trigger("focus");
    }
  });

  function progress() {
    var val = progressbar.progressbar("value") || 0;

    progressbar.progressbar("value", val + Math.floor(Math.random() * 3));

    if (val <= 99) {
      progressTimer = setTimeout(progress, 50);
    }
  }

  function closeDownload() {
    clearTimeout(progressTimer);
    dialog
      .dialog("option", "buttons", dialogButtons)
      .dialog("close");
    progressbar.progressbar("value", false);
    progressLabel
      .text("인증시작...");
    downloadButton.trigger("focus");
  }
});

// 5
$(function () {
  var progressTimer,
    progressbar = $("#progressbar5"),
    progressLabel = $(".progress-label"),
    dialogButtons = [{
      text: "인증취소",
      click: closeDownload
    }],
    dialog = $("#dialog5").dialog({
      autoOpen: false,
      closeOnEscape: false,
      resizable: false,
      buttons: dialogButtons,
      open: function () {
        progressTimer = setTimeout(progress, 1000);
      },
      beforeClose: function () {
        downloadButton.button("option", {
          disabled: false,
          label: "재인증"
        });
        $("#state-success2").removeClass("wait");
        $("#state-success2").addClass("success");
        $("#state-success2").text("인증성공");

        $("#btn-success2").removeClass('request');
        $("#btn-success2").addClass('retry');
      }
    }),
    downloadButton = $("#btn-success2")
      .button()
      .on("click", function () {
        $(this).button("option", {
          disabled: true,
          label: "인증진행중..."
        });
        dialog.dialog("open");
      });

  progressbar.progressbar({
    value: false,
    change: function () {
      progressLabel.text("진행률: " + progressbar.progressbar("value") + "%");
    },
    complete: function () {
      progressLabel.text("인증 성공");
      dialog.dialog("option", "buttons", [{
        text: "Close",
        click: closeDownload
      }]);
      $(".ui-dialog button").last().trigger("focus");
    }
  });

  function progress() {
    var val = progressbar.progressbar("value") || 0;

    progressbar.progressbar("value", val + Math.floor(Math.random() * 3));

    if (val <= 99) {
      progressTimer = setTimeout(progress, 50);
    }
  }

  function closeDownload() {
    clearTimeout(progressTimer);
    dialog
      .dialog("option", "buttons", dialogButtons)
      .dialog("close");
    progressbar.progressbar("value", false);
    progressLabel
      .text("인증시작...");
    downloadButton.trigger("focus");
  }
});

