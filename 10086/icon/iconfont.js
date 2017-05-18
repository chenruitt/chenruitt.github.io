;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-shouji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M682.667008 47.65184 341.984256 47.65184c-42.635264 0-77.44 34.884608-77.44 77.436928l0 774.513664c0 42.59328 34.804736 77.44 77.44 77.44l340.682752 0c42.597376 0 77.441024-34.84672 77.441024-77.44L760.108032 125.087744C760.108032 82.536448 725.264384 47.65184 682.667008 47.65184zM465.854464 109.584384l92.944384 0c8.556544 0 15.545344 6.946816 15.545344 15.504384 0 8.602624-6.987776 15.504384-15.545344 15.504384l-92.944384 0c-8.51968 0-15.422464-6.90176-15.422464-15.504384C450.432 116.5312 457.33376 109.584384 465.854464 109.584384zM512.285696 946.034688c-25.637888 0-46.470144-20.754432-46.470144-46.43328s20.832256-46.512128 46.470144-46.512128c25.757696 0 46.512128 20.83328 46.512128 46.512128S538.044416 946.034688 512.285696 946.034688zM729.220096 822.162432 295.552 822.162432 295.552 202.528768l433.668096 0L729.220096 822.162432z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ren-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M543.594496 151.525376c16.679936 0 32.809984 1.573888 46.793728 4.557824 3.755008 15.424512 11.615232 30.002176 23.468032 41.991168 16.475136 16.662528 30.094336 37.5552 39.385088 60.420096 10.002432 24.615936 15.07328 51.053568 15.07328 78.57664 0 53.977088-20.261888 105.044992-55.591936 140.109824-0.028672 0.028672-0.058368 0.058368-0.086016 0.086016-0.00512 0.004096-0.01024 0.009216-0.014336 0.013312-0.536576 0.531456-1.071104 1.076224-1.60256 1.637376-6.053888 6.342656-11.127808 13.510656-15.084544 21.265408-14.726144 27.117568-23.030784 66.128896-14.096384 104.250368 7.204864 30.738432 31.806464 86.445056 115.627008 114.179072 0.05632 0.018432 0.111616 0.036864 0.166912 0.055296 0.047104 0.01536 0.096256 0.03072 0.14336 0.047104 18.393088 6.043648 65.705984 23.021568 107.6736 50.071552 34.514944 22.247424 46.086144 39.405568 47.768576 44.36992l0 55.539712-684.61568 0 0-55.522304c0.729088-2.03264 3.847168-7.796736 11.911168-16.106496 10.246144-10.560512 25.237504-21.961728 43.355136-32.970752 38.36928-23.317504 83.753984-40.8576 113.432576-49.498112 2.323456-0.67584 4.617216-1.445888 6.877184-2.306048 53.189632-20.252672 90.518528-59.858944 102.414336-108.662784 10.377216-42.5728 0.013312-87.059456-27.722752-119.661568-1.872896-2.250752-3.86048-4.417536-5.957632-6.489088-35.520512-35.078144-55.892992-86.254592-55.892992-140.406784 0-49.34656 16.549888-95.684608 46.599168-130.480128 27.744256-32.124928 64.207872-50.822144 102.673408-52.645888 2.301952-0.108544 4.598784-0.306176 6.885376-0.591872C522.908672 152.1408 533.141504 151.525376 543.594496 151.525376M543.594496 61.413376c-14.473216 0-28.433408 0.883712-41.571328 2.522112C371.233792 70.137856 266.906624 190.042112 266.906624 337.072128c0 81.378304 31.970304 154.437632 82.685952 204.522496 0.001024 0.008192-0.009216 0.016384-0.002048 0.023552 19.457024 21.794816 15.939584 66.11968-37.477376 86.460416C232.68352 651.203584 78.490624 720.334848 78.490624 812.239872l0 76.904448c0 38.474752 31.190016 69.664768 69.663744 69.664768l725.512192 0c38.473728 0 69.663744-31.190016 69.663744-69.664768L943.330304 812.239872c0-85.992448-134.990848-152.046592-217.424896-179.134464 0.062464-0.014336 0.0256-0.028672-0.134144-0.044032-85.786624-28.384256-50.536448-90.966016-49.77664-91.716608 0.067584-0.060416 0.2048-0.196608 0.206848-0.2048 50.449408-50.071552 82.225152-122.93632 82.225152-204.06784 0-80.203776-31.041536-152.341504-80.490496-202.353664 4.00384-5.26336 6.16448-10.851328 6.16448-16.642048C684.100608 86.782976 621.192192 61.413376 543.594496 61.413376L543.594496 61.413376z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)